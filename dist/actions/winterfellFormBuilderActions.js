'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadForm = loadForm;
exports.createForm = createForm;
exports.editForm = editForm;
exports.goToPage = goToPage;
exports.updateForm = updateForm;
exports.addPage = addPage;
exports.addQuestion = addQuestion;
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

function editForm(title) {
  return {
    type: _constants.EDIT_FORM_TITLE_SUCCESS,
    payload: { title: title }
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

function editQuestion(questionSetIndex, questionIndex, question, questionText) {
  return {
    type: _constants.UPDATE_QUESTION_SUCCESS,
    payload: { questionSetIndex: questionSetIndex, questionIndex: questionIndex, question: question, questionText: questionText }
  };
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(loadForm, 'loadForm', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(createForm, 'createForm', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editForm, 'editForm', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(goToPage, 'goToPage', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(updateForm, 'updateForm', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(addPage, 'addPage', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(addQuestion, 'addQuestion', 'src/actions/winterfellFormBuilderActions.js');

  __REACT_HOT_LOADER__.register(editQuestion, 'editQuestion', 'src/actions/winterfellFormBuilderActions.js');
}();

;