import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';
import storage from 'redux-storage';
import createEngine from 'redux-storage-engine-localstorage';
import merger from 'redux-storage-merger-immutablejs';
import { routerMiddleware } from 'react-router-redux';

import createReducer from './reducers';


const devtools = window.devToolsExtension || (() => noop => noop);

export default function configureStore(initialState = {}, history) {
  const reactRouterMiddleware = routerMiddleware(history);
  const sagaMiddleware = createSagaMiddleware();
  const engine = createEngine('winterfell-formbuilder');
  const storageMiddleware = storage.createMiddleware(engine);

  const enhancers = [
    applyMiddleware(sagaMiddleware, storageMiddleware, reactRouterMiddleware),
    devtools(),
  ];

  const reducer = storage.reducer(createReducer(), merger);

  const store = createStore(
    reducer,
    fromJS(initialState),
    compose(...enhancers),
  );

  // restore state from local storage if present
  const load = storage.createLoader(engine);
  load(store);

  // start saga watchers

  // Extensions
  store.asyncReducers = {}; // Async reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  if (module.hot) {
    module.hot.accept('./reducers.js', () => {
      require.ensure(['./reducers'], () => {
        const reducerModule = require('./src/reducers/winterfellFormBuilderReducer'); // eslint-disable-line global-require

        const createReducers = reducerModule.default;
        const nextReducers = createReducers(store.asyncReducers);
        store.replaceReducer(nextReducers);
      });
    });
  }

  return store;
}
