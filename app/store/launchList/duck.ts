import { AxiosError } from 'axios';
import { Dispatch, AnyAction, Action } from 'redux';
// TODO: @Rostyk add typings for this lib
// @ts-ignore
import { createRoutine } from 'redux-routines';

import * as api from './api';

import { REQUEST_PHASE } from '~/app/common/types';
import {
  LaunchListType,
  LaunchListErrorType,
  LaunchListItemType,
} from '~/app/store/types';

export const getLaunchListActions = createRoutine('launch/getLaunchList');

// State
export type LaunchListState = {
  launchList: LaunchListType | null;
  launchListPhase: REQUEST_PHASE;
  launchListError: LaunchListErrorType | null;
  launchListItems: Array<LaunchListItemType>;
};

const initialState: LaunchListState = {
  launchList: null,
  launchListItems: [],
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
        launchList: payload,
        launchListItems: [...state.launchListItems, ...payload.results],
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
export const getLaunchList = (next?: string) => async (
  dispatch: Dispatch,
): Promise<AnyAction> => {
  try {
    dispatch(getLaunchListActions.request());

    const launchList = await api.getLaunchList(next);

    return dispatch(getLaunchListActions.success(launchList));
  } catch (err) {
    return dispatch(getLaunchListActions.failure(err));
  }
};

// Fulfills
export const getLaunchListFulfill: () => Promise<AnyAction> =
  getLaunchListActions.fulfill;
