import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import {
  editQuestionId,
  editQuestion,
  editQuestionText,
  editQuestionPostText,
  editQuestionOptionText,
  editQuestionOptionValue,
  addQuestionOption,
  deleteQuestion,
  deleteQuestionOption,
  changeQuestionType,
  changeCurrentEditingField,
  updateNextQuestionTarget,
} from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';
import DeleteQuestionButton from '../FormMenu/DeleteQuestionButton';
import AddQuestionButton from '../FormMenu/AddQuestionButton';
import SelectInput from '../InputTypes/SelectInput';
import ButtonBarEditor from './ButtonBarEditor';
import { INPUT_TYPE_OPTIONS } from '../../common/constants';
import QuestionOptionEditor from './QuestionOptionEditor';

class QuestionEditor extends PureComponent {
  constructor(props) {
    super(props);
    const {
      questionSetId,
      questionId,
      question,
      questionText,
      questionPostText,
      questionInputType,
      questionInputOptions,
      questionTarget,
      questionTargetMatch,
    } = props;

    this.state = {
      questionSetId,
      questionId,
      question,
      questionText,
      questionPostText,
      questionInputType,
      questionInputOptions: questionInputOptions.toJS(),
      editQuestionId: true,
      showConditionalPage: new Array(questionInputOptions.count()),
      showConditionalQuestions: new Array(questionInputOptions.count()),
      questionTarget,
      questionTargetMatch,
    };

    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onEditQuestionIdClick = this.onEditQuestionIdClick.bind(this);
    this.onUpdateNextQuestionTarget = this.onUpdateNextQuestionTarget.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      questionId: nextProps.questionId,
      question: nextProps.question,
      questionText: nextProps.questionText,
      questionPostText: nextProps.questionPostText,
      questionInputType: nextProps.questionInputType,
      questionInputOptions: nextProps.questionInputOptions.toJS(),
      questionTarget: nextProps.questionTarget,
      questionTargetMatch: nextProps.questionTargetMatch,
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
    if (questionType !== '') {
      this.props.changeQuestionType(currentQuestionSetIndex, currentQuestionIndex, questionType);
    }
  }

  onEditQuestionIdClick() {
    this.setState({ editQuestionId: !this.state.editQuestionId });
  }

  onUpdateNextQuestionTarget() {
    const { currentQuestionPanelIndex, questionId } = this.props;
    this.props.updateNextQuestionTarget(
      currentQuestionPanelIndex,
      questionId,
      this.state.questionTargetMatch,
      this.state.questionTarget,
    );
  }

  render() {
    const {
      questionSetId,
      questionId,
      question,
      questionText,
      questionPostText,
      questionInputType,
      questionInputOptions,
      currentQuestionPanelIndex,
    } = this.props;

    return (
      <form>
        { this.props.currentQuestionIndex > -1 &&
        <div>
          <div className="form-group">
            <FieldGroup
              id="questionSetId"
              name="questionSetId"
              label="Question Set ID"
              onChange={this.onChange}
              placeholder={questionSetId}
              value={this.state.questionSetId}
              disabled
            />
          </div>
          <div className="form-group">
            <FieldGroup
              id="questionId"
              name="questionId"
              label="Question ID"
              onChange={this.onChange}
              placeholder={questionId}
              value={this.state.questionId}
              disabled={this.state.editQuestionId}
            />
          </div>
          <div className="form-group">
            <label htmlFor="edit-question-id" id="edit-question-id-label">
              <input
                id="edit-question-id"
                type="checkbox"
                onClick={this.onEditQuestionIdClick}
              />
              &nbsp;edit question id (not recommended)
            </label>
          </div>
          <div className="form-group">
            <FieldGroup
              id="question"
              name="question"
              label="Question"
              onChange={this.onChange}
              placeholder={question}
              value={this.state.question}
            />
          </div>
          <div className="form-group">
            <FieldGroup
              id="questionText"
              name="questionText"
              label="Question Pre Text"
              placeholder={questionText}
              onChange={this.onChange}
              value={this.state.questionText}
            />
          </div>
          <div className="form-group">
            <FieldGroup
              id="questionPostText"
              name="questionPostText"
              label="Question Post Text"
              placeholder={questionPostText}
              onChange={this.onChange}
              value={this.state.questionPostText}
            />
          </div>
          <div className="form-group">
            <label htmlFor="questionInputType">
              Question Type
            </label>
            <SelectInput
              id="questionInputType"
              labelId="questionInputType"
              options={INPUT_TYPE_OPTIONS}
              onSelect={this.onSelect}
              displayValue={this.props.questionInputType}
            />
          </div>
        </div>
        }
        {
          (questionInputType === 'checkboxOptionsInput' ||
          questionInputType === 'selectInput' ||
          questionInputType === 'radioOptionsInput') &&
          questionInputOptions &&
          this.props.currentQuestionIndex > -1 &&
          <QuestionOptionEditor
            questionInputOptions={this.props.questionInputOptions}
            questionId={this.props.questionId}
            currentQuestionPanelIndex={this.props.currentQuestionPanelIndex}
            currentQuestionSetIndex={this.props.currentQuestionSetIndex}
            currentQuestionIndex={this.props.currentQuestionIndex}
          />
        }
        <ButtonBarEditor
          currentQuestionPanelIndex={currentQuestionPanelIndex}
        />
        <div className="btn-group">
          { this.props.currentQuestionIndex > -1 &&
            <DeleteQuestionButton
              currentQuestionSetIndex={this.props.currentQuestionSetIndex}
              currentQuestionIndex={this.props.currentQuestionIndex}
            />
          }
          { this.props.currentQuestionIndex > -1 &&
          <AddQuestionButton
            questionSetId={this.props.questionSetId}
            currentQuestionSetIndex={this.props.currentQuestionSetIndex}
          />
          }
        </div>
        <br />
      </form>
    );
  }
}

QuestionEditor.propTypes = {
  editQuestionId: PropTypes.func.isRequired,
  editQuestion: PropTypes.func.isRequired,
  editQuestionText: PropTypes.func.isRequired,
  editQuestionPostText: PropTypes.func.isRequired,
  changeQuestionType: PropTypes.func.isRequired,
  updateNextQuestionTarget: PropTypes.func.isRequired,
  questionSetId: PropTypes.string.isRequired,
  questionId: PropTypes.string,
  question: PropTypes.string,
  questionText: PropTypes.string,
  questionPostText: PropTypes.string,
  questionInputType: PropTypes.string,
  questionInputOptions: PropTypes.object,
  currentQuestionSetIndex: PropTypes.number.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  questionTarget: PropTypes.string,
  questionTargetMatch: PropTypes.string,
  currentQuestionPanelIndex: PropTypes.number.isRequired,
};

QuestionEditor.defaultProps = {
  questionId: '',
  question: '',
  questionText: '',
  questionPostText: '',
  questionInputType: '',
  questionInputOptions: fromJS([]),
  questionTarget: '',
  questionTargetMatch: '',
};

function mapStateToProps(state, ownProps) {
  return {
    questionSetId: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questionSetId']),
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
    questionTarget: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex,
      'action', 'conditions', 0, 'target']),
    questionTargetMatch: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex,
      'action', 'conditions', 0, 'value']),
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
    deleteQuestion,
    deleteQuestionOption,
    changeQuestionType,
    changeCurrentEditingField,
    updateNextQuestionTarget,
  })(QuestionEditor);

