import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

function FieldGroup(props) {
  const { id, label, value } = props;

  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl value={value} {...props} />
    </FormGroup>
  );
}

FieldGroup.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
};

FieldGroup.defaultProps = {
  id: '',
  label: '',
  value: '',
};

export default FieldGroup;
