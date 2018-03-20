import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Button, Modal, FormGroup } from 'react-bootstrap';
import { createForm } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../UI/FieldGroup';


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
    return (
      <Row>
        <div className="static-modal">
          <Modal show={this.state.showModal}>
            <Modal.Header>
              <Modal.Title>Create a new form</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup>
                  <FieldGroup
                    id="formTitle"
                    name="formTitle"
                    label="Enter title of the form"
                    onChange={this.onChange}
                    placeholder=""
                    value={this.state.formTitle}
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
          >new form
          </Button>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
  };
}
export default connect(mapStateToProps, { createForm })(CreateFormButton);

