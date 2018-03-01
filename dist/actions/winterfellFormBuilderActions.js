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
    type: _constants.EDIT_FORM_SUCCESS,
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
}();

;