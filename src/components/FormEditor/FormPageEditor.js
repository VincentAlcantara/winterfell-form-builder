import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const FormPageEditor = (props) => {
  const { questionPanels, currentPanelIndex, onClick } = props;
  return (
    <Button
      className="winterfell-field-editor btn-block"
      onClick={onClick}
    >
      <div>
        <h3>{questionPanels[currentPanelIndex].panelHeader}</h3>
        <p>{questionPanels[currentPanelIndex].panelText}</p>
      </div>
    </Button>
  );
};

FormPageEditor.propTypes = {
  onClick: PropTypes.func.isRequired,
  questionPanels: PropTypes.array,
  currentPanelIndex: PropTypes.number,
};

FormPageEditor.defaultProps = {
  currentPanelIndex: 0,
  questionPanels: null,
};

export default FormPageEditor;

