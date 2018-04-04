import {
  CREATE_FORM_SUCCESS,
  EDIT_FORM_TITLE_SUCCESS,
  UPDATE_FORM_SUCCESS,
  GOTO_PAGE_SUCCESS,
  ADD_PAGE_SUCCESS,
  DELETE_PAGE_SUCCESS,
  ADD_QUESTION_SUCCESS,
  ADD_CONDITIONAL_QUESTION_SUCCESS,
  SAVE_CONDITIONAL_QUESTION_SUCCESS,
  DELETE_CONDITIONAL_QUESTION_SUCCESS,
  ADD_QUESTION_SET_SUCCESS,
  DELETE_QUESTION_SUCCESS,
  UPDATE_QUESTION_SUCCESS,
  CHANGE_EDITING_FIELD_SUCCESS,
  EDIT_PAGE_ID_SUCCESS,
  EDIT_PAGE_HEADER_SUCCESS,
  EDIT_PAGE_TEXT_SUCCESS,
  EDIT_QUESTION_SET_HEADER_SUCCESS,
  EDIT_QUESTION_SET_TEXT_SUCCESS,
  EDIT_QUESTION_ID_SUCCESS,
  EDIT_QUESTION_SUCCESS,
  EDIT_QUESTION_TEXT_SUCCESS,
  EDIT_QUESTION_POST_TEXT_SUCCESS,
  EDIT_NEXT_BUTTON_TEXT_SUCCESS,
  EDIT_BACK_BUTTON_TEXT_SUCCESS,
  DISABLE_BACK_BUTTON_SUCCESS,
  EDIT_NEXT_BUTTON_ACTION_SUCCESS,
  EDIT_NEXT_BUTTON_TARGET_SUCCESS,
  ADD_QUESTION_OPTION_SUCCESS,
  EDIT_QUESTION_OPTION_TEXT_SUCCESS,
  EDIT_QUESTION_OPTION_VALUE_SUCCESS,
  DELETE_QUESTION_OPTION_SUCCESS,
  UPLOAD_JSON_SUCCESS,
  CHANGE_QUESTION_TYPE_SUCCESS,
  SAVE_FORM_SUCCESS,
  UPDATE_FORM_ERROR,
  CLEAR_FORM_ERROR,
  MOVE_PAGE_SUCCESS,
  UPDATE_NEXT_QUESTION_TARGET_SUCCESS,
  RESET_NEXT_QUESTION_TARGET_SUCCESS,
} from '../common/constants';

export function updateErrorMessage(message) {
  return {
    type: UPDATE_FORM_ERROR,
    payload: { message },
  };
}

export function clearErrorMessage() {
  return {
    type: CLEAR_FORM_ERROR,
  };
}

export function createForm(title) {
  return {
    type: CREATE_FORM_SUCCESS,
    payload: { title },
  };
}

export function uploadJSON(schema, fileName) {
  return {
    type: UPLOAD_JSON_SUCCESS,
    payload: { schema, fileName },
  };
}

export function saveJSON(schema, fileName) {
  return {
    type: SAVE_FORM_SUCCESS,
    payload: { schema, fileName },
  };
}

export function editFormTitle(title) {
  return {
    type: EDIT_FORM_TITLE_SUCCESS,
    payload: { title },
  };
}

