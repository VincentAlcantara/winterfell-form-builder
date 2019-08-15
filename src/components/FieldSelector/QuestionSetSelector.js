import React from 'react';
import PropTypes from 'prop-types';
import QuestionSelector from './QuestionSelector';

const QuestionSetSelector = (props) => {
  const { currentQuestionSets, questionSets, onClick, currentQuestionIndex } = props;

  const displayQuestionSet = () => currentQuestionSets.map(
    currentQuestionSet => (
      questionSets.map(
        (questionSet, questionSetIndex) => {
          if (currentQuestionSet.questionSetId === questionSet.questionSetId
          ) {
            return (
              <span key={questionSetIndex}>
                { questionSet.questionSetHeader &&
                <button
                  className="winterfell-form-builder-selector btn-block"
                  onClick={() => onClick('questionSet', questionSetIndex, currentQuestionIndex)}
                >
                  <div>
                    <h4>{questionSet.questionSetHeader}</h4>
                    <p>{questionSet.questionSetText}</p>
                  </div>
                </button>
                }
                <QuestionSelector
                  questionSetIndex={questionSetIndex}
                  questions={questionSet.questions}
                  onClick={onClick}
                  currentQuestionIndex={currentQuestionIndex}
                />
              </span>
            );
          }
          return null;
        },
      )
    ),
  );

  return (
    <div className="winterfell-form-builder-question-set">
      {currentQuestionSets && displayQuestionSet()}
    </div>
  );
};

QuestionSetSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
  questionSets: PropTypes.array,
  currentQuestionSets: PropTypes.array,
  currentQuestionIndex: PropTypes.number,
};

QuestionSetSelector.defaultProps = {
  questionSetIndex: 0,
  questionSets: null,
  currentQuestionSets: null,
  currentQuestionIndex: 0,
};

export default QuestionSetSelector;

