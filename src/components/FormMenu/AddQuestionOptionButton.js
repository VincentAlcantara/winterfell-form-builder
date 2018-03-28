import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Button, FormControl, Glyphicon } from 'react-bootstrap';
import { addQuestionOption } from '../../actions/winterfellFormBuilderActions';

class AddQuestionOptionButton extends Component {
  static propTypes = {
    addQuestionOption: PropTypes.func.isRequired,
    currentQuestionSetIndex: PropTypes.number.isRequired,
    currentQuestionIndex: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showConfirm: false,
      questionOptionText: '',
      questionOptionValue: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onAddOption = this.onAddOption.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onClose(e) {
    e.preventDefault();
    this.setState({ showConfirm: true });
  }

  onAddOption(e) {
    e.preventDefault();
    const { currentQuestionSetIndex, currentQuestionIndex } = this.props;
    this.props.addQuestionOption(currentQuestionSetIndex, currentQuestionIndex,
      this.state.questionOptionText, this.state.questionOptionValue);
    this.setState({ questionOptionText: '', questionOptionValue: '' });
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          <label
            htmlFor="addOption"
          >
            Add Option
          </label>
        </Col>
        <Col xs={12}>
          <table>
            <tbody id="addOption">
              <tr>
                <td>
                  <FormControl
                    type="text"
                    name="questionOptionText"
                    value={this.state.questionOptionText}
                    onChange={this.onChange}
                  />
                </td>
                <td>
                  <FormControl
                    type="text"
                    name="questionOptionValue"
                    value={this.state.questionOptionValue}
                    onChange={this.onChange}
                  />
                </td>
                <td colSpan={2}>
                  <Button
                    className="btn btn-primary"
                    onClick={this.onAddOption}
                    disabled={!this.state.questionOptionValue || !this.state.questionOptionText}
                  ><Glyphicon glyph="glyphicon glyphicon-plus" />
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    questionInputOptions: ownProps.questionInputOptions,
  };
}
export default connect(mapStateToProps, { addQuestionOption })(AddQuestionOptionButton);

