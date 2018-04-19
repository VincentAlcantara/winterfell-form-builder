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
    parentOptionText: PropTypes.string.isRequired,
    currentQuestionPanelIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
    questionOptionIndex: PropTypes.number.isRequired,
    saveConditionalQuestion: PropTypes.func.isRequired,
    deleteConditionalQuestion: PropTypes.func.isRequired,
    parentPath: PropTypes.array.isRequired,
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

  onSaveConditionalQuestion(conditionalQuestionIndex, path) {
    const {
      questionId,
      question,
      text,
      postText,
      input,
    } = this.state.conditionalQuestions[conditionalQuestionIndex];
    const newPath = Object.assign([], path);
    newPath.push('conditionalQuestions');
    newPath.push(conditionalQuestionIndex);
    this.props.saveConditionalQuestion(
      newPath,
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
      const conditionalPath = Object.assign([], this.props.parentPath);
      conditionalPath.push('conditionalQuestions');
      conditionalPath.push(ix);
      return ( // return #2
        <div key={ix}>
          <h6>path:{`${conditionalPath}`}</h6>
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
            <ConditionalQuestionOptionEditor
              questionInputOptions={input.options}
              questionId={questionId}
              currentQuestionPanelIndex={this.props.currentQuestionPanelIndex}
              currentQuestionSetIndex={this.props.currentQuestionSetIndex}
              path={conditionalPath}
            />
          }
          <br />
          <br />
          <ButtonGroup>
            <DeleteConditionalQuestionButton
              path={conditionalPath}
              deleteConditionalQuestion={this.props.deleteConditionalQuestion}
            />
            <Button
              className="btn btn-warning"
              title="save this conditional question"
              onClick={() => this.onSaveConditionalQuestion(ix, this.props.parentPath)}
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
            {`Option '${this.props.parentOptionText}' Conditional Questions:`}
          </h6>
          <h6>
            {`path:${this.props.parentPath}`}
          </h6>
          <h6><i>Display these questions if this option is selected</i></h6>
          { this.props.conditionalQuestions && this.getConditionalQuestions() }
        </Col>
        <Col xs={12}>
          <br />
          <AddConditionalQuestionButton
            path={this.props.parentPath}
          />
          <br />
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    conditionalQuestions: state.getIn(['form', ...ownProps.parentPath, 'conditionalQuestions']),
  };
}

export default connect(
  mapStateToProps,
  { saveConditionalQuestion, deleteConditionalQuestion })(ConditionalQuestionEditor);

