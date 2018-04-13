import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup, FormControl, Button, ButtonGroup, Glyphicon, InputGroup } from 'react-bootstrap';
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
import DeleteQuestionOptionButton from '../FormMenu/DeleteQuestionOptionButton';
import DeleteQuestionButton from '../FormMenu/DeleteQuestionButton';
import AddQuestionButton from '../FormMenu/AddQuestionButton';
import AddQuestionOptionButton from '../FormMenu/AddQuestionOptionButton';
import ConditionalPageEditor from './ConditionalPageEditor';
import ConditionalQuestionEditor from './ConditionalQuestionEditor';
import SelectInput from '../InputTypes/SelectInput';
import ButtonBarEditor from './ButtonBarEditor';
import { INPUT_TYPE_OPTIONS } from '../../common/constants';

class QuestionEditor extends PureComponent {
  static propTypes = {
    editQuestionId: PropTypes.func.isRequired,
    editQuestion: PropTypes.func.isRequired,
    editQuestionText: PropTypes.func.isRequired,
    editQuestionPostText: PropTypes.func.isRequired,
    editQuestionOptionText: PropTypes.func.isRequired,
    editQuestionOptionValue: PropTypes.func.isRequired,
    changeQuestionType: PropTypes.func.isRequired,
    addQuestionOption: PropTypes.func.isRequired,
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
  }

  static defaultProps = {
    questionId: '',
    question: '',
    questionText: '',
    questionPostText: '',
    questionInputType: '',
    questionInputOptions: fromJS([]),
    questionTarget: '',
    questionTargetMatch: '',
  }

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
    this.onOptionTextChange = this.onOptionTextChange.bind(this);
    this.onOptionValueChange = this.onOptionValueChange.bind(this);
    this.onAddQuestionOptionClick = this.onAddQuestionOptionClick.bind(this);
    this.onEditQuestionIdClick = this.onEditQuestionIdClick.bind(this);
    this.onShowConditonalClick = this.onShowConditonalClick.bind(this);
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

  onShowConditonalClick(index, event) {
    const showConditionalPageCopy = [...this.state.showConditionalPage];
    const showConditionalQuestionsCopy = [...this.state.showConditionalQuestions];
    const currentConditionalPageSelected =
      showConditionalPageCopy.findIndex(showCondition => showCondition);
    const currentConditionalQuestionSelected =
      showConditionalQuestionsCopy.findIndex(showCondition => showCondition);

    // Turn off the existing choices
    if (currentConditionalPageSelected !== -1) {
      showConditionalPageCopy[currentConditionalPageSelected] =
        !showConditionalPageCopy[currentConditionalPageSelected];
    }
    if (currentConditionalQuestionSelected !== -1) {
      showConditionalQuestionsCopy[currentConditionalQuestionSelected] =
        !showConditionalQuestionsCopy[currentConditionalQuestionSelected];
    }
    // Turn on the selected choice
    if ((event.target.id === 'showConditionalQuestion' || event.target.id === 'showConditionalQuestionButton')
      && index !== currentConditionalQuestionSelected) {
      showConditionalQuestionsCopy[index] = !showConditionalQuestionsCopy[index];
    }
    if ((event.target.id === 'showConditionalPage' || event.target.id === 'showConditionalPageButton')
      && index !== currentConditionalPageSelected) {
      showConditionalPageCopy[index] = !showConditionalPageCopy[index];
    }

    this.setState({
      showConditionalPage: showConditionalPageCopy,
      showConditionalQuestions: showConditionalQuestionsCopy,
    });
  }

