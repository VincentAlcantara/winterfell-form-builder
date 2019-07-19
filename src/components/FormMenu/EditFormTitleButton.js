import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { editFormTitle } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';

class EditFormTitleButton extends Component {
  static propTypes = {
    editFormTitle: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
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
    this.props.editFormTitle(this.state.formTitle);
    this.setState({ showModal: false });
  }

  render() {
    const { title } = this.props;

    return [
      <button
        className="btn btn-block btn-dark"
        data-toggle="modal"
        data-target="#editFormTitle"
        key="editFormTitle"
        title="Edit Form Title"
      ><i class="material-icons">edit</i><span className="icon-menu">Title</span>
      </button>,
      <div className="modal fade" id="editFormTitle" tabIndex="-1" key="editFormTitleModal">
        <div className="modal-dialog bg-white">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Edit form title</div>
            </div>
            <div className="modal-body">
              <form>
                <FieldGroup
                  id="formTitle"
                  name="formTitle"
                  label="Enter title of the form"
                  onChange={this.onChange}
                  placeholder={title}
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
                data-dismiss="modal"
              >Save changes</button>
            </div>
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
export default connect(mapStateToProps, { editFormTitle })(EditFormTitleButton);

