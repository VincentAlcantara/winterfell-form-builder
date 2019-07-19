import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const PageSortButton = props => (
  <button
    className="btn btn-block btn-primary"
    onClick={props.onClick}
    key="sortPages"
  ><i class="material-icons">swap_vert</i><span className="icon-menu">Pages</span>
  </button>
);


PageSortButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default PageSortButton;

