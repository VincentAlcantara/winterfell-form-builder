import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Modal } from 'react-bootstrap';
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
    return (
      <span>
        <div className="static-modal">
          <Modal show={this.state.showModal}>
            <Modal.Header>
              <Modal.Title>Delete Option Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Are you sure you want to delete this question?
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
        </div>
        <Button
          className="btn btn-block btn-danger"
          onClick={() => {
            this.setState({ showModal: true });
          }}
        >delete question
        </Button>
      </span>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
  };
}
export default connect(mapStateToProps, { deleteQuestion })(DeleteQuestionButton);

