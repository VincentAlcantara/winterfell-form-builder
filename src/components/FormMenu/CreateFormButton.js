import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createForm } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';

class CreateFormButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
  }

  render() {
    return [
      <button
        className="btn btn-block btn-dark"
        data-toggle="modal"
        data-target="#createButton"
        key="createButton"
        title="Start new form"
      ><i className="material-icons">create_new_folder</i><span className="icon-menu">Create</span>
      </button>,
      <div className="modal fade" id="createButton" tabIndex="-1" key="createButtonModal">
        <div className="modal-dialog bg-white">
          <div className="modal-content">
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
                className="btn btn-danger"
                data-dismiss="modal"
              >Cancel</button>
              <button
                className="btn btn-dark"
                onClick={this.onFormUpdate}
              >Save changes</button>
            </div>
          </div>
        </div>
      </div>,
    ];
  }
}

CreateFormButton.propTypes = {
  createForm: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
  };
}
export default connect(mapStateToProps, { createForm })(CreateFormButton);

