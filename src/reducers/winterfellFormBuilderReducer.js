import { fromJS } from 'immutable';
import {
  RETRIEVE_FORMLIST_REQUEST,
  RETRIEVE_FORMLIST_SUCCESS,
  RETRIEVE_FORMLIST_ERROR,
  RETRIEVE_FORM_REQUEST,
  RETRIEVE_FORM_SUCCESS,
  RETRIEVE_FORM_ERROR,
  CREATE_FORM_REQUEST,
  CREATE_FORM_SUCCESS,
  CREATE_FORM_ERROR,
  EDIT_FORM_SUCCESS,
  UPDATE_FORM_REQUEST,
  SKIP_PAGE_SUCCESS,
  UPDATE_FORM_SUCCESS,
  UPDATE_FORM_ERROR,
  DELETE_FORM_REQUEST,
  DELETE_FORM_SUCCESS,
  DELETE_FORM_ERROR,
  ADD_PAGE_REQUEST,
  ADD_PAGE_SUCCESS,
  ADD_PAGE_ERROR,
  UPDATE_PAGE_REQUEST,
  UPDATE_PAGE_SUCCESS,
  UPDATE_PAGE_ERROR,
  DELETE_PAGE_REQUEST,
  DELETE_PAGE_SUCCESS,
  DELETE_PAGE_ERROR,
  ADD_QUESTION_REQUEST,
  ADD_QUESTION_SUCCESS,
  ADD_QUESTION_ERROR,
  UPDATE_QUESTION_REQUEST,
  UPDATE_QUESTION_SUCCESS,
  UPDATE_QUESTION_ERROR,
  DELETE_QUESTION_REQUEST,
  DELETE_QUESTION_SUCCESS,
  DELETE_QUESTION_ERROR,
  BOOTSTRAP_CLASSES,
} from '../common/constants';

const initialState = fromJS({
  title: '',
  schema: {
    classes: {
      backButton: 'btn btn-red pull-left',
      buttonBar: 'button-bar',
      checkboxInput: 'checkbox',
      checkboxList: 'clean-list',
      checkboxListItem: 'checkbox',
      controlButton: 'btn btn-blue pull-right',
      errorMessage: 'alert alert-danger',
      input: 'form-control',
      question: 'form-group',
      questionPostText: 'push-top',
      radioList: 'clean-list',
      radioListItem: 'radio',
      select: 'form-control',
    },
  },
  error: '',
});

function winterfellFormBuilderReducer(state = initialState, action) {
  switch (action.type) {
    case RETRIEVE_FORMLIST_REQUEST:
      return state
        .set('error', '');
    case RETRIEVE_FORM_REQUEST:
      return state
        .set('error', '');
    case CREATE_FORM_REQUEST:
      return state
        .set('error', '');
    case UPDATE_FORM_REQUEST:
      return state
        .set('error', '');
    case DELETE_FORM_REQUEST:
      return state
        .set('error', '');
    case ADD_PAGE_REQUEST:
      return state
        .set('error', '');
    case UPDATE_PAGE_REQUEST:
      return state
        .set('error', '');
    case DELETE_PAGE_REQUEST:
      return state
        .set('error', '');
    case ADD_QUESTION_REQUEST:
      return state
        .set('error', '');
    case UPDATE_QUESTION_REQUEST:
      return state
        .set('error', '');
    case DELETE_QUESTION_REQUEST:
      return state
        .set('error', '');
    case RETRIEVE_FORMLIST_ERROR:
      return state
        .set('error', 'An error occurred.');
    case RETRIEVE_FORM_ERROR:
      return state
        .set('error', 'An error occurred.');
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
    case SKIP_PAGE_SUCCESS:
      console.log('skipping to page:', action.payload.panelId);
      return state
        .set('currentPage', action.payload.panelId);
    case RETRIEVE_FORMLIST_SUCCESS:
      return state
        .set('error', '');
    case RETRIEVE_FORM_SUCCESS:
      return state
        .set('schema', fromJS(action.payload.form))
        .set('error', '');
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
          }],
        }))
        .set('error', '');
    case EDIT_FORM_SUCCESS:
      return state
        .set('title', action.payload.title)
        .set('error', '');
    case UPDATE_FORM_SUCCESS:
      return state
        .set('schema', fromJS(action.payload.schema))
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
        panelHeader: action.payload.panelHeader || `Heading-${formPanelsCount}`,
        panelText: action.payload.panelText || `Text-${formPanelsCount}`,
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
    case ADD_QUESTION_SUCCESS:
      return state
        .set('error', '');
    case UPDATE_QUESTION_SUCCESS:
      return state
        .set('error', '');
    case DELETE_QUESTION_SUCCESS:
      return state
        .set('error', '');
    default:
      return state;
  }
}

export default winterfellFormBuilderReducer;
