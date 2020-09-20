import { combineReducers, Action } from 'redux';

import launchListStore from './launchList/duck';

const appReducer = combineReducers({
  launchListStore,
});

// TODO: @Rostyk add type for state
export default (state, action: Action) => appReducer(state, action);
