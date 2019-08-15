import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import WinterfellFormBuilder from './src';

class WinterfellFormBuilderDemo extends Component {
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

WinterfellFormBuilderDemo.propTypes = {
  schema: PropTypes.object,
};

WinterfellFormBuilderDemo.defaultProps = {
  schema: {},
};

function mapStateToProps(state) {
  return {
    schema: state.getIn(['form', 'schema']),
  };
}
export default connect(mapStateToProps, {})(WinterfellFormBuilderDemo);

