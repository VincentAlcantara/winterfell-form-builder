import PropTypes from 'prop-types';
import React from 'react';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';

function FieldGroup(props) {
  const { id, label, value } = props;

  return (
    <FormGroup controlId={id}>
      <FormLabel>{label}</FormLabel>
      <FormControl value={value} {...props} autoComplete={id} />
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
