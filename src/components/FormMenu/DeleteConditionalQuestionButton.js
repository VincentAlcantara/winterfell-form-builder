import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
import { deleteConditionalQuestion } from '../../actions/winterfellFormBuilderActions';

class DeleteConditionalQuestionButton extends Component {
  static propTypes = {
    deleteConditionalQuestion: PropTypes.func.isRequired,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
    questionOptionIndex: PropTypes.number.isRequired,
    conditionalQuestionIndex: PropTypes.number.isRequired,
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
    const { currentQuestionSetIndex, currentQuestionIndex,
      questionOptionIndex, conditionalQuestionIndex } = this.props;
    e.preventDefault();
    this.setState({ showModal: false });
    this.props.deleteConditionalQuestion(
      currentQuestionSetIndex, currentQuestionIndex, questionOptionIndex, conditionalQuestionIndex);
  }

  render() {
    return (
      <Button
        className="btn btn-danger"
        title="delete this conditional question"
        onClick={() => {
          this.setState({ showModal: true });
        }}
      >delete
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Delete Conditional Question Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Are you sure you want to delete this conditional question?
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


export default connect(null, { deleteConditionalQuestion })(DeleteConditionalQuestionButton);

