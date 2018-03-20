'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadForm = loadForm;
exports.createForm = createForm;
exports.uploadJSON = uploadJSON;
exports.saveJSON = saveJSON;
exports.editFormTitle = editFormTitle;
exports.editPageHeader = editPageHeader;
exports.editPageText = editPageText;
exports.editQuestionSetHeader = editQuestionSetHeader;
exports.editQuestionSetText = editQuestionSetText;
exports.editQuestionId = editQuestionId;
exports.editQuestion = editQuestion;
exports.editQuestionText = editQuestionText;
exports.editQuestionPostText = editQuestionPostText;
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
exports.deleteQuestion = deleteQuestion;
exports.changeCurrentEditingField = changeCurrentEditingField;
exports.updateQuestion = updateQuestion;

var _constants = require('../common/constants');

function loadForm(schema) {
  return {
    type: _constants.LOAD_FORM_SUCCESS,
    payload: { schema: schema }
  };
}

function createForm(title) {
  return {
    type: _constants.CREATE_FORM_SUCCESS,
    payload: { title: title }
  };
}

function uploadJSON(schema, fileName) {
  return {
    type: _constants.UPLOAD_JSON_SUCCESS,
    payload: { schema: schema, fileName: fileName }
  };
}

function saveJSON(schema, fileName) {
  return {
    type: _constants.SAVE_FORM_SUCCESS,
    payload: { schema: schema, fileName: fileName }
  };
}

function editFormTitle(title) {
  return {
    type: _constants.EDIT_FORM_TITLE_SUCCESS,
    payload: { title: title }
  };
}

function editPageHeader(questionPanelIndex, header) {
  return {
    type: _constants.EDIT_PAGE_HEADER_SUCCESS,
    payload: { questionPanelIndex: questionPanelIndex, header: header }
  };
}

function editPageText(questionPanelIndex, text) {
  return {
    type: _constants.EDIT_PAGE_TEXT_SUCCESS,
    payload: { questionPanelIndex: questionPanelIndex, text: text }
  };
}

function editQuestionSetHeader(currentQuestionSetIndex, header) {
  return {
    type: _constants.EDIT_QUESTION_SET_HEADER_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, header: header }
  };
}

function editQuestionSetText(currentQuestionSetIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_SET_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, text: text }
  };
}

function editQuestionId(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_ID_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, text: text }
  };
}

function editQuestion(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, text: text }
  };
}

function editQuestionText(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, text: text }
  };
}

function editQuestionPostText(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_POST_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, text: text }
  };
}

function changeQuestionType(currentQuestionSetIndex, currentQuestionIndex, questionType) {
  return {
    type: _constants.CHANGE_QUESTION_TYPE_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, questionType: questionType }
  };
}

function addQuestionOption(currentQuestionSetIndex, currentQuestionIndex, questionOptionText, questionOptionValue) {
  return {
    type: _constants.ADD_QUESTION_OPTION_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      questionOptionText: questionOptionText,
      questionOptionValue: questionOptionValue
    }
  };
}

function editQuestionOptionText(currentQuestionSetIndex, currentQuestionIndex, optionIndex, option) {
  return {
    type: _constants.EDIT_QUESTION_OPTION_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, optionIndex: optionIndex, option: option }
  };
}

function editQuestionOptionValue(currentQuestionSetIndex, currentQuestionIndex, optionIndex, value) {
  return {
    type: _constants.EDIT_QUESTION_OPTION_VALUE_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, optionIndex: optionIndex, value: value }
  };
}

function deleteQuestionOption(currentQuestionSetIndex, currentQuestionIndex, questionOptionIndex) {
  return {
    type: _constants.DELETE_QUESTION_OPTION_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, questionOptionIndex: questionOptionIndex }
  };
}

function goToPage(panelId) {
  return {
    type: _constants.GOTO_PAGE_SUCCESS,
    payload: { panelId: panelId }
  };
}

function updateForm(schema) {
  return {
    type: _constants.UPDATE_FORM_SUCCESS,
    payload: { schema: schema }
  };
}

function addPage(panelId, panelHeader, panelText) {
  return {
    type: _constants.ADD_PAGE_SUCCESS,
    payload: { panelId: panelId, panelHeader: panelHeader, panelText: panelText }
  };
}

function deletePage(panelId) {
  return {
    type: _constants.DELETE_PAGE_SUCCESS,
    payload: { panelId: panelId }
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
      questionType: questionType }
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
      questionType: questionType }
  };
}

function deleteQuestion(currentQuestionSetIndex, currentQuestionIndex) {
  return {
    type: _constants.DELETE_QUESTION_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex }
  };
}

function changeCurrentEditingField(currentEditingField, currentQuestionSetIndex, currentQuestionIndex) {
  return {
    type: _constants.CHANGE_EDITING_FIELD_SUCCESS,
    payload: { currentEditingField: currentEditingField, currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex }
  };
}

function updateQuestion(currentQuestionSetIndex, currentQuestionIndex, question, questionText) {
  return {
    type: _constants.UPDATE_QUESTION_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, question: question, questionText: questionText }
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(loadForm, 'loadForm', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(createForm, 'createForm', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(uploadJSON, 'uploadJSON', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(saveJSON, 'saveJSON', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editFormTitle, 'editFormTitle', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editPageHeader, 'editPageHeader', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editPageText, 'editPageText', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editQuestionSetHeader, 'editQuestionSetHeader', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editQuestionSetText, 'editQuestionSetText', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editQuestionId, 'editQuestionId', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editQuestion, 'editQuestion', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editQuestionText, 'editQuestionText', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editQuestionPostText, 'editQuestionPostText', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(changeQuestionType, 'changeQuestionType', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(addQuestionOption, 'addQuestionOption', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editQuestionOptionText, 'editQuestionOptionText', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editQuestionOptionValue, 'editQuestionOptionValue', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(deleteQuestionOption, 'deleteQuestionOption', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(goToPage, 'goToPage', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(updateForm, 'updateForm', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(addPage, 'addPage', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(deletePage, 'deletePage', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(addQuestionSet, 'addQuestionSet', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(addQuestion, 'addQuestion', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(deleteQuestion, 'deleteQuestion', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(changeCurrentEditingField, 'changeCurrentEditingField', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(updateQuestion, 'updateQuestion', 'src/actions/winterfellFormBuilderActions.js');
}();

;