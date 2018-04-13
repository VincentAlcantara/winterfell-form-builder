import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup, Button, ButtonGroup, Row, Col } from 'react-bootstrap';
import { fromJS } from 'immutable';
import { saveConditionalQuestion, deleteConditionalQuestion } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';
import { AddConditionalQuestionButton, DeleteConditionalQuestionButton } from '../FormMenu/';

class ConditionalQuestionEditor extends PureComponent {
  static propTypes = {
    conditionalQuestions: PropTypes.object,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
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
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      conditionalQuestions: nextProps.conditionalQuestions.toJS(),
    });
  }

  onChange(event, index) {
    const { name, value } = event.target;
    const copyConditionalQuestions = Object.assign({}, this.state.conditionalQuestions);
    copyConditionalQuestions[index][name] = value;
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
      type,
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
      type,
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
    return (this.props.conditionalQuestions.map((conditionalQuestion, ix) => (
      <div key={ix}>
        <FormGroup>
          <FieldGroup
            id="questionId"
            name="questionId"
            label={`Conditional Question ID ${ix + 1}:`}
            onChange={e => this.onChange(e, ix)}
            value={this.state.conditionalQuestions[ix].questionId}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="question"
            name="question"
            label={`Conditional Question ${ix + 1}:`}
            onChange={e => this.onChange(e, ix)}
            value={this.state.conditionalQuestions[ix].question}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="text"
            name="text"
            label={`Conditional Question Pre Text ${ix + 1}:`}
            onChange={e => this.onChange(e, ix)}
            value={this.state.conditionalQuestions[ix].text}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="postText"
            name="postText"
            label={`Conditional Question Post Text ${ix + 1}:`}
            onChange={e => this.onChange(e, ix)}
            value={this.state.conditionalQuestions[ix].postText}
          />
        </FormGroup>
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
      </div>
    ))
    );
  }

  render() {
    return (
      <Row className="winterfell-form-builder-conditional-questions alert-info">
        <Col xs={12}>
          <h6>
            {`Option '${this.props.text}' Conditional Questions:`}
          </h6>
          <h6><i>Display these questions if this option is selected</i></h6>
          { this.getConditionalQuestions() }
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

