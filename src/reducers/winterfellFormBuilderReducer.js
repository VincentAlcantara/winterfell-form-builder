import { fromJS } from 'immutable';

import {
  BOOTSTRAP_CLASSES,
  CREATE_FORM_SUCCESS,
  EDIT_FORM_TITLE_SUCCESS,
  GOTO_PAGE_SUCCESS,
  UPDATE_FORM_SUCCESS,
  ADD_PAGE_SUCCESS,
  ADD_QUESTION_SUCCESS,
  ADD_CONDITIONAL_QUESTION_SUCCESS,
  SAVE_CONDITIONAL_QUESTION_SUCCESS,
  DELETE_CONDITIONAL_QUESTION_SUCCESS,
  ADD_QUESTION_SET_SUCCESS,
  DELETE_QUESTION_SUCCESS,
  UPDATE_QUESTION_SUCCESS,
  CHANGE_EDITING_FIELD_SUCCESS,
  EDIT_PAGE_ID_SUCCESS,
  EDIT_PAGE_HEADER_SUCCESS,
  EDIT_PAGE_TEXT_SUCCESS,
  EDIT_QUESTION_SET_HEADER_SUCCESS,
  EDIT_QUESTION_SET_TEXT_SUCCESS,
  EDIT_QUESTION_ID_SUCCESS,
  EDIT_QUESTION_SUCCESS,
  EDIT_QUESTION_TEXT_SUCCESS,
  EDIT_QUESTION_POST_TEXT_SUCCESS,
  EDIT_NEXT_BUTTON_TEXT_SUCCESS,
  EDIT_BACK_BUTTON_TEXT_SUCCESS,
  EDIT_NEXT_BUTTON_ACTION_SUCCESS,
  EDIT_NEXT_BUTTON_TARGET_SUCCESS,
  DISABLE_BACK_BUTTON_SUCCESS,
  CHANGE_QUESTION_TYPE_SUCCESS,
  ADD_QUESTION_OPTION_SUCCESS,
  EDIT_QUESTION_OPTION_TEXT_SUCCESS,
  EDIT_QUESTION_OPTION_VALUE_SUCCESS,
  DELETE_QUESTION_OPTION_SUCCESS,
  UPLOAD_JSON_SUCCESS,
  SAVE_FORM_SUCCESS,
  MOVE_PAGE_SUCCESS,
  UPDATE_NEXT_QUESTION_TARGET_SUCCESS,
  RESET_NEXT_QUESTION_TARGET_SUCCESS,
  UPDATE_QUESTION_ANSWERS_SUCCESS,
} from '../common/constants';

const initialState = fromJS({
  title: '',
  schema: {},
  currentPanelId: null,
  currentQuestionPanelIndex: 0,
  questionAnswers: {},
});

