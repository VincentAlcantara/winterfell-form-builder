import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import { editPageId, editPageHeader, editPageText, changeCurrentEditingField, updateErrorMessage, clearErrorMessage } from '../../actions/winterfellFormBuilderActions';
import { AddQuestionSetButton } from '../FormMenu';
import FieldGroup from '../InputTypes/FieldGroup';

class PageEditor extends PureComponent {
  constructor(props) {
    super(props);
    const { title, panelId, panelHeader, panelText } = props;

    this.state = {
      title,
      panelId,
      panelHeader,
      panelText,
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onUpdatePageId = this.onUpdatePageId.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      panelId: nextProps.panelId,
      panelHeader: nextProps.panelHeader,
      panelText: nextProps.panelText,
    };
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
    switch (event.target.name) {
      case 'panelHeader': this.props.editPageHeader(this.props.currentQuestionPanelIndex, event.target.value); break;
      case 'panelText': this.props.editPageText(this.props.currentQuestionPanelIndex, event.target.value); break;
      default: break;
    }
  }

  onClick(questionSetId) {
    const questionSetIndex = this.props.questionSets.findIndex(questionSet => questionSet.get('questionSetId') === questionSetId);
    this.props.changeCurrentEditingField('questionSet', questionSetIndex);
  }

  onUpdatePageId() {
    const { panelId } = this.props;
    const formPanelIndex = this.props.formPanels.findIndex(formPanel => formPanel.get('panelId') === this.state.panelId);
    if (formPanelIndex === -1) {
      this.props.editPageId(this.props.currentQuestionPanelIndex, this.state.panelId);
    } else {
      this.props.updateErrorMessage('Page ID already exists.  No update performed.');
      this.setState({ panelId });
    }
  }

  render() {
    const questionSetsArray = this.props.currentQuestionSets.toJS();
    return [
      <h3>Question Editor</h3>,
      <form>
        <div className="form-group">
          <label htmlFor="panelId">
              Page ID
          </label>
          <div className="input-group">
            <input
              className="form-control"
              id="panelId"
              name="panelId"
              onChange={this.onChange}
              placeholder={this.props.panelId}
              value={this.state.panelId}
            />
            <div className="input-group-append">
              <button
                onClick={this.onUpdatePageId}
                className="btn btn-dark"
                title="Click to update page title"
              >save
              </button>
            </div>
          </div>
        </div>
        <div className="form-group">
          <FieldGroup
            id="panelHeader"
            name="panelHeader"
            label="Page Header"
            onChange={this.onChange}
            placeholder={this.props.panelHeader}
            value={this.state.panelHeader}
          />
        </div>
        <div className="form-group">
          <FieldGroup
            id="panelText"
            name="panelText"
            label="Page Text"
            placeholder={this.props.panelText}
            onChange={this.onChange}
            value={this.state.panelText}
          />
        </div>
        <div className="form-group">
          <AddQuestionSetButton />
        </div>
        { questionSetsArray && questionSetsArray.length > 0 &&
        <div className="form-group">
          <label htmlFor="questionSetList">Question Sets</label>
          <div id="questionSetList">
            { questionSetsArray.map((questionSet, index) => (
              <button
                type="button"
                key={`questionSet-${index}`}
                variant="link"
                onClick={() => this.onClick(questionSet.questionSetId)}
              >{questionSet.questionSetId}
              </button>
            ))
            }
          </div>
        </div>
        }
      </form>,
    ];
  }
}

PageEditor.propTypes = {
  editPageId: PropTypes.func.isRequired,
  editPageHeader: PropTypes.func.isRequired,
  editPageText: PropTypes.func.isRequired,
  updateErrorMessage: PropTypes.func.isRequired,
  changeCurrentEditingField: PropTypes.func.isRequired,
  title: PropTypes.string,
  panelId: PropTypes.string,
  panelHeader: PropTypes.string,
  panelText: PropTypes.string,
  currentQuestionSets: PropTypes.object,
  questionSets: PropTypes.object,
  currentQuestionPanelIndex: PropTypes.number.isRequired,
  formPanels: PropTypes.object.isRequired,
};

PageEditor.defaultProps = {
  currentQuestionPanelIndex: 0,
  title: '',
  panelId: '',
  panelHeader: '',
  panelText: '',
  questionSets: fromJS({}),
  currentQuestionSets: fromJS({}),
  formPanels: fromJS({}),
};

function mapStateToProps(state, ownProps) {
  return {
    title: state.getIn(['form', 'title']),
    panelId: state.getIn(['form', 'schema', 'questionPanels',
      ownProps.currentQuestionPanelIndex, 'panelId']),
    panelHeader: state.getIn(['form', 'schema', 'questionPanels',
      ownProps.currentQuestionPanelIndex, 'panelHeader']),
    panelText: state.getIn(['form', 'schema', 'questionPanels',
      ownProps.currentQuestionPanelIndex, 'panelText']),
    currentQuestionSets: state.getIn(['form', 'schema', 'questionPanels',
      ownProps.currentQuestionPanelIndex, 'questionSets']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
    currentQuestionPanelIndex: state.getIn(['form', 'currentQuestionPanelIndex']),
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
  };
}

export default connect(mapStateToProps, {
  editPageId,
  editPageHeader,
  editPageText,
  changeCurrentEditingField,
  updateErrorMessage,
  clearErrorMessage,
})(PageEditor);

