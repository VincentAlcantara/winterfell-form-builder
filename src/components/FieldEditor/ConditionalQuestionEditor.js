import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup, Button, ButtonGroup, Row, Col } from 'react-bootstrap';
import { fromJS } from 'immutable';
import { saveConditionalQuestion, deleteConditionalQuestion } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';
import { AddConditionalQuestionButton, DeleteConditionalQuestionButton } from '../FormMenu/';
import SelectInput from '../InputTypes/SelectInput';
import ConditionalQuestionOptionEditor from './ConditionalQuestionOptionEditor';
import { INPUT_TYPE_OPTIONS } from '../../common/constants';

class ConditionalQuestionEditor extends PureComponent {
  static propTypes = {
    conditionalQuestions: PropTypes.object,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    currentQuestionPanelIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
    questionOptionIndex: PropTypes.number.isRequired,
    saveConditionalQuestion: PropTypes.func.isRequired,
    deleteConditionalQuestion: PropTypes.func.isRequired,
  }

  static defaultProps = {
    conditionalQuestions: fromJS([]),
  }

  constructor(props) {
    super(props);

    const {
      conditionalQuestions,
    } = props;

    this.state = {
      conditionalQuestions: conditionalQuestions.toJS(),
    };

    this.onChange = this.onChange.bind(this);
    this.onSaveConditionalQuestion = this.onSaveConditionalQuestion.bind(this);
    this.onDeleteConditionalQuestion = this.onDeleteConditionalQuestion.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      conditionalQuestions: nextProps.conditionalQuestions.toJS(),
    });
  }

  onChange(event, index) {
    const { name, value } = event.target;
    const copyConditionalQuestions = Object.assign([], this.state.conditionalQuestions);
    copyConditionalQuestions[index][name] = value;
    this.setState({ conditionalQuestions: copyConditionalQuestions });
  }

  onSelect(questionType, index) {
    const copyConditionalQuestions = Object.assign([], this.state.conditionalQuestions);
    copyConditionalQuestions[index].input.type = questionType;
    this.setState({ conditionalQuestions: copyConditionalQuestions });
  }

  onSaveConditionalQuestion(conditionalQuestionIndex) {
    const {
      currentQuestionSetIndex,
      currentQuestionIndex,
      questionOptionIndex,
    } = this.props;
    const {
      questionId,
      question,
      text,
      postText,
      input,
    } = this.state.conditionalQuestions[conditionalQuestionIndex];

    this.props.saveConditionalQuestion(
      currentQuestionSetIndex,
      currentQuestionIndex,
      questionOptionIndex,
      conditionalQuestionIndex,
      questionId,
      question,
      text,
      postText,
      input.type,
      input.options,
    );
  }

  onDeleteConditionalQuestion(conditionalQuestionIndex) {
    const {
      currentQuestionSetIndex,
      currentQuestionIndex,
      questionOptionIndex,
    } = this.props;

    this.props.deleteConditionalQuestion(
      currentQuestionSetIndex,
      currentQuestionIndex,
      questionOptionIndex,
      conditionalQuestionIndex,
    );
  }

  getConditionalQuestions() {
    return (this.state.conditionalQuestions.map((conditionalQuestion, ix) => {
      const {
        questionId,
        question,
        text,
        postText,
        input,
      } = conditionalQuestion;
      return ( // return #2
        <div key={ix}>
          <FormGroup>
            <FieldGroup
              id="questionId"
              name="questionId"
              label={`Conditional Question ID ${ix + 1}:`}
              onChange={e => this.onChange(e, ix)}
              value={questionId}
            />
          </FormGroup>
          <FormGroup>
            <FieldGroup
              id="question"
              name="question"
              label={`Conditional Question ${ix + 1}:`}
              onChange={e => this.onChange(e, ix)}
              value={question}
            />
          </FormGroup>
          <FormGroup>
            <FieldGroup
              id="text"
              name="text"
              label={`Conditional Question Pre Text ${ix + 1}:`}
              onChange={e => this.onChange(e, ix)}
              value={text}
            />
          </FormGroup>
          <FormGroup>
            <FieldGroup
              id="postText"
              name="postText"
              label={`Conditional Question Post Text ${ix + 1}:`}
              onChange={e => this.onChange(e, ix)}
              value={postText}
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
              onSelect={e => this.onSelect(e, ix)}
              displayValue={input.type}
            />
          </FormGroup>
          {
            (input.type === 'checkboxOptionsInput' ||
            input.type === 'selectInput' ||
            input.type === 'radioOptionsInput') &&
            input.options &&
            this.props.currentQuestionIndex > -1 &&
            <ConditionalQuestionOptionEditor
              questionInputOptions={input.options}
              questionId={questionId}
              currentQuestionPanelIndex={this.props.currentQuestionPanelIndex}
              currentQuestionSetIndex={this.props.currentQuestionSetIndex}
              currentQuestionIndex={this.props.currentQuestionIndex}
            />
          }
          <br />
          <br />
          <ButtonGroup>
            <DeleteConditionalQuestionButton
              currentQuestionSetIndex={this.props.currentQuestionSetIndex}
              currentQuestionIndex={this.props.currentQuestionIndex}
              questionOptionIndex={this.props.questionOptionIndex}
              conditionalQuestionIndex={ix}
            />
            <Button
              className="btn btn-warning"
              title="save this conditional question"
              onClick={() => this.onSaveConditionalQuestion(ix)}
            >save
            </Button>
          </ButtonGroup>
          <br />
        </div>); // end of return #2
    }));  // end of return #1
  }

  render() {
    return (
      <Row className="winterfell-form-builder-conditional-questions alert-info">
        <Col xs={12}>
          <h6>
            {`Option '${this.props.text}' Conditional Questions:`}
          </h6>
          <h6><i>Display these questions if this option is selected</i></h6>
          { this.props.conditionalQuestions && this.getConditionalQuestions() }
        </Col>
        <Col xs={12}>
          <br />
          <AddConditionalQuestionButton
            currentQuestionSetIndex={this.props.currentQuestionSetIndex}
            currentQuestionIndex={this.props.currentQuestionIndex}
            questionOptionIndex={this.props.questionOptionIndex}
          />
          <br />
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    conditionalQuestions: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'input', 'options', ownProps.questionOptionIndex, 'conditionalQuestions']),
    text: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'input', 'options', ownProps.questionOptionIndex, 'text']),
  };
}

export default connect(
  mapStateToProps,
  { saveConditionalQuestion, deleteConditionalQuestion })(ConditionalQuestionEditor);

