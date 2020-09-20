import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useDispatch, useSelector } from 'react-redux';

import ErrorMessage from '~/app/common/components/ErrorMessage';
import LaunchList from '~/app/components/LaunchList';
import { AppState } from '~/app/store/types';

import { HomeScreenProps } from '~/app/navigation/types';

import { OnlineStatus } from './parts';

import {
  getLaunchList,
  getLaunchListFulfill,
} from '~/app/store/launchList/duck';

import { REQUEST_PHASE } from '~/app/common/types';
const launchListSelector = (state: AppState) =>
  state.launchListStore.launchList;
const launchListPhaseSelector = (state: AppState) =>
  state.launchListStore.launchListPhase;
const launchListErrorSelector = (state: AppState) =>
  state.launchListStore.launchListError;

const LaunchScreen = ({ navigation }: HomeScreenProps<'Home'>) => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const launchList = useSelector(launchListSelector);
  const launchListPhase = useSelector(launchListPhaseSelector);
  const launchListError = useSelector(launchListErrorSelector);

  const [online, setOnline] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLaunchListLoading, setIsLaunchListLoading] = useState<boolean>(true);
  const connectInterval = useRef();

  const [websocket, setWebsocket] = useState<WebSocket>();

  useEffect(() => {
    connect();

    return () => clearTimeout(connectInterval.current);
  }, []);

  const connect = () => {
    const ws = new WebSocket('wss://echo.websocket.org/');
    let timeout = 250;

    ws.onopen = () => {
      setWebsocket(ws);
      setOnline(true);

      timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval.current); // clear Interval on on open of websocket connection
    };

    ws.onclose = () => {
      setOnline(false);

      timeout += timeout; //increment retry interval
      connectInterval.current = setTimeout(check, Math.min(10000, timeout)); //call check function after timeout
    };

    ws.onerror = () => {
      setOnline(false);
      ws.close();
    };
  };

  const check = () => {
    if (!websocket || websocket.readyState == WebSocket.CLOSED) connect();
  };

  useEffect(() => {
    dispatch(getLaunchList());
  }, []);

  useEffect(() => {
    if (launchListPhase === REQUEST_PHASE.SUCCESS) {
      setIsLaunchListLoading(false);
      dispatch(getLaunchListFulfill());
    } else if (launchListPhase === REQUEST_PHASE.FAILURE) {
      setIsError(true);
      setIsLaunchListLoading(false);
    }
  }, [
    setIsLaunchListLoading,
    getLaunchListFulfill,
    launchListPhase,
    setIsError,
  ]);

  // const goToMissionDetailScreen = () => navigation.navigate('MissionDetail');
  const goToMissionDetailScreen = () => console.log('Hello');

  if (isLaunchListLoading)
    return <ActivityIndicator style={styles.activityIndicator} />;

  if (isError) return <ErrorMessage message={launchListError?.detail} />;

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <OnlineStatus style={styles.onlineStatus} online={online} />
      <LaunchList
        launchListItems={launchList?.results}
        onPress={goToMissionDetailScreen}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  onlineStatus: {
    paddingHorizontal: 16,
    alignSelf: 'flex-end',
  },
  activityIndicator: {
    flexGrow: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default LaunchScreen;
