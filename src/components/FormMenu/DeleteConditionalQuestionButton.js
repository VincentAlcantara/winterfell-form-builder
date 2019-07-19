import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { deleteConditionalQuestion } from '../../actions/winterfellFormBuilderActions';

class DeleteConditionalQuestionButton extends Component {
  static propTypes = {
    deleteConditionalQuestion: PropTypes.func.isRequired,
    path: PropTypes.array.isRequired,
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
    const { path } = this.props;
    e.preventDefault();
    this.setState({ showModal: false });
    this.props.deleteConditionalQuestion(path);
  }

  render() {
    return [
      <Button
        className="btn btn-danger"
        title="delete this conditional question"
        data-toggle="modal"
        data-target="#deleteConditionalQuestion"
      >delete
      </Button>,
      <div className="modal fade" id="deleteConditionalQuestion" tabIndex="-1">
        <div className="modal-dialog bg-white">
          <div className="modal-header">
            <div className="modal-title">Delete Conditional Question Confirmation</div>
          </div>
          <div className="modal-body">
            Are you sure you want to delete this conditional question?
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


export default connect(null, { deleteConditionalQuestion })(DeleteConditionalQuestionButton);

