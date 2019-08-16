import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addQuestionSet } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';
import SelectInput from '../InputTypes/SelectInput';
import { INPUT_TYPE_OPTIONS } from '../../common/constants';

class AddQuestionSetButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      questionSetId: '',
      questionSetHeader: '',
      questionSetText: '',
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
    this.props.addQuestionSet(
      this.props.currentPanelId,
      this.state.questionSetId,
      this.state.questionSetHeader,
      this.state.questionSetText,
      this.state.question,
      this.state.questionText,
      this.state.questionType,
    );
    this.setState({ showModal: false });
  }

  render() {
    return [
      <button
        type="button"
        className="btn btn-block btn-dark"
        disabled={!this.props.currentPanelId || this.props.currentPanelId === 'Select Page'}
        data-toggle="modal"
        data-target="#addQuestionSet"
        key="addQuestionSet"
        tittle="Add question"
      >
        Add question set
      </button>,
      <div className="modal fade" id="addQuestionSet" tabIndex="-1" key="addQuestionSetModal">
        <div className="modal-dialog bg-white">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Add a new question set</div>
            </div>
            <div className="modal-body">
              <FieldGroup
                id="questionSetId"
                name="questionSetId"
                label="Question Set ID"
                onChange={this.onChange}
                placeholder="(optional)"
                value={this.state.questionSetId}
                key="questionSetId"
              />
              <FieldGroup
                id="questionSetHeader"
                name="questionSetHeader"
                label="Question Set Title"
                onChange={this.onChange}
                placeholder=""
                value={this.state.questionSetHeader}
                key="questionSetHeader"
              />
              <FieldGroup
                id="questionSetText"
                name="questionSetText"
                label="Enter Question Set Description"
                onChange={this.onChange}
                placeholder=""
                value={this.state.questionSetText}
                key="questionSetText"
              />
              <FieldGroup
                id="question"
                name="question"
                label="Enter Question"
                onChange={this.onChange}
                placeholder=""
                value={this.state.question}
                key="question"
              />
              <FieldGroup
                id="questionText"
                name="questionText"
                label="Enter Question Text"
                onChange={this.onChange}
                placeholder=""
                value={this.state.questionText}
                key="questionText"
              />
              <label htmlFor="questionType">
                Select Question Type
                  </label>
              <SelectInput
                id="questionType"
                labelId="questionType"
                options={INPUT_TYPE_OPTIONS}
                onSelect={this.onSelect}
                value={this.state.questionType}
                key="questionType"
              />
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
      </div>,
    ];
  }
}

AddQuestionSetButton.propTypes = {
  addQuestionSet: PropTypes.func.isRequired,
  currentPanelId: PropTypes.string,
};

AddQuestionSetButton.defaultProps = {
  currentPanelId: '',
};

function mapStateToProps(state) {
  return {
    currentPanelId: state.getIn(['form', 'currentPanelId']),
  };
}
export default connect(mapStateToProps, { addQuestionSet })(AddQuestionSetButton);

