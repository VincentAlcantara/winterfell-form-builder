import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup, Button, Glyphicon, ButtonGroup, Row, Col } from 'react-bootstrap';
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
import { AddConditionalQuestionButton } from '../FormMenu/';

class ConditionalQuestionEditor extends PureComponent {
  static propTypes = {
    conditionalQuestions: PropTypes.object,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
    questionOptionIndex: PropTypes.number.isRequired,
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

  getConditionalQuestions() {
    return (this.props.conditionalQuestions.map((conditionalQuestion, ix) => (
      <div key={ix}>
        <br />
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
            id="post"
            name="post"
            label={`Conditional Question Post Text ${ix + 1}:`}
            onChange={e => this.onChange(e, ix)}
            value={this.state.conditionalQuestions[ix].post}
          />
        </FormGroup>
        <ButtonGroup>
          <Button
            className="btn btn-danger"
            title="delete this conditional question"
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >delete
          </Button>
          <Button
            className="btn btn-warning"
            title="save this conditional question"
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >save
          </Button>
        </ButtonGroup>
      </div>
    ))
    );
  }

  render() {
    return (
      <Row className="winterfell-form-builder-conditional-questions alert-info">
        <Col xs={12}>
          <h6>
            Conditional Questions:
          </h6>
          <b><i>Display these questions if this option is selected</i></b>
          { this.getConditionalQuestions() }
        </Col>
        <Col xs={12}>
          <AddConditionalQuestionButton
            currentQuestionSetIndex={this.props.currentQuestionSetIndex}
            currentQuestionIndex={this.props.currentQuestionIndex}
            questionOptionIndex={this.props.questionOptionIndex}
          />
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    conditionalQuestions: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'input', 'options', ownProps.questionOptionIndex, 'conditionalQuestions']),
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
  })(ConditionalQuestionEditor);

