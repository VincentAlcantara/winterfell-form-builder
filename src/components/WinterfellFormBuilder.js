import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { goToPage, changeCurrentEditingField, clearErrorMessage } from '../actions/winterfellFormBuilderActions';
import Pagination from './Pagination';
import Previewer from './Previewer';
import {
  CreateFormButton,
  EditFormTitleButton,
  AddPageButton,
  SaveFormButton,
  PageSortButton,
  UploadJSONButton,
  EditSchemaButton,
} from './FormMenu';
import FieldSelector from './FieldSelector';
import FieldEditor from './FieldEditor';

class WinterfellFormBuilder extends Component {
  static propTypes = {
    schema: PropTypes.object,
    currentPanelId: PropTypes.string,
    currentQuestionPanelIndex: PropTypes.number,
    currentQuestionSetIndex: PropTypes.number,
    currentQuestionIndex: PropTypes.number,
    formPanels: PropTypes.object,
    questionSets: PropTypes.object,
    goToPage: PropTypes.func.isRequired,
    currentEditingField: PropTypes.string,
    changeCurrentEditingField: PropTypes.func.isRequired,
    clearErrorMessage: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
  }

  static defaultProps = {
    title: '',
    schema: null,
    currentPanelId: null,
    inputSchema: {},
    formPanels: null,
    questionSets: null,
    currentQuestionPanelIndex: 0, // first page by default
    currentQuestionSetIndex: null,
    currentQuestionIndex: null,
    currentEditingField: 'page',
    errorMessage: '',
  }

  constructor(props) {
    super(props);

    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.setState({ schema: JSON.parse(e.target.value) });
  }

  render() {
    const {
      schema,
      currentPanelId,
      formPanels,
      currentEditingField,
      currentQuestionPanelIndex,
      currentQuestionSetIndex,
      currentQuestionIndex,
      questionSets,
      errorMessage,
    } = this.props;

    return (
      <div className="container winterfell-form-builder">
        <div className="row">
          <div className="col-12">
            <h1>Winterfell Form Builder</h1>
          </div>
        </div>
        <div className="row">
          <div
            className={`modal fade ${errorMessage !== '' ? 'show' : ''}`}
            id="errorMessage"
            tabIndex="-1"
            key="errorMessageModal"
          >
            <div className="modal-dialog bg-white">
              <div className="modal-header">
                <div className="modal-title">Error</div>
              </div>
              <div className="modal-body">
                {errorMessage}
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  onClick={this.props.clearErrorMessage}
                >Ok</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-3">
          <div className="col-12">
            <div className="btn-group">
              <CreateFormButton />
              <UploadJSONButton />
              <SaveFormButton />
              <EditSchemaButton />
              <EditFormTitleButton />

            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4 text-left">
            <div className="btn-group">
              {
                formPanels &&
                <Pagination
                  formPanels={formPanels.map(panel => panel.get('panelId'))}
                  currentPanelId={currentPanelId}
                  onClick={this.props.goToPage}
                />
              }
              <AddPageButton />
              <PageSortButton
                onClick={() => this.props.changeCurrentEditingField('pageSort')}
              />
            </div>
          </div>
          <div className="col-8">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a
                    href="#"
                    active={`${currentEditingField === 'page'}`}
                    onClick={() => this.props.changeCurrentEditingField('page')}
                  >
                    {currentPanelId !== 'Select Page' && currentPanelId}
                  </a>
                </li>
                {(currentEditingField === 'questionSet' || currentEditingField === 'question') && questionSets &&
                  <li className="breadcrumb-item">
                    <a
                      href=""
                      active={`${currentEditingField === 'questionSet'}`}
                      onClick={() => this.props.changeCurrentEditingField('questionSet', currentQuestionSetIndex)}
                    >{questionSets.getIn([currentQuestionSetIndex, 'questionSetId'])}
                    </a>
                  </li>
                }
                {(currentEditingField === 'question') && questionSets &&

                  <li className="breadcrumb-item">

                    <a
                      active={`${currentEditingField === 'question'}`}
                    >
                      {questionSets.getIn([currentQuestionSetIndex, 'questions', currentQuestionIndex, 'questionId'])}
                    </a>
                  </li>
                }

              </ol>
            </nav>
          </div>
        </div>
        <div className="row winterfell-form-builder-editor">
          <div className="col-4">
            {currentQuestionPanelIndex >= 0 &&
              <FieldEditor
                currentQuestionPanelIndex={currentQuestionPanelIndex}
                currentEditingField={currentEditingField}
                currentQuestionSetIndex={currentQuestionSetIndex}
                currentQuestionIndex={currentQuestionIndex}
              />
            }
          </div>
          <div className="col-8 winterfell-form-builder-page-editor">
            {(this.props.schema && currentQuestionPanelIndex >= 0) &&
              <FieldSelector
                currentQuestionPanelIndex={currentQuestionPanelIndex}
              />
            }
            {(!this.props.schema || this.props.schema.size === 0) &&
              <div className="alert alert-info">
                No form loaded.  Click on &#39;new&#39; to create a new form,
                or &#39;upload&#39; to load an existing form.
              </div>
            }
          </div>
        </div>
        <div className="row winterfell-form-builder-previewer">
          <div className="col-12 mb-5 py-3">
            <h2>Form Preview:</h2>
            {
              schema &&
              <Previewer
                currentPanelId={currentPanelId}
                schema={schema.toJS()}
              />
            }
            {
              currentPanelId === 'Select Page' &&
              <div className="alert alert-info">
                No page selected to preview.  Select a page from the dropdown above.
              </div>
            }
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
    schema: state.getIn(['form', 'schema']),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
    currentEditingField: state.getIn(['form', 'currentEditingField']),
    currentQuestionPanelIndex: state.getIn(['form', 'currentQuestionPanelIndex']),
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    errorMessage: state.getIn(['error', 'message']),
  };
}

export default connect(
  mapStateToProps,
  { goToPage, changeCurrentEditingField, clearErrorMessage },
)(WinterfellFormBuilder);
