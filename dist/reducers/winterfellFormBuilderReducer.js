'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _constants = require('../common/constants');

var initialState = (0, _immutable.fromJS)({
  title: '',
  schema: {
    classes: _constants.BOOTSTRAP_CLASSES
  },
  currentPanelId: null,
  error: ''
});

function winterfellFormBuilderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.RETRIEVE_FORMLIST_REQUEST:
      return state.set('error', '');
    case _constants.RETRIEVE_FORMLIST_ERROR:
      return state.set('error', 'An error occurred.');
    case _constants.LOAD_FORM_ERROR:
      return state.set('error', 'Unable to load form.');
    case _constants.CREATE_FORM_ERROR:
      return state.set('error', 'An error occurred.');
    case _constants.UPDATE_FORM_ERROR:
      return state.set('error', 'An error occurred.');
    case _constants.DELETE_FORM_ERROR:
      return state.set('error', 'An error occurred.');
    case _constants.ADD_PAGE_ERROR:
      return state.set('error', 'An error occurred.');
    case _constants.UPDATE_PAGE_ERROR:
      return state.set('error', 'An error occurred.');
    case _constants.DELETE_PAGE_ERROR:
      return state.set('error', 'An error occurred.');
    case _constants.ADD_QUESTION_ERROR:
      return state.set('error', 'An error occurred.');
    case _constants.UPDATE_QUESTION_ERROR:
      return state.set('error', 'An error occurred.');
    case _constants.DELETE_QUESTION_ERROR:
      return state.set('error', 'An error occurred');
    case _constants.GOTO_PAGE_SUCCESS:
      return state.set('currentPanelId', action.payload.panelId);
    case _constants.RETRIEVE_FORMLIST_SUCCESS:
      return state.set('error', '');
    case _constants.LOAD_FORM_SUCCESS:
      {
        return state.set('currentPanelId', 'Select Page').set('schema', (0, _immutable.fromJS)(action.payload.schema)).set('error', '');
      }
    case _constants.CREATE_FORM_SUCCESS:
      return state.set('title', action.payload.title).set('schema', (0, _immutable.fromJS)({
        classes: _constants.BOOTSTRAP_CLASSES,
        formPanels: [{
          index: 1,
          panelId: 'page-1'
        }],
        questionPanels: [{
          panelId: 'page-1',
          panelHeader: action.payload.title + ' - page 1',
          panelText: 'Let\'s grab some of your details',
          questionSets: []
        }],
        questionSets: []
      })).set('error', '');
    case _constants.EDIT_FORM_TITLE_SUCCESS:
      return state.set('title', action.payload.title).set('error', '');
    case _constants.UPDATE_FORM_SUCCESS:
      return state.update('schema', function () {
        return (0, _immutable.fromJS)(action.payload.schema);
      }).set('error', '');
    case _constants.DELETE_FORM_SUCCESS:
      return state.set('error', '');
    case _constants.ADD_PAGE_SUCCESS:
      {
        var formPanelsCount = state.getIn(['schema', 'formPanels']).count() + 1;

        var newFormPanel = {
          index: formPanelsCount,
          panelId: action.payload.panelId || 'page-' + formPanelsCount
        };

        var newQuestionPanel = {
          panelId: action.payload.panelId || 'page-' + formPanelsCount,
          panelHeader: action.payload.panelHeader || 'Page-Heading-' + formPanelsCount,
          panelText: action.payload.panelText || 'Page-Text-' + formPanelsCount
        };

        return state.updateIn(['schema', 'formPanels'], function (arr) {
          return arr.push((0, _immutable.fromJS)(newFormPanel));
        }).updateIn(['schema', 'questionPanels'], function (arr) {
          return arr.push((0, _immutable.fromJS)(newQuestionPanel));
        }).set('error', '');
      }
    case _constants.UPDATE_PAGE_SUCCESS:
      return state.set('error', '');
    case _constants.DELETE_PAGE_SUCCESS:
      return state.set('error', '');
    case _constants.ADD_QUESTION_SUCCESS:
      {
        var questionSetCount = state.getIn(['schema', 'questionPanels', 0, 'questionSets']).count() + 1;

        var newQuestionSetId = {
          index: questionSetCount,
          questionSetId: action.payload.questionSetId || 'question-set-' + questionSetCount
        };

        var newQuestion = {
          questionId: action.payload.questionId || 'question-id-' + questionSetCount,
          question: action.payload.question || 'question-' + questionSetCount,
          text: action.payload.questionText || 'question-text-' + questionSetCount,
          input: {
            type: action.payload.questionType || 'textInput',
            placeholder: action.payload.questionPlaceholder || ''
          }
        };

        var newQuestionSet = {
          questionSetId: action.payload.questionSetId || 'question-set-' + questionSetCount,
          questionSetHeader: action.payload.questionSetHeader,
          questionSetText: action.payload.questionSetText,
          questions: [newQuestion]
        };

        return state.updateIn(['schema', 'questionPanels', 0, 'questionSets'], function (arr) {
          return arr.push((0, _immutable.fromJS)(newQuestionSetId));
        }).updateIn(['schema', 'questionSets'], function (arr) {
          return arr.push((0, _immutable.fromJS)(newQuestionSet));
        }).set('error', '');
      }
    case _constants.UPDATE_QUESTION_SUCCESS:
      return state.set('error', '');
    case _constants.DELETE_QUESTION_SUCCESS:
      return state.set('error', '');
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

  __REACT_HOT_LOADER__.register(initialState, 'initialState', 'src/reducers/winterfellFormBuilderReducer.js');

  __REACT_HOT_LOADER__.register(winterfellFormBuilderReducer, 'winterfellFormBuilderReducer', 'src/reducers/winterfellFormBuilderReducer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/reducers/winterfellFormBuilderReducer.js');
}();

;