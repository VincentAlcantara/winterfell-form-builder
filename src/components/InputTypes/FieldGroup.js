import PropTypes from 'prop-types';
import React from 'react';

function FieldGroup(props) {
  const { id, label, value } = props;

  return (
    <div className="form-group" controlId={id}>
      <label htmlFor={id}>{label}</label>
      <input className="form-control" value={value} {...props} autoComplete={id} />
    </div>
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
