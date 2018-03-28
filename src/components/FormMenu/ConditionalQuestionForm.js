import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Button, InputGroup, FormGroup } from 'react-bootstrap';
import { addConditionalQuestion, updateNextQuestionTarget } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';
import SelectInput from '../InputTypes/SelectInput';
import { INPUT_TYPE_OPTIONS } from '../../common/constants';


class ConditionalQuestionForm extends Component {
  static propTypes = {
    addConditionalQuestion: PropTypes.func.isRequired,
    updateNextQuestionTarget: PropTypes.func.isRequired,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
    questionOptionIndex: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    formPanels: PropTypes.object.isRequired,
    currentQuestionPanelIndex: PropTypes.number.isRequired,
    questionId: PropTypes.string.isRequired,
    questionTarget: PropTypes.string,
  }

  static defaultProps = {
    questionTarget: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      questionId: '',
      question: '',
      questionText: '',
      questionType: '',
      questionTarget: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSelect = this.onSelect.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
    this.nextButtonTargetOptions = this.nextButtonTargetOptions.bind(this);
    this.onUpdateNextQuestionTarget = this.onUpdateNextQuestionTarget.bind(this);
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

  onUpdateNextQuestionTarget() {
    const { currentQuestionPanelIndex, questionId, text } = this.props;
    this.props.updateNextQuestionTarget(
      currentQuestionPanelIndex,
      questionId,
      text,
      this.state.questionTarget,
      this.props.questionOptionIndex,
    );
  }

  nextButtonTargetOptions = () => this.props.formPanels &&
  this.props.formPanels.toJS().map((formPanel) => {
    const option = {};
    option.text = formPanel.panelId;
    option.value = formPanel.panelId;
    return option;
  });

  render() {
    return (
      <Row className="winterfell-form-builder-conditional-questions">
        <Col xs={12}>
          <h5>
            Add Conditional Logic for Option &#34;{this.props.text}&#34;&#58;
          </h5>
          <FormGroup>
            <label htmlFor="questionTarget">Go To Page</label>
            <InputGroup>
              <SelectInput
                id="questionTarget"
                labelId="questionTarget"
                options={this.nextButtonTargetOptions()}
                onSelect={e => this.setState({ questionTarget: e })}
                initialValue={this.props.questionTarget}
              />
              <InputGroup.Button>
                <Button
                  label="find"
                  className="btn btn-primary btn-block"
                  onClick={this.onUpdateNextQuestionTarget}
                  disabled={!this.state.questionTarget}
                >save
                </Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Col>
        <Col xs={12}>
          <h5>
            Conditional Questions for Option &#34;{this.props.text}&#34;
          </h5>
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
          <Button
            className="btn-danger"
            onClick={() => { this.setState({ showModal: false }); }}
          >Delete</Button>
          <Button
            className="primary pull-right"
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
    text: ownProps.text,
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    currentQuestionPanelIndex: ownProps.currentQuestionPanelIndex,
    questionId: ownProps.questionId,
    questionTarget: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex,
      'action', 'conditions', ownProps.questionOptionIndex, 'target']),
  };
}

export default connect(
  mapStateToProps, { addConditionalQuestion, updateNextQuestionTarget })(ConditionalQuestionForm);

