import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const FormQuestionSetEditor = (props) => {
  const { questionSets, questionSetIndex, onClick } = props;
  return (
    <Button
      className="winterfell-field-editor"
      onClick={onClick}
    >
      <div>
        <h4>{questionSets[questionSetIndex].panelHeader}</h4>
        <p>{questionSets[questionSetIndex].panelText}</p>
      </div>
    </Button>
  );
};

FormQuestionSetEditor.propTypes = {
  onClick: PropTypes.func.isRequired,
  questionSets: PropTypes.array,
  questionSetIndex: PropTypes.number,
};

FormQuestionSetEditor.defaultProps = {
  questionSetIndex: 0,
  questionSets: null,
  changeCurrentEditingField: null,
};

export default FormQuestionSetEditor;

