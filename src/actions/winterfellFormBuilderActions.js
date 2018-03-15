import {
  // RETRIEVE_FORMLIST_REQUEST,
  // RETRIEVE_FORMLIST_SUCCESS,
  // RETRIEVE_FORMLIST_ERROR,
  // LOAD_FORM_REQUEST,
  LOAD_FORM_SUCCESS,
  // LOAD_FORM_ERROR,
  // CREATE_FORM_REQUEST,
  CREATE_FORM_SUCCESS,
  // CREATE_FORM_ERROR,
  // UPDATE_FORM_REQUEST,
  EDIT_FORM_TITLE_SUCCESS,
  UPDATE_FORM_SUCCESS,
  GOTO_PAGE_SUCCESS,
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
  ADD_QUESTION_SUCCESS,
  // ADD_QUESTION_ERROR,
  // UPDATE_QUESTION_REQUEST,
  UPDATE_QUESTION_SUCCESS,
  // UPDATE_QUESTION_ERROR,
  // DELETE_QUESTION_REQUEST,
  // DELETE_QUESTION_SUCCESS,
  // DELETE_QUESTION_ERROR,
  CHANGE_EDITING_FIELD_SUCCESS,
  EDIT_PAGE_HEADER_SUCCESS,
  EDIT_PAGE_TEXT_SUCCESS,
  EDIT_QUESTION_SET_HEADER_SUCCESS,
  EDIT_QUESTION_SET_TEXT_SUCCESS,
  EDIT_QUESTION_ID_SUCCESS,
  EDIT_QUESTION_SUCCESS,
  EDIT_QUESTION_TEXT_SUCCESS,
  EDIT_QUESTION_POST_TEXT_SUCCESS,
  ADD_QUESTION_OPTION_SUCCESS,
  EDIT_QUESTION_OPTION_TEXT_SUCCESS,
  EDIT_QUESTION_OPTION_VALUE_SUCCESS,
  DELETE_QUESTION_OPTION_SUCCESS,
} from '../common/constants';

export function loadForm(schema) {
  return {
    type: LOAD_FORM_SUCCESS,
    payload: { schema },
  };
}

export function createForm(title) {
  return {
    type: CREATE_FORM_SUCCESS,
    payload: { title },
  };
}

export function editFormTitle(title) {
  return {
    type: EDIT_FORM_TITLE_SUCCESS,
    payload: { title },
  };
}

export function editPageHeader(questionPanelIndex, header) {
  return {
    type: EDIT_PAGE_HEADER_SUCCESS,
    payload: { questionPanelIndex, header },
  };
}

export function editPageText(questionPanelIndex, text) {
  return {
    type: EDIT_PAGE_TEXT_SUCCESS,
    payload: { questionPanelIndex, text },
  };
}

export function editQuestionSetHeader(currentQuestionSetIndex, header) {
  return {
    type: EDIT_QUESTION_SET_HEADER_SUCCESS,
    payload: { currentQuestionSetIndex, header },
  };
}

export function editQuestionSetText(currentQuestionSetIndex, text) {
  return {
    type: EDIT_QUESTION_SET_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex, text },
  };
}

export function editQuestionId(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: EDIT_QUESTION_ID_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, text },
  };
}

export function editQuestion(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: EDIT_QUESTION_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, text },
  };
}

export function editQuestionText(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: EDIT_QUESTION_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, text },
  };
}

export function editQuestionPostText(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: EDIT_QUESTION_POST_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, text },
  };
}

export function addQuestionOption(
  currentQuestionSetIndex, currentQuestionIndex, questionOptionText, questionOptionValue) {
  return {
    type: ADD_QUESTION_OPTION_SUCCESS,
    payload: {
      currentQuestionSetIndex,
      currentQuestionIndex,
      questionOptionText,
      questionOptionValue,
    },
  };
}

export function editQuestionOptionText(
  currentQuestionSetIndex, currentQuestionIndex, optionIndex, option) {
  return {
    type: EDIT_QUESTION_OPTION_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, optionIndex, option },
  };
}

export function editQuestionOptionValue(
  currentQuestionSetIndex, currentQuestionIndex, optionIndex, value) {
  return {
    type: EDIT_QUESTION_OPTION_VALUE_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, optionIndex, value },
  };
}

export function deleteQuestionOption(
  currentQuestionSetIndex, currentQuestionIndex, questionOptionIndex) {
  return {
    type: DELETE_QUESTION_OPTION_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, questionOptionIndex },
  };
}

export function goToPage(panelId) {
  return {
    type: GOTO_PAGE_SUCCESS,
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

export function addQuestion(
  currentPanelId,
  questionSetId,
  questionSetHeader,
  questionSetText,
  question,
  questionText,
  questionType) {
  return {
    type: ADD_QUESTION_SUCCESS,
    payload: {
      currentPanelId,
      questionSetId,
      questionSetHeader,
      questionSetText,
      question,
      questionText,
      questionType },
  };
}

export function changeCurrentEditingField(
  currentEditingField, currentQuestionSetIndex, currentQuestionIndex) {
  return {
    type: CHANGE_EDITING_FIELD_SUCCESS,
    payload: { currentEditingField, currentQuestionSetIndex, currentQuestionIndex },
  };
}

export function updateQuestion(
  currentQuestionSetIndex, currentQuestionIndex, question, questionText) {
  return {
    type: UPDATE_QUESTION_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, question, questionText },
  };
}
