/**
 * index.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import React from 'react';

import { render } from 'react-dom';
import { Provider, compose } from 'react-redux';
// import createHistory from 'history/createBrowserHistory';


import WinterfellFormBuilder from './src/';

// const history = createHistory();

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      }) : compose;

render(
    <WinterfellFormBuilder  />,
  document.getElementById('root'),
);
