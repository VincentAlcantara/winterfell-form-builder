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
  EditSchemaButton,
  AddQuestionButton,
  EditQuestionButton,
} from './FormMenu';

import FormEditor from './FormEditor';

class WinterfellFormBuilder extends Component {
  static propTypes = {
    inputSchema: PropTypes.object,
    title: PropTypes.string,
    schema: PropTypes.object,
    currentPanelId: PropTypes.string,
    loadForm: PropTypes.func.isRequired,
    questionSet: PropTypes.object,
  }

  static defaultProps = {
    title: '',
    schema: null,
    currentPanelId: null,
    inputSchema: {},
    formPanels: null,
    questionSet: null,
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
    const { title, schema, currentPanelId, questionSet } = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <h2>Winterfell Form Builder</h2>
              </Col>
              <Col xs={10}>
                <h3>Form: {title}</h3>
              </Col>
              <Col xs={2} className="text-right">
                <Pagination />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={2}>
                <CreateFormButton />
              </Col>
              <Col xs={2}>
                <EditFormTitleButton />
              </Col>
              <Col xs={2}>
                <AddPageButton />
              </Col>
              <Col xs={2}>
                <EditSchemaButton />
              </Col>
              <Col xs={2}>
                <AddQuestionButton />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={2}>
                <FormEditor />
              </Col>
              <Col xs={10}>
                <Previewer
                  schema={schema}
                  currentPanelId={currentPanelId}
                />
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
    schema: state.getIn(['form', 'schema']).toJS(),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
    questionSet: state.getIn(['form', 'schema', 'questionSets', 0]),
  };
}

export default connect(mapStateToProps, { loadForm, goToPage })(WinterfellFormBuilder);
