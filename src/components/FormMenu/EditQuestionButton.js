import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Button, Modal, FormGroup } from 'react-bootstrap';
import { editQuestion } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../UI/FieldGroup';


class EditQuestionButton extends Component {
  static propTypes = {
    editQuestion: PropTypes.func.isRequired,
    questionSetIndex: PropTypes.string.isRequired,
    questionIndex: PropTypes.string.isRequired,
    questionSets: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    const { questionSets, questionSetIndex, questionIndex } = props;

    this.state = {
      showModal: false,
      questionSets: [],
      questionSetId: '',
      questionSetHeader: questionSets[questionSetIndex].questions[questionIndex].questionSetHeader,
      questionSetText: '',
      question: questionSets[questionSetIndex].questions[questionIndex].question,
      questionText: questionSets[questionSetIndex].questions[questionIndex].text,
      questionType: questionSets[questionSetIndex].questions[questionIndex].input.type,
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
    this.props.editQuestion(
      this.props.questionSetIndex,
      this.props.questionIndex,
      this.state.question,
      this.state.questionText,
      this.state.questionType,
    );
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Row>
        <div className="static-modal">
          <Modal show={this.state.showModal}>
            <Modal.Header>
              <Modal.Title>Add a new question to the page</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form>
                <FormGroup>
                  <FieldGroup
                    id="question"
                    name="question"
                    label="Enter Question"
                    onChange={this.onChange}
                    placeholder=""
                    value={this.state.question}
                  />
                </FormGroup>
                <FormGroup>
                  <FieldGroup
                    id="questionText"
                    name="questionText"
                    label="Enter Question Text"
                    onChange={this.onChange}
                    placeholder=""
                    value={this.state.questionText}
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
            className="btn"
            onClick={() => {
              this.setState({ showModal: true });
            }}
          >edit
          </Button>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    questionSets: state.getIn(['form', 'schema', 'questionSets']).toJS(),
  };
}
export default connect(mapStateToProps, { editQuestion })(EditQuestionButton);

