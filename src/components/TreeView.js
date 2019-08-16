import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { goToPage, changeCurrentEditingField } from '../actions/winterfellFormBuilderActions';

class TreeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      questionId: '',
      question: '',
      questionText: '',
      questionType: '',
    };

    this.getQuestionPanels = this.getQuestionPanels.bind(this);
    this.getQuestionSets = this.getQuestionSets.bind(this);
    this.onQuestionPanelClick = this.onQuestionPanelClick.bind(this);
    this.onQuestionSetClick = this.onQuestionSetClick.bind(this);
    this.onQuestionClick = this.onQuestionClick.bind(this);
  }

  onQuestionPanelClick(questionPanelId) {
    this.props.changeCurrentEditingField('page');
    this.props.goToPage(questionPanelId);
  }

  onQuestionSetClick(questionPanelId, questionSetIndex) {
    this.props.goToPage(questionPanelId);
    this.props.changeCurrentEditingField('questionSet', questionSetIndex);
  }

  onQuestionClick(questionPanelId, questionSetIndex, questionIndex) {
    this.props.goToPage(questionPanelId);
    this.props.changeCurrentEditingField('question', questionSetIndex, questionIndex);
  }

  getQuestions(questionSetId, questionPanelId) {
    const questionSetIndex = this.props.questionSets.findIndex(questionSet =>
      questionSet.get('questionSetId') === questionSetId);
    const questionsArray = questionSetIndex !== -1 &&
      this.props.questionSets.getIn([questionSetIndex, 'questions']).toJS();
    return questionsArray.map((question, index) => (
      <div key={`${questionPanelId}-${questionSetId}-${index}`}>&nbsp;&nbsp;&nbsp;+&nbsp;
        <button
          type="button"
          className="btn btn-link"
          onClick={() => this.onQuestionClick(questionPanelId, questionSetIndex, index)}
        >{question.questionId}
        </button>
      </div>
    ));
  }

  getQuestionSets(questionSets, questionPanelId) {
    return questionSets && questionSets.map((questionSet, index) => (
      <div key={`${questionPanelId}-${index}`}>&nbsp;&nbsp;+&nbsp;
        <button
          type="button"
          href="#"
          className="btn btn-link"
          onClick={() => this.onQuestionSetClick(questionPanelId, index)}
        >{questionSet.questionSetId}
        </button>
        { this.getQuestions(questionSet.questionSetId, questionPanelId) }
      </div>
    ));
  }

  getQuestionPanels() {
    const { questionPanels } = this.props;
    const questionPanelsArray = questionPanels && questionPanels.toJS();
    return questionPanelsArray && questionPanelsArray.map((questionPanel, index) => (
      <div key={index}>
        <button
          type="button"
          href="#"
          className="btn btn-link"
          onClick={() => this.onQuestionPanelClick(questionPanel.panelId)}
        ><i className="material-icons">
        insert_drive_file
        </i>{questionPanel.panelId}
        </button>
        {this.getQuestionSets(questionPanel.questionSets, questionPanel.panelId)}
      </div>));
  }


  render() {
    return (
      <div className="winterfell-form-builder-tree-view">
        {this.getQuestionPanels()}
      </div>
    );
  }
}

TreeView.propTypes = {
  questionPanels: PropTypes.object,
  questionSets: PropTypes.object,
  changeCurrentEditingField: PropTypes.func.isRequired,
  goToPage: PropTypes.func.isRequired,
};

TreeView.defaultProps = {
  questionPanels: null,
  questionSets: null,
};

function mapStateToProps(state, ownProps) {
  return {
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    questionOptionIndex: ownProps.questionOptionIndex,
    questionPanels: state.getIn(['form', 'schema', 'questionPanels']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
  };
}
export default connect(mapStateToProps, { goToPage, changeCurrentEditingField })(TreeView);

