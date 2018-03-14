import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup } from 'react-bootstrap';
import { editQuestion, editQuestionText, editQuestionPostText } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../UI/FieldGroup';

class QuestionEditor extends Component {
  static propTypes = {
    editQuestion: PropTypes.func.isRequired,
    editQuestionText: PropTypes.func.isRequired,
    editQuestionPostText: PropTypes.func.isRequired,
    question: PropTypes.string,
    questionText: PropTypes.string,
    questionPostText: PropTypes.string,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
  }

  static defaultProps = {
    question: '',
    questionText: '',
    questionPostText: '',
  }
  constructor(props) {
    super(props);
    const { question, questionText, questionPostText } = props;

    this.state = {
      question,
      questionText,
      questionPostText,
    };

    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      question: nextProps.question,
      questionText: nextProps.questionText,
      questionPostText: nextProps.questionPostText,
    };
  }

  onChange(event) {
    const { name, value } = event.target;
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    this.setState({ [name]: value });
    switch (name) {
      case 'question':
        this.props.editQuestion(currentQuestionSetIndex, currentQuestionIndex, value);
        break;
      case 'questionText':
        this.props.editQuestionText(currentQuestionSetIndex, currentQuestionIndex, value);
        break;
      case 'questionPostText':
        this.props.editQuestionPostText(currentQuestionSetIndex, currentQuestionIndex, value);
        break;
      default:
    }
  }

  render() {
    return (
      <form>
        <FormGroup>
          <FieldGroup
            id="question"
            name="question"
            label="Question"
            onChange={this.onChange}
            placeholder={this.props.question}
            value={this.state.question}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="questionText"
            name="questionText"
            label="Question Text"
            placeholder={this.props.questionText}
            onChange={this.onChange}
            value={this.state.questionText}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="questionPostText"
            name="questionPostText"
            label="Question Post Text"
            placeholder={this.props.questionPostText}
            onChange={this.onChange}
            value={this.state.questionPostText}
          />
        </FormGroup>
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    question: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'question']),
    questionText: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'text']),
    questionPostText: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'postText']),
    currentQuestionSetIndex: ownProps.currentQuestionSetIndex,
    currentQuestionIndex: ownProps.currentQuestionIndex,
  };
}

export default connect(
  mapStateToProps, { editQuestion, editQuestionText, editQuestionPostText })(QuestionEditor);

