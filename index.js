import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import WinterfellFormBuilderDemo from './WinterfellFormBuilderDemo';
import configureStore from './store';


const initialState = {};
const store = configureStore(initialState);
render(
  <Provider store={store}>
    <WinterfellFormBuilderDemo />
  </Provider>,
  document.getElementById('root'),
);
