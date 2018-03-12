import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import EditQuestionButton from '../FormMenu/EditQuestionButton';

export const FormQuestionSetEditor = (props) => {
  const { currentQuestionSets, questionSets, onClick } = props;

  const displayQuestionSet = () => currentQuestionSets.map(
    currentQuestionSet => (
      questionSets.map(
        (questionSet, questionSetIndex) => {
          if (currentQuestionSet.questionSetId === questionSet.questionSetId) {
            // get the questions first for the question set
            const questionButtons = questionSet.questions.map((question, ix) => (
              <Button
                className="winterfell-field-editor btn-block"
                onClick={onClick}
                key={`${question.questionId}`}
              >
                <div>
                  <label htmlFor={question.questionId}>{question.question}</label>
                  {
                    question.text &&
                    <p>{question.text}</p>
                  }
                  <input id={question.questionId} type="text" className="form-control" />
                  <EditQuestionButton
                    questionSetIndex={questionSetIndex}
                    questionIndex={ix}
                  />
                </div>
              </Button>
            ));
            return (
              <div>
                <Button
                  className="winterfell-field-editor btn-block"
                  onClick={onClick}
                >
                  <div>
                    <h4>{questionSet.questionSetHeader}</h4>
                    <p>{questionSet.questionSetText}</p>
                  </div>
                </Button>
                <div>
                  {questionButtons}
                </div>
              </div>
            );
          }
          return null;
        },
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