export function editPageId(questionPanelIndex, text) {
  return {
    type: EDIT_PAGE_ID_SUCCESS,
    payload: { questionPanelIndex, text },
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

export function editNextButtonText(currentQuestionPanelIndex, text) {
  return {
    type: EDIT_NEXT_BUTTON_TEXT_SUCCESS,
    payload: { currentQuestionPanelIndex, text },
  };
}

export function editBackButtonText(currentQuestionPanelIndex, text) {
  return {
    type: EDIT_BACK_BUTTON_TEXT_SUCCESS,
    payload: { currentQuestionPanelIndex, text },
  };
}

export function disableBackButton(currentQuestionPanelIndex, disabled) {
  return {
    type: DISABLE_BACK_BUTTON_SUCCESS,
    payload: { currentQuestionPanelIndex, disabled },
  };
}


export function onSelectNextButtonAction(currentQuestionPanelIndex, text) {
  return {
    type: EDIT_NEXT_BUTTON_ACTION_SUCCESS,
    payload: { currentQuestionPanelIndex, text },
  };
}

export function onSelectNextButtonTarget(currentQuestionPanelIndex, text) {
  return {
    type: EDIT_NEXT_BUTTON_TARGET_SUCCESS,
    payload: { currentQuestionPanelIndex, text },
  };
}

export function changeQuestionType(currentQuestionSetIndex, currentQuestionIndex, questionType) {
  return {
    type: CHANGE_QUESTION_TYPE_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex, questionType },
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

export function deletePage(panelId) {
  return {
    type: DELETE_PAGE_SUCCESS,
    payload: { panelId },
  };
}

export function addQuestionSet(
  currentPanelId,
  questionSetId,
  questionSetHeader,
  questionSetText,
  question,
  questionText,
  questionType) {
  return {
    type: ADD_QUESTION_SET_SUCCESS,
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

export function addQuestion(
  currentQuestionSetIndex,
  questionSetId,
  questionId,
  question,
  questionText,
  questionType) {
  return {
    type: ADD_QUESTION_SUCCESS,
    payload: {
      currentQuestionSetIndex,
      questionSetId,
      questionId,
      question,
      questionText,
      questionType },
  };
}

export function addConditionalQuestion(
  currentQuestionSetIndex,
  currentQuestionIndex,
  questionOptionIndex,
  questionId,
  question,
  questionText,
  questionType) {
  return {
    type: ADD_CONDITIONAL_QUESTION_SUCCESS,
    payload: {
      currentQuestionSetIndex,
      currentQuestionIndex,
      questionOptionIndex,
      questionId,
      question,
      questionText,
      questionType },
  };
}

export function deleteQuestion(currentQuestionSetIndex, currentQuestionIndex) {
  return {
    type: DELETE_QUESTION_SUCCESS,
    payload: { currentQuestionSetIndex, currentQuestionIndex },
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

export function movePage(oldIndex, newIndex) {
  return {
    type: MOVE_PAGE_SUCCESS,
    payload: { oldIndex, newIndex },
  };
}

export function updateNextQuestionTarget(
  currentQuestionPanelIndex, questionId, value, target, optionIndex) {
  return {
    type: UPDATE_NEXT_QUESTION_TARGET_SUCCESS,
    payload: { currentQuestionPanelIndex, questionId, value, target, optionIndex },
  };
}

export function resetNextQuestionTarget(currentQuestionPanelIndex, value) {
  return {
    type: RESET_NEXT_QUESTION_TARGET_SUCCESS,
    payload: { currentQuestionPanelIndex, value },
  };
}

export function saveConditionalQuestion(
  currentQuestionSetIndex,
  currentQuestionIndex,
  questionOptionIndex,
  conditionalQuestionIndex,
  questionId,
  question,
  text,
  postText,
  type) {
  return {
    type: SAVE_CONDITIONAL_QUESTION_SUCCESS,
    payload: {
      currentQuestionSetIndex,
      currentQuestionIndex,
      questionOptionIndex,
      conditionalQuestionIndex,
      questionId,
      question,
      text,
      postText,
      type },
  };
}

export function deleteConditionalQuestion(
  currentQuestionSetIndex,
  currentQuestionIndex,
  questionOptionIndex,
  conditionalQuestionIndex) {
  return {
    type: DELETE_CONDITIONAL_QUESTION_SUCCESS,
    payload: {
      currentQuestionSetIndex,
      currentQuestionIndex,
      questionOptionIndex,
      conditionalQuestionIndex,
    },
  };
}
