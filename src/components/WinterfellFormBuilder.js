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
} from './FormMenu';
import FormEditor from './FormEditor';
import PageEditor from './FieldEditors/PageEditor';

class WinterfellFormBuilder extends Component {
  static propTypes = {
    inputSchema: PropTypes.object,
    title: PropTypes.string,
    schema: PropTypes.object,
    currentPanelId: PropTypes.string,
    currentPanelIndex: PropTypes.number.isRequired,
    loadForm: PropTypes.func.isRequired,
  }

  static defaultProps = {
    title: '',
    schema: null,
    currentPanelId: null,
    inputSchema: {},
    formPanels: null,
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
    const { title, schema, currentPanelId, currentPanelIndex } = this.props;
    console.log('currentPanelIndex: ', currentPanelIndex);
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
              <Col xs={2} className="text-right">
                <Pagination />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={3}>
                { typeof currentPanelIndex !== 'undefined' &&
                  <PageEditor
                    currentPanelIndex={currentPanelIndex}
                  />
                }
              </Col>
              <Col xs={9}>
                <FormEditor />
              </Col>
              <Col xs={12}>
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
    currentPanelIndex: state.getIn(['form', 'currentPanelIndex']),
    questionSet: state.getIn(['form', 'schema', 'questionSets', 0]),
  };
}

export default connect(mapStateToProps, { loadForm, goToPage })(WinterfellFormBuilder);
