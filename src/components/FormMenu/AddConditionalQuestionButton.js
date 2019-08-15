import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addConditionalQuestion } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';
import SelectInput from '../InputTypes/SelectInput';
import { INPUT_TYPE_OPTIONS } from '../../common/constants';

class AddConditionalQuestionButton extends Component {
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
    this.onFormUpdate = this.onFormUpdate.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onClose(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  onSelect(type) {
    this.setState({ questionType: type });
  }

  onFormUpdate(e) {
    e.preventDefault();
    const { path } = this.props;
    const { questionId, question, questionText, questionType } = this.state;
    this.props.addConditionalQuestion(
      path,
      questionId,
      question,
      questionText,
      questionType,
    );
    this.setState({ showModal: false });
  }

  render() {
    return [
      <button
        type="button"
        className="btn btn-dark btn-block"
        data-toggle="modal"
        data-target="#createForm"
      >add conditional question
      </button>,
      <div className="modal fade" id="createForm" tabIndex="-1">
        <div className="modal-dialog bg-white">
          <div className="modal-header">
            <div className="modal-title">Add a new conditional question to this question</div>
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
      </div>,
    ];
  }
}

AddConditionalQuestionButton.propTypes = {
  addConditionalQuestion: PropTypes.func.isRequired,
  path: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    path: ownProps.path,
  };
}
export default connect(mapStateToProps, { addConditionalQuestion })(AddConditionalQuestionButton);

