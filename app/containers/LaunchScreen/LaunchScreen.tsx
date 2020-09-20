import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useDispatch, useSelector } from 'react-redux';

import ErrorMessage from '~/app/common/components/ErrorMessage';
import LaunchList from '~/app/components/LaunchList';
import { OnlineStatus } from './parts';

import { AppState } from '~/app/store/types';
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

const LaunchScreen = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const launchList = useSelector(launchListSelector);
  const launchListPhase = useSelector(launchListPhaseSelector);
  const launchListError = useSelector(launchListErrorSelector);

  const [online, setOnline] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLaunchListLoading, setIsLaunchListLoading] = useState<boolean>(true);

  const [websocket, setWebsocket] = useState<WebSocket>();

  useEffect(() => {
    connect();
  }, []);

  const connect = () => {
    const ws = new WebSocket('wss://echo.websocket.org/');
    let connectInterval: NodeJS.Timeout;
    let timeout = 250;

    ws.onopen = () => {
      setWebsocket(ws);
      setOnline(true);

      timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    };

    ws.onclose = () => {
      setOnline(false);

      timeout += timeout; //increment retry interval
      connectInterval = setTimeout(check, Math.min(10000, timeout)); //call check function after timeout
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

  if (isLaunchListLoading)
    return <ActivityIndicator style={styles.activityIndicator} />;

  // TODO: uncomment
  // if (isError) return <ErrorMessage message={launchListError?.detail} />;

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <OnlineStatus style={styles.onlineStatus} online={online} />
      <LaunchList launchListItems={launchList?.results} />
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
