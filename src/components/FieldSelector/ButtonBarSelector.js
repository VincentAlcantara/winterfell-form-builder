import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const ButtonBarSelector = (props) => {
  const { nextButton, backButton, backButtonDisabled, onClick } = props;

  return (
    <Button
      className="winterfell-form-builder-selector btn-block"
      onClick={onClick}
    >
      <div className="button-bar">
        { backButton && !backButtonDisabled &&
          <a className="btn btn-danger pull-left">
            {backButton}
          </a>
        }
        { nextButton &&
          <a className="btn btn-primary pull-right">
            {nextButton}
          </a>
        }
        { !nextButton &&
          <a className="btn btn-primary pull-right">
            Submit
          </a>
        }
      </div>
    </Button>
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

