import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const PageSortButton = props => (
  <Button
    className="btn btn-block btn-primary"
    onClick={props.onClick}
  >sort pages
  </Button>
);


PageSortButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default PageSortButton;

