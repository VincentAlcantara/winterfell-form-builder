import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup, Button } from 'react-bootstrap';
import { editQuestionSetHeader, editQuestionSetText, changeCurrentEditingField } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';

class QuestionSetEditor extends PureComponent {
  constructor(props) {
    super(props);
    const { questionSetId, questionSetHeader, questionSetText, questions } = props;

    this.state = {
      questionSetId,
      questionSetHeader,
      questionSetText,
      questions,
    };

    this.onChangeQuestionSetHeader = this.onChangeQuestionSetHeader.bind(this);
    this.onChangeQuestionSetText = this.onChangeQuestionSetText.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { questionSetId, questionSetHeader, questionSetText, questions } = nextProps;
    this.state = {
      questionSetId,
      questionSetHeader,
      questionSetText,
      questions,
    };
  }

  onChangeQuestionSetHeader(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.props.editQuestionSetHeader(this.props.currentQuestionSetIndex, event.target.value);
  }

  onChangeQuestionSetText(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.props.editQuestionSetText(this.props.currentQuestionSetIndex, event.target.value);
  }

  render() {
    const { currentQuestionSetIndex, questions } = this.props;
    const questionsArray = questions.toJS();
    return (
      <form>
        <FormGroup>
          <FieldGroup
            id="questionSetId"
            name="questionSetId"
            label="Question Set ID"
            placeholder={this.props.questionSetId}
            value={this.state.questionSetId}
            disabled
          />
          <FieldGroup
            id="questionSetHeader"
            name="questionSetHeader"
            label="Question Set Header"
            onChange={this.onChangeQuestionSetHeader}
            placeholder={this.props.questionSetHeader}
            value={this.state.questionSetHeader}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="questionSetText"
            name="questionSetText"
            label="Question Set Text"
            placeholder={this.props.questionSetText}
            onChange={this.onChangeQuestionSetText}
            value={this.state.questionSetText}
          />
        </FormGroup>
        { questionsArray && questionsArray.length > 0 &&
        <FormGroup>
          <label htmlFor="questionList">Questions
          </label>
          <div id="questionList">
            { questionsArray.map((question, index) => (
              <Button
                key={`question-${index}`}
                variant="link"
                onClick={() =>
                  this.props.changeCurrentEditingField('question', currentQuestionSetIndex, index)
                }
              >{question.questionId}
              </Button>
            ))
            }
          </div>
        </FormGroup>
        }
      </form>
    );
  }
}

QuestionSetEditor.propTypes = {
  editQuestionSetHeader: PropTypes.func.isRequired,
  editQuestionSetText: PropTypes.func.isRequired,
  changeCurrentEditingField: PropTypes.func.isRequired,
  questionSetId: PropTypes.string,
  questionSetHeader: PropTypes.string,
  questionSetText: PropTypes.string,
  currentQuestionSetIndex: PropTypes.number.isRequired,
  questions: PropTypes.object,
};

QuestionSetEditor.defaultProps = {
  currentQuestionSetIndex: 0,
  questionSetId: '',
  questionSetHeader: '',
  questionSetText: '',
  questions: [],
};

function mapStateToProps(state, ownProps) {
  return {
    questionSetId: state.getIn(['form', 'schema', 'questionSets',
      ownProps.currentQuestionSetIndex, 'questionSetId']),
    questionSetHeader: state.getIn(['form', 'schema', 'questionSets',
      ownProps.currentQuestionSetIndex, 'questionSetHeader']),
    questionSetText: state.getIn(['form', 'schema', 'questionSets',
      ownProps.currentQuestionSetIndex, 'questionSetText']),
    questions: state.getIn(['form', 'schema', 'questionSets',
      ownProps.currentQuestionSetIndex, 'questions']),
    currentQuestionSetIndex: ownProps.currentQuestionSetIndex,
  };
}

export default connect(
  mapStateToProps, {
    editQuestionSetHeader,
    editQuestionSetText,
    changeCurrentEditingField })(QuestionSetEditor);

