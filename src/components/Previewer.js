import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Winterfell from 'winterfell';

const onRenderDefault = () => {
  console.log('Great news! Winterfell rendered successfully');
};

const onUpdateDefault = (questionAndAnswers) => {
  console.log('Question Updated! The current set of answers is: ', questionAndAnswers);
};

const onSwitchPanelDefault = (panel) => {
  console.log(`Moving on to the panel that is identified as ${panel.panelId}`);
};

const onSubmitDefault = (questionAndAnswers, target) => {
  console.log('Form submitted!', questionAndAnswers);
  console.log('-----');
  console.log('For this example, we disabled normal form submission functionality. ');
  console.log('-----');
  console.log('Target: ', target);
  console.log('-----');
  alert('Submitted. Check the console to see the answers!');
};

class Previewer extends Component {
  static propTypes = {
    currentPanelId: PropTypes.string,
    schema: PropTypes.object.isRequired,
    onRender: PropTypes.func,
    onUpdate: PropTypes.func,
    onSubmit: PropTypes.func,
    onSwitchPanel: PropTypes.func,
    questionAnswers: PropTypes.object,
  };

  static defaultProps = {
    currentPanelId: null,
    schema: {},
    onRender: onRenderDefault,
    onUpdate: onUpdateDefault,
    onSubmit: onSubmitDefault,
    onSwitchPanel: onSwitchPanelDefault,
    questionAnswers: {},
  };

  render() {
    const {
      schema,
      currentPanelId,
      onRender,
      onUpdate,
      onSwitchPanel,
      onSubmit,
      questionAnswers,
    } = this.props;

    const displayWinterFellForm = () => (
      schema.formPanels.map((formPanel, index) => (
        formPanel.panelId === currentPanelId) &&
          <Winterfell
            schema={schema}
            disableSubmit
            onRender={onRender}
            onUpdate={onUpdate}
            onSwitchPanel={onSwitchPanel}
            onSubmit={onSubmit}
            questionAnswers={questionAnswers}
            panelId={currentPanelId}
            key={index}
          />,
      )
    );

    return (
      <div className="winterfell-form-builer-previewer col-xs-12" >
        {(schema &&
          schema.formPanels &&
          schema.formPanels.length > 0) &&
          displayWinterFellForm()
        }
      </div>
    );
  }
}

export default Previewer;

