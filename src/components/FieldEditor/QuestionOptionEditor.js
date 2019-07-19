import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, InputGroup, FormControl, Glyphicon } from 'react-bootstrap';
import DeleteQuestionOptionButton from '../FormMenu/DeleteQuestionOptionButton';
import ConditionalPageEditor from './ConditionalPageEditor';
import ConditionalQuestionEditor from './ConditionalQuestionEditor';
import AddQuestionOptionButton from '../FormMenu/AddQuestionOptionButton';
import {
  editQuestionOptionText,
  editQuestionOptionValue,
  addQuestionOption,
  deleteQuestion,
  deleteQuestionOption,
  changeQuestionType,
  changeCurrentEditingField,
  updateNextQuestionTarget,
} from '../../actions/winterfellFormBuilderActions';

class QuestionOptionEditor extends PureComponent {
  static propTypes = {
    questionInputOptions: PropTypes.object.isRequired,
    questionId: PropTypes.string.isRequired,
    currentQuestionPanelIndex: PropTypes.number.isRequired,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
    editQuestionOptionText: PropTypes.func.isRequired,
    editQuestionOptionValue: PropTypes.func.isRequired,
    deleteQuestionOption: PropTypes.func.isRequired,
    addQuestionOption: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    const {
      questionInputOptions,
    } = props;

    this.state = {
      questionInputOptions: questionInputOptions ? questionInputOptions.toJS() : [],
      editQuestionId: true,
      showConditionalPage: questionInputOptions ? new Array(questionInputOptions.count()) : [],
      showConditionalQuestions: questionInputOptions ? new Array(questionInputOptions.count()) : [],
      questionOptionText: '',
      questionOptionValue: '',
    };

    this.onOptionTextChange = this.onOptionTextChange.bind(this);
    this.onOptionValueChange = this.onOptionValueChange.bind(this);
    this.onShowConditonalClick = this.onShowConditonalClick.bind(this);
    this.onAddOption = this.onAddOption.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      questionInputOptions: nextProps.questionInputOptions.toJS(),
    });
  }

  onOptionTextChange(event, index) {
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    const questionInputOptions = Object.assign([], this.state.questionInputOptions);
    questionInputOptions[index].text = event.target.value;
    this.setState({ questionInputOptions });
    const path = ['schema', 'questionSets', currentQuestionSetIndex, 'questions', currentQuestionIndex, 'input', 'options', index];
    this.props.editQuestionOptionText(path, event.target.value);
  }

  onOptionValueChange(event, index) {
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    const questionInputOptions = Object.assign([], this.state.questionInputOptions);
    questionInputOptions[index].value = event.target.value;
    this.setState({ questionInputOptions });
    const path = ['schema', 'questionSets', currentQuestionSetIndex, 'questions', currentQuestionIndex, 'input', 'options', index];
    this.props.editQuestionOptionValue(path, event.target.value);
  }

  onDeleteQuestionOption(index) {
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    const path = ['schema', 'questionSets', currentQuestionSetIndex, 'questions', currentQuestionIndex, 'input', 'options', index];
    this.props.deleteQuestionOption(path);
  }
  onAddOptionChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onAddOption() {
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    const { questionOptionText, questionOptionValue } = this.state;
    const key = ['schema', 'questionSets', currentQuestionSetIndex, 'questions',
      currentQuestionIndex, 'input', 'options'];
    this.props.addQuestionOption(key, questionOptionText, questionOptionValue);
    this.setState({ questionOptionText: '', questionOptionValue: '' });
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

  render() {
    const {
      questionInputOptions,
      questionId,
      currentQuestionPanelIndex,
      currentQuestionSetIndex,
      currentQuestionIndex,
    } = this.props;
    return (
      <div>
        { questionInputOptions &&
          <b>Options</b>
        }
        {/* { questionInputOptions &&
          questionInputOptions.toJS().map((option, ix) => ( */}
        {this.state.questionInputOptions &&
          this.state.questionInputOptions.map((option, ix) => {
            const currentPath = ['schema', 'questionSets', currentQuestionSetIndex, 'questions', currentQuestionIndex, 'input', 'options', ix];
            return (
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
                      onDeleteQuestionOption={() => this.onDeleteQuestionOption(ix)}
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
                      className="btn btn-dark"
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
                      questionId={questionId}
                      currentQuestionPanelIndex={currentQuestionPanelIndex}
                      currentQuestionSetIndex={currentQuestionSetIndex}
                      currentQuestionIndex={currentQuestionIndex}
                      text={this.state.questionInputOptions[ix].text}
                    />
                  }
                  {this.state.showConditionalQuestions[ix] &&
                    <ConditionalQuestionEditor
                      parentPath={currentPath}
                      parentOptionText={this.state.questionInputOptions[ix].text}
                    />
                  }
                </InputGroup>
              </div>);
          })
        }
        <br />
        <div>
          <AddQuestionOptionButton
            questionOptionText={this.state.questionOptionText}
            questionOptionValue={this.state.questionOptionValue}
            onChange={e => this.onAddOptionChange(e)}
            onClick={this.onAddOption}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    editQuestionOptionText,
    editQuestionOptionValue,
    addQuestionOption,
    deleteQuestion,
    deleteQuestionOption,
    changeQuestionType,
    changeCurrentEditingField,
    updateNextQuestionTarget,
  })(QuestionOptionEditor);

