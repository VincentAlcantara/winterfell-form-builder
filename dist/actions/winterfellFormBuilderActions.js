"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateErrorMessage = updateErrorMessage;
exports.clearErrorMessage = clearErrorMessage;
exports.createForm = createForm;
exports.uploadJSON = uploadJSON;
exports.saveJSON = saveJSON;
exports.editFormTitle = editFormTitle;
exports.editPageId = editPageId;
exports.editPageHeader = editPageHeader;
exports.editPageText = editPageText;
exports.editQuestionSetHeader = editQuestionSetHeader;
exports.editQuestionSetText = editQuestionSetText;
exports.editQuestionId = editQuestionId;
exports.editQuestion = editQuestion;
exports.editQuestionText = editQuestionText;
exports.editQuestionPostText = editQuestionPostText;
exports.editNextButtonText = editNextButtonText;
exports.editBackButtonText = editBackButtonText;
exports.disableBackButton = disableBackButton;
exports.onSelectNextButtonAction = onSelectNextButtonAction;
exports.onSelectNextButtonTarget = onSelectNextButtonTarget;
exports.changeQuestionType = changeQuestionType;
exports.addQuestionOption = addQuestionOption;
exports.editQuestionOptionText = editQuestionOptionText;
exports.editQuestionOptionValue = editQuestionOptionValue;
exports.deleteQuestionOption = deleteQuestionOption;
exports.goToPage = goToPage;
exports.updateForm = updateForm;
exports.addPage = addPage;
exports.deletePage = deletePage;
exports.addQuestionSet = addQuestionSet;
exports.addQuestion = addQuestion;
exports.addConditionalQuestion = addConditionalQuestion;
exports.deleteQuestion = deleteQuestion;
exports.changeCurrentEditingField = changeCurrentEditingField;
exports.updateQuestion = updateQuestion;
exports.movePage = movePage;
exports.updateNextQuestionTarget = updateNextQuestionTarget;
exports.resetNextQuestionTarget = resetNextQuestionTarget;
exports.saveConditionalQuestion = saveConditionalQuestion;
exports.deleteConditionalQuestion = deleteConditionalQuestion;
exports.updateQuestionAnswers = updateQuestionAnswers;

var _constants = require("../common/constants");

function updateErrorMessage(message) {
  return {
    type: _constants.UPDATE_FORM_ERROR,
    payload: {
      message: message
    }
  };
}

function clearErrorMessage() {
  return {
    type: _constants.CLEAR_FORM_ERROR
  };
}

function createForm(title) {
  return {
    type: _constants.CREATE_FORM_SUCCESS,
    payload: {
      title: title
    }
  };
}

function uploadJSON(schema, fileName) {
  return {
    type: _constants.UPLOAD_JSON_SUCCESS,
    payload: {
      schema: schema,
      fileName: fileName
    }
  };
}

function saveJSON(schema, fileName) {
  return {
    type: _constants.SAVE_FORM_SUCCESS,
    payload: {
      schema: schema,
      fileName: fileName
    }
  };
}

function editFormTitle(title) {
  return {
    type: _constants.EDIT_FORM_TITLE_SUCCESS,
    payload: {
      title: title
    }
  };
}

function editPageId(questionPanelIndex, text) {
  return {
    type: _constants.EDIT_PAGE_ID_SUCCESS,
    payload: {
      questionPanelIndex: questionPanelIndex,
      text: text
    }
  };
}

function editPageHeader(questionPanelIndex, header) {
  return {
    type: _constants.EDIT_PAGE_HEADER_SUCCESS,
    payload: {
      questionPanelIndex: questionPanelIndex,
      header: header
    }
  };
}

function editPageText(questionPanelIndex, text) {
  return {
    type: _constants.EDIT_PAGE_TEXT_SUCCESS,
    payload: {
      questionPanelIndex: questionPanelIndex,
      text: text
    }
  };
}

function editQuestionSetHeader(currentQuestionSetIndex, header) {
  return {
    type: _constants.EDIT_QUESTION_SET_HEADER_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      header: header
    }
  };
}

function editQuestionSetText(currentQuestionSetIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_SET_TEXT_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      text: text
    }
  };
}

function editQuestionId(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_ID_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      text: text
    }
  };
}

function editQuestion(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      text: text
    }
  };
}

function editQuestionText(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_TEXT_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      text: text
    }
  };
}

function editQuestionPostText(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_POST_TEXT_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      text: text
    }
  };
}

function editNextButtonText(currentQuestionPanelIndex, text) {
  return {
    type: _constants.EDIT_NEXT_BUTTON_TEXT_SUCCESS,
    payload: {
      currentQuestionPanelIndex: currentQuestionPanelIndex,
      text: text
    }
  };
}

function editBackButtonText(currentQuestionPanelIndex, text) {
  return {
    type: _constants.EDIT_BACK_BUTTON_TEXT_SUCCESS,
    payload: {
      currentQuestionPanelIndex: currentQuestionPanelIndex,
      text: text
    }
  };
}

function disableBackButton(currentQuestionPanelIndex, disabled) {
  return {
    type: _constants.DISABLE_BACK_BUTTON_SUCCESS,
    payload: {
      currentQuestionPanelIndex: currentQuestionPanelIndex,
      disabled: disabled
    }
  };
}

function onSelectNextButtonAction(currentQuestionPanelIndex, text) {
  return {
    type: _constants.EDIT_NEXT_BUTTON_ACTION_SUCCESS,
    payload: {
      currentQuestionPanelIndex: currentQuestionPanelIndex,
      text: text
    }
  };
}

