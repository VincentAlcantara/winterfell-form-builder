import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export const FormQuestionSetEditor = (props) => {
  const { currentQuestionSets, questionSets, onClick } = props;

  const displayQuestionSet = () => currentQuestionSets.map(
    currentQuestionSet => (
      questionSets.map(
        (questionSet, questionSetIndex) =>
          (currentQuestionSet.questionSetId === questionSet.questionSetId )
          && (
            <Button
              className="winterfell-field-editor btn-block"
              onClick={onClick}
            >
              <div>
                <h4>{questionSet.questionSetHeader}</h4>
                <p>{questionSet.questionSetText}</p>
              </div>
            </Button>
          ),
        )
      ),
    );

  return (
    <div>
      {displayQuestionSet()}
    </div>
  );
};

FormQuestionSetEditor.propTypes = {
  onClick: PropTypes.func.isRequired,
  questionSets: PropTypes.array,
  currentQuestionSets: PropTypes.array,
};

FormQuestionSetEditor.defaultProps = {
  questionSetIndex: 0,
  questionSets: null,
  currentQuestionSets: null,
};

export default FormQuestionSetEditor;

