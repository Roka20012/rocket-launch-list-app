import { AxiosError } from 'axios';
import { Dispatch, AnyAction, Action } from 'redux';
// TODO: @Rostyk add typings for this lib
// @ts-ignore
import { createRoutine } from 'redux-routines';

import * as api from './api';
import { REQUEST_PHASE } from '~/app/common/types';

export const getLaunchListActions = createRoutine('launch/getLaunchList');

// State
export type LaunchListState = {
  launchList: null;
  launchListPhase: REQUEST_PHASE;
  launchListError: AxiosError | null;
};

const initialState: LaunchListState = {
  // TODO: @Rostyk add type for launchList
  launchList: null,
  launchListPhase: REQUEST_PHASE.INIT,
  launchListError: null,
};

// Reducer
const launchListStore = (
  state: LaunchListState = initialState,
  { type, payload }: AnyAction,
) => {
  switch (type) {
    // getLaunchList
    case getLaunchListActions.REQUEST:
      return {
        ...state,
        launchListPhase: REQUEST_PHASE.LOADING,
        launchListError: initialState.launchListError,
      };
    case getLaunchListActions.SUCCESS:
      return {
        ...state,
        launchListPhase: REQUEST_PHASE.SUCCESS,
        launchList: payload.launchList,
      };
    case getLaunchListActions.FAILURE:
      return {
        ...state,
        launchListPhase: REQUEST_PHASE.FAILURE,
        launchListError: payload,
      };
    case getLaunchListActions.FULFILL:
      return {
        ...state,
        launchListPhase: initialState.launchListPhase,
        launchListError: initialState.launchListError,
      };
    default:
      return state;
  }
};

export default launchListStore;

// Actions - Thunks
export const getLaunchList = () => async (
  dispatch: Dispatch,
): Promise<AnyAction> => {
  try {
    dispatch(getLaunchListActions.request());

    const launchList = await api.getLaunchList();

    return dispatch(getLaunchListActions.success(launchList));
  } catch (err) {
    return dispatch(getLaunchListActions.failure(err));
  }
};

// Fulfills
export const getLaunchListFulfill: () => Promise<AnyAction> =
  getLaunchListActions.fulfill;
