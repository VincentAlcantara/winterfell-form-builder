import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

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
      <WinterfellFormBuilder />
    );
  }
}

function mapStateToProps(state) {
  return {
    schema: state.getIn(['form', 'schema']),
  };
}
export default connect(mapStateToProps, {})(WinterfellFormBuilderDemo);