function winterfellFormBuilderReducer(state = initialState, action) {
  switch (action.type) {
    case GOTO_PAGE_SUCCESS: {
      const questionPanels = state.getIn(['schema', 'questionPanels']).toJS();
      const currentPanelId = action.payload.panelId;
      let currentQuestionPanelIndex = -1;
      for (let i = 0; i < questionPanels.length; i += 1) {
        if (questionPanels[i].panelId === currentPanelId) {
          currentQuestionPanelIndex = i;
        }
      }

      return state
        .set('currentQuestionPanelIndex', currentQuestionPanelIndex)
        .set('currentEditingField', 'page')
        .set('currentPanelId', action.payload.panelId);
    }
    case UPLOAD_JSON_SUCCESS: {
      return state
        .set('currentPanelId', 'Select Page')
        .set('title', action.payload.fileName)
        .set('schema', fromJS(action.payload.schema));
    }
    case SAVE_FORM_SUCCESS: {
      return state
        .set('title', action.payload.fileName);
    }
    case EDIT_PAGE_ID_SUCCESS: {
      const { questionPanelIndex, text } = action.payload;
      const key = ['schema', 'formPanels', questionPanelIndex, 'panelId'];
      return state
        .setIn(key, text)
        .set('currentPanelId', text)
        .setIn(['schema', 'questionPanels', questionPanelIndex, 'panelId'], text);
    }
    case EDIT_PAGE_HEADER_SUCCESS: {
      const { questionPanelIndex, header } = action.payload;
      return state
        .setIn(['schema', 'questionPanels', questionPanelIndex, 'panelHeader'], header);
    }
    case EDIT_PAGE_TEXT_SUCCESS: {
      const { questionPanelIndex, text } = action.payload;
      return state
        .setIn(['schema', 'questionPanels', questionPanelIndex, 'panelText'], text);
    }
    case EDIT_QUESTION_SET_HEADER_SUCCESS: {
      const { currentQuestionSetIndex, header } = action.payload;
      return state
        .setIn(['schema', 'questionSets', currentQuestionSetIndex, 'questionSetHeader'], header);
    }
    case EDIT_QUESTION_SET_TEXT_SUCCESS: {
      const { currentQuestionSetIndex, text } = action.payload;
      return state
        .setIn(['schema', 'questionSets', currentQuestionSetIndex, 'questionSetText'], text);
    }
    case EDIT_QUESTION_ID_SUCCESS: {
      const { currentQuestionSetIndex, currentQuestionIndex, text } = action.payload;
      return state
        .setIn(['schema', 'questionSets', currentQuestionSetIndex, 'questions',
          currentQuestionIndex, 'questionId'], text);
    }
    case EDIT_QUESTION_SUCCESS: {
      const { currentQuestionSetIndex, currentQuestionIndex, text } = action.payload;
      return state
        .setIn(['schema', 'questionSets', currentQuestionSetIndex, 'questions',
          currentQuestionIndex, 'question'], text);
    }
    case EDIT_QUESTION_TEXT_SUCCESS: {
      const { currentQuestionSetIndex, currentQuestionIndex, text } = action.payload;
      return state
        .setIn(['schema', 'questionSets', currentQuestionSetIndex, 'questions',
          currentQuestionIndex, 'text'], text);
    }
    case EDIT_QUESTION_POST_TEXT_SUCCESS: {
      const { currentQuestionSetIndex, currentQuestionIndex, text } = action.payload;
      return state
        .setIn(['schema', 'questionSets', currentQuestionSetIndex, 'questions',
          currentQuestionIndex, 'postText'], text);
    }
    case EDIT_NEXT_BUTTON_TEXT_SUCCESS: {
      const { currentQuestionPanelIndex, text } = action.payload;
      return state
        .setIn(['schema', 'questionPanels', currentQuestionPanelIndex, 'button', 'text'], text);
    }
    case EDIT_BACK_BUTTON_TEXT_SUCCESS: {
      const { currentQuestionPanelIndex, text } = action.payload;
      return state
        .setIn(['schema', 'questionPanels', currentQuestionPanelIndex, 'backButton', 'text'], text);
    }
    case DISABLE_BACK_BUTTON_SUCCESS: {
      const { currentQuestionPanelIndex, disabled } = action.payload;
      return state
        .setIn(['schema', 'questionPanels', currentQuestionPanelIndex, 'backButton', 'disabled'], disabled);
    }
    case EDIT_NEXT_BUTTON_ACTION_SUCCESS: {
      const { currentQuestionPanelIndex, text } = action.payload;
      return state
        .setIn(['schema', 'questionPanels', currentQuestionPanelIndex, 'action', 'default', 'action'], text);
    }
    case EDIT_NEXT_BUTTON_TARGET_SUCCESS: {
      const { currentQuestionPanelIndex, text } = action.payload;
      return state
        .setIn(['schema', 'questionPanels', currentQuestionPanelIndex, 'action', 'default', 'target'], text);
    }
    case ADD_QUESTION_OPTION_SUCCESS: {
      const {
        key,
        questionOptionText,
        questionOptionValue,
      } = action.payload;
      const newOption = fromJS({ text: questionOptionText, value: questionOptionValue });
      if (state.getIn(key)) {
        return state
          .updateIn(key, arr =>
            arr.push(newOption));
      }
      return state
        .setIn(key, fromJS([newOption]));
    }
    case CHANGE_QUESTION_TYPE_SUCCESS: {
      const { currentQuestionSetIndex, currentQuestionIndex, questionType } = action.payload;
      return state
        .setIn(['schema', 'questionSets', currentQuestionSetIndex, 'questions',
          currentQuestionIndex, 'input', 'type'], questionType);
    }
    case EDIT_QUESTION_OPTION_TEXT_SUCCESS: {
      const { path, text } = action.payload;
      return state
        .setIn([...path, 'text'], text);
    }
    case EDIT_QUESTION_OPTION_VALUE_SUCCESS: {
      const { path, value } = action.payload;
      return state
        .setIn([...path, 'value'], value);
    }
    case DELETE_QUESTION_SUCCESS: {
      const {
        currentQuestionSetIndex,
        currentQuestionIndex,
      } = action.payload;
      return state
        .set('currentQuestionIndex', -1)
        .deleteIn(['schema', 'questionSets', currentQuestionSetIndex, 'questions',
          currentQuestionIndex]);
    }
    case DELETE_QUESTION_OPTION_SUCCESS: {
      const { path } = action.payload;
      return state
        .deleteIn(path);
    }
    case CHANGE_EDITING_FIELD_SUCCESS: {
      const { currentEditingField, currentQuestionSetIndex, currentQuestionIndex } = action.payload;
      return state
        .set('currentEditingField', currentEditingField)
        .set('currentQuestionSetIndex', currentQuestionSetIndex)
        .set('currentQuestionIndex', currentQuestionIndex || 0);
    }
    case CREATE_FORM_SUCCESS:
      return state
        .set('title', action.payload.title)
        .set('currentQuestionPanelIndex', 0)
        .set('schema', fromJS({
          classes: BOOTSTRAP_CLASSES,
          formPanels: [{
            index: 1,
            panelId: 'page-1',
          }],
          questionPanels: [{
            panelId: 'page-1',
            panelHeader: `${action.payload.title} - page-1`,
            panelText: 'page-1 text',
            questionSets: [],
          }],
          questionSets: [],
        }));
    case EDIT_FORM_TITLE_SUCCESS:
      return state
        .set('title', action.payload.title);
    case UPDATE_FORM_SUCCESS:
      return state
        .update('schema', () => fromJS(action.payload.schema));
    case ADD_PAGE_SUCCESS: {
      const formPanelsCount = state.getIn(['schema', 'formPanels']).count() + 1;

      const newFormPanel = {
        index: formPanelsCount,
        panelId: action.payload.panelId || `page-${formPanelsCount}`,
      };

      const newQuestionPanel = {
        panelId: action.payload.panelId || `page-${formPanelsCount}`,
        panelHeader: action.payload.panelHeader || `Page-Heading-${formPanelsCount}`,
        panelText: action.payload.panelText || `Page-Text-${formPanelsCount}`,
        questionSets: [],
      };

      return state
        .updateIn(['schema', 'formPanels'], arr =>
          arr.push(fromJS(newFormPanel)))
        .updateIn(['schema', 'questionPanels'], arr =>
          arr.push(fromJS(newQuestionPanel)));
    }
    case ADD_QUESTION_SET_SUCCESS: {
      const currentQuestionPanelIndex = state.get('currentQuestionPanelIndex');

      const questionSetCount = state.getIn(['schema', 'questionPanels', currentQuestionPanelIndex, 'questionSets']).size;

      const newQuestionSetId = {
        index: questionSetCount,
        questionSetId: action.payload.questionSetId || `question-set-${questionSetCount}`,
      };

      const newQuestion = {
        questionId: action.payload.questionId || `question-id-${questionSetCount}`,
        question: action.payload.question || `question-${questionSetCount}`,
        text: action.payload.questionText || `question-text-${questionSetCount}`,
        input: {
          type: action.payload.questionType || 'textInput',
          placeholder: action.payload.questionPlaceholder || '',
          options: action.payload.questionType !== 'textInput' ? [] : undefined,
        },
      };

      const newQuestionSet = {
        questionSetId: action.payload.questionSetId || `question-set-${questionSetCount}`,
        questionSetHeader: action.payload.questionSetHeader,
        questionSetText: action.payload.questionSetText,
        questions: [newQuestion],
      };

      return state
        .updateIn(['schema', 'questionPanels', currentQuestionPanelIndex, 'questionSets'], arr =>
          arr.push(fromJS(newQuestionSetId)))
        .updateIn(['schema', 'questionSets'], arr =>
          arr.push(fromJS(newQuestionSet)));
    }
    case ADD_QUESTION_SUCCESS: {
      const currentQuestionSetIndex = state.get('currentQuestionSetIndex');

      const questionCount = state.getIn(['schema', 'questionSets', currentQuestionSetIndex, 'questions']).count() + 1;

      const newQuestion = {
        questionId: action.payload.questionId || `question-id-${questionCount}`,
        question: action.payload.question || `question-${questionCount}`,
        text: action.payload.questionText,
        input: {
          type: action.payload.questionType || 'textInput',
          placeholder: action.payload.questionPlaceholder || '',
          options: action.payload.questionType !== 'textInput' ? [] : undefined,
        },
      };

      return state
        .updateIn(['schema', 'questionSets', currentQuestionSetIndex, 'questions'], arr =>
          arr.push(fromJS(newQuestion)));
    }
    case ADD_CONDITIONAL_QUESTION_SUCCESS: {
      const {
        path,
        questionId,
        question,
        questionText,
        questionType,
      } = action.payload;

      const conditionalQuestions = state.getIn([...path, 'conditionalQuestions']);

      const conditionalQuestionCount = conditionalQuestions ? conditionalQuestions.count() + 1 : 0;
      const newConditionalQuestion = {
        questionId: questionId || `question-id-${conditionalQuestionCount}`,
        question: question || `question-${conditionalQuestionCount}`,
        text: questionText,
        input: {
          type: questionType || 'textInput',
          options: questionType !== 'textInput' ? [] : undefined,
        },
      };
      if (conditionalQuestionCount === 0) {
        return state
          .setIn([...path, 'conditionalQuestions'], fromJS([newConditionalQuestion]));
      }
      return state
        .updateIn([...path, 'conditionalQuestions'], arr =>
          arr.push(fromJS(newConditionalQuestion)));
    }
    case SAVE_CONDITIONAL_QUESTION_SUCCESS: {
      const {
        path,
        questionId,
        question,
        text,
        postText,
        type,
        options,
      } = action.payload;

      const newConditionalQuestion = {
        questionId,
        question,
        text,
        postText,
        input: {
          type: type || 'textInput',
          options: type !== 'textInput' ? options : undefined,
        },
      };
      return state
        .setIn(path, fromJS(newConditionalQuestion));
    }
    case DELETE_CONDITIONAL_QUESTION_SUCCESS: {
      const { path } = action.payload;

      return state
        .deleteIn(path);
    }
    case UPDATE_QUESTION_SUCCESS: {
      const { questionSetIndex, questionIndex, question, questionText } = action.payload;
      return state
        .setIn(['schema', 'questionSets', questionSetIndex,
          'questions', questionIndex, 'question'], question)
        .setIn(['schema', 'questionSets', questionSetIndex,
          'questions', questionIndex, 'text'], questionText);
    }
    case MOVE_PAGE_SUCCESS: {
      const { oldIndex, newIndex } = action.payload;
      if (oldIndex === newIndex) {
        return state;
      }
      const oldFormPanels = [...state.getIn(['schema', 'formPanels']).toJS()];
      const oldQuestionPanels = [...state.getIn(['schema', 'questionPanels']).toJS()];
      const oldFormPanelId = state.getIn(['schema', 'formPanels', oldIndex, 'panelId']);
      const oldQuestionPanel = state.getIn(['schema', 'questionPanels', oldIndex]).toJS();

      if (oldIndex < newIndex) { // moving page down
        for (let i = oldIndex; i < newIndex; i += 1) {
          oldFormPanels[i].panelId = oldFormPanels[i + 1].panelId;
          oldQuestionPanels[i] = oldQuestionPanels[i + 1];
        }
      }
      if (oldIndex > newIndex) { // moving page up
        for (let i = oldIndex; i > newIndex; i -= 1) {
          oldFormPanels[i].panelId = oldFormPanels[i - 1].panelId;
          oldQuestionPanels[i] = oldQuestionPanels[i - 1];
        }
      }
      oldFormPanels[newIndex].panelId = oldFormPanelId;
      oldQuestionPanels[newIndex] = oldQuestionPanel;
      return state
        .setIn(['schema', 'formPanels'], fromJS(oldFormPanels))
        .setIn(['schema', 'questionPanels'], fromJS(oldQuestionPanels))
        .set('currentPanelId', oldFormPanelId)
        .set('currentQuestionPanelIndex', newIndex);
    }
    case UPDATE_NEXT_QUESTION_TARGET_SUCCESS: {
      const newQuestionCondition = {
        questionId: action.payload.questionId,
        value: action.payload.value,
        target: action.payload.target,
        action: 'GOTO',
      };
      const currentConditions = state.getIn(['schema', 'questionPanels', action.payload.currentQuestionPanelIndex, 'action', 'conditions']);
      const optionIndex = currentConditions.findIndex(condition => condition.get('value') === action.payload.value);
      if (optionIndex !== -1) {
        return state
          .setIn(['schema', 'questionPanels', action.payload.currentQuestionPanelIndex, 'action', 'conditions', optionIndex],
            fromJS(newQuestionCondition));
      }
      return state
        .updateIn(['schema', 'questionPanels', action.payload.currentQuestionPanelIndex, 'action', 'conditions'], arr =>
          arr.push(fromJS(newQuestionCondition)));
    }
    case RESET_NEXT_QUESTION_TARGET_SUCCESS: {
      return state
        .setIn(['schema', 'questionPanels', action.payload.currentQuestionPanelIndex, 'action', 'conditions'],
          state.getIn(['schema', 'questionPanels', action.payload.currentQuestionPanelIndex, 'action', 'conditions']).filter(o => o.get('value') !== action.payload.value));
    }
    case UPDATE_QUESTION_ANSWERS_SUCCESS: {
      return state
        .set('questionAnswers', fromJS(action.payload.questionAnswers));
    }
    default:
      return state;
  }
}

export default winterfellFormBuilderReducer;
