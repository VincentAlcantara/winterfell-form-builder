import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Button, FormGroup } from 'react-bootstrap';
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
      <Button
        className="btn btn-block btn-primary"
        data-toggle="modal"
        data-target="#uploadJSON"
      >upload
      </Button>,
      <div className="modal fade" id="uploadJSON" tabIndex="-1">
        <div className="modal-dialog bg-white">
          <div className="modal-header">
            <div className="modal-title">Upload a form</div>
          </div>
          <div className="modal-body">
            Upload a form.  Note this will replace the current form.
            <form>
              <FormGroup>
                <label
                  htmlFor="jsonUpload"
                />
                <input
                  name="schema"
                  id="jsonUpload"
                  type="file"
                  onChange={e => this.onChange(e)}
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
              onClick={this.onJSONUpload}
            >Continue</Button>
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

