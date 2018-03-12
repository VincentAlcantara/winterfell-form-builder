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
} from '../common/constants';

const initialState = fromJS({
  title: '',
  schema: {
    classes: BOOTSTRAP_CLASSES,
  },
  currentPanelId: null,
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
        .set('currentPanelId', action.payload.panelId);
    }
    case LOAD_FORM_SUCCESS: {
      return state
        .set('currentPanelId', 'Select Page')
        .set('schema', fromJS(action.payload.schema));
    }
    case CHANGE_EDITING_FIELD_SUCCESS: {
      return state
        .set('currentEditingField', action.payload.currentEditingField);
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
