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
  currentPanelId: null
});

function winterfellFormBuilderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.GOTO_PAGE_SUCCESS:
      {
        var questionPanels = state.getIn(['schema', 'questionPanels']).toJS();
        var currentPanelId = action.payload.panelId;
        var currentPanelIndex = -1;
        for (var i = 0; i < questionPanels.length; i += 1) {
          if (questionPanels[i].panelId === currentPanelId) {
            currentPanelIndex = i;
          }
        }

        return state.set('currentPanelIndex', currentPanelIndex).set('currentPanelId', action.payload.panelId);
      }
    case _constants.LOAD_FORM_SUCCESS:
      {
        return state.set('currentPanelId', 'Select Page').set('schema', (0, _immutable.fromJS)(action.payload.schema));
      }
    case _constants.CHANGE_EDITING_FIELD_SUCCESS:
      {
        return state.set('currentEditingField', action.payload.currentEditingField);
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
      }));
    case _constants.EDIT_FORM_TITLE_SUCCESS:
      return state.set('title', action.payload.title);
    case _constants.UPDATE_FORM_SUCCESS:
      return state.update('schema', function () {
        return (0, _immutable.fromJS)(action.payload.schema);
      });
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
          panelText: action.payload.panelText || 'Page-Text-' + formPanelsCount,
          questionSets: []
        };

        return state.updateIn(['schema', 'formPanels'], function (arr) {
          return arr.push((0, _immutable.fromJS)(newFormPanel));
        }).updateIn(['schema', 'questionPanels'], function (arr) {
          return arr.push((0, _immutable.fromJS)(newQuestionPanel));
        });
      }
    case _constants.ADD_QUESTION_SUCCESS:
      {
        var _currentPanelIndex = state.get('currentPanelIndex');

        var questionSetCount = state.getIn(['schema', 'questionPanels', _currentPanelIndex, 'questionSets']).size;

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

        return state.updateIn(['schema', 'questionPanels', _currentPanelIndex, 'questionSets'], function (arr) {
          return arr.push((0, _immutable.fromJS)(newQuestionSetId));
        }).updateIn(['schema', 'questionSets'], function (arr) {
          return arr.push((0, _immutable.fromJS)(newQuestionSet));
        });
      }
    case _constants.UPDATE_QUESTION_SUCCESS:
      {
        var _action$payload = action.payload,
            questionSetIndex = _action$payload.questionSetIndex,
            questionIndex = _action$payload.questionIndex,
            question = _action$payload.question,
            questionText = _action$payload.questionText;

        return state.setIn(['schema', 'questionSets', questionSetIndex, 'questions', questionIndex, 'question'], question).setIn(['schema', 'questionSets', questionSetIndex, 'questions', questionIndex, 'text'], questionText);
      }

    default:
      return state;
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