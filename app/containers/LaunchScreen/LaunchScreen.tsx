import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, ActivityIndicator, View, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useDispatch, useSelector } from 'react-redux';

import ErrorMessage from '~/app/common/components/ErrorMessage';
import { EmptyBox } from '~/app/components/LaunchList/parts';
import LaunchList from '~/app/components/LaunchList';
import { AppState } from '~/app/store/types';

import { HomeScreenProps } from '~/app/navigation/types';

import { OnlineStatus, OnlineStatusType } from './parts';

import {
  getLaunchList,
  getLaunchListFulfill,
} from '~/app/store/launchList/duck';

import { REQUEST_PHASE } from '~/app/common/types';

const launchListSelector = (state: AppState) =>
  state.launchListStore.launchList;
const launchListItemsSelector = (state: AppState) =>
  state.launchListStore.launchListItems;
const launchListPhaseSelector = (state: AppState) =>
  state.launchListStore.launchListPhase;
const launchListErrorSelector = (state: AppState) =>
  state.launchListStore.launchListError;

const LaunchScreen = ({ navigation }: HomeScreenProps<'LaunchScreen'>) => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const launchList = useSelector(launchListSelector);
  const launchListItems = useSelector(launchListItemsSelector);
  const launchListPhase = useSelector(launchListPhaseSelector);
  const launchListError = useSelector(launchListErrorSelector);

  const [online, setOnline] = useState<OnlineStatusType>('checking-connection');
  const [isError, setIsError] = useState<boolean>(false);
  const [isLaunchListLoading, setIsLaunchListLoading] = useState<boolean>(true);
  const [isLoadingMore, setisLoadingMore] = useState<boolean>(false);
  const [isLaunchListRefresing, setIsLaunchListRefresing] = useState<boolean>(
    false,
  );
  let connectInterval: NodeJS.Timeout;

  const [websocket, setWebsocket] = useState<WebSocket>();

  useEffect(() => {
    connect();

    return () => clearTimeout(connectInterval);
  }, []);

  const connect = () => {
    const ws = new WebSocket('wss://echo.websocket.org/');
    let timeout = 250;

    ws.onopen = () => {
      setWebsocket(ws);
      setOnline('online');

      timeout = 250; // reset timer to 250 on open of websocket connection
      clearTimeout(connectInterval); // clear Interval on on open of websocket connection
    };

    ws.onclose = () => {
      setOnline('offline');

      timeout += timeout; //increment retry interval
      connectInterval = setTimeout(check, Math.min(10000, timeout)); //call check function after timeout
    };

    ws.onerror = () => {
      setOnline('offline');
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
      setisLoadingMore(false);
      setIsLaunchListLoading(false);
      setIsLaunchListRefresing(false);
      dispatch(getLaunchListFulfill());
    } else if (launchListPhase === REQUEST_PHASE.FAILURE) {
      setIsError(true);
      setisLoadingMore(false);
      setIsLaunchListLoading(false);
      setIsLaunchListRefresing(false);
    }
  }, [
    setIsLaunchListRefresing,
    setIsLaunchListLoading,
    getLaunchListFulfill,
    setisLoadingMore,
    launchListPhase,
    setIsError,
  ]);

  const goToLauchDetailScreen = (
    launchListItem: HomeScreenProps<'LaunchDetailScreen'>['route']['params'],
  ) => navigation.navigate('LaunchDetailScreen', launchListItem);

  const onRefreshLaunchList = () => {
    setIsLaunchListRefresing(true);
    dispatch(getLaunchList());
  };

  const onGetNewListItems = () => {
    setIsLaunchListLoading(true);
    dispatch(getLaunchList());
  };

  const getMoreListItems = () => {
    console.log('onEndReached');
    setisLoadingMore(true);
    dispatch(getLaunchList(launchList?.next));
  };

  if (isLaunchListLoading)
    return <ActivityIndicator style={styles.activityIndicator} />;

  if (isError)
    return (
      <ErrorMessage
        message={launchListError?.detail}
        onPress={onGetNewListItems}
      />
    );

  if (!launchListItems.length)
    return <EmptyBox onGetNewListItems={onGetNewListItems} />;

  return (
    <View style={[styles.container, { marginTop: insets.top }]}>
      <StatusBar barStyle="dark-content" />
      <OnlineStatus style={styles.onlineStatus} online={online} />
      <LaunchList
        launchListItems={launchListItems}
        refreshing={isLaunchListRefresing}
        isLoadingMore={isLoadingMore}
        onPress={goToLauchDetailScreen}
        onRefresh={onRefreshLaunchList}
        onEndReached={getMoreListItems}
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