  onDeleteOptionClick() {
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    const questionInputOptions = [];
    for (let i = 0; i < this.state.questionInputOptions.length; i += 1) {
      questionInputOptions.push(this.state.questionInputOptions[i]);
    }
    this.props.addQuestionOption(currentQuestionSetIndex, currentQuestionIndex);
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

  getQuestionOptions() {
    return (
      <div>
        { this.props.questionInputOptions &&
          this.props.questionInputOptions.size > 0 &&
          <tr>
            <th>Options</th>
          </tr>
        }
        { this.props.questionInputOptions &&
          this.props.questionInputOptions.toJS().map((option, ix) => (
            <div key={`${ix}`} >
              <InputGroup className="winterfell-form-builder-conditional-question">
                <FormControl
                  type="text"
                  name={this.state.questionInputOptions[ix].text}
                  value={this.state.questionInputOptions[ix].text}
                  onChange={event => this.onOptionTextChange(event, ix)}
                />
                <FormControl
                  type="text"
                  name={this.state.questionInputOptions[ix].value}
                  value={this.state.questionInputOptions[ix].value}
                  onChange={event => this.onOptionValueChange(event, ix)}
                />
                <InputGroup.Button>
                  <DeleteQuestionOptionButton
                    questionOptionIndex={ix}
                  />
                </InputGroup.Button>
                <InputGroup.Button>
                  <Button
                    onClick={event => this.onShowConditonalClick(ix, event)}
                    className="btn btn-warning"
                    id="showConditionalPageButton"
                  >
                    {this.state.showConditionalPage && !this.state.showConditionalPage[ix] &&
                    <Glyphicon glyph="glyphicon glyphicon-share-alt" id="showConditionalPage" />}
                    {this.state.showConditionalPage && this.state.showConditionalPage[ix] &&
                    <Glyphicon
                      glyph="glyphicon glyphicon glyphicon-minus-sign"
                      id="showConditionalPage"
                    />}
                  </Button>
                </InputGroup.Button>
                <InputGroup.Button>
                  <Button
                    id="showConditionalQuestionButton"
                    onClick={event => this.onShowConditonalClick(ix, event)}
                    className="btn btn-primary"
                  >
                    {this.state.showConditionalQuestions &&
                    !this.state.showConditionalQuestions[ix] &&
                    <Glyphicon
                      glyph="glyphicon glyphicon-menu-hamburger"
                      id="showConditionalQuestion"
                    />
                    }
                    {this.state.showConditionalQuestions &&
                    this.state.showConditionalQuestions[ix] &&
                    <Glyphicon
                      glyph="glyphicon glyphicon glyphicon-minus-sign"
                      id="showConditionalQuestion"
                    />}
                  </Button>
                </InputGroup.Button>

                {this.state.showConditionalPage[ix] &&
                  <ConditionalPageEditor
                    questionOptionIndex={ix}
                    questionId={this.props.questionId}
                    currentQuestionPanelIndex={this.props.currentQuestionPanelIndex}
                    currentQuestionSetIndex={this.props.currentQuestionSetIndex}
                    currentQuestionIndex={this.props.currentQuestionIndex}
                    text={this.state.questionInputOptions[ix].text}
                  />
                }
                {this.state.showConditionalQuestions[ix] &&
                  <ConditionalQuestionEditor
                    currentQuestionSetIndex={this.props.currentQuestionSetIndex}
                    currentQuestionIndex={this.props.currentQuestionIndex}
                    questionOptionIndex={ix}
                  />
                }
              </InputGroup>
            </div>))
            }

        <br />
        <table>
          <tbody>
            <tr>
              <td colSpan={4}>
                <AddQuestionOptionButton
                  questionInputOptions={this.state.questionInputOptions}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
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
          <FormGroup>
            <FieldGroup
              id="questionSetId"
              name="questionSetId"
              label="Question Set ID"
              onChange={this.onChange}
              placeholder={questionSetId}
              value={this.state.questionSetId}
              disabled
            />
          </FormGroup>
          <FormGroup>
            <FieldGroup
              id="questionId"
              name="questionId"
              label="Question ID"
              onChange={this.onChange}
              placeholder={questionId}
              value={this.state.questionId}
              disabled={this.state.editQuestionId}
            />
          </FormGroup>
          <FormGroup>
            <label htmlFor="edit-question-id" id="edit-question-id-label">
              <input
                id="edit-question-id"
                type="checkbox"
                onClick={this.onEditQuestionIdClick}
              />
              &nbsp;edit question id (not recommended)
            </label>
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
              label="Question Pre Text"
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
              Question Type
            </label>
            <SelectInput
              id="questionInputType"
              labelId="questionInputType"
              options={INPUT_TYPE_OPTIONS}
              onSelect={this.onSelect}
              displayValue={this.props.questionInputType}
            />
          </FormGroup>
        </div>
        }
        {
          (questionInputType === 'checkboxOptionsInput' ||
          questionInputType === 'selectInput' ||
          questionInputType === 'radioOptionsInput') &&
          questionInputOptions &&
          this.props.currentQuestionIndex > -1 &&
          this.getQuestionOptions()
        }
        <ButtonBarEditor
          currentQuestionPanelIndex={currentQuestionPanelIndex}
        />
        <ButtonGroup>
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
        </ButtonGroup>
        <br />
      </form>
    );
  }
}

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

