import React from 'react';
import PropTypes from 'prop-types';

const AddQuestionOptionButton = (props) => {
  const {
    questionOptionText,
    questionOptionValue,
    onChange,
    onClick,
  } = props;

  return (
    <div className="row">
      <div className="col">
        <label
          htmlFor="addOption"
        >
          Add Option
        </label>
      </div>
      <div className="col">
        <table>
          <tbody id="addOption">
            <tr>
              <td>
                <input
                  className="form-control"
                  type="text"
                  name="questionOptionText"
                  value={questionOptionText}
                  onChange={onChange}
                />
              </td>
              <td>
                <input
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
                  className="btn btn-dark py-0"
                  onClick={onClick}
                  disabled={questionOptionText === '' || questionOptionValue === ''}
                ><i className="material-icons" id="showConditionalPage" >add_circle</i>
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

