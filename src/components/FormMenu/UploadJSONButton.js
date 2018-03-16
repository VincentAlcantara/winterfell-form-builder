import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Button, Modal, FormGroup } from 'react-bootstrap';
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
      console.log('contents', JSON.parse(contents));
      this.setState({ schema: JSON.parse(contents) });
    };
    reader.readAsText(file);
  }

  onJSONUpload(e) {
    e.preventDefault();
    this.props.uploadJSON(this.state.schema);
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Row>
        <div className="static-modal">
          <Modal show={this.state.showModal}>
            <Modal.Header>
              <Modal.Title>Open a form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
              <Button
                bsStyle="danger"
                onClick={() => { this.setState({ showModal: false }); }}
              >Cancel</Button>
              <Button
                bsStyle="primary"
                onClick={this.onJSONUpload}
              >Upload</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <Col xs={12}>
          <Button
            className="btn btn-block btn-info"
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >open form
          </Button>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'currentForm', 'title']),
  };
}
export default connect(mapStateToProps, { uploadJSON })(UploadJSONButton);

