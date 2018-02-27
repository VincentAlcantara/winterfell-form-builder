import { combineReducers } from 'redux-immutable';

import formsReducer from './src/reducers/winterfellFormBuilderReducer';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    forms: formsReducer,
    ...asyncReducers,
  });
}
