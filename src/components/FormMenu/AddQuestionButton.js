import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addQuestion } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';
import SelectInput from '../InputTypes/SelectInput';
import { INPUT_TYPE_OPTIONS } from '../../common/constants';

class AddQuestionButton extends Component {
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
    return [

      <div className="static-modal">
        <div className="modal fade" id="addQuestion" tabIndex="-1">
          <div className="modal-dialog bg-white">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title">Add a new question to the question set</div>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <FieldGroup
                      id="questionId"
                      name="questionId"
                      label="Question ID"
                      onChange={this.onChange}
                      placeholder="(optional)"
                      value={this.state.questionId}
                    />
                  </div>
                  <div className="form-group">
                    <FieldGroup
                      id="question"
                      name="question"
                      label="Enter Question"
                      onChange={this.onChange}
                      placeholder=""
                      value={this.state.question}
                    />
                  </div>
                  <div className="form-group">
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
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-danger"
                  data-dismiss="modal"
                >Cancel</button>
                <button
                  className="btn btn-dark"
                  onClick={this.onFormUpdate}
                  data-dismiss="modal"
                >Save changes</button>
              </div>
            </div>
          </div>
        </div>
      </div>,
      <button
        type="button"
        className="btn btn-dark"
        data-toggle="modal"
        data-target="#addQuestion"
      >
        Add question
          </button>,
    ];
  }
}

AddQuestionButton.propTypes = {
  addQuestion: PropTypes.func.isRequired,
  questionSetId: PropTypes.string,
  currentQuestionSetIndex: PropTypes.number.isRequired,
};

AddQuestionButton.defaultProps = {
  questionSetId: '',
};

export default connect(null, { addQuestion })(AddQuestionButton);

