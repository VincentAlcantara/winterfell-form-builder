import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';
import _ from 'lodash';

import { editForm } from '../../actions/winterfellFormBuilderActions';
import EditQuestionButton from '../FormMenu/EditQuestionButton';

class FormEditorContainer extends Component {
  static propTypes = {
    editForm: PropTypes.func.isRequired,
    questionSets: PropTypes.array,
    questionPanels: PropTypes.array,
    currentPanelId: PropTypes.string,
  };

  static defaultProps = {
    currentPanelId: PropTypes.string,
    questionPanels: null,
    questionSets: null,
  }

  constructor(props) {
    super(props);

    this.state = {
      currentPanel: null,
      currentQuestionSets: [],
    };

    this.onChange = this.onChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
    this.getCurrentHeader = this.getCurrentHeader.bind(this);
    this.getCurrentQuestions = this.getCurrentQuestions.bind(this);
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
    this.props.editForm(this.state.formTitle);
    this.setState({ showModal: false });
  }

  getCurrentHeader() {
    const { questionPanels, currentPanelId } = this.props;
    const currentPanel = _.find(questionPanels, panel => panel.panelId === currentPanelId);
    return currentPanel && (
      <div>
        <h3>{currentPanel.panelHeader}</h3>
        <p>{currentPanel.panelText}</p>
      </div>
    );
  }


  getCurrentQuestions() {
    const { questionPanels, questionSets, currentPanelId } = this.props;
    const currentPanel = _.find(questionPanels, panel => panel.panelId === currentPanelId);
    if (currentPanel) {
      const currentQuestionSets = currentPanel.questionSets; // currentQuestionSets includes
      return currentQuestionSets.map(currentQuestionSet => (
        questionSets.map((questionSet, index) => {
          if (currentQuestionSet.questionSetId === questionSet.questionSetId) {
            return questionSet.questions.map((question, ix) => (
              <p>
                <i>{question.question}</i>
                <EditQuestionButton
                  questionSetIndex={index}
                  questionIndex={ix}
                />
              </p>
            ));
          } // end-of-if
          return null;
        })
      ));
    }
    return null;
  }

  render() {
    return (
      <Row>
        <Col xs={12}>
          { this.getCurrentHeader() }
          { this.getCurrentQuestions() }
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
    questionPanels: state.getIn(['form', 'schema', 'questionPanels']).toJS(),
    questionSets: state.getIn(['form', 'schema', 'questionSets']).toJS(),
    schema: state.getIn(['form', 'schema']),
  };
}
export default connect(mapStateToProps, { editForm })(FormEditorContainer);

