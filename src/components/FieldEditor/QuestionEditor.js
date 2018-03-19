import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup, FormControl } from 'react-bootstrap';
import { fromJS } from 'immutable';
import {
  editQuestionId,
  editQuestion,
  editQuestionText,
  editQuestionPostText,
  editQuestionOptionText,
  editQuestionOptionValue,
  addQuestionOption,
  deleteQuestionOption,
  changeQuestionType,
} from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../UI/FieldGroup';
import DeleteQuestionOptionButton from '../FormMenu/DeleteQuestionOptionButton';
import AddQuestionOptionButton from '../FormMenu/AddQuestionOptionButton';
import SelectInput from '../InputTypes/SelectInput';
import { INPUT_TYPE_OPTIONS } from '../../common/constants';

class QuestionEditor extends Component {
  static propTypes = {
    editQuestionId: PropTypes.func.isRequired,
    editQuestion: PropTypes.func.isRequired,
    editQuestionText: PropTypes.func.isRequired,
    editQuestionPostText: PropTypes.func.isRequired,
    editQuestionOptionText: PropTypes.func.isRequired,
    editQuestionOptionValue: PropTypes.func.isRequired,
    changeQuestionType: PropTypes.func.isRequired,
    addQuestionOption: PropTypes.func.isRequired,
    questionId: PropTypes.string,
    question: PropTypes.string,
    questionText: PropTypes.string,
    questionPostText: PropTypes.string,
    questionInputType: PropTypes.string,
    questionInputOptions: PropTypes.object,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
  }

  static defaultProps = {
    questionId: '',
    question: '',
    questionText: '',
    questionPostText: '',
    questionInputType: '',
    questionInputOptions: fromJS([]),
  }

  constructor(props) {
    super(props);
    const {
      questionId,
      question,
      questionText,
      questionPostText,
      questionInputType,
      questionInputOptions,
    } = props;

    this.state = {
      questionId,
      question,
      questionText,
      questionPostText,
      questionInputType,
      questionInputOptions: questionInputOptions.toJS(),
    };

    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onOptionTextChange = this.onOptionTextChange.bind(this);
    this.onOptionValueChange = this.onOptionValueChange.bind(this);
    this.onAddQuestionOptionClick = this.onAddQuestionOptionClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      questionId: nextProps.questionId,
      question: nextProps.question,
      questionText: nextProps.questionText,
      questionPostText: nextProps.questionPostText,
      questionInputType: nextProps.questionInputType,
      questionInputOptions: nextProps.questionInputOptions.toJS(),
    });
  }

  onChange(event) {
    const { name, value } = event.target;
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    this.setState({ [name]: value });
    switch (name) {
      case 'questionId':
        this.props.editQuestionId(currentQuestionSetIndex, currentQuestionIndex, value);
        break;
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

  onSelect(questionType) {
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    this.setState({ questionInputType: questionType });
    this.props.changeQuestionType(currentQuestionSetIndex, currentQuestionIndex, questionType);
  }

  onOptionTextChange(event, index) {
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    const questionInputOptions = Object.assign({}, this.state.questionInputOptions);
    questionInputOptions[index].text = event.target.value;
    this.setState({ questionInputOptions });
    this.props.editQuestionOptionText(currentQuestionSetIndex, currentQuestionIndex,
      index, event.target.value);
  }

  onOptionValueChange(event, index) {
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    const questionInputOptions = Object.assign({}, this.state.questionInputOptions);
    questionInputOptions[index].value = event.target.value;
    this.setState({ questionInputOptions });
    this.props.editQuestionOptionValue(currentQuestionSetIndex, currentQuestionIndex,
      index, event.target.value);
  }

  onAddQuestionOptionClick() {
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    const questionInputOptions = [];
    for (let i = 0; i < this.state.questionInputOptions.length; i += 1) {
      questionInputOptions.push(this.state.questionInputOptions[i]);
    }
    questionInputOptions.push({ text: '', value: '' });

    this.setState({ questionInputOptions });
    this.props.addQuestionOption(currentQuestionSetIndex, currentQuestionIndex);
  }

  onDeleteOptionClick() {
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    const questionInputOptions = [];
    for (let i = 0; i < this.state.questionInputOptions.length; i += 1) {
      questionInputOptions.push(this.state.questionInputOptions[i]);
    }
    this.props.addQuestionOption(currentQuestionSetIndex, currentQuestionIndex);
  }

  getQuestionOptions() {
    return (
      <FormGroup>
        <table>
          <tbody>
            <tr>
              <th>Options</th>
              <th>Values</th>
            </tr>
            { this.props.questionInputOptions &&
              this.props.questionInputOptions.toJS().map((option, ix) => (
                <tr key={`${ix}`}>
                  <td>
                    <FormControl
                      type="text"
                      name={this.state.questionInputOptions[ix].text}
                      value={this.state.questionInputOptions[ix].text}
                      onChange={event => this.onOptionTextChange(event, ix)}
                    />
                  </td>
                  <td>
                    <FormControl
                      type="text"
                      name={this.state.questionInputOptions[ix].value}
                      value={this.state.questionInputOptions[ix].value}
                      onChange={event => this.onOptionValueChange(event, ix)}
                    />
                  </td>
                  <td>
                    <DeleteQuestionOptionButton questionOptionIndex={ix} />
                  </td>
                </tr>))
            }
            <tr>
              <td colSpan={3}>
                &nbsp;
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <AddQuestionOptionButton
                  questionInputOptions={this.state.questionInputOptions}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </FormGroup>
    );
  }

  render() {
    const {
      questionId,
      question,
      questionText,
      questionPostText,
      questionInputType,
      questionInputOptions,
    } = this.props;
    return (
      <form>
        <FormGroup>
          <FieldGroup
            id="questionId"
            name="questionId"
            label="Question ID"
            onChange={this.onChange}
            placeholder={questionId}
            value={this.state.questionId}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="question"
            name="question"
            label="Question"
            onChange={this.onChange}
            placeholder={question}
            value={this.state.question}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="questionText"
            name="questionText"
            label="Question Text"
            placeholder={questionText}
            onChange={this.onChange}
            value={this.state.questionText}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="questionPostText"
            name="questionPostText"
            label="Question Post Text"
            placeholder={questionPostText}
            onChange={this.onChange}
            value={this.state.questionPostText}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="questionInputType">
            Change Question Type
          </label>
          <SelectInput
            id="questionInputType"
            labelId="questionInputType"
            options={INPUT_TYPE_OPTIONS}
            onSelect={this.onSelect}
            initialValue={this.props.questionInputType}
          />
        </FormGroup>
        {
          (questionInputType === 'checkboxOptionsInput' ||
          questionInputType === 'selectInput' ||
          questionInputType === 'radioOptionsInput') &&
          questionInputOptions &&
          this.getQuestionOptions()
        }
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    questionId: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'questionId']),
    question: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'question']),
    questionText: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'text']),
    questionPostText: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'postText']),
    questionInputType: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'input', 'type']),
    questionInputOptions: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'input', 'options']),
    currentQuestionSetIndex: ownProps.currentQuestionSetIndex,
    currentQuestionIndex: ownProps.currentQuestionIndex,
  };
}

export default connect(
  mapStateToProps,
  {
    editQuestionId,
    editQuestion,
    editQuestionText,
    editQuestionPostText,
    editQuestionOptionText,
    editQuestionOptionValue,
    addQuestionOption,
    deleteQuestionOption,
    changeQuestionType,
  })(QuestionEditor);

