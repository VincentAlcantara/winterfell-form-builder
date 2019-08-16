import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DeleteQuestionOptionButton extends Component {
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
    e.preventDefault();
    this.setState({ showModal: false });
    this.props.onDeleteQuestionOption();
  }

  render() {
    return [
      <button
        type="button"
        className="btn btn-danger"
        data-toggle="modal"
        data-target="#deleteQuestionOptionButton"
      >
        <i className="material-icons">delete</i><span>delete this option</span>
      </button>,
      <div className="modal fade" id="deleteQuestionOptionButton" tabIndex="-1">
        <div className="modal-dialog bg-white">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Delete Option Confirmation</div>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this option?
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
        </div>
      </div>,
    ];
  }
}

DeleteQuestionOptionButton.propTypes = {
  onDeleteQuestionOption: PropTypes.func.isRequired,
};

export default DeleteQuestionOptionButton;

