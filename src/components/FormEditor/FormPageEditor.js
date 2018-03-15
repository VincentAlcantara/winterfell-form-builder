import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const FormPageEditor = (props) => {
  const { panelHeader, panelText, onClick } = props;
  return (
    <Button
      className="winterfell-field-editor btn-block"
      onClick={onClick}
    >
      <div>
        <h3>{panelHeader}</h3>
        <p>{panelText}</p>
      </div>
    </Button>
  );
};

FormPageEditor.propTypes = {
  onClick: PropTypes.func.isRequired,
  panelHeader: PropTypes.string,
  panelText: PropTypes.string,
};

FormPageEditor.defaultProps = {
  panelHeader: '',
  panelText: '',
};

export default FormPageEditor;

