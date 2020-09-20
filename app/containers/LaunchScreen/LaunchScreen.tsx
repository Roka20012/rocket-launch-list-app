import React, { useEffect, useState } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import ErrorMessage from '~/app/common/components/ErrorMessage';
import LaunchList from '~/app/components/LaunchList';

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

const LaunchScreen = () => {
  const dispatch = useDispatch();
  const launchList = useSelector(launchListSelector);
  const launchListPhase = useSelector(launchListPhaseSelector);
  const [isLaunchListLoading, setIsLaunchListLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

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
      dispatch(getLaunchListFulfill());
    }
  }, [
    setIsLaunchListLoading,
    getLaunchListFulfill,
    launchListPhase,
    setIsError,
  ]);

  if (isError) return <ErrorMessage />;

  return (
    <SafeAreaView style={styles.container}>
      {isLaunchListLoading ? (
        <ActivityIndicator style={styles.activityIndicator} />
      ) : (
        <LaunchList launchListItems={launchList?.results} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicator: {
    flexGrow: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
});

export default LaunchScreen;
