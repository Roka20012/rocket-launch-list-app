import { composeWithDevTools } from 'redux-devtools-extension';
import { Store, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './rootReducer';

export default (): Store<any> =>
  createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
