
import React from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {
  const { currentPanelId, formPanels, onClick } = props;
  const getPages = () => formPanels.map((panel, index) => (
    <button
      key={`${index}-${panel}`}
      onClick={() => {
        onClick(panel);
      }}
      className="dropdown-item"
    >
      {panel}
    </button>
  ));

  return (
    <div className="dropdown">
      <button
        id="pagination"
        title={currentPanelId || 'Select Page'}
        className="btn btn-secondary btn-block dropdown-toggle h-100 text-left"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Quick link to page
      </button>
      <br />
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        { formPanels && getPages() }
      </div>
    </div>
  );
}

Pagination.propTypes = {
  formPanels: PropTypes.object.isRequired,
  currentPanelId: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  currentPanelId: 'Select Page',
};

export default Pagination;

