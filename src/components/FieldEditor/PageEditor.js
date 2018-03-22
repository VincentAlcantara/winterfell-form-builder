import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup, Button } from 'react-bootstrap';
import { fromJS } from 'immutable';

import { editPageHeader, editPageText, changeCurrentEditingField } from '../../actions/winterfellFormBuilderActions';
import { AddQuestionSetButton } from '../FormMenu';
import FieldGroup from '../InputTypes/FieldGroup';

class PageEditor extends Component {
  static propTypes = {
    editPageHeader: PropTypes.func.isRequired,
    editPageText: PropTypes.func.isRequired,
    changeCurrentEditingField: PropTypes.func.isRequired,
    panelHeader: PropTypes.string,
    panelText: PropTypes.string,
    currentQuestionSets: PropTypes.object,
    questionSets: PropTypes.object,
    currentPanelIndex: PropTypes.number.isRequired,
  }

  static defaultProps = {
    currentPanelIndex: 0,
    panelHeader: '',
    panelText: '',
    questionSets: fromJS({}),
    currentQuestionSets: fromJS({}),
  }
  constructor(props) {
    super(props);
    const { panelHeader, panelText } = props;

    this.state = {
      panelHeader,
      panelText,
    };

    this.onChangePageHeader = this.onChangePageHeader.bind(this);
    this.onChangePageText = this.onChangePageText.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      panelHeader: nextProps.panelHeader,
      panelText: nextProps.panelText,
    };
  }

  onChangePageHeader(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    this.props.editPageHeader(this.props.currentPanelIndex, event.target.value);
  }

  onChangePageText(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    this.props.editPageText(this.props.currentPanelIndex, event.target.value);
  }

  onClick(questionSetId) {
    const questionSetIndex = this.props.questionSets.findIndex(questionSet => questionSet.get('questionSetId') === questionSetId);
    this.props.changeCurrentEditingField('questionSet', questionSetIndex);
  }

  render() {
    const questionSetsArray = this.props.currentQuestionSets.toJS();
    return (
      <form>
        <FormGroup>
          <FieldGroup
            id="panelHeader"
            name="panelHeader"
            label="Page Header"
            onChange={this.onChangePageHeader}
            placeholder={this.props.panelHeader}
            value={this.state.panelHeader}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="panelText"
            name="panelText"
            label="Page Text"
            placeholder={this.props.panelText}
            onChange={this.onChangePageText}
            value={this.state.panelText}
          />
        </FormGroup>
        <FormGroup>
          <AddQuestionSetButton />
        </FormGroup>
        { questionSetsArray && questionSetsArray.length > 0 &&
        <FormGroup>
          <label htmlFor="questionSetList">Question Sets</label>
          <div id="questionSetList">
            { questionSetsArray.map((questionSet, index) => (
              <Button
                key={`questionSet-${index}`}
                bsStyle="link"
                onClick={() => this.onClick(questionSet.questionSetId)}
              >{questionSet.questionSetId}
              </Button>
              ))
            }
          </div>
        </FormGroup>
        }
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    panelHeader: state.getIn(['form', 'schema', 'questionPanels',
      ownProps.currentPanelIndex, 'panelHeader']),
    panelText: state.getIn(['form', 'schema', 'questionPanels',
      ownProps.currentPanelIndex, 'panelText']),
    currentQuestionSets: state.getIn(['form', 'schema', 'questionPanels',
      ownProps.currentPanelIndex, 'questionSets']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
  };
}

export default connect(mapStateToProps, {
  editPageHeader,
  editPageText,
  changeCurrentEditingField,
})(PageEditor);

