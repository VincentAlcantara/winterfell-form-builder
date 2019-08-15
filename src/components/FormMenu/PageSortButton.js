import React from 'react';
import PropTypes from 'prop-types';

const PageSortButton = props => (
  <button
    className="btn btn-block btn-secondary"
    onClick={props.onClick}
    key="sortPages"
  >Sort Pages
  </button>
);

PageSortButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
export default PageSortButton;

