import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPage } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';


class AddPageButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      panelId: '',
      panelHeader: '',
      panelText: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.props.addPage(this.state.panelId, this.state.panelHeader, this.state.panelText);
  }

  render() {
    return [
      <button
        type="button"
        className="btn btn-block btn-secondary"
        data-toggle="modal"
        data-target="#addPage"
        key="addPage"
        title="Add page"
      >Add Page
        <div className="modal fade" id="addPage" tabIndex="-1" key="addPageModal">
          <div className="modal-dialog bg-white">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title">Add a new page to the form</div>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <FieldGroup
                      id="panelId"
                      name="panelId"
                      label="Page ID"
                      onChange={this.onChange}
                      placeholder="(optional)"
                      value={this.state.panelId}
                    />
                  </div>
                  <div className="form-group">
                    <FieldGroup
                      id="panelHeader"
                      name="panelHeader"
                      label="Page Title"
                      onChange={this.onChange}
                      placeholder=""
                      value={this.state.panelHeader}
                    />
                  </div>
                  <div className="form-group">
                    <FieldGroup
                      id="panelText"
                      name="panelText"
                      label="Enter Page Description"
                      onChange={this.onChange}
                      placeholder=""
                      value={this.state.panelText}
                    />
                  </div>
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
        </div>
      </button>,
    ];
  }
}

AddPageButton.propTypes = {
  addPage: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'currentForm', 'title']),
  };
}
export default connect(mapStateToProps, { addPage })(AddPageButton);

