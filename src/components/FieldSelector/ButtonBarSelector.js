import React from 'react';
import PropTypes from 'prop-types';

const ButtonBarSelector = (props) => {
  const { nextButton, backButton, backButtonDisabled, onClick } = props;

  return (
    <button
      type="button"
      className="winterfell-form-builder-selector btn-block"
      onClick={onClick}
    >
      <div className="button-bar">
        {backButton && !backButtonDisabled &&
        <button className="btn btn-danger pull-left">
          {backButton}
        </button>
        }
        {nextButton &&
        <button className="btn btn-dark pull-right">
          {nextButton}
        </button>
        }
        {!nextButton &&
        <button className="btn btn-dark pull-right">
          Submit
        </button>
        }
      </div>
    </button>
  );
};

ButtonBarSelector.propTypes = {
  nextButton: PropTypes.string,
  backButton: PropTypes.string,
  backButtonDisabled: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

ButtonBarSelector.defaultProps = {
  nextButton: null,
  backButton: null,
  backButtonDisabled: false,
  onClick: PropTypes.func.isRequired,
};

export default ButtonBarSelector;

