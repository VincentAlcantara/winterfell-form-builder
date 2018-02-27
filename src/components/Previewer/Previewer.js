import React from 'react';
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

export default function Previewer(props) {
  const {
    schema,
    panelId,
    onRender,
    onUpdate,
    onSwitchPanel,
    onSubmit,
    questionAnswers,
  } = props;


  return (
    <div className="winterfell-form-builer-previewer col-xs-12" >
      {(schema &&
        schema.formPanels &&
        schema.formPanels.length > 0) &&
        <Winterfell
          schema={schema}
          disableSubmit
          onRender={onRender}
          onUpdate={onUpdate}
          onSwitchPanel={onSwitchPanel}
          onSubmit={onSubmit}
          questionAnswers={questionAnswers}
          panelId={panelId || schema.formPanels[0].panelId}
        />
      }
    </div>
  );
}

Previewer.propTypes = {
  panelId: PropTypes.string,
  schema: PropTypes.object.isRequired,
  onRender: PropTypes.func,
  onUpdate: PropTypes.func,
  onSubmit: PropTypes.func,
  onSwitchPanel: PropTypes.func,
  questionAnswers: PropTypes.object,
};

Previewer.defaultProps = {
  panelId: '',
  schema: {},
  onRender: onRenderDefault,
  onUpdate: onUpdateDefault,
  onSubmit: onSubmitDefault,
  onSwitchPanel: onSwitchPanelDefault,
  questionAnswers: {},
};

