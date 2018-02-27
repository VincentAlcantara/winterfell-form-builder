/**
 * index.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import React from 'react';

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import WinterfellFormBuilder from './src/';
import configureStore from './store';
import schema from './examples/schema';


const initialState = {};
const store = configureStore(initialState);

render(
  <Provider store={store}>
    <WinterfellFormBuilder
      schema={schema}
    />
  </Provider>,
  document.getElementById('root'),
);
