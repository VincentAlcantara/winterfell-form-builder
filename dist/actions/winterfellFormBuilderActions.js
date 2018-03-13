'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadForm = loadForm;
exports.createForm = createForm;
exports.editFormTitle = editFormTitle;
exports.editPageHeader = editPageHeader;
exports.editPageText = editPageText;
exports.editQuestionSetHeader = editQuestionSetHeader;
exports.editQuestionSetText = editQuestionSetText;
exports.editQuestionText = editQuestionText;
exports.editQuestionPreText = editQuestionPreText;
exports.editQuestionPostText = editQuestionPostText;
exports.goToPage = goToPage;
exports.updateForm = updateForm;
exports.addPage = addPage;
exports.addQuestion = addQuestion;
exports.changeCurrentEditingField = changeCurrentEditingField;
exports.editQuestion = editQuestion;

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

function editQuestionText(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, text: text }
  };
}

function editQuestionPreText(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_PRE_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, text: text }
  };
}

function editQuestionPostText(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_POST_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, text: text }
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

function addQuestion(currentPanelId, questionSetId, questionSetHeader, questionSetText, question, questionText, questionType) {
  return {
    type: _constants.ADD_QUESTION_SUCCESS,
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

function changeCurrentEditingField(currentEditingField, currentQuestionSetIndex, currentQuestionIndex) {
  return {
    type: _constants.CHANGE_EDITING_FIELD_SUCCESS,
    payload: { currentEditingField: currentEditingField, currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex }
  };
}

function editQuestion(currentQuestionSetIndex, currentQuestionIndex, question, questionText) {
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

  __REACT_HOT_LOADER__.register(editFormTitle, 'editFormTitle', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editPageHeader, 'editPageHeader', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editPageText, 'editPageText', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editQuestionSetHeader, 'editQuestionSetHeader', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editQuestionSetText, 'editQuestionSetText', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editQuestionText, 'editQuestionText', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editQuestionPreText, 'editQuestionPreText', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editQuestionPostText, 'editQuestionPostText', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(goToPage, 'goToPage', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(updateForm, 'updateForm', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(addPage, 'addPage', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(addQuestion, 'addQuestion', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(changeCurrentEditingField, 'changeCurrentEditingField', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editQuestion, 'editQuestion', 'src/actions/winterfellFormBuilderActions.js');
}();

;