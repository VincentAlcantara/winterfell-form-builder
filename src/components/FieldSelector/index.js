import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import { changeCurrentEditingField, editFormTitle } from '../../actions/winterfellFormBuilderActions';
import PageSelector from './PageSelector';
import QuestionSetSelector from './QuestionSetSelector';
import ButtonBarSelector from './ButtonBarSelector';
import PageSortSelector from './PageSortSelector';


class FieldSelectorContainer extends Component {
  static propTypes = {
    editFormTitle: PropTypes.func.isRequired,
    changeCurrentEditingField: PropTypes.func.isRequired,
    currentQuestionPanelIndex: PropTypes.number.isRequired,
    currentEditingField: PropTypes.string,
    currentQuestionSetIndex: PropTypes.number,
    currentQuestionIndex: PropTypes.number,
    questionSets: PropTypes.object,
    questionPanels: PropTypes.object,
    panelHeader: PropTypes.string,
    panelText: PropTypes.string,
    backButton: PropTypes.string,
    backButtonDisabled: PropTypes.bool,
    nextButton: PropTypes.string,
  };

  static defaultProps = {
    currentPanelId: 'Select Page',
    currentQuestionPanelIndex: 0,
    currentEditingField: 'page',
    questionPanels: null,
    questionSets: null,
    panelHeader: '',
    panelText: '',
    backButton: '',
    backButtonDisabled: false,
    nextButton: '',
    currentQuestionSetIndex: 0,
    currentQuestionIndex: 0,
  }

  constructor(props) {
    super(props);

    this.state = {
      currentPanel: null,
      currentQuestionSets: [],
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
    this.props.editFormTitle(this.state.formTitle);
    this.setState({ showModal: false });
  }

  render() {
    const {
      currentQuestionPanelIndex,
      questionPanels,
      questionSets,
      panelHeader,
      panelText,
      currentQuestionSetIndex,
      currentQuestionIndex,
      backButton,
      backButtonDisabled,
      nextButton,
      currentEditingField,
    } = this.props;
    const questionPanelsArray = questionPanels && questionPanels.toJS();
    const questionSetsArray = questionSets && questionSets.toJS();
    return [
      currentEditingField === 'pageSort' && <PageSortSelector key="pageSortSelector" />,
      currentEditingField !== 'pageSort' &&
      <div key>
        {currentQuestionPanelIndex >= 0 &&
          <PageSelector
            panelHeader={panelHeader}
            panelText={panelText}
            onClick={() => this.props.changeCurrentEditingField('page', currentQuestionSetIndex, currentQuestionIndex)}
          />
        }
        {currentQuestionPanelIndex >= 0 &&
          questionPanelsArray &&
          <QuestionSetSelector
            currentQuestionSets={questionPanelsArray[currentQuestionPanelIndex].questionSets}
            questionSets={questionSetsArray}
            onClick={this.props.changeCurrentEditingField}
            currentQuestionIndex={this.props.currentQuestionIndex}
          />
        }
        {currentQuestionPanelIndex >= 0 &&
          <ButtonBarSelector
            backButton={backButton}
            backButtonDisabled={backButtonDisabled}
            nextButton={nextButton}
            onClick={() => this.props.changeCurrentEditingField('buttons', currentQuestionSetIndex, currentQuestionIndex)}
          />
        }
      </div>
    ];
  }
}

function mapStateToProps(state, ownProps) {
  return {
    title: state.getIn(['form', 'title']),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
    currentEditingField: state.getIn(['form', 'currentEditingField']),
    currentQuestionPanelIndex: state.getIn(['form', 'currentQuestionPanelIndex']),
    questionPanels: state.getIn(['form', 'schema', 'questionPanels']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
    schema: state.getIn(['form', 'schema']),
    panelHeader: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelHeader']),
    panelText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelText']),
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    nextButton: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'button', 'text']),
    backButton: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'backButton', 'text']),
    backButtonDisabled: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'backButton', 'disabled']),
  };
}

export default connect(
  mapStateToProps,
  { changeCurrentEditingField, editFormTitle },
)(FieldSelectorContainer);

