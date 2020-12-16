import React from 'react';
import {AppRegistry} from 'react-native';

import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import createMiddlewareSaga from 'redux-saga';

import App from './App';
import {name as appName} from './app.json';

import artikelReducer from './store/reducer/artikel';
import displayReducer from './store/reducer/display';

import {artikelListener} from './store/saga';

const rootReducer = combineReducers({
  artikel: artikelReducer,
  display: displayReducer,
});

const sagaMiddleware = createMiddlewareSaga();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(artikelListener);

const Index = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Index);
