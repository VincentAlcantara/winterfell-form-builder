import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Button, FormControl, Glyphicon } from 'react-bootstrap';

const AddQuestionOptionButton = (props) => {
  const {
    questionOptionText,
    questionOptionValue,
    onChange,
    onClick,
  } = props;

  return (
    <Row>
      <Col xs={12}>
        <label
          htmlFor="addOption"
        >
          Add Option
        </label>
      </Col>
      <Col xs={12}>
        <table>
          <tbody id="addOption">
            <tr>
              <td>
                <FormControl
                  type="text"
                  name="questionOptionText"
                  value={questionOptionText}
                  onChange={onChange}
                />
              </td>
              <td>
                <FormControl
                  type="text"
                  name="questionOptionValue"
                  value={questionOptionValue}
                  onChange={onChange}
                />
              </td>
              <td colSpan={2}>
                <Button
                  className="btn btn-primary"
                  onClick={onClick}
                  disabled={questionOptionText === '' || questionOptionValue === ''}
                ><Glyphicon glyph="glyphicon glyphicon-plus" />
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  );
};

AddQuestionOptionButton.propTypes = {
  questionOptionText: PropTypes.string.isRequired,
  questionOptionValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AddQuestionOptionButton;

