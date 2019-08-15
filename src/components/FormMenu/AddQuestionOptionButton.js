import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';


const AddQuestionOptionButton = (props) => {
  const {
    questionOptionText,
    questionOptionValue,
    onChange,
    onClick,
  } = props;

  return (
    <div className="row">
      <div className="col-xs-12">
        <label
          htmlFor="addOption"
        >
          Add Option
        </label>
      </div>
      <div className="col-xs-12">
        <table>
          <tbody id="addOption">
            <tr>
              <td>
                <div
                  className="form-control"
                  type="text"
                  name="questionOptionText"
                  value={questionOptionText}
                  onChange={onChange}
                />
              </td>
              <td>
                <div
                  className="form-control"
                  type="text"
                  name="questionOptionValue"
                  value={questionOptionValue}
                  onChange={onChange}
                />
              </td>
              <td colSpan={2}>
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={onClick}
                  disabled={questionOptionText === '' || questionOptionValue === ''}
                ><FontAwesomeIcon icon={faPlusCircle} id="showConditionalPage" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

AddQuestionOptionButton.propTypes = {
  questionOptionText: PropTypes.string.isRequired,
  questionOptionValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AddQuestionOptionButton;

