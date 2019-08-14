import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import { Row, Col, Button, InputGroup, FormGroup } from 'react-bootstrap';
import { addConditionalQuestion, updateNextQuestionTarget, resetNextQuestionTarget } from '../../actions/winterfellFormBuilderActions';
import SelectInput from '../InputTypes/SelectInput';

class ConditionalPageEditor extends Component {
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

  // eslint-disable-next-line no-undef
  nextButtonTargetOptions = () => this.props.formPanels &&
  this.props.formPanels.toJS().map((formPanel) => {
    const option = {};
    option.text = formPanel.panelId;
    option.value = formPanel.panelId;
    return option;
  });

  render() {
    return (
      <Row className="winterfell-form-builder-conditional-page alert-warning">
        <Col xs={12}>
          <h6>
            {`Option '${this.props.text}' Conditional Page:`}
          </h6>
          <p><i>Go to this page if this is option selected.</i></p>
          <FormGroup>
            <InputGroup>
              <SelectInput
                id="questionTarget"
                labelId="questionTarget"
                options={this.nextButtonTargetOptions()}
                onSelect={this.onSelect}
                displayValue={this.initialTarget()}
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

ConditionalPageEditor.propTypes = {
  updateNextQuestionTarget: PropTypes.func.isRequired,
  resetNextQuestionTarget: PropTypes.func.isRequired,
  questionOptionIndex: PropTypes.number.isRequired,
  formPanels: PropTypes.object.isRequired,
  currentQuestionPanelIndex: PropTypes.number.isRequired,
  questionId: PropTypes.string.isRequired,
  text: PropTypes.string,
  value: PropTypes.string,
  conditions: PropTypes.object,
};

ConditionalPageEditor.defaultProps = {
  text: '',
  value: '',
  questionTarget: '',
  conditions: fromJS([]),
};

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
  })(ConditionalPageEditor);
