import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Modal, FormGroup } from 'react-bootstrap';
import fileDownload from 'js-file-download';
import { saveJSON } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';


class SaveFormButton extends Component {
  static propTypes = {
    saveJSON: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    schema: PropTypes.object.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      filename: this.props.title,
    };

    this.onChange = this.onChange.bind(this);
    this.onJSONSave = this.onJSONSave.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      filename: nextProps.title,
    };
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onJSONSave(e) {
    e.preventDefault();
    fileDownload(JSON.stringify(this.props.schema.toJS()), this.state.filename);
    this.props.saveJSON(this.props.schema.toJS(), this.state.filename);
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Button
        className="btn btn-block btn-primary"
        onClick={() => {
          this.setState({ showModal: true });
        }}
      >download
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Download Form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <FieldGroup
                  id="filename"
                  name="filename"
                  label="Filename"
                  onChange={this.onChange}
                  placeholder={this.props.title}
                  value={this.state.filename}
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
              onClick={this.onJSONSave}
              disabled={!this.state.filename}
            >Continue</Button>
          </Modal.Footer>
        </Modal>
      </Button>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
    schema: state.getIn(['form', 'schema']),
  };
}
export default connect(mapStateToProps, { saveJSON })(SaveFormButton);

