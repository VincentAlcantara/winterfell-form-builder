import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
      questionInputOptions: nextProps.questionInputOptions,
    });
  }

  onOptionTextChange(event, index) {
    const { path } = this.props;
    const questionInputOptions = Object.assign({}, this.state.questionInputOptions);
    questionInputOptions[index].text = event.target.value;
    this.setState({ questionInputOptions });
    this.props.editQuestionOptionText([...path, 'input', 'options', index], event.target.value);
  }

  onOptionValueChange(event, index) {
    const { path } = this.props;
    const questionInputOptions = Object.assign({}, this.state.questionInputOptions);
    questionInputOptions[index].value = event.target.value;
    this.setState({ questionInputOptions });
    this.props.editQuestionOptionValue([...path, 'input', 'options', index], event.target.value);
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
    const { questionOptionText, questionOptionValue } = this.state;
    const key = Object.assign([], this.props.path);
    key.push('input');
    key.push('options');
    this.props.addQuestionOption(key, questionOptionText, questionOptionValue);
    this.setState({ questionOptionText: '', questionOptionValue: '' });
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
      path,
    } = this.props;

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
              <div className="input-group winterfell-form-builder-conditional-question">
                <input
                  className="form-control"
                  type="text"
                  name={this.state.questionInputOptions[ix].text}
                  value={this.state.questionInputOptions[ix].text}
                  onChange={event => this.onOptionTextChange(event, ix)}
                />
                <input
                  className="form-control"
                  type="text"
                  name={this.state.questionInputOptions[ix].value}
                  value={this.state.questionInputOptions[ix].value}
                  onChange={event => this.onOptionValueChange(event, ix)}
                />
                <div>
                  <DeleteQuestionOptionButton
                    onDeleteQuestionOption={() => this.props.deleteQuestionOption([...path, 'input', 'options', ix])}
                  />
                </div>
                <div>
                  <button
                    type="button"
                    onClick={event => this.onShowConditonalClick(ix, event)}
                    className="btn btn-warning"
                    id="showConditionalPageButton"
                  >
                    {this.state.showConditionalPage && !this.state.showConditionalPage[ix] &&
                    <i className="material-icons" id="showConditionalPage" >share</i>}
                    {this.state.showConditionalPage && this.state.showConditionalPage[ix] &&
                    <i className="material-icons" id="showConditionalPage" >remove_circle </i>}
                  </button>
                </div>
                <div>
                  <button
                    type="button"
                    id="showConditionalQuestionButton"
                    onClick={event => this.onShowConditonalClick(ix, event)}
                    className="btn btn-dark"
                  >
                    {this.state.showConditionalQuestions &&
                    !this.state.showConditionalQuestions[ix] &&
                    <i className="material-icons" id="showConditionalPage" >menu</i>}
                    {this.state.showConditionalQuestions &&
                    this.state.showConditionalQuestions[ix] &&
                    <i className="material-icons" id="showConditionalPage" >remove_circle </i>}
                  </button>
                </div>

                {this.state.showConditionalPage[ix] &&
                  <ConditionalPageEditor
                    questionOptionIndex={ix}
                    questionId={questionId}
                    text={this.state.questionInputOptions[ix].text}
                  />
                }
                {this.state.showConditionalQuestions[ix] &&
                  <ConditionalQuestionEditor
                    parentPath={[...path, 'input', 'options', ix]}
                    parentOptionText={this.state.questionInputOptions[ix].text}
                  />
                }
              </div>
            </div>))
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

ConditionalQuestionOptionEditor.propTypes = {
  questionInputOptions: PropTypes.array.isRequired,
  questionId: PropTypes.string.isRequired,
  editQuestionOptionText: PropTypes.func.isRequired,
  editQuestionOptionValue: PropTypes.func.isRequired,
  addQuestionOption: PropTypes.func.isRequired,
  deleteQuestionOption: PropTypes.func.isRequired,
  path: PropTypes.array.isRequired,
};

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

