import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Winterfell from 'winterfell';

class WinterfellFormBuilder extends Component {
  static propTypes = {
    schema: PropTypes.object,
  }

  static defaultProps = {
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
    const onRender = () => {
      console.log('Great news! Winterfell rendered successfully');
    };

    const onUpdate = (questionAnswers) => {
      console.log('Question Updated! The current set of answers is: ', questionAnswers);
    };

    const onSwitchPanel = (panel) => {
      console.log(`Moving on to the panel that is identified as ${panel.panelId}`);
    };

    const onSubmit = (questionAnswers) => {
      console.log('Form submitted!', questionAnswers);
      console.log('-----');
      console.log('For this example, we disabled normal form submission functionality. ');
      console.log('-----');
      alert('Submitted. Check the console to see the answers!');
    };
    return (
      <div className="grid">
        <div className="row">
          <div className="col-xs-6 col-xs-offset-3">
            <Winterfell
              schema={this.props.schema}
              onRender={onRender}
              onUpdate={onUpdate}
              onSwitchPanel={onSwitchPanel}
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
  };
}

export default connect(mapStateToProps, {})(WinterfellFormBuilder);

