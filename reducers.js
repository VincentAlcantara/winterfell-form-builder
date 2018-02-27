import { combineReducers } from 'redux-immutable';

import formReducer from './src/reducers/winterfellFormBuilderReducer';

/**
 * Creates the main reducer with the asynchronously loaded ones
 */
export default function createReducer(asyncReducers) {
  return combineReducers({
    form: formReducer,
    ...asyncReducers,
  });
}
