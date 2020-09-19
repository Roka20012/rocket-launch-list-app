import { combineReducers, Action } from 'redux';

import launchStore from './launchList/duck';

const appReducer = combineReducers({
  launchStore,
});

// TODO: @Rostyk add type for state
export default (state, action: Action) => appReducer(state, action);
