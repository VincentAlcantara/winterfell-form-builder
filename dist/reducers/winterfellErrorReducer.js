'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _constants = require('../common/constants');

var initialState = (0, _immutable.fromJS)({
  message: ''
});

function winterfellFormBuilderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.RETRIEVE_FORMLIST_ERROR:
    case _constants.LOAD_FORM_ERROR:
    case _constants.CREATE_FORM_ERROR:
    case _constants.UPDATE_FORM_ERROR:
    case _constants.DELETE_FORM_ERROR:
    case _constants.ADD_PAGE_ERROR:
    case _constants.UPDATE_PAGE_ERROR:
    case _constants.DELETE_PAGE_ERROR:
    case _constants.ADD_QUESTION_ERROR:
    case _constants.UPDATE_QUESTION_ERROR:
    case _constants.DELETE_QUESTION_ERROR:
      return state.set('message', '' + action.type);
    case _constants.GOTO_PAGE_SUCCESS:
    case _constants.LOAD_FORM_SUCCESS:
    case _constants.CREATE_FORM_SUCCESS:
    case _constants.EDIT_FORM_TITLE_SUCCESS:
    case _constants.UPDATE_FORM_SUCCESS:
    case _constants.DELETE_FORM_SUCCESS:
    case _constants.ADD_PAGE_SUCCESS:
    case _constants.UPDATE_PAGE_SUCCESS:
    case _constants.DELETE_PAGE_SUCCESS:
    case _constants.ADD_QUESTION_SET_SUCCESS:
    case _constants.UPDATE_QUESTION_SUCCESS:
    case _constants.DELETE_QUESTION_SUCCESS:
      return state.set('message', '');
    default:
      {
        return state;
      }
  }
}

var _default = winterfellFormBuilderReducer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(initialState, 'initialState', 'src/reducers/winterfellErrorReducer.js');

  __REACT_HOT_LOADER__.register(winterfellFormBuilderReducer, 'winterfellFormBuilderReducer', 'src/reducers/winterfellErrorReducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/reducers/winterfellErrorReducer.js');
}();

;