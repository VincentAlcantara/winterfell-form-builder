import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Glyphicon } from 'react-bootstrap';

class DeleteQuestionOptionButton extends Component {
  static propTypes = {
    onDeleteQuestionOption: PropTypes.func.isRequired,
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
    e.preventDefault();
    this.setState({ showModal: false });
    this.props.onDeleteQuestionOption();
  }

  render() {
    return [
      <Button
        className="btn btn-danger"
        title="delete this option"
        data-toggle="modal"
        data-target="#deleteQuestionOptionButton"
      ><Glyphicon glyph="glyphicon glyphicon-remove" />
      </Button>,
      <div className="modal fade" id="deleteQuestionOptionButton" tabIndex="-1">
        <div className="modal-dialog bg-white">
          <div className="modal-header">
            <div className="modal-title">Delete Option Confirmation</div>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this option?
          </div>
          <div className="modal-footer">
            <Button
              bsStyle="danger"
              onClick={() => { this.setState({ showModal: false }); }}
            >Cancel</Button>
            <Button
              bsStyle="primary"
              onClick={this.onConfirmDelete}
            >Confirm Delete</Button>
          </div>
        </div>
      </div>,
    ];
  }
}

export default DeleteQuestionOptionButton;

