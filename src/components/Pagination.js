
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
    <div className="dropdown my-2">
      <button
        id="pagination"
        title={currentPanelId || 'Select Page'}
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Go to page
      </button>
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

