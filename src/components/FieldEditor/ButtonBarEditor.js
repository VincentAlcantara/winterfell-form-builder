import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup } from 'react-bootstrap';
import { fromJS } from 'immutable';

import { editNextButtonText, editBackButtonText, onSelectNextButtonAction, onSelectNextButtonTarget } from '../../actions/winterfellFormBuilderActions';
import SelectInput from '../InputTypes/SelectInput';

import FieldGroup from '../InputTypes/FieldGroup';

class ButtonBarEditor extends PureComponent {
  static propTypes = {
    editNextButtonText: PropTypes.func.isRequired,
    editBackButtonText: PropTypes.func.isRequired,
    onSelectNextButtonAction: PropTypes.func.isRequired,
    onSelectNextButtonTarget: PropTypes.func.isRequired,
    backButtonText: PropTypes.string,
    nextButtonText: PropTypes.string,
    formPanels: PropTypes.object,
    currentQuestionPanelIndex: PropTypes.number.isRequired,
    defaultGoToAction: PropTypes.string,
    defaultGoToTarget: PropTypes.string,
  }

  static defaultProps = {
    currentQuestionPanelIndex: 0,
    backButtonText: '',
    nextButtonText: '',
    formPanels: fromJS({}),
    defaultGoToAction: '',
    defaultGoToTarget: '',
  }
  constructor(props) {
    super(props);
    const { backButtonText, nextButtonText, defaultGoToAction, defaultGoToTarget } = props;

    this.state = {
      backButtonText,
      nextButtonText,
      defaultGoToAction,
      defaultGoToTarget,
    };

    this.onChangeBackButtonText = this.onChangeBackButtonText.bind(this);
    this.onChangeNextButtonText = this.onChangeNextButtonText.bind(this);
    this.onChangeNextButtonTargetText = this.onChangeNextButtonTargetText.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSelectDefaultAction = this.onSelectDefaultAction.bind(this);
    this.onSelectDefaultTarget = this.onSelectDefaultTarget.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      backButtonText: nextProps.backButtonText,
      nextButtonText: nextProps.nextButtonText,
      defaultGoToAction: nextProps.defaultGoToAction,
      defaultGoToTarget: nextProps.defaultGoToTarget,
    };
  }

  onChangeBackButtonText(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.props.editBackButtonText(this.props.currentQuestionPanelIndex, event.target.value);
  }

  onChangeNextButtonText(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.props.editNextButtonText(this.props.currentQuestionPanelIndex, event.target.value);
  }

  onChangeNextButtonTargetText(event) {
    this.setState({ [event.target.name]: event.target.value });
    this.props.onSelectNextButtonTarget(this.props.currentQuestionPanelIndex, event.target.value);
  }

  onClick(questionSetId) {
    const questionSetIndex = this.props.formPanels.findIndex(questionSet => questionSet.get('questionSetId') === questionSetId);
    this.props.onSelectNextButtonAction('questionSet', questionSetIndex);
  }

  onSelectDefaultAction(action) {
    this.setState({ defaultGoToAction: action });
    this.props.onSelectNextButtonAction(this.props.currentQuestionPanelIndex, action);
  }

  onSelectDefaultTarget(target) {
    this.setState({ defaultGoToTarget: target });
    this.props.onSelectNextButtonTarget(this.props.currentQuestionPanelIndex, target);
  }

  render() {
    const formPanelIds = this.props.formPanels.toJS().map(formPanel => ({
      text: formPanel.panelId,
      value: formPanel.panelId,
    }));

    return (
      <form>
        <FormGroup>
          <FieldGroup
            id="backButtonText"
            name="backButtonText"
            label="Back Button Text"
            onChange={this.onChangeBackButtonText}
            placeholder={this.props.backButtonText}
            value={this.state.backButtonText}
          />
        </FormGroup>
        <FormGroup>
          <FieldGroup
            id="nextButtonText"
            name="nextButtonText"
            label="Next Button Text"
            placeholder={this.props.nextButtonText}
            onChange={this.onChangeNextButtonText}
            value={this.state.nextButtonText}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="goToAction">
            Default Next Button Option
          </label>
          <SelectInput
            id="goToAction"
            labelId="goToAction"
            options={[{
              text: 'SUBMIT',
              value: 'SUBMIT',
            }, {
              text: 'GOTO',
              value: 'GOTO',
            }]}
            onSelect={this.onSelectDefaultAction}
            initialValue={this.props.defaultGoToAction}
          />
        </FormGroup>
        { this.state.defaultGoToAction === 'GOTO' &&
          <FormGroup>
            <label htmlFor="goToPanel">
              Default Next Button Target
            </label>
            <SelectInput
              id="goToPanel"
              labelId="goToPanel"
              options={formPanelIds}
              onSelect={this.onSelectDefaultTarget}
              initialValue={this.props.defaultGoToTarget}
            />
          </FormGroup>
        }
        { this.state.defaultGoToAction === 'SUBMIT' &&
          <FieldGroup
            id="defaultGoToTarget"
            name="defaultGoToTarget"
            label="Submit Target"
            placeholder={this.props.defaultGoToTarget}
            onChange={this.onChangeNextButtonTargetText}
            value={this.state.defaultGoToTarget}
          />
        }
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    backButtonText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'backButton', 'text']),
    nextButtonText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'button', 'text']),
    defaultAction: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'default']),
    conditionalActions: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'conditions']),
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    defaultGoToAction: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'default', 'action']),
    defaultGoToTarget: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'default', 'target']),
  };
}

export default connect(mapStateToProps, {
  editNextButtonText,
  editBackButtonText,
  onSelectNextButtonAction,
  onSelectNextButtonTarget,
})(ButtonBarEditor);

