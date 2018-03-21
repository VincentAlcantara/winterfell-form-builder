import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Modal, Glyphicon } from 'react-bootstrap';
import { deleteQuestionOption } from '../../actions/winterfellFormBuilderActions';

class DeleteQuestionOptionButton extends Component {
  static propTypes = {
    deleteQuestionOption: PropTypes.func.isRequired,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
    questionOptionIndex: PropTypes.number.isRequired,
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
    const { currentQuestionSetIndex, currentQuestionIndex, questionOptionIndex } = this.props;
    e.preventDefault();
    this.setState({ showModal: false });
    this.props.deleteQuestionOption(
      currentQuestionSetIndex, currentQuestionIndex, questionOptionIndex);
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
        </div>
        <Button
          className="btn btn-block btn-danger"
          title="delete this option"
          onClick={() => {
            this.setState({ showModal: true });
          }}
        ><Glyphicon glyph="glyphicon glyphicon-minus" />
        </Button>
      </span>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    questionOptionIndex: ownProps.questionOptionIndex,
  };
}
export default connect(mapStateToProps, { deleteQuestionOption })(DeleteQuestionOptionButton);

