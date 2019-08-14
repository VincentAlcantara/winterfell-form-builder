import React from 'react';
import PropTypes from 'prop-types';

const PageSortButton = props => (
  <button
    className="btn btn-block btn-light"
    onClick={props.onClick}
    key="sortPages"
  ><i className="material-icons">swap_vert</i><span className="icon-menu">Pages</span>
  </button>
);


PageSortButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default PageSortButton;

