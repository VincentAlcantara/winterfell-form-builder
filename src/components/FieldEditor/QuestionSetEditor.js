import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup } from 'react-bootstrap';
import { editQuestionSetHeader, editQuestionSetText } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../UI/FieldGroup';

class QuestionSetEditor extends Component {
  static propTypes = {
    editQuestionSetHeader: PropTypes.func.isRequired,
    editQuestionSetText: PropTypes.func.isRequired,
    questionSetHeader: PropTypes.string,
    questionSetText: PropTypes.string,
    currentQuestionSetIndex: PropTypes.number.isRequired,
  }

  static defaultProps = {
    currentQuestionSetIndex: 0,
    questionSetHeader: '',
    questionSetText: '',
  }
  constructor(props) {
    super(props);
    const { questionSetHeader, questionSetText } = props;

    this.state = {
      questionSetHeader,
      questionSetText,
    };

    this.onChangeQuestionSetHeader = this.onChangeQuestionSetHeader.bind(this);
    this.onChangeQuestionSetText = this.onChangeQuestionSetText.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      questionSetHeader: nextProps.questionSetHeader,
      questionSetText: nextProps.questionSetText,
    };
  }

  onChangeQuestionSetHeader(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    this.props.editQuestionSetHeader(this.props.currentQuestionSetIndex, event.target.value);
  }

  onChangeQuestionSetText(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    this.props.editQuestionSetText(this.props.currentQuestionSetIndex, event.target.value);
  }

  render() {
    return (
      <form>
        <FormGroup>
          <FieldGroup
            id="questionSetHeader"
            name="questionSetHeader"
            label="Question Set Header"
            onChange={this.onChangeQuestionSetHeader}
            placeholder={this.props.questionSetHeader}
            value={this.state.questionSetHeader}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="questionSetText"
            name="questionSetText"
            label="Question Set Text"
            placeholder={this.props.questionSetText}
            onChange={this.onChangeQuestionSetText}
            value={this.state.questionSetText}
          />
        </FormGroup>
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    questionSetHeader: state.getIn(['form', 'schema', 'questionSets',
      ownProps.currentQuestionSetIndex, 'questionSetHeader']),
    questionSetText: state.getIn(['form', 'schema', 'questionSets',
      ownProps.currentQuestionSetIndex, 'questionSetText']),
    currentQuestionSetIndex: ownProps.currentQuestionSetIndex,
  };
}

export default connect(
  mapStateToProps, { editQuestionSetHeader, editQuestionSetText })(QuestionSetEditor);

