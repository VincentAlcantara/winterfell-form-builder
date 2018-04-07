import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const PageSelector = (props) => {
  const { panelHeader, panelText, onClick } = props;
  return (
    <Button
      className="winterfell-form-builder-selector btn-block"
      onClick={onClick}
    >
      <div>
        <h3>{panelHeader}</h3>
        <p>{panelText}</p>
      </div>
    </Button>
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

