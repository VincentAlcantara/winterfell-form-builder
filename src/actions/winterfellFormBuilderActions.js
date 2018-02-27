import {
  // RETRIEVE_FORMLIST_REQUEST,
  // RETRIEVE_FORMLIST_SUCCESS,
  // RETRIEVE_FORMLIST_ERROR,
  // RETRIEVE_FORM_REQUEST,
  // RETRIEVE_FORM_SUCCESS,
  // RETRIEVE_FORM_ERROR,
  // CREATE_FORM_REQUEST,
  CREATE_FORM_SUCCESS,
  // CREATE_FORM_ERROR,
  // UPDATE_FORM_REQUEST,
  EDIT_FORM_SUCCESS,
  UPDATE_FORM_SUCCESS,
  SKIP_PAGE_SUCCESS,
  // UPDATE_FORM_ERROR,
  // DELETE_FORM_REQUEST,
  // DELETE_FORM_SUCCESS,
  // DELETE_FORM_ERROR,
  // ADD_PAGE_REQUEST,
  ADD_PAGE_SUCCESS,
  // ADD_PAGE_ERROR,
  // UPDATE_PAGE_REQUEST,
  // UPDATE_PAGE_SUCCESS,
  // UPDATE_PAGE_ERROR,
  // DELETE_PAGE_REQUEST,
  // DELETE_PAGE_SUCCESS,
  // DELETE_PAGE_ERROR,
  // ADD_QUESTION_REQUEST,
  // ADD_QUESTION_SUCCESS,
  // ADD_QUESTION_ERROR,
  // UPDATE_QUESTION_REQUEST,
  // UPDATE_QUESTION_SUCCESS,
  // UPDATE_QUESTION_ERROR,
  // DELETE_QUESTION_REQUEST,
  // DELETE_QUESTION_SUCCESS,
  // DELETE_QUESTION_ERROR,
} from '../common/constants';

export function createForm(title) {
  return {
    type: CREATE_FORM_SUCCESS,
    payload: { title },
  };
}

export function editForm(title) {
  return {
    type: EDIT_FORM_SUCCESS,
    payload: { title },
  };
}

export function skipPage(panelId) {
  return {
    type: SKIP_PAGE_SUCCESS,
    payload: { panelId },
  };
}

export function updateForm(schema) {
  return {
    type: UPDATE_FORM_SUCCESS,
    payload: { schema },
  };
}

export function addPage(panelId, panelHeader, panelText) {
  return {
    type: ADD_PAGE_SUCCESS,
    payload: { panelId, panelHeader, panelText },
  };
}