function onSelectNextButtonTarget(currentQuestionPanelIndex, text) {
  return {
    type: _constants.EDIT_NEXT_BUTTON_TARGET_SUCCESS,
    payload: {
      currentQuestionPanelIndex: currentQuestionPanelIndex,
      text: text
    }
  };
}

function changeQuestionType(currentQuestionSetIndex, currentQuestionIndex, questionType) {
  return {
    type: _constants.CHANGE_QUESTION_TYPE_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      questionType: questionType
    }
  };
}

function addQuestionOption(key, questionOptionText, questionOptionValue) {
  return {
    type: _constants.ADD_QUESTION_OPTION_SUCCESS,
    payload: {
      key: key,
      questionOptionText: questionOptionText,
      questionOptionValue: questionOptionValue
    }
  };
}

function editQuestionOptionText(path, text) {
  return {
    type: _constants.EDIT_QUESTION_OPTION_TEXT_SUCCESS,
    payload: {
      path: path,
      text: text
    }
  };
}

function editQuestionOptionValue(path, value) {
  return {
    type: _constants.EDIT_QUESTION_OPTION_VALUE_SUCCESS,
    payload: {
      path: path,
      value: value
    }
  };
}

function deleteQuestionOption(path) {
  return {
    type: _constants.DELETE_QUESTION_OPTION_SUCCESS,
    payload: {
      path: path
    }
  };
}

function goToPage(panelId) {
  return {
    type: _constants.GOTO_PAGE_SUCCESS,
    payload: {
      panelId: panelId
    }
  };
}

function updateForm(schema) {
  return {
    type: _constants.UPDATE_FORM_SUCCESS,
    payload: {
      schema: schema
    }
  };
}

function addPage(panelId, panelHeader, panelText) {
  return {
    type: _constants.ADD_PAGE_SUCCESS,
    payload: {
      panelId: panelId,
      panelHeader: panelHeader,
      panelText: panelText
    }
  };
}

function deletePage(panelId) {
  return {
    type: _constants.DELETE_PAGE_SUCCESS,
    payload: {
      panelId: panelId
    }
  };
}

function addQuestionSet(currentPanelId, questionSetId, questionSetHeader, questionSetText, question, questionText, questionType) {
  return {
    type: _constants.ADD_QUESTION_SET_SUCCESS,
    payload: {
      currentPanelId: currentPanelId,
      questionSetId: questionSetId,
      questionSetHeader: questionSetHeader,
      questionSetText: questionSetText,
      question: question,
      questionText: questionText,
      questionType: questionType
    }
  };
}

function addQuestion(currentQuestionSetIndex, questionSetId, questionId, question, questionText, questionType) {
  return {
    type: _constants.ADD_QUESTION_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      questionSetId: questionSetId,
      questionId: questionId,
      question: question,
      questionText: questionText,
      questionType: questionType
    }
  };
}

function addConditionalQuestion(path, questionId, question, questionText, questionType) {
  return {
    type: _constants.ADD_CONDITIONAL_QUESTION_SUCCESS,
    payload: {
      path: path,
      questionId: questionId,
      question: question,
      questionText: questionText,
      questionType: questionType
    }
  };
}

function deleteQuestion(currentQuestionSetIndex, currentQuestionIndex) {
  return {
    type: _constants.DELETE_QUESTION_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex
    }
  };
}

function changeCurrentEditingField(currentEditingField, currentQuestionSetIndex, currentQuestionIndex) {
  return {
    type: _constants.CHANGE_EDITING_FIELD_SUCCESS,
    payload: {
      currentEditingField: currentEditingField,
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex
    }
  };
}

function updateQuestion(currentQuestionSetIndex, currentQuestionIndex, question, questionText) {
  return {
    type: _constants.UPDATE_QUESTION_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      question: question,
      questionText: questionText
    }
  };
}

function movePage(oldIndex, newIndex) {
  return {
    type: _constants.MOVE_PAGE_SUCCESS,
    payload: {
      oldIndex: oldIndex,
      newIndex: newIndex
    }
  };
}

function updateNextQuestionTarget(currentQuestionPanelIndex, questionId, value, target, optionIndex) {
  return {
    type: _constants.UPDATE_NEXT_QUESTION_TARGET_SUCCESS,
    payload: {
      currentQuestionPanelIndex: currentQuestionPanelIndex,
      questionId: questionId,
      value: value,
      target: target,
      optionIndex: optionIndex
    }
  };
}

function resetNextQuestionTarget(currentQuestionPanelIndex, value) {
  return {
    type: _constants.RESET_NEXT_QUESTION_TARGET_SUCCESS,
    payload: {
      currentQuestionPanelIndex: currentQuestionPanelIndex,
      value: value
    }
  };
}

function saveConditionalQuestion(path, questionId, question, text, postText, type, options) {
  return {
    type: _constants.SAVE_CONDITIONAL_QUESTION_SUCCESS,
    payload: {
      path: path,
      questionId: questionId,
      question: question,
      text: text,
      postText: postText,
      type: type,
      options: options
    }
  };
}

function deleteConditionalQuestion(path) {
  return {
    type: _constants.DELETE_CONDITIONAL_QUESTION_SUCCESS,
    payload: {
      path: path
    }
  };
}

function updateQuestionAnswers(questionAnswers) {
  return {
    type: _constants.UPDATE_QUESTION_ANSWERS_SUCCESS,
    payload: {
      questionAnswers: questionAnswers
    }
  };
}