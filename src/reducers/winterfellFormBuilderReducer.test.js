import { fromJS } from 'immutable';

import winterfellFormBuilderReducer from './winterfellFormBuilderReducer';

import * as constants from '../common/constants';

/*
 * The format of the test should be:
 * expect(reducer(initialState, action).toEqual(nextState));
 */

describe('wintefellFormBuilderReducer', () => {
  const classes = constants.BOOTSTRAP_CLASSES;

  const initialState = fromJS({
    title: '',
    schema: {
      classes,
    },
    error: '',
  });

  it('should return the initial state', () => {
    expect(winterfellFormBuilderReducer(undefined, {})).toEqual(initialState);
  });

  it('should add a formPanels array if action is CREATE_FORM_SUCCESS', () => {
    const currentAction = {
      type: constants.CREATE_FORM_SUCCESS,
      payload: { title: 'My Awesome Form' },
    };

    const expectedState = fromJS({
      title: 'My Awesome Form',
      schema: {
        classes,
        formPanels: [{
          index: 1,
          panelId: 'page-1',
        }],
        questionPanels: [{
          panelId: 'page-1',
          panelHeader: 'My Awesome Form - page 1',
          panelText: 'Let\'s grab some of your details',
        }],
      },
      error: '',
    });

    expect(winterfellFormBuilderReducer(initialState, currentAction)).toEqual(expectedState);
  });

  it('should update the error if action is CREATE_FORM_ERROR', () => {
    const currentAction = {
      type: constants.CREATE_FORM_ERROR,
      payload: { title: 'My Awesome Form' },
    };

    const expectedState = fromJS({
      title: '',
      schema: {
        classes,
      },
      error: 'An error occurred.',
    });

    expect(winterfellFormBuilderReducer(initialState, currentAction)).toEqual(expectedState);
  });

  it('should add a new page with default parameters if action is ADD_PAGE_SUCCESS and payload not supplied', () => {
    const currentAction = {
      type: constants.ADD_PAGE_SUCCESS,
      payload: {},
    };

    const beforeState = fromJS({
      title: 'My Awesome Form',
      schema: {
        formPanels: [
          {
            index: 1,
            panelId: 'page-1',
          },
        ],
        questionPanels: [
          {
            panelId: 'page-1',
            panelHeader: 'Survey Page 1',
            panelText: 'Let\'s grab some of your details',
          },
        ],
      },
      error: '',
    });

    const expectedState = fromJS({
      title: 'My Awesome Form',
      schema: {
        formPanels: [
          {
            index: 1,
            panelId: 'page-1',
          },
          {
            index: 2,
            panelId: 'page-2',
          },
        ],
        questionPanels: [
          {
            panelId: 'page-1',
            panelHeader: 'Survey Page 1',
            panelText: 'Let\'s grab some of your details',
          }, {
            panelId: 'page-2',
            panelHeader: 'Heading-2',
            panelText: 'Text-2',
          },
        ],
      },
      error: '',
    });

    expect(winterfellFormBuilderReducer(beforeState, currentAction)).toEqual(expectedState);
  });

  it('should add a new page with payload parameters if action is ADD_PAGE_SUCCESS and payload supplied', () => {
    const currentAction = {
      type: constants.ADD_PAGE_SUCCESS,
      payload: {
        panelId: 'page-2',
        panelHeader: 'A New Page 2',
        panelText: 'This is a new page',
      },
    };

    const beforeState = fromJS({
      title: 'My Awesome Form',
      schema: {
        formPanels: [
          {
            index: 1,
            panelId: 'page-1',
          },
        ],
        questionPanels: [
          {
            panelId: 'page-1',
            panelHeader: 'Survey Page 1',
            panelText: 'Let\'s grab some of your details',
          },
        ],
      },
      error: '',
    });

    const expectedState = fromJS({
      title: 'My Awesome Form',
      schema: {
        formPanels: [
          {
            index: 1,
            panelId: 'page-1',
          },
          {
            index: 2,
            panelId: 'page-2',
          },
        ],
        questionPanels: [
          {
            panelId: 'page-1',
            panelHeader: 'Survey Page 1',
            panelText: 'Let\'s grab some of your details',
          }, {
            panelId: 'page-2',
            panelHeader: 'A New Page 2',
            panelText: 'This is a new page',
          },
        ],
      },
      error: '',
    });

    expect(winterfellFormBuilderReducer(beforeState, currentAction)).toEqual(expectedState);
  });
});
