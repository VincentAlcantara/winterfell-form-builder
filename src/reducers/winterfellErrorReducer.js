import { fromJS } from 'immutable';

import {
  RETRIEVE_FORMLIST_ERROR,
  CREATE_FORM_SUCCESS,
  CREATE_FORM_ERROR,
  EDIT_FORM_TITLE_SUCCESS,
  GOTO_PAGE_SUCCESS,
  UPDATE_FORM_SUCCESS,
  UPDATE_FORM_ERROR,
  DELETE_FORM_SUCCESS,
  DELETE_FORM_ERROR,
  ADD_PAGE_SUCCESS,
  ADD_PAGE_ERROR,
  UPDATE_PAGE_SUCCESS,
  UPDATE_PAGE_ERROR,
  DELETE_PAGE_SUCCESS,
  DELETE_PAGE_ERROR,
  ADD_QUESTION_SET_SUCCESS,
  ADD_QUESTION_ERROR,
  UPDATE_QUESTION_SUCCESS,
  UPDATE_QUESTION_ERROR,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_ERROR,
  CLEAR_FORM_ERROR,
} from '../common/constants';

const initialState = fromJS({
  message: '',
});

function winterfellFormBuilderReducer(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_FORMLIST_ERROR:
    case CREATE_FORM_ERROR:
    case UPDATE_FORM_ERROR:
    case DELETE_FORM_ERROR:
    case ADD_PAGE_ERROR:
    case UPDATE_PAGE_ERROR:
    case DELETE_PAGE_ERROR:
    case ADD_QUESTION_ERROR:
    case UPDATE_QUESTION_ERROR:
    case DELETE_QUESTION_ERROR:
      return state
        .set('message', `${action.payload.message}`);
    case GOTO_PAGE_SUCCESS:
    case CREATE_FORM_SUCCESS:
    case EDIT_FORM_TITLE_SUCCESS:
    case UPDATE_FORM_SUCCESS:
    case DELETE_FORM_SUCCESS:
    case ADD_PAGE_SUCCESS:
    case UPDATE_PAGE_SUCCESS:
    case DELETE_PAGE_SUCCESS:
    case ADD_QUESTION_SET_SUCCESS:
    case UPDATE_QUESTION_SUCCESS:
    case DELETE_QUESTION_SUCCESS:
    case CLEAR_FORM_ERROR:
      return state
      .set('message', '');
    default: {
      return state;
    }
  }
}

export default winterfellFormBuilderReducer;
