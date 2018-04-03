import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import { Row, Col, Button, InputGroup, FormGroup } from 'react-bootstrap';
import { addConditionalQuestion, updateNextQuestionTarget, resetNextQuestionTarget } from '../../actions/winterfellFormBuilderActions';
import SelectInput from '../InputTypes/SelectInput';

class ConditionalPageForm extends Component {
  static propTypes = {
    updateNextQuestionTarget: PropTypes.func.isRequired,
    resetNextQuestionTarget: PropTypes.func.isRequired,
    questionOptionIndex: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    formPanels: PropTypes.object.isRequired,
    currentQuestionPanelIndex: PropTypes.number.isRequired,
    questionId: PropTypes.string.isRequired,
    question: PropTypes.string,
    value: PropTypes.string,
    conditions: PropTypes.object,
  }

  static defaultProps = {
    question: '',
    value: '',
    questionTarget: '',
    conditions: fromJS([]),
  };

  constructor(props) {
    super(props);
    this.state = {
      questionTarget: '',
    };

    this.onSelect = this.onSelect.bind(this);
    this.nextButtonTargetOptions = this.nextButtonTargetOptions.bind(this);
    this.initialTarget = this.initialTarget.bind(this);
    this.onResetNextQuestionTarget = this.onResetNextQuestionTarget.bind(this);
  }

  onSelect(page) {
    this.setState({ questionTarget: page });
    const { currentQuestionPanelIndex, questionId, value } = this.props;
    this.props.updateNextQuestionTarget(
      currentQuestionPanelIndex,
      questionId,
      value,
      page,
      this.props.questionOptionIndex,
    );
  }

  onClose(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  onResetNextQuestionTarget() {
    const { currentQuestionPanelIndex, value } = this.props;
    this.props.resetNextQuestionTarget(
      currentQuestionPanelIndex,
      value,
    );
  }

  initialTarget() {
    const { conditions, value } = this.props;
    const conditionIndex = conditions.findIndex(condition => condition.get('value') === value);
    if (conditionIndex !== -1) {
      return conditions.getIn([conditionIndex, 'target']);
    }
    return '';
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
            Conditional Page for Option &#34;{this.props.text}&#34;&#58;
          </h5>
          <FormGroup>
            <p><b>If question <i>{this.props.question}</i> is: <i>{this.props.value}</i></b>,</p>
            <label htmlFor="questionTarget">Go To Page</label>
            <InputGroup>
              <SelectInput
                id="questionTarget"
                labelId="questionTarget"
                options={this.nextButtonTargetOptions()}
                onSelect={this.onSelect}
                initialValue={this.initialTarget()}
                value={this.state.questionTarget}
              />
              <InputGroup.Button>
                <Button
                  label="find"
                  className="btn btn-danger"
                  onClick={this.onResetNextQuestionTarget}
                >reset
                </Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    text: ownProps.text,
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    questionId: ownProps.questionId,
    question: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'question']),
    value: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex,
      'questions', ownProps.currentQuestionIndex, 'input', 'options', ownProps.questionOptionIndex, 'value']),
    conditions: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex,
      'action', 'conditions']),
  };
}

export default connect(
  mapStateToProps,
  {
    addConditionalQuestion,
    updateNextQuestionTarget,
    resetNextQuestionTarget,
  })(ConditionalPageForm);
