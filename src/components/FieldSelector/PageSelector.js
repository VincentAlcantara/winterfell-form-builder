import React from 'react';
import PropTypes from 'prop-types';

const PageSelector = (props) => {
  const { panelHeader, panelText, onClick } = props;
  return (
    <button
      type="button"
      className="winterfell-form-builder-selector btn-default btn-block"
      onClick={onClick}
    >
      <div>
        <h3>{panelHeader}</h3>
        <p>{panelText}</p>
      </div>
    </button>
  );
};

PageSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
  panelHeader: PropTypes.string,
  panelText: PropTypes.string,
};

PageSelector.defaultProps = {
  panelHeader: '',
  panelText: '',
};

export default PageSelector;

