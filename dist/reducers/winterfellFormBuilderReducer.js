"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _immutable = require("immutable");

var _constants = require("../common/constants");

var initialState = (0, _immutable.fromJS)({
  title: '',
  schema: {},
  currentPanelId: null,
  currentQuestionPanelIndex: 0,
  questionAnswers: {}
});

function winterfellFormBuilderReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

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
        var key = ['schema', 'formPanels', questionPanelIndex, 'panelId'];
        return state.setIn(key, text).set('currentPanelId', text).setIn(['schema', 'questionPanels', questionPanelIndex, 'panelId'], text);
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
            _key = _action$payload15.key,
            questionOptionText = _action$payload15.questionOptionText,
            questionOptionValue = _action$payload15.questionOptionValue;
        var newOption = (0, _immutable.fromJS)({
          text: questionOptionText,
          value: questionOptionValue
        });

        if (state.getIn(_key)) {
          return state.updateIn(_key, function (arr) {
            return arr.push(newOption);
          });
        }

        return state.setIn(_key, (0, _immutable.fromJS)([newOption]));
      }

    case _constants.CHANGE_QUESTION_TYPE_SUCCESS:
      {
        var _action$payload16 = action.payload,
            _currentQuestionSetIndex6 = _action$payload16.currentQuestionSetIndex,
            _currentQuestionIndex4 = _action$payload16.currentQuestionIndex,
            questionType = _action$payload16.questionType;
        return state.setIn(['schema', 'questionSets', _currentQuestionSetIndex6, 'questions', _currentQuestionIndex4, 'input', 'type'], questionType);
      }

    case _constants.EDIT_QUESTION_OPTION_TEXT_SUCCESS:
      {
        var _action$payload17 = action.payload,
            path = _action$payload17.path,
            _text11 = _action$payload17.text;
        return state.setIn([].concat((0, _toConsumableArray2["default"])(path), ['text']), _text11);
      }

    case _constants.EDIT_QUESTION_OPTION_VALUE_SUCCESS:
      {
        var _action$payload18 = action.payload,
            _path = _action$payload18.path,
            value = _action$payload18.value;
        return state.setIn([].concat((0, _toConsumableArray2["default"])(_path), ['value']), value);
      }

    case _constants.DELETE_QUESTION_SUCCESS:
      {
        var _action$payload19 = action.payload,
            _currentQuestionSetIndex7 = _action$payload19.currentQuestionSetIndex,
            _currentQuestionIndex5 = _action$payload19.currentQuestionIndex;
        return state.set('currentQuestionIndex', -1).deleteIn(['schema', 'questionSets', _currentQuestionSetIndex7, 'questions', _currentQuestionIndex5]);
      }

    case _constants.DELETE_QUESTION_OPTION_SUCCESS:
      {
        var _path2 = action.payload.path;
        return state.deleteIn(_path2);
      }

    case _constants.CHANGE_EDITING_FIELD_SUCCESS:
      {
        var _action$payload20 = action.payload,
            currentEditingField = _action$payload20.currentEditingField,
            _currentQuestionSetIndex8 = _action$payload20.currentQuestionSetIndex,
            _currentQuestionIndex6 = _action$payload20.currentQuestionIndex;
        return state.set('currentEditingField', currentEditingField).set('currentQuestionSetIndex', _currentQuestionSetIndex8).set('currentQuestionIndex', _currentQuestionIndex6 || 0);
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
          panelHeader: "".concat(action.payload.title, " - page-1"),
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
          panelId: action.payload.panelId || "page-".concat(formPanelsCount)
        };
        var newQuestionPanel = {
          panelId: action.payload.panelId || "page-".concat(formPanelsCount),
          panelHeader: action.payload.panelHeader || "Page-Heading-".concat(formPanelsCount),
          panelText: action.payload.panelText || "Page-Text-".concat(formPanelsCount),
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
          questionSetId: action.payload.questionSetId || "question-set-".concat(questionSetCount)
        };
        var newQuestion = {
          questionId: action.payload.questionId || "question-id-".concat(questionSetCount),
          question: action.payload.question || "question-".concat(questionSetCount),
          text: action.payload.questionText || "question-text-".concat(questionSetCount),
          input: {
            type: action.payload.questionType || 'textInput',
            placeholder: action.payload.questionPlaceholder || '',
            options: action.payload.questionType !== 'textInput' ? [] : undefined
          }
        };
        var newQuestionSet = {
          questionSetId: action.payload.questionSetId || "question-set-".concat(questionSetCount),
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
        var _currentQuestionSetIndex9 = state.get('currentQuestionSetIndex');

        var questionCount = state.getIn(['schema', 'questionSets', _currentQuestionSetIndex9, 'questions']).count() + 1;
        var _newQuestion = {
          questionId: action.payload.questionId || "question-id-".concat(questionCount),
          question: action.payload.question || "question-".concat(questionCount),
          text: action.payload.questionText,
          input: {
            type: action.payload.questionType || 'textInput',
            placeholder: action.payload.questionPlaceholder || '',
            options: action.payload.questionType !== 'textInput' ? [] : undefined
          }
        };
        return state.updateIn(['schema', 'questionSets', _currentQuestionSetIndex9, 'questions'], function (arr) {
          return arr.push((0, _immutable.fromJS)(_newQuestion));
        });
      }

    case _constants.ADD_CONDITIONAL_QUESTION_SUCCESS:
      {
        var _action$payload21 = action.payload,
            _path3 = _action$payload21.path,
            questionId = _action$payload21.questionId,
            question = _action$payload21.question,
            questionText = _action$payload21.questionText,
            _questionType = _action$payload21.questionType;
        var conditionalQuestions = state.getIn([].concat((0, _toConsumableArray2["default"])(_path3), ['conditionalQuestions']));
        var conditionalQuestionCount = conditionalQuestions ? conditionalQuestions.count() + 1 : 0;
        var newConditionalQuestion = {
          questionId: questionId || "question-id-".concat(conditionalQuestionCount),
          question: question || "question-".concat(conditionalQuestionCount),
          text: questionText,
          input: {
            type: _questionType || 'textInput',
            options: _questionType === 'checkBoxOptions' || _questionType === 'radioOptions' || _questionType === 'select' ? [] : undefined
          }
        };

        if (conditionalQuestionCount === 0) {
          return state.setIn([].concat((0, _toConsumableArray2["default"])(_path3), ['conditionalQuestions']), (0, _immutable.fromJS)([newConditionalQuestion]));
        }

        return state.updateIn([].concat((0, _toConsumableArray2["default"])(_path3), ['conditionalQuestions']), function (arr) {
          return arr.push((0, _immutable.fromJS)(newConditionalQuestion));
        });
      }

    case _constants.SAVE_CONDITIONAL_QUESTION_SUCCESS:
      {
        var _action$payload22 = action.payload,
            _path4 = _action$payload22.path,
            _questionId = _action$payload22.questionId,
            _question = _action$payload22.question,
            _text12 = _action$payload22.text,
            postText = _action$payload22.postText,
            type = _action$payload22.type,
            options = _action$payload22.options;
        var _newConditionalQuestion = {
          questionId: _questionId,
          question: _question,
          text: _text12,
          postText: postText,
          input: {
            type: type || 'textInput',
            options: type !== 'textInput' ? options : undefined
          }
        };
        return state.setIn(_path4, (0, _immutable.fromJS)(_newConditionalQuestion));
      }

    case _constants.DELETE_CONDITIONAL_QUESTION_SUCCESS:
      {
        var _path5 = action.payload.path;
        return state.deleteIn(_path5);
      }

    case _constants.UPDATE_QUESTION_SUCCESS:
      {
        var _action$payload23 = action.payload,
            questionSetIndex = _action$payload23.questionSetIndex,
            questionIndex = _action$payload23.questionIndex,
            _question2 = _action$payload23.question,
            _questionText = _action$payload23.questionText;
        return state.setIn(['schema', 'questionSets', questionSetIndex, 'questions', questionIndex, 'question'], _question2).setIn(['schema', 'questionSets', questionSetIndex, 'questions', questionIndex, 'text'], _questionText);
      }

    case _constants.MOVE_PAGE_SUCCESS:
      {
        var _action$payload24 = action.payload,
            oldIndex = _action$payload24.oldIndex,
            newIndex = _action$payload24.newIndex;

        if (oldIndex === newIndex) {
          return state;
        }

        var oldFormPanels = (0, _toConsumableArray2["default"])(state.getIn(['schema', 'formPanels']).toJS());
        var oldQuestionPanels = (0, _toConsumableArray2["default"])(state.getIn(['schema', 'questionPanels']).toJS());
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
        return state.setIn(['schema', 'formPanels'], (0, _immutable.fromJS)(oldFormPanels)).setIn(['schema', 'questionPanels'], (0, _immutable.fromJS)(oldQuestionPanels)).set('currentPanelId', oldFormPanelId).set('currentQuestionPanelIndex', newIndex);
      }

    case _constants.UPDATE_NEXT_QUESTION_TARGET_SUCCESS:
      {
        var newQuestionCondition = {
          questionId: action.payload.questionId,
          value: action.payload.value,
          target: action.payload.target,
          action: 'GOTO'
        };

        var _currentQuestionPanelIndex7 = state.get('currentQuestionPanelIndex');

        var currentConditions = state.getIn(['schema', 'questionPanels', _currentQuestionPanelIndex7, 'action', 'conditions']);
        var optionIndex = currentConditions.findIndex(function (condition) {
          return condition.get('value') === action.payload.value;
        });

        if (optionIndex !== -1) {
          return state.setIn(['schema', 'questionPanels', _currentQuestionPanelIndex7, 'action', 'conditions', optionIndex], (0, _immutable.fromJS)(newQuestionCondition));
        }

        return state.updateIn(['schema', 'questionPanels', _currentQuestionPanelIndex7, 'action', 'conditions'], function (arr) {
          return arr.push((0, _immutable.fromJS)(newQuestionCondition));
        });
      }

    case _constants.RESET_NEXT_QUESTION_TARGET_SUCCESS:
      {
        var _currentQuestionPanelIndex8 = state.get('currentQuestionPanelIndex');

        return state.setIn(['schema', 'questionPanels', _currentQuestionPanelIndex8, 'action', 'conditions'], state.getIn(['schema', 'questionPanels', _currentQuestionPanelIndex8, 'action', 'conditions']).filter(function (o) {
          return o.get('value') !== action.payload.value;
        }));
      }

    case _constants.UPDATE_QUESTION_ANSWERS_SUCCESS:
      {
        return state.set('questionAnswers', (0, _immutable.fromJS)(action.payload.questionAnswers));
      }

    default:
      return state;
  }
}

var _default = winterfellFormBuilderReducer;
exports["default"] = _default;