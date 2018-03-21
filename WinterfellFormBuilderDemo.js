import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Grid, Row, Col } from 'react-bootstrap';
import WinterfellFormBuilder from './src';

class WinterfellFormBuilderDemo extends Component {
  static propTypes = {
    schema: PropTypes.object,
  };

  static defaultProps = {
    schema: {},
  };

  constructor(props) {
    super(props);

    this.state = {
      demoSchema: 'demo',
    };
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <WinterfellFormBuilder />
          </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    schema: state.getIn(['form', 'schema']),
  };
}
export default connect(mapStateToProps, {})(WinterfellFormBuilderDemo);

