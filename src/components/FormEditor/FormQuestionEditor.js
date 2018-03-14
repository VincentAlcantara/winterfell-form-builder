import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import RadioButtonOptionsInput from '../InputTypes/RadioButtonOptionsInput';

export const FormQuestionEditor = (props) => {
  const { questionSetIndex, questions, onClick } = props;

  const displayQuestionButtons = () => questions.map((question, questionIndex) => (
    <Button
      className="winterfell-field-editor btn-block"
      onClick={() => onClick('question', questionSetIndex, questionIndex)}
      key={`${question.questionId}`}
    >
      <div>
        <label htmlFor={question.questionId}>{question.question}</label>
        {
          question.text &&
          <p>{question.text}</p>
        }
        {
          question.input &&
          (question.input.type === 'textInput' ||
          question.input.type === 'emailInput') &&
          <input id={question.questionId} type="text" className="form-control" />
        }
        {
          question.input &&
          question.input.type === 'radioOptionsInput' &&
          <RadioButtonOptionsInput
            id={question.questionId}
            labelId={question.questionId}
            options={question.input.options}
          />
        }
        {
          question.postText &&
          <p>{question.postText}</p>
        }
      </div>
    </Button>
  ));

  return (
    <div>
      { displayQuestionButtons() }
    </div>
  );
};

FormQuestionEditor.propTypes = {
  questionSetIndex: PropTypes.number,
  questions: PropTypes.array,
  onClick: PropTypes.func.isRequired,
};

FormQuestionEditor.defaultProps = {
  questionSetIndex: 0,
  questions: [],
};

export default FormQuestionEditor;

