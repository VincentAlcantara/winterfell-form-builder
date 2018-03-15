import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Button, Modal, FormGroup } from 'react-bootstrap';
import { addQuestionOption } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../UI/FieldGroup';


class AddQuestionOptionButton extends Component {
  static propTypes = {
    addQuestionOption: PropTypes.func.isRequired,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      questionOptionText: '',
      questionOptionValue: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onConfirmAddOption = this.onConfirmAddOption.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onClose(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  onConfirmAddOption(e) {
    e.preventDefault();
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    this.props.addQuestionOption(currentQuestionSetIndex, currentQuestionIndex,
      this.state.questionOptionText, this.state.questionOptionValue);
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Row>
        <div className="static-modal">
          <Modal show={this.state.showModal}>
            <Modal.Header>
              <Modal.Title>Add new question option</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup>
                  <FieldGroup
                    id="questionOptionText"
                    name="questionOptionText"
                    label="Enter option text"
                    onChange={this.onChange}
                    placeholder="Enter text"
                    value={this.state.questionOptionText}
                  />
                </FormGroup>
                <FormGroup>
                  <FieldGroup
                    id="questionOptionValue"
                    name="questionOptionValue"
                    label="Enter option value"
                    onChange={this.onChange}
                    placeholder="Enter value"
                    value={this.state.questionOptionValue}
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
                onClick={this.onConfirmAddOption}
              >Save changes</Button>
            </Modal.Footer>
          </Modal>
        </div>
        <Col xs={12}>
          <Button
            className="btn btn-block btn-success"
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >Add Option
          </Button>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
  };
}
export default connect(mapStateToProps, { addQuestionOption })(AddQuestionOptionButton);

