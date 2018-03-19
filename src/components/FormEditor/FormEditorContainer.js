import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

import { changeCurrentEditingField, editFormTitle } from '../../actions/winterfellFormBuilderActions';
import { FormPageEditor } from './FormPageEditor';
import { FormQuestionSetEditor } from './FormQuestionSetEditor';

class FormEditorContainer extends Component {
  static propTypes = {
    editFormTitle: PropTypes.func.isRequired,
    changeCurrentEditingField: PropTypes.func.isRequired,
    currentPanelIndex: PropTypes.number.isRequired,
    questionSets: PropTypes.object,
    questionPanels: PropTypes.object,
    panelHeader: PropTypes.string,
    panelText: PropTypes.string,
  };

  static defaultProps = {
    currentPanelId: 'Select Page',
    currentPanelIndex: 0,
    questionPanels: null,
    questionSets: null,
    panelHeader: '',
    panelText: '',
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
    const { currentPanelIndex, questionPanels, questionSets, panelHeader, panelText } = this.props;
    const questionPanelsArray = questionPanels && questionPanels.toJS();
    const questionSetsArray = questionSets && questionSets.toJS();
    return (
      <Row>
        <Col xs={12}>
          { typeof currentPanelIndex !== 'undefined' &&
            <FormPageEditor
              panelHeader={panelHeader}
              panelText={panelText}
              onClick={() => this.props.changeCurrentEditingField('page')}
            />
          }
          { typeof currentPanelIndex !== 'undefined' &&
            questionPanelsArray &&
            <FormQuestionSetEditor
              currentQuestionSets={questionPanelsArray[currentPanelIndex].questionSets}
              questionSets={questionSetsArray}
              onClick={this.props.changeCurrentEditingField}
            />
          }
        </Col>
      </Row>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    title: state.getIn(['form', 'title']),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
    currentPanelIndex: state.getIn(['form', 'currentPanelIndex']),
    questionPanels: state.getIn(['form', 'schema', 'questionPanels']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
    schema: state.getIn(['form', 'schema']),
    panelHeader: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentPanelIndex, 'panelHeader']),
    panelText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentPanelIndex, 'panelText']),
  };
}

export default connect(
  mapStateToProps,
  { changeCurrentEditingField, editFormTitle },
)(FormEditorContainer);

