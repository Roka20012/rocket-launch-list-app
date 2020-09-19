import { Store, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

const enhancer = compose(applyMiddleware(thunk));

export default (initialState?: any): Store<any> =>
  createStore(rootReducer, initialState, enhancer);
