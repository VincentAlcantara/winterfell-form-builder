import React from 'react';
import PropTypes from 'prop-types';
import { RadioButtonOptionsInput, CheckboxOptionsInput, SelectInput } from '../InputTypes/';

const FormQuestionEditor = (props) => {
  const { questionSetIndex, questions, onClick } = props;

  const displayQuestionButtons = () => questions.map((question, questionIndex) => (
    <button
      type="button"
      className="winterfell-form-builder-selector btn-block"
      onClick={() => onClick('question', questionSetIndex, questionIndex)}
      key={`${question.questionId}`}
    >
      <div className="form-group">
        <label htmlFor={question.questionId}>{question.question}</label>
        {
          question.text &&
          <p>{question.text}</p>
        }
        {
          question.input && question.input.type === 'checkboxInput' &&
          <span><input type="checkbox" />&nbsp;{question.input.text}</span>
        }
        {
          question.input &&
          (question.input.type === 'textInput' ||
          question.input.type === 'emailInput') &&
          <input
            id={question.questionId}
            type="text"
            className="form-control"
            autoComplete={question.questionId}
          />
        }
        {
          question.input &&
          question.input.type === 'textAreaInput' &&
          <textarea
            id={question.questionId}
            type="text"
            className="form-control"
            autoComplete={question.questionId}
          />
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
          question.input &&
          question.input.type === 'checkboxOptionsInput' &&
          <CheckboxOptionsInput
            id={question.questionId}
            labelId={question.questionId}
            options={question.input.options}
          />
        }
        {
          question.input &&
          question.input.type === 'selectInput' &&
          <SelectInput
            id={question.questionId}
            labelId={question.questionId}
            options={question.input.options}
          />
        }
        { question.input && question.input.type === 'dateInput' &&
          <p><i>(date input)</i></p>
        }
        { question.input && question.input.type === 'addressInput' &&
          <p><i>(address input)</i></p>
        }
        {
          question.postText &&
          <p>{question.postText}</p>
        }
      </div>
    </button>
  ));

  return (
    <div>
      { questions && displayQuestionButtons() }
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

