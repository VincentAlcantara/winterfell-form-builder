import { fromJS } from 'immutable';
import _ from 'lodash';

import {
  RETRIEVE_FORMLIST_REQUEST,
  RETRIEVE_FORMLIST_SUCCESS,
  RETRIEVE_FORMLIST_ERROR,
  LOAD_FORM_SUCCESS,
  LOAD_FORM_ERROR,
  CREATE_FORM_SUCCESS,
  CREATE_FORM_ERROR,
  EDIT_FORM_TITLE_SUCCESS,
  GOTO_PAGE_SUCCESS,
  UPDATE_FORM_SUCCESS,
  UPDATE_FORM_ERROR,
  DELETE_FORM_SUCCESS,
  DELETE_FORM_ERROR,
  ADD_PAGE_SUCCESS,
  ADD_PAGE_ERROR,
  UPDATE_PAGE_SUCCESS,
  UPDATE_PAGE_ERROR,
  // UPDATE_PAGE_HEADER_SUCCESS,
  // UPDATE_PAGE_HEADER_ERROR,
  // UPDATE_PAGE_TEXT_SUCCESS,
  // UPDATE_PAGE_TEXT_ERROR,
  DELETE_PAGE_SUCCESS,
  DELETE_PAGE_ERROR,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_ERROR,
  UPDATE_QUESTION_SUCCESS,
  UPDATE_QUESTION_ERROR,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_ERROR,
  BOOTSTRAP_CLASSES,
} from '../common/constants';

const initialState = fromJS({
  title: '',
  schema: {
    classes: BOOTSTRAP_CLASSES,
  },
  currentPanelId: null,
  error: '',
});

function winterfellFormBuilderReducer(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_FORMLIST_REQUEST:
      return state
        .set('error', '');
    case RETRIEVE_FORMLIST_ERROR:
      return state
        .set('error', 'An error occurred.');
    case LOAD_FORM_ERROR:
      return state
        .set('error', 'Unable to load form.');
    case CREATE_FORM_ERROR:
      return state
        .set('error', 'An error occurred.');
    case UPDATE_FORM_ERROR:
      return state
        .set('error', 'An error occurred.');
    case DELETE_FORM_ERROR:
      return state
        .set('error', 'An error occurred.');
    case ADD_PAGE_ERROR:
      return state
        .set('error', 'An error occurred.');
    case UPDATE_PAGE_ERROR:
      return state
        .set('error', 'An error occurred.');
    case DELETE_PAGE_ERROR:
      return state
        .set('error', 'An error occurred.');
    case ADD_QUESTION_ERROR:
      return state
        .set('error', 'An error occurred.');
    case UPDATE_QUESTION_ERROR:
      return state
        .set('error', 'An error occurred.');
    case DELETE_QUESTION_ERROR:
      return state
        .set('error', 'An error occurred');
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
        .set('currentPanelId', action.payload.panelId);
    }
    case RETRIEVE_FORMLIST_SUCCESS:
      return state
        .set('error', '');
    case LOAD_FORM_SUCCESS: {
      return state
        .set('currentPanelId', 'Select Page')
        .set('schema', fromJS(action.payload.schema))
        .set('error', '');
    }
    case CREATE_FORM_SUCCESS:
      return state
        .set('title', action.payload.title)
        .set('schema', fromJS({
          classes: BOOTSTRAP_CLASSES,
          formPanels: [{
            index: 1,
            panelId: 'page-1',
          }],
          questionPanels: [{
            panelId: 'page-1',
            panelHeader: `${action.payload.title} - page 1`,
            panelText: 'Let\'s grab some of your details',
            questionSets: [],
          }],
          questionSets: [],
        }))
        .set('error', '');
    case EDIT_FORM_TITLE_SUCCESS:
      return state
        .set('title', action.payload.title)
        .set('error', '');
    case UPDATE_FORM_SUCCESS:
      return state
        .update('schema', () => fromJS(action.payload.schema))
        .set('error', '');
    case DELETE_FORM_SUCCESS:
      return state
        .set('error', '');
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
      };

      return state
        .updateIn(['schema', 'formPanels'], arr =>
          arr.push(fromJS(newFormPanel)))
        .updateIn(['schema', 'questionPanels'], arr =>
          arr.push(fromJS(newQuestionPanel)))
        .set('error', '');
    }
    case UPDATE_PAGE_SUCCESS:
      return state
        .set('error', '');
    case DELETE_PAGE_SUCCESS:
      return state
        .set('error', '');
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
          arr.push(fromJS(newQuestionSet)))
        .set('error', '');
    }
    case UPDATE_QUESTION_SUCCESS: {
      const { questionSetIndex, questionIndex, question, questionText } = action.payload;
      return state
        .setIn(['schema', 'questionSets', questionSetIndex,
          'questions', questionIndex, 'question'], question)
        .setIn(['schema', 'questionSets', questionSetIndex,
          'questions', questionIndex, 'text'], questionText)
        .set('error', '');
    }
    case DELETE_QUESTION_SUCCESS:
      return state
        .set('error', '');
    default: {
      return state;
    }
  }
}

export default winterfellFormBuilderReducer;
