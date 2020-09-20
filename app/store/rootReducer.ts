import { combineReducers, Action } from 'redux';

import launchListStore from './launchList/duck';

const appReducer = combineReducers({
  launchListStore,
});

export default (state: any, action: Action) => appReducer(state, action);
