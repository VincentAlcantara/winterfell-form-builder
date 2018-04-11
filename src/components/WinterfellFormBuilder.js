import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col, Alert, Breadcrumb, Modal, Button, ButtonGroup } from 'react-bootstrap';
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
    title: PropTypes.string,
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
      title,
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
      <Grid className="winterfell-form-builder">
        <div className="static-modal">
          <Modal show={errorMessage !== ''}>
            <Modal.Header>
              <Modal.Title>Error</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {errorMessage}
            </Modal.Body>
            <Modal.Footer>
              <Button
                bsStyle="primary"
                onClick={this.props.clearErrorMessage}
              >Ok</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <Row>
          <Col xs={12}>
            <Row>
              <ButtonGroup>
                <CreateFormButton />
                <UploadJSONButton />
                <SaveFormButton />
                <AddPageButton />
                <PageSortButton
                  onClick={() => this.props.changeCurrentEditingField('pageSort')}
                />
                <EditSchemaButton />
                <EditFormTitleButton />
              </ButtonGroup>
            </Row>
            <br />
            <Row>
              <Col xs={4} className="text-left">
                {
                  formPanels &&
                  <Pagination
                    formPanels={formPanels.map(panel => panel.get('panelId'))}
                    currentPanelId={currentPanelId}
                    onClick={this.props.goToPage}
                  />
                }
              </Col>
              <Col xs={8}>
                <Breadcrumb>
                  <Breadcrumb.Item
                    href="#"
                    active={currentEditingField === 'page'}
                    onClick={() => this.props.changeCurrentEditingField('page')}
                  >
                    {currentPanelId}
                  </Breadcrumb.Item>
                  {(currentEditingField === 'questionSet' || currentEditingField === 'question') && questionSets &&
                    <Breadcrumb.Item
                      href=""
                      active={currentEditingField === 'questionSet'}
                      onClick={() => this.props.changeCurrentEditingField('questionSet', currentQuestionSetIndex)}
                    >{questionSets.getIn([currentQuestionSetIndex, 'questionSetId'])}
                    </Breadcrumb.Item>
                  }
                  {(currentEditingField === 'question') && questionSets &&
                    <Breadcrumb.Item
                      active={currentEditingField === 'question'}
                    >
                      {questionSets.getIn([currentQuestionSetIndex, 'questions', currentQuestionIndex, 'questionId'])}
                    </Breadcrumb.Item>
                  }
                </Breadcrumb>
              </Col>
            </Row>
            <Row className="winterfell-form-builder-editor">
              <Col xs={4} className="winterfell-form-builder-field-editor">
                <Row>
                  <Col xs={12}>
                    { currentQuestionPanelIndex >= 0 &&
                      <FieldEditor
                        currentQuestionPanelIndex={currentQuestionPanelIndex}
                        currentEditingField={currentEditingField}
                        currentQuestionSetIndex={currentQuestionSetIndex}
                        currentQuestionIndex={currentQuestionIndex}
                      />
                    }
                  </Col>
                </Row>
              </Col>
              <Col xs={8} className="winterfell-form-builder-page-editor">
                { (this.props.schema && currentQuestionPanelIndex >= 0) &&
                  <FieldSelector
                    currentQuestionPanelIndex={currentQuestionPanelIndex}
                  />
                }
                { (!this.props.schema || this.props.schema.size === 0) &&
                  <Alert bsStyle="info">
                    No form loaded.  Click on &#39;new&#39; to create a new form,
                    or &#39;upload&#39; to load an existing form.
                  </Alert>
                }
              </Col>
            </Row>
            <Row className="winterfell-form-builder-previewer">
              <Col xs={12}>
                <h3>Form Preview:</h3>
                {
                  schema &&
                  <Previewer
                    currentPanelId={currentPanelId}
                    schema={schema.toJS()}
                  />
                }
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
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
