'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _immutable = require('immutable');

var _constants = require('../common/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = (0, _immutable.fromJS)({
  title: '',
  schema: {},
  currentPanelId: null,
  currentQuestionPanelIndex: 0
});

function winterfellFormBuilderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _constants.GOTO_PAGE_SUCCESS:
      {
        var questionPanels = state.getIn(['schema', 'questionPanels']).toJS();
        var currentPanelId = action.payload.panelId;
        var currentQuestionPanelIndex = -1;
        for (var i = 0; i < questionPanels.length; i += 1) {
          if (questionPanels[i].panelId === currentPanelId) {
            currentQuestionPanelIndex = i;
          }
        }

        return state.set('currentQuestionPanelIndex', currentQuestionPanelIndex).set('currentEditingField', 'page').set('currentPanelId', action.payload.panelId);
      }
    case _constants.UPLOAD_JSON_SUCCESS:
      {
        return state.set('currentPanelId', 'Select Page').set('title', action.payload.fileName).set('schema', (0, _immutable.fromJS)(action.payload.schema));
      }
    case _constants.SAVE_FORM_SUCCESS:
      {
        return state.set('title', action.payload.fileName);
      }
    case _constants.EDIT_PAGE_ID_SUCCESS:
      {
        var _action$payload = action.payload,
            questionPanelIndex = _action$payload.questionPanelIndex,
            text = _action$payload.text;

        return state.setIn(['schema', 'formPanels', questionPanelIndex, 'panelId'], text).set('currentPanelId', text).setIn(['schema', 'questionPanels', questionPanelIndex, 'panelId'], text);
      }
    case _constants.EDIT_PAGE_HEADER_SUCCESS:
      {
        var _action$payload2 = action.payload,
            _questionPanelIndex = _action$payload2.questionPanelIndex,
            header = _action$payload2.header;

        return state.setIn(['schema', 'questionPanels', _questionPanelIndex, 'panelHeader'], header);
      }
    case _constants.EDIT_PAGE_TEXT_SUCCESS:
      {
        var _action$payload3 = action.payload,
            _questionPanelIndex2 = _action$payload3.questionPanelIndex,
            _text = _action$payload3.text;

        return state.setIn(['schema', 'questionPanels', _questionPanelIndex2, 'panelText'], _text);
      }
    case _constants.EDIT_QUESTION_SET_HEADER_SUCCESS:
      {
        var _action$payload4 = action.payload,
            currentQuestionSetIndex = _action$payload4.currentQuestionSetIndex,
            _header = _action$payload4.header;

        return state.setIn(['schema', 'questionSets', currentQuestionSetIndex, 'questionSetHeader'], _header);
      }
    case _constants.EDIT_QUESTION_SET_TEXT_SUCCESS:
      {
        var _action$payload5 = action.payload,
            _currentQuestionSetIndex = _action$payload5.currentQuestionSetIndex,
            _text2 = _action$payload5.text;

        return state.setIn(['schema', 'questionSets', _currentQuestionSetIndex, 'questionSetText'], _text2);
      }
    case _constants.EDIT_QUESTION_ID_SUCCESS:
      {
        var _action$payload6 = action.payload,
            _currentQuestionSetIndex2 = _action$payload6.currentQuestionSetIndex,
            currentQuestionIndex = _action$payload6.currentQuestionIndex,
            _text3 = _action$payload6.text;

        return state.setIn(['schema', 'questionSets', _currentQuestionSetIndex2, 'questions', currentQuestionIndex, 'questionId'], _text3);
      }
    case _constants.EDIT_QUESTION_SUCCESS:
      {
        var _action$payload7 = action.payload,
            _currentQuestionSetIndex3 = _action$payload7.currentQuestionSetIndex,
            _currentQuestionIndex = _action$payload7.currentQuestionIndex,
            _text4 = _action$payload7.text;

        return state.setIn(['schema', 'questionSets', _currentQuestionSetIndex3, 'questions', _currentQuestionIndex, 'question'], _text4);
      }
    case _constants.EDIT_QUESTION_TEXT_SUCCESS:
      {
        var _action$payload8 = action.payload,
            _currentQuestionSetIndex4 = _action$payload8.currentQuestionSetIndex,
            _currentQuestionIndex2 = _action$payload8.currentQuestionIndex,
            _text5 = _action$payload8.text;

        return state.setIn(['schema', 'questionSets', _currentQuestionSetIndex4, 'questions', _currentQuestionIndex2, 'text'], _text5);
      }
    case _constants.EDIT_QUESTION_POST_TEXT_SUCCESS:
      {
        var _action$payload9 = action.payload,
            _currentQuestionSetIndex5 = _action$payload9.currentQuestionSetIndex,
            _currentQuestionIndex3 = _action$payload9.currentQuestionIndex,
            _text6 = _action$payload9.text;

        return state.setIn(['schema', 'questionSets', _currentQuestionSetIndex5, 'questions', _currentQuestionIndex3, 'postText'], _text6);
      }
    case _constants.EDIT_NEXT_BUTTON_TEXT_SUCCESS:
      {
        var _action$payload10 = action.payload,
            _currentQuestionPanelIndex = _action$payload10.currentQuestionPanelIndex,
            _text7 = _action$payload10.text;

        return state.setIn(['schema', 'questionPanels', _currentQuestionPanelIndex, 'button', 'text'], _text7);
      }
    case _constants.EDIT_BACK_BUTTON_TEXT_SUCCESS:
      {
        var _action$payload11 = action.payload,
            _currentQuestionPanelIndex2 = _action$payload11.currentQuestionPanelIndex,
            _text8 = _action$payload11.text;

        return state.setIn(['schema', 'questionPanels', _currentQuestionPanelIndex2, 'backButton', 'text'], _text8);
      }
    case _constants.DISABLE_BACK_BUTTON_SUCCESS:
      {
        var _action$payload12 = action.payload,
            _currentQuestionPanelIndex3 = _action$payload12.currentQuestionPanelIndex,
            disabled = _action$payload12.disabled;

        return state.setIn(['schema', 'questionPanels', _currentQuestionPanelIndex3, 'backButton', 'disabled'], disabled);
      }
    case _constants.EDIT_NEXT_BUTTON_ACTION_SUCCESS:
      {
        var _action$payload13 = action.payload,
            _currentQuestionPanelIndex4 = _action$payload13.currentQuestionPanelIndex,
            _text9 = _action$payload13.text;

        return state.setIn(['schema', 'questionPanels', _currentQuestionPanelIndex4, 'action', 'default', 'action'], _text9);
      }
    case _constants.EDIT_NEXT_BUTTON_TARGET_SUCCESS:
      {
        var _action$payload14 = action.payload,
            _currentQuestionPanelIndex5 = _action$payload14.currentQuestionPanelIndex,
            _text10 = _action$payload14.text;

        return state.setIn(['schema', 'questionPanels', _currentQuestionPanelIndex5, 'action', 'default', 'target'], _text10);
      }
    case _constants.ADD_QUESTION_OPTION_SUCCESS:
      {
        var _action$payload15 = action.payload,
            _currentQuestionSetIndex6 = _action$payload15.currentQuestionSetIndex,
            _currentQuestionIndex4 = _action$payload15.currentQuestionIndex,
            questionOptionText = _action$payload15.questionOptionText,
            questionOptionValue = _action$payload15.questionOptionValue;

        var newOption = (0, _immutable.fromJS)({ text: questionOptionText, value: questionOptionValue });
        if (state.getIn(['schema', 'questionSets', _currentQuestionSetIndex6, 'questions', _currentQuestionIndex4, 'input', 'options'])) {
          return state.updateIn(['schema', 'questionSets', _currentQuestionSetIndex6, 'questions', _currentQuestionIndex4, 'input', 'options'], function (arr) {
            return arr.push(newOption);
          });
        }
        return state.setIn(['schema', 'questionSets', _currentQuestionSetIndex6, 'questions', _currentQuestionIndex4, 'input', 'options'], (0, _immutable.fromJS)([newOption]));
      }
    case _constants.CHANGE_QUESTION_TYPE_SUCCESS:
      {
        var _action$payload16 = action.payload,
            _currentQuestionSetIndex7 = _action$payload16.currentQuestionSetIndex,
            _currentQuestionIndex5 = _action$payload16.currentQuestionIndex,
            questionType = _action$payload16.questionType;

        return state.setIn(['schema', 'questionSets', _currentQuestionSetIndex7, 'questions', _currentQuestionIndex5, 'input', 'type'], questionType);
      }
    case _constants.EDIT_QUESTION_OPTION_TEXT_SUCCESS:
      {
        var _action$payload17 = action.payload,
            _currentQuestionSetIndex8 = _action$payload17.currentQuestionSetIndex,
            _currentQuestionIndex6 = _action$payload17.currentQuestionIndex,
            optionIndex = _action$payload17.optionIndex,
            option = _action$payload17.option;

        return state.setIn(['schema', 'questionSets', _currentQuestionSetIndex8, 'questions', _currentQuestionIndex6, 'input', 'options', optionIndex, 'text'], option);
      }
    case _constants.EDIT_QUESTION_OPTION_VALUE_SUCCESS:
      {
        var _action$payload18 = action.payload,
            _currentQuestionSetIndex9 = _action$payload18.currentQuestionSetIndex,
            _currentQuestionIndex7 = _action$payload18.currentQuestionIndex,
            _optionIndex = _action$payload18.optionIndex,
            value = _action$payload18.value;

        return state.setIn(['schema', 'questionSets', _currentQuestionSetIndex9, 'questions', _currentQuestionIndex7, 'input', 'options', _optionIndex, 'value'], value);
      }
    case _constants.DELETE_QUESTION_SUCCESS:
      {
        var _action$payload19 = action.payload,
            _currentQuestionSetIndex10 = _action$payload19.currentQuestionSetIndex,
            _currentQuestionIndex8 = _action$payload19.currentQuestionIndex;

        return state.set('currentQuestionIndex', -1).deleteIn(['schema', 'questionSets', _currentQuestionSetIndex10, 'questions', _currentQuestionIndex8]);
      }
    case _constants.DELETE_QUESTION_OPTION_SUCCESS:
      {
        var _action$payload20 = action.payload,
            _currentQuestionSetIndex11 = _action$payload20.currentQuestionSetIndex,
            _currentQuestionIndex9 = _action$payload20.currentQuestionIndex,
            questionOptionIndex = _action$payload20.questionOptionIndex;

        return state.deleteIn(['schema', 'questionSets', _currentQuestionSetIndex11, 'questions', _currentQuestionIndex9, 'input', 'options', questionOptionIndex]);
      }
    case _constants.CHANGE_EDITING_FIELD_SUCCESS:
      {
        var _action$payload21 = action.payload,
            currentEditingField = _action$payload21.currentEditingField,
            _currentQuestionSetIndex12 = _action$payload21.currentQuestionSetIndex,
            _currentQuestionIndex10 = _action$payload21.currentQuestionIndex;

        return state.set('currentEditingField', currentEditingField).set('currentQuestionSetIndex', _currentQuestionSetIndex12).set('currentQuestionIndex', _currentQuestionIndex10 || 0);
      }
    case _constants.CREATE_FORM_SUCCESS:
      return state.set('title', action.payload.title).set('currentQuestionPanelIndex', 0).set('schema', (0, _immutable.fromJS)({
        classes: _constants.BOOTSTRAP_CLASSES,
        formPanels: [{
          index: 1,
          panelId: 'page-1'
        }],
        questionPanels: [{
          panelId: 'page-1',
          panelHeader: action.payload.title + ' - page-1',
          panelText: 'page-1 text',
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
    case _constants.ADD_QUESTION_SET_SUCCESS:
      {
        var _currentQuestionPanelIndex6 = state.get('currentQuestionPanelIndex');

        var questionSetCount = state.getIn(['schema', 'questionPanels', _currentQuestionPanelIndex6, 'questionSets']).size;

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
            placeholder: action.payload.questionPlaceholder || '',
            options: action.payload.questionType !== 'textInput' ? [] : undefined
          }
        };

        var newQuestionSet = {
          questionSetId: action.payload.questionSetId || 'question-set-' + questionSetCount,
          questionSetHeader: action.payload.questionSetHeader,
          questionSetText: action.payload.questionSetText,
          questions: [newQuestion]
        };

        return state.updateIn(['schema', 'questionPanels', _currentQuestionPanelIndex6, 'questionSets'], function (arr) {
          return arr.push((0, _immutable.fromJS)(newQuestionSetId));
        }).updateIn(['schema', 'questionSets'], function (arr) {
          return arr.push((0, _immutable.fromJS)(newQuestionSet));
        });
      }
    case _constants.ADD_QUESTION_SUCCESS:
      {
        var _currentQuestionSetIndex13 = state.get('currentQuestionSetIndex');

        var questionCount = state.getIn(['schema', 'questionSets', _currentQuestionSetIndex13, 'questions']).count() + 1;

        var _newQuestion = {
          questionId: action.payload.questionId || 'question-id-' + questionCount,
          question: action.payload.question || 'question-' + questionCount,
          text: action.payload.questionText,
          input: {
            type: action.payload.questionType || 'textInput',
            placeholder: action.payload.questionPlaceholder || '',
            options: action.payload.questionType !== 'textInput' ? [] : undefined
          }
        };

        return state.updateIn(['schema', 'questionSets', _currentQuestionSetIndex13, 'questions'], function (arr) {
          return arr.push((0, _immutable.fromJS)(_newQuestion));
        });
      }
    case _constants.ADD_CONDITIONAL_QUESTION_SUCCESS:
      {
        var _action$payload22 = action.payload,
            _currentQuestionSetIndex14 = _action$payload22.currentQuestionSetIndex,
            _currentQuestionIndex11 = _action$payload22.currentQuestionIndex,
            _questionOptionIndex = _action$payload22.questionOptionIndex,
            questionId = _action$payload22.questionId,
            question = _action$payload22.question,
            questionText = _action$payload22.questionText,
            _questionType = _action$payload22.questionType;


        var _questionCount = state.getIn(['schema', 'questionSets', _currentQuestionSetIndex14, 'questions']).count() + 1;

        var _newQuestion2 = {
          questionId: questionId || 'question-id-' + _questionCount,
          question: question || 'question-' + _questionCount,
          text: questionText,
          input: {
            type: _questionType || 'textInput',
            options: _questionType !== 'textInput' ? [] : undefined
          }
        };

        return state.setIn(['schema', 'questionSets', _currentQuestionSetIndex14, 'questions', _currentQuestionIndex11, 'input', 'options', _questionOptionIndex, 'conditionalQuestions'], (0, _immutable.fromJS)([_newQuestion2]));
      }
    case _constants.UPDATE_QUESTION_SUCCESS:
      {
        var _action$payload23 = action.payload,
            questionSetIndex = _action$payload23.questionSetIndex,
            questionIndex = _action$payload23.questionIndex,
            _question = _action$payload23.question,
            _questionText = _action$payload23.questionText;

        return state.setIn(['schema', 'questionSets', questionSetIndex, 'questions', questionIndex, 'question'], _question).setIn(['schema', 'questionSets', questionSetIndex, 'questions', questionIndex, 'text'], _questionText);
      }
    case _constants.MOVE_PAGE_SUCCESS:
      {
        var _action$payload24 = action.payload,
            oldIndex = _action$payload24.oldIndex,
            newIndex = _action$payload24.newIndex;

        if (oldIndex === newIndex) {
          return state;
        }
        var oldFormPanels = [].concat((0, _toConsumableArray3.default)(state.getIn(['schema', 'formPanels']).toJS()));
        var oldQuestionPanels = [].concat((0, _toConsumableArray3.default)(state.getIn(['schema', 'questionPanels']).toJS()));
        var oldFormPanelId = state.getIn(['schema', 'formPanels', oldIndex, 'panelId']);
        var oldQuestionPanel = state.getIn(['schema', 'questionPanels', oldIndex]).toJS();

        if (oldIndex < newIndex) {
          // moving page down
          for (var _i = oldIndex; _i < newIndex; _i += 1) {
            oldFormPanels[_i].panelId = oldFormPanels[_i + 1].panelId;
            oldQuestionPanels[_i] = oldQuestionPanels[_i + 1];
          }
        }
        if (oldIndex > newIndex) {
          // moving page up
          for (var _i2 = oldIndex; _i2 > newIndex; _i2 -= 1) {
            oldFormPanels[_i2].panelId = oldFormPanels[_i2 - 1].panelId;
            oldQuestionPanels[_i2] = oldQuestionPanels[_i2 - 1];
          }
        }
        oldFormPanels[newIndex].panelId = oldFormPanelId;
        oldQuestionPanels[newIndex] = oldQuestionPanel;
        return state.setIn(['schema', 'formPanels'], (0, _immutable.fromJS)(oldFormPanels)).setIn(['schema', 'questionPanels'], (0, _immutable.fromJS)(oldQuestionPanels)).set('currentPanelId', oldFormPanelId).set('currentPanelIndex', newIndex).set('currentQuestionPanelIndex', newIndex);
      }
    case _constants.UPDATE_NEXT_QUESTION_TARGET_SUCCESS:
      {
        var newQuestionCondition = {
          questionId: action.payload.questionId,
          value: action.payload.value,
          target: action.payload.target,
          action: 'GOTO'
        };
        return state.setIn(['schema', 'questionPanels', action.payload.currentQuestionPanelIndex, 'action', 'conditions', 0], (0, _immutable.fromJS)(newQuestionCondition));
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