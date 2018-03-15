import { fromJS } from 'immutable';

import {
  BOOTSTRAP_CLASSES,
  LOAD_FORM_SUCCESS,
  CREATE_FORM_SUCCESS,
  EDIT_FORM_TITLE_SUCCESS,
  GOTO_PAGE_SUCCESS,
  UPDATE_FORM_SUCCESS,
  ADD_PAGE_SUCCESS,
  ADD_QUESTION_SUCCESS,
  UPDATE_QUESTION_SUCCESS,
  CHANGE_EDITING_FIELD_SUCCESS,
  EDIT_PAGE_HEADER_SUCCESS,
  EDIT_PAGE_TEXT_SUCCESS,
  EDIT_QUESTION_SET_HEADER_SUCCESS,
  EDIT_QUESTION_SET_TEXT_SUCCESS,
  EDIT_QUESTION_ID_SUCCESS,
  EDIT_QUESTION_SUCCESS,
  EDIT_QUESTION_TEXT_SUCCESS,
  EDIT_QUESTION_POST_TEXT_SUCCESS,
  ADD_QUESTION_OPTION_SUCCESS,
  EDIT_QUESTION_OPTION_TEXT_SUCCESS,
  EDIT_QUESTION_OPTION_VALUE_SUCCESS,
  DELETE_QUESTION_OPTION_SUCCESS,
} from '../common/constants';

const initialState = fromJS({
  title: '',
  schema: {
    classes: BOOTSTRAP_CLASSES,
  },
  currentPanelId: null,
  currentPanelIndex: 0,
});

function winterfellFormBuilderReducer(state = initialState, action) {
  switch (action.type) {
    case GOTO_PAGE_SUCCESS: {
      const questionPanels = state.getIn(['schema', 'questionPanels']).toJS();
      const currentPanelId = action.payload.panelId;
      let currentPanelIndex = -1;
      for (let i = 0; i < questionPanels.length; i += 1) {
        if (questionPanels[i].panelId === currentPanelId) {
          currentPanelIndex = i;
        }
      }

      return state
        .set('currentPanelIndex', currentPanelIndex)
        .set('currentEditingField', 'page')
        .set('currentPanelId', action.payload.panelId);
    }
    case LOAD_FORM_SUCCESS: {
      return state
        .set('currentPanelId', 'Select Page')
        .set('schema', fromJS(action.payload.schema));
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
    case ADD_QUESTION_OPTION_SUCCESS: {
      const {
        currentQuestionSetIndex,
        currentQuestionIndex,
        questionOptionText,
        questionOptionValue,
      } = action.payload;
      const newOption = fromJS({ text: questionOptionText, value: questionOptionValue });
      return state
        .updateIn(['schema', 'questionSets', currentQuestionSetIndex, 'questions',
          currentQuestionIndex, 'input', 'options'], arr =>
          arr.push(newOption));
    }
    case EDIT_QUESTION_OPTION_TEXT_SUCCESS: {
      const {
        currentQuestionSetIndex,
        currentQuestionIndex,
        optionIndex,
        option,
      } = action.payload;
      return state
        .setIn(['schema', 'questionSets', currentQuestionSetIndex, 'questions',
          currentQuestionIndex, 'input', 'options', optionIndex, 'text'], option);
    }
    case EDIT_QUESTION_OPTION_VALUE_SUCCESS: {
      const {
        currentQuestionSetIndex,
        currentQuestionIndex,
        optionIndex,
        value,
      } = action.payload;
      return state
        .setIn(['schema', 'questionSets', currentQuestionSetIndex, 'questions',
          currentQuestionIndex, 'input', 'options', optionIndex, 'value'], value);
    }
    case DELETE_QUESTION_OPTION_SUCCESS: {
      const {
        currentQuestionSetIndex,
        currentQuestionIndex,
        questionOptionIndex,
      } = action.payload;
      return state
        .deleteIn(['schema', 'questionSets', currentQuestionSetIndex, 'questions',
          currentQuestionIndex, 'input', 'options', questionOptionIndex]);
    }
    case CHANGE_EDITING_FIELD_SUCCESS: {
      const { currentEditingField, currentQuestionSetIndex, currentQuestionIndex } = action.payload;
      return state
        .set('currentEditingField', currentEditingField)
        .set('currentQuestionSetIndex', currentQuestionSetIndex)
        .set('currentQuestionIndex', currentQuestionIndex);
    }
    case CREATE_FORM_SUCCESS:
      return state
        .set('title', action.payload.title)
        .set('currentPanelIndex', 0)
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
    case ADD_QUESTION_SUCCESS: {
      const currentPanelIndex = state.get('currentPanelIndex');

      const questionSetCount = state.getIn(['schema', 'questionPanels', currentPanelIndex, 'questionSets']).size;

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
        .updateIn(['schema', 'questionPanels', currentPanelIndex, 'questionSets'], arr =>
          arr.push(fromJS(newQuestionSetId)))
        .updateIn(['schema', 'questionSets'], arr =>
          arr.push(fromJS(newQuestionSet)));
    }
    case UPDATE_QUESTION_SUCCESS: {
      const { questionSetIndex, questionIndex, question, questionText } = action.payload;
      return state
        .setIn(['schema', 'questionSets', questionSetIndex,
          'questions', questionIndex, 'question'], question)
        .setIn(['schema', 'questionSets', questionSetIndex,
          'questions', questionIndex, 'text'], questionText);
    }

    default:
      return state;
  }
}

export default winterfellFormBuilderReducer;
