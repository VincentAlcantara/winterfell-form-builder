import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateQuestion } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';


class updateQuestionButton extends Component {
  constructor(props) {
    super(props);
    const { question, questionText, questionType } = props;

    this.state = {
      showModal: false,
      question,
      questionText,
      questionType,
    };

    this.onChange = this.onChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onClose(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.props.updateQuestion(
      this.props.questionSetIndex,
      this.props.questionIndex,
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
        className="btn"
        data-toggle="modal"
        data-target="#editQuestion"
      >edit
      </button>,
      <div className="modal fade" id="createForm" tabIndex="-1">
        <div className="modal-dialog bg-white">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Add a new question to the page</div>
            </div>
            <div className="modal-body">
              <form>
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
                  <FieldGroup
                    id="questionText"
                    name="questionText"
                    label="Enter Question Text"
                    onChange={this.onChange}
                    placeholder=""
                    value={this.state.questionText}
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
      </div>,
    ];
  }
}

updateQuestionButton.propTypes = {
  updateQuestion: PropTypes.func.isRequired,
  questionSetIndex: PropTypes.number.isRequired,
  questionIndex: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  questionText: PropTypes.string,
  questionType: PropTypes.string.isRequired,
};

updateQuestionButton.defaultProps = {
  questionText: '',
};

function mapStateToProps(state, ownProps) {
  return {
    question: state.getIn(['form', 'schema', 'questionSets', ownProps.questionSetIndex, 'questions',
      ownProps.questionIndex, 'question']),
    questionText: state.getIn(['form', 'schema', 'questionSets', ownProps.questionSetIndex, 'questions',
      ownProps.questionIndex, 'text']),
    questionType: state.getIn(['form', 'schema', 'questionSets', ownProps.questionSetIndex, 'questions',
      ownProps.questionIndex, 'input', 'type']),
  };
}
export default connect(mapStateToProps, { updateQuestion })(updateQuestionButton);

