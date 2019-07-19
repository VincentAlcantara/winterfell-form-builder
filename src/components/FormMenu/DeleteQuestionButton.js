import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { deleteQuestion } from '../../actions/winterfellFormBuilderActions';

class DeleteQuestionButton extends Component {
  static propTypes = {
    deleteQuestion: PropTypes.func.isRequired,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };

    this.onConfirmDelete = this.onConfirmDelete.bind(this);
  }

  onClose(e) {
    e.preventDefault();
    this.setState({ showModal: false });
  }

  onConfirmDelete(e) {
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    e.preventDefault();
    this.setState({ showModal: false });
    this.props.deleteQuestion(
      currentQuestionSetIndex, currentQuestionIndex);
  }

  render() {
    return [
      <Button
        className="btn btn-danger"
        data-toggle="modal"
        data-target="#deleteQuestion"
      >
        Delete question
      </Button>,
      <div className="modal fade" id="deleteQuestion" tabIndex="-1">
        <div className="modal-dialog bg-white">
          <div className="modal-header">
            <div className="modal-title">Delete Option Confirmation</div>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this question?
            </div>
            <div className="modal-footer">
            <button
              className="btn btn-danger"
              data-dismiss="modal"
            >Cancel</button>
            <button
              className="btn btn-dark"
              onClick={this.onConfirmDelete}
            >Confirm Delete</button>
          </div>
        </div>
      </div>,
    ];
  }
}

function mapStateToProps(state) {
  return {
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
  };
}
export default connect(mapStateToProps, { deleteQuestion })(DeleteQuestionButton);

