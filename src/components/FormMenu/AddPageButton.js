import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Button, Modal, FormGroup } from 'react-bootstrap';
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
    return (
      <Row>
        <div className="static-modal">
          <Modal show={this.state.showModal}>
            <Modal.Header>
              <Modal.Title>Add a new page to the form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
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
            </Modal.Body>
            <Modal.Footer>
              <Button
                bsStyle="danger"
                onClick={() => { this.setState({ showModal: false }); }}
              >Cancel</Button>
              <Button
                bsStyle="primary"
                onClick={this.onFormUpdate}
              >Save changes</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <Col xs={12}>
          <Button
            className="btn btn-block btn-primary"
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >add page
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
export default connect(mapStateToProps, { addPage })(AddPageButton);

