import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class WinterfellFormBuilder extends Component {
  static propTypes = {
    // title: PropTypes.string,
    schema: PropTypes.object,
  }

  static defaultProps = {
    // title: '',
    panelId: '',
    schema: {},
  }

  constructor(props) {
    super(props);

    this.state = {
      schema: this.props.schema,
    };

    this.onDomChange = this.onDomChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ schema: JSON.parse(e.target.value) });
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.setState({ schema: JSON.parse(e.target.value) });
  }

  render() {
    return (
      <div className="winterfell-formbuilder">
        Coming soon.
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
    schema: state.getIn(['form', 'schema']).toJS(),
  };
}

export default connect(mapStateToProps, {})(WinterfellFormBuilder);

