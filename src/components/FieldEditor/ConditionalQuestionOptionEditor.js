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

class ConditionalQuestionOptionEditor extends PureComponent {
  static propTypes = {
    questionInputOptions: PropTypes.object.isRequired,
    questionId: PropTypes.string.isRequired,
    currentQuestionPanelIndex: PropTypes.number.isRequired,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
    editQuestionOptionText: PropTypes.func.isRequired,
    editQuestionOptionValue: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);

    const {
      questionInputOptions,
    } = props;

    this.state = {
      questionInputOptions: questionInputOptions || [],
      editQuestionId: true,
      showConditionalPage: questionInputOptions ? new Array(questionInputOptions.length) : [],
      showConditionalQuestions: questionInputOptions ? new Array(questionInputOptions.length) : [],
      questionOptionText: '',
      questionOptionValue: '',
    };

    this.onOptionTextChange = this.onOptionTextChange.bind(this);
    this.onOptionValueChange = this.onOptionValueChange.bind(this);
    this.onShowConditonalClick = this.onShowConditonalClick.bind(this);
    this.onAddOptionChange = this.onAddOptionChange.bind(this);
    this.onAddOption = this.onAddOption.bind(this);
    this.onDeleteOption = this.onDeleteOption.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      questionInputOptions: nextProps.questionInputOptions.toJS(),
    });
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

  onAddOptionChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onAddOption() {
    const newOption = {
      text: this.state.questionOptionText,
      value: this.state.questionOptionValue,
    };

    const copyConditionalQuestions = Object.assign([], this.state.questionInputOptions);
    copyConditionalQuestions.push(newOption);
    this.setState({ questionInputOptions: copyConditionalQuestions });
    // this.props.addQuestionOption
  }

  onDeleteOption(index) {
    const copyConditionalQuestions = Object.assign([], this.state.questionInputOptions);
    copyConditionalQuestions.splice(index, 1);
    this.setState({ questionInputOptions: copyConditionalQuestions });
  }
  render() {
    const {
      questionInputOptions,
      questionId,
      currentQuestionPanelIndex,
      currentQuestionSetIndex,
      currentQuestionIndex,
      path,
    } = this.props;
    const newPath = Object.assign([], path);
    newPath.push('input');
    newPath.push('options');
    return (
      <div>
        { questionInputOptions &&
          <p><b>Options</b></p>
        }
        {!this.state.questionInputOptions.length &&
          <div>No options</div>
        }
        {this.state.questionInputOptions &&
          this.state.questionInputOptions.map((option, ix) => (
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
                    questionId={questionId}
                    currentQuestionPanelIndex={currentQuestionPanelIndex}
                    currentQuestionSetIndex={currentQuestionSetIndex}
                    currentQuestionIndex={currentQuestionIndex}
                    text={this.state.questionInputOptions[ix].text}
                  />
                }
                {this.state.showConditionalQuestions[ix] &&
                  newPath.push('conditionalQuestions') && newPath.push(ix) &&
                  <ConditionalQuestionEditor
                    currentQuestionPanelIndex={currentQuestionPanelIndex}
                    currentQuestionSetIndex={currentQuestionSetIndex}
                    currentQuestionIndex={currentQuestionIndex}
                    questionOptionIndex={ix}
                    path={newPath}
                  />
                }
              </InputGroup>
            </div>))
            }
        <br />
        <div>
          <AddQuestionOptionButton
            questionOptionText={this.state.questionOptionText}
            questionOptionValue={this.state.questionOptionValue}
            onChange={e => this.onAddOptionChange(e)}
            onClick={() => this.onAddOption(currentQuestionSetIndex,
              currentQuestionIndex, this.state.questionOptionText, this.state.questionOptionValue)}
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
  })(ConditionalQuestionOptionEditor);

