import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Button, Modal, FormGroup } from 'react-bootstrap';
import { addQuestion } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../UI/FieldGroup';
import SelectInput from '../InputTypes/SelectInput';
import { INPUT_TYPE_OPTIONS } from '../../common/constants';


class AddQuestionButton extends Component {
  static propTypes = {
    addQuestion: PropTypes.func.isRequired,
    questionSetId: PropTypes.string.isRequired,
    currentQuestionSetIndex: PropTypes.number.isRequired,
  }

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
      <Row>
        <div className="static-modal">
          <Modal show={this.state.showModal}>
            <Modal.Header>
              <Modal.Title>Add a new question to the question set</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup>
                  <FieldGroup
                    id="questionSetId"
                    name="questionSetId"
                    label="Question Set ID"
                    onChange={this.onChange}
                    placeholder="(optional)"
                    value={this.state.questionSetId}
                  />
                </FormGroup>
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
        <Col xs={12}>
          <Button
            className="btn btn-block btn-primary"
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >add question
          </Button>
        </Col>
      </Row>
    );
  }
}

export default connect(null, { addQuestion })(AddQuestionButton);

