import { createStore, applyMiddleware, combineReducers } from 'redux';
import {AsyncStorage} from 'react-native';
import * as reducers from './reducers';
import thunk from 'redux-thunk';

export const STORAGE_KEY='KymetaTimeKeeper-1';

/**
 * Wraps the root reducer in a function which watches for changes and persists
 */
function persist(reducer) {
  let lastState = null;
  return (state, action) => {
    let newState = reducer(state, action);
    let jsonState = JSON.stringify(newState);
    if (lastState !== null && jsonState !== lastState) {
      AsyncStorage.setItem(STORAGE_KEY, jsonState);
    }
    lastState = jsonState;
    return newState;
  }
}

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = persist(combineReducers(reducers));

/**
 * This adds hot reloading to the redux store
 */
export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    })
  }

  return store;
}
