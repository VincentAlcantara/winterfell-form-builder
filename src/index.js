import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Previewer from './components/Previewer/Previewer';
import { CreateFormButton, EditFormButton, AddPageButton } from './components/FormMenu';

class WinterfellFormBuilder extends Component {
  static propTypes = {
    title: PropTypes.string,
    schema: PropTypes.object,
  }

  static defaultProps = {
    title: '',
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

  onDomChange(e) {
    e.preventDefault();
    this.setState({ schema: JSON.parse(e.target.value) });
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.setState({ schema: JSON.parse(e.target.value) });
  }

  render() {
    const { title, schema } = this.props;
    console.log('schema:', schema);

    return (
      <div className="grid">
        <div className="row">
          <div className="col-xs-12">
            <h2>Winterfell Form Builder</h2>
          </div>
          <div className="col-xs-12">
            <h3>Form: {title}</h3>
          </div>
          <div className="col-xs-12">
            <Previewer
              schema={schema}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-3">
            <CreateFormButton />
          </div>
          <div className="col-xs-3">
            <EditFormButton />
          </div>
          <div className="col-xs-3">
            <AddPageButton />
          </div>
        </div>
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

