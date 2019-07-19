import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { FormGroup } from 'react-bootstrap';
import { uploadJSON } from '../../actions/winterfellFormBuilderActions';


class UploadJSONButton extends Component {
  static propTypes = {
    uploadJSON: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      schema: '',
      fileName: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onJSONUpload = this.onJSONUpload.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const contents = e.target.result;
      this.setState({
        schema: JSON.parse(contents),
        fileName: file.name,
      });
    };
    reader.readAsText(file);
  }

  onJSONUpload(e) {
    e.preventDefault();
    this.props.uploadJSON(this.state.schema, this.state.fileName);
    this.setState({ showModal: false });
  }

  render() {
    return [
      <button
        className="btn btn-block btn-secondary"
        data-toggle="modal"
        data-target="#uploadJSON"
        key="uploadJSON"
        title="Upload Winterfell form"
      ><i class="material-icons">archive</i><span className="icon-menu">Import</span>
      </button>,
      <div className="modal fade" id="uploadJSON" tabIndex="-1" key="uploadJSONModal">
        <div className="modal-dialog bg-white">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Upload a form</div>
            </div>
            <div className="modal-body">
              Upload an existing Winterfell form.
            <form>
                <label
                  htmlFor="jsonUpload"
                />
                <input
                  name="schema"
                  id="jsonUpload"
                  type="file"
                  onChange={e => this.onChange(e)}
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
                onClick={this.onJSONUpload}
              >Continue</button>
            </div>
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
export default connect(mapStateToProps, { uploadJSON })(UploadJSONButton);

