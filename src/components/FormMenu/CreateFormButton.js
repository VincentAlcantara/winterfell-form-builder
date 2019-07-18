import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createForm } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';

class CreateFormButton extends Component {
  static propTypes = {
    createForm: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      formTitle: '',
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
    this.props.createForm(this.state.formTitle);
    this.setState({ showModal: false });
  }

  render() {
    return [
      <button
        className="btn btn-block btn-primary"
        data-toggle="modal"
        data-target="#createButton"
      >New
      </button>,
      <div className="modal fade" id="createButton" tabIndex="-1">
        <div className="modal-dialog bg-white">
          <div className="modal-header">
            <div className="modal-title">Create a new form</div>
          </div>
          <div className="modal-body">
            <form>
              <FieldGroup
                id="formTitle"
                name="formTitle"
                label="Enter title of the form"
                onChange={this.onChange}
                placeholder=""
                value={this.state.formTitle}
              />
            </form>
          </div>
          <div className="modal-footer">
            <button
              className="btn btn-secondary"
              data-dismiss="modal"
            >Cancel</button>
            <button
              className="btn btn-primary"
              onClick={this.onFormUpdate}
            >Save changes</button>
          </div>
        </div>
      </div>,
    ];
  }
}

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
  };
}
export default connect(mapStateToProps, { createForm })(CreateFormButton);

