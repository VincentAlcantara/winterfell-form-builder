import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Grid, Row, Col, Button } from 'react-bootstrap';
import WinterfellFormBuilder from './src';

import demo from './examples/schema';
import contractor from './examples/contractor.json';
import nda from './examples/nda.json';

class WinterfellFormBuilderDemo extends Component {
  static propTypes = {
    currentPanelId: PropTypes.string,
  };

  static defaultProps = {
    currentPanelId: '',
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
            <Row>
              <Col xs={4} className="text-center">
                <a                  
                  onClick={() => {
                    this.setState({ demoSchema: 'demo' });
                  }}
                >Winterfell Demo
                </a>
              </Col>
              <Col xs={4} className="text-center">
                <a                  
                  onClick={() => {
                    this.setState({ demoSchema: 'contractor' });
                  }}
                >Contractor Agreement
                </a>
              </Col>
              <Col xs={4} className="text-center">
                <a                  
                  onClick={() => {
                    this.setState({ demoSchema: 'nda' });
                  }}
                >NDA 1 Way
                </a>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                {
                  this.state.demoSchema === 'demo' &&
                  <WinterfellFormBuilder
                    inputSchema={demo}
                  />
                }
                {
                  this.state.demoSchema === 'contractor' &&
                  <WinterfellFormBuilder
                    inputSchema={contractor}
                  />
                }
                {
                  this.state.demoSchema === 'nda' &&
                  <WinterfellFormBuilder
                    inputSchema={nda}
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
    currentPanelId: state.getIn(['form', 'currentPanelId']),
  };
}
export default connect(mapStateToProps, {})(WinterfellFormBuilderDemo);

