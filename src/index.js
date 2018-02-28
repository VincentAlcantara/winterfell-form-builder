import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap';

import Pagination from './components/Pagination';
import Previewer from './components/Previewer';

import { CreateFormButton, EditFormButton, AddPageButton, EditSchemaButton } from './components/FormMenu';

class WinterfellFormBuilder extends Component {
  static propTypes = {
    title: PropTypes.string,
    schema: PropTypes.object,
    currentPanelId: PropTypes.string,
  }

  static defaultProps = {
    title: '',
    schema: {},
    currentPanelId: null,
  }

  constructor(props) {
    super(props);

    this.state = {
      schema: this.props.schema,
    };

    this.onDomChange = this.onDomChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
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
    const { title, schema, currentPanelId } = this.props;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Row>
              <Col xs={12}>
                <h2>Winterfell Form Builder</h2>
              </Col>
              <Col xs={12}>
                <h3>Form: <u>{title}</u></h3>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={12}>
                <Pagination />
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Previewer
                  schema={schema}
                  currentPanelId={currentPanelId}
                />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={3}>
                <CreateFormButton />
              </Col>
              <Col xs={3}>
                <EditFormButton />
              </Col>
              <Col xs={3}>
                <AddPageButton />
              </Col>
              <Col xs={3}>
                <EditSchemaButton />
              </Col>
            </Row>
            <hr />
            <Row>
              <Col xs={12}>
                <h3>Winterfell Schema:</h3>
              </Col>
              <Col xs={12}>
                <pre>
                  {JSON.stringify(schema, undefined, 2)}
                </pre>
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
  };
}

export default connect(mapStateToProps, {})(WinterfellFormBuilder);

