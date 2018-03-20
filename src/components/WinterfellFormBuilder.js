import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';
import { loadForm, goToPage } from '../actions/winterfellFormBuilderActions';
import Pagination from './Pagination';
import Previewer from './Previewer';
import {
  CreateFormButton,
  EditFormTitleButton,
  AddPageButton,
  SaveFormButton,
  AddQuestionSetButton,
  UploadJSONButton,
} from './FormMenu';
import FormEditor from './FormEditor';
import FieldEditor from './FieldEditor';

class WinterfellFormBuilder extends Component {
  static propTypes = {
    inputSchema: PropTypes.object,
    title: PropTypes.string,
    schema: PropTypes.object,
    currentPanelId: PropTypes.string,
    currentPanelIndex: PropTypes.number,
    currentQuestionSetIndex: PropTypes.number,
    currentQuestionIndex: PropTypes.number,
    loadForm: PropTypes.func.isRequired,
    formPanels: PropTypes.object,
    goToPage: PropTypes.func.isRequired,
    currentEditingField: PropTypes.string,
  }

  static defaultProps = {
    title: '',
    schema: null,
    currentPanelId: null,
    inputSchema: {},
    formPanels: null,
    currentPanelIndex: 0, // first page by default
    currentQuestionSetIndex: null,
    currentQuestionIndex: null,
    currentEditingField: 'page',
  }

  constructor(props) {
    super(props);

    this.onDomChange = this.onDomChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  componentWillMount() {
    const { inputSchema } = this.props;
    this.props.loadForm(inputSchema);
  }

  onDomChange(e) {
    e.preventDefault();
    this.setState({ schema: JSON.parse(e.target.value) });
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
      currentPanelIndex,
      currentQuestionSetIndex,
      currentQuestionIndex,
    } = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <h3>Form: {title}</h3>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={2}>
                <CreateFormButton />
              </Col>
              <Col xs={2}>
                <UploadJSONButton />
              </Col>
              <Col xs={2}>
                <EditFormTitleButton />
              </Col>
              <Col xs={2}>
                <AddPageButton />
              </Col>
              <Col xs={2}>
                <AddQuestionSetButton />
              </Col>
              <Col xs={2}>
                <SaveFormButton />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={4} className="winterfell-form-builder-field-editor">
                <Row>
                  <Col xs={12} className="text-left">
                    {
                      formPanels &&
                      <Pagination
                        formPanels={formPanels.toJS()}
                        currentPanelId={currentPanelId}
                        onClick={this.props.goToPage}
                      />
                    }
                    {
                      !formPanels &&
                      <span>
                        No form loaded
                      </span>
                    }
                  </Col>
                  <Col xs={12}>
                    { typeof currentPanelIndex !== 'undefined' &&
                      <FieldEditor
                        currentPanelIndex={currentPanelIndex}
                        currentEditingField={currentEditingField}
                        currentQuestionSetIndex={currentQuestionSetIndex}
                        currentQuestionIndex={currentQuestionIndex}
                      />
                    }
                  </Col>
                </Row>
              </Col>
              <Col xs={8}>
                <FormEditor
                  currentPanelIndex={currentPanelIndex}
                />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={12}>
                <h3>Preview:</h3>
                {
                  schema &&
                  <Previewer
                    schema={schema.toJS()}
                    currentPanelId={currentPanelId}
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
    questionSet: state.getIn(['form', 'schema', 'questionSets', 0]),
    currentEditingField: state.getIn(['form', 'currentEditingField']),
    currentPanelIndex: state.getIn(['form', 'currentPanelIndex']),
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
  };
}

export default connect(mapStateToProps, { loadForm, goToPage })(WinterfellFormBuilder);
