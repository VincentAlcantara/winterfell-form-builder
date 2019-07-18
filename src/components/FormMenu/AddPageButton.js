import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, FormGroup } from 'react-bootstrap';
import { addPage } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';


class AddPageButton extends Component {
  static propTypes = {
    addPage: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
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

  onClose(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.props.addPage(this.state.panelId, this.state.panelHeader, this.state.panelText);
    this.setState({ showModal: false });
  }

  render() {
    return [
      <Button
        className="btn btn-block btn-primary"
        data-toggle="modal"
        data-target="#addPage"
        key="addPage"
      >Add page
      </Button>,
      <div className="modal fade" id="addPage" tabIndex="-1" key="addPageModal">
        <div className="modal-dialog bg-white">
          <div className="modal-header">
            <div className="modal-title">Add a new page to the form</div>
          </div>
          <div className="modal-body">
            <form>
              <FormGroup>
                <FieldGroup
                  id="panelId"
                  name="panelId"
                  label="Page ID"
                  onChange={this.onChange}
                  placeholder="(optional)"
                  value={this.state.panelId}
                />
              </FormGroup>
              <FormGroup>
                <FieldGroup
                  id="panelHeader"
                  name="panelHeader"
                  label="Page Title"
                  onChange={this.onChange}
                  placeholder=""
                  value={this.state.panelHeader}
                />
              </FormGroup>
              <FormGroup>
                <FieldGroup
                  id="panelText"
                  name="panelText"
                  label="Enter Page Description"
                  onChange={this.onChange}
                  placeholder=""
                  value={this.state.panelText}
                />
              </FormGroup>
            </form>
          </div>
          <div className="modal-footer">
            <Button
              bsStyle="danger"
              onClick={() => { this.setState({ showModal: false }); }}
            >Cancel</Button>
            <Button
              bsStyle="primary"
              onClick={this.onFormUpdate}
            >Save changes</Button>
          </div>
        </div>
      </div>,
    ];
  }
}

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'currentForm', 'title']),
  };
}
export default connect(mapStateToProps, { addPage })(AddPageButton);

