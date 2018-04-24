import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Glyphicon } from 'react-bootstrap';

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
    return (
      <Button
        className="btn btn-danger"
        title="delete this option"
        onClick={() => {
          this.setState({ showModal: true });
        }}
      ><Glyphicon glyph="glyphicon glyphicon-remove" />
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Delete Option Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this option?
          </Modal.Body>
          <Modal.Footer>
            <Button
              bsStyle="danger"
              onClick={() => { this.setState({ showModal: false }); }}
            >Cancel</Button>
            <Button
              bsStyle="primary"
              onClick={this.onConfirmDelete}
            >Confirm Delete</Button>
          </Modal.Footer>
        </Modal>
      </Button>
    );
  }
}

export default DeleteQuestionOptionButton;

