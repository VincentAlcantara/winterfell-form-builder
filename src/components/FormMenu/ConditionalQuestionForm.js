import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Button, FormGroup } from 'react-bootstrap';
import { addConditionalQuestion } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';
import SelectInput from '../InputTypes/SelectInput';
import { INPUT_TYPE_OPTIONS } from '../../common/constants';


class ConditionalQuestionForm extends Component {
  static propTypes = {
    addConditionalQuestion: PropTypes.func.isRequired,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
    questionOptionIndex: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      questionId: '',
      question: '',
      questionText: '',
      questionType: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onSelect(type) {
    this.setState({ questionType: type });
  }

  onClose(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  onFormUpdate(e) {
    e.preventDefault();
    const { currentQuestionSetIndex, currentQuestionIndex, questionOptionIndex } = this.props;
    const { questionId, question, questionText, questionType } = this.state;
    this.props.addConditionalQuestion(
      currentQuestionSetIndex,
      currentQuestionIndex,
      questionOptionIndex,
      questionId,
      question,
      questionText,
      questionType,
    );
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Row className="winterfell-form-builder-conditional-questions">
        <Col xs={12}>
          <b>
            Conditional Questions
          </b>
          <form>
            <FormGroup>
              <FieldGroup
                id="questionId"
                name="questionId"
                label="Question ID"
                onChange={this.onChange}
                placeholder="(optional)"
                value={this.state.questionId}
              />
            </FormGroup>
            <FormGroup>
              <FieldGroup
                id="question"
                name="question"
                label="Enter Question"
                onChange={this.onChange}
                placeholder=""
                value={this.state.question}
              />
            </FormGroup>
            <FormGroup>
              <FieldGroup
                id="questionText"
                name="questionText"
                label="Enter Question Text"
                onChange={this.onChange}
                placeholder=""
                value={this.state.questionText}
              />
            </FormGroup>
            <FormGroup>
              <label htmlFor="questionType">
                Select Question Type
              </label>
              <SelectInput
                id="questionType"
                labelId="questionType"
                options={INPUT_TYPE_OPTIONS}
                onSelect={this.onSelect}
              />
            </FormGroup>
          </form>
          <Button
            bsStyle="danger"
            onClick={() => { this.setState({ showModal: false }); }}
          >Delete</Button>
          <Button
            bsStyle="primary pull-right"
            onClick={this.onFormUpdate}
          >Save</Button>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    questionOptionIndex: ownProps.questionOptionIndex,
  };
}
export default connect(mapStateToProps, { addConditionalQuestion })(ConditionalQuestionForm);

