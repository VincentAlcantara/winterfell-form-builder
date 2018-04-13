import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Modal, FormGroup } from 'react-bootstrap';
import { addQuestion } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';
import SelectInput from '../InputTypes/SelectInput';
import { INPUT_TYPE_OPTIONS } from '../../common/constants';


class AddQuestionButton extends Component {
  static propTypes = {
    addQuestion: PropTypes.func.isRequired,
    questionSetId: PropTypes.string,
    currentQuestionSetIndex: PropTypes.number.isRequired,
  };

  static defaultProps = {
    questionSetId: '',
  };

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      questionSetId: this.props.questionSetId,
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
    this.props.addQuestion(
      this.props.currentQuestionSetIndex,
      this.state.questionSetId,
      this.state.questionId,
      this.state.question,
      this.state.questionText,
      this.state.questionType,
    );
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Button
        className="btn btn-primary"
        onClick={() => {
          this.setState({ showModal: true });
        }}
      >
        <div className="static-modal">
          <Modal show={this.state.showModal}>
            <Modal.Header>
              <Modal.Title>Add a new question to the question set</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
                  <label htmlFor="questionType">
                    Select Question Type
                  </label>
                  <SelectInput
                    id="questionType"
                    labelId="questionType"
                    options={INPUT_TYPE_OPTIONS}
                    onSelect={this.onSelect}
                    displayValue={this.state.questionType}
                  />
                </FormGroup>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                bsStyle="danger"
                onClick={() => { this.setState({ showModal: false }); }}
              >Cancel</Button>
              <Button
                bsStyle="primary"
                onClick={this.onFormUpdate}
              >Save changes</Button>
            </Modal.Footer>
          </Modal>
        </div>
      add question
      </Button>
    );
  }
}

export default connect(null, { addQuestion })(AddQuestionButton);

