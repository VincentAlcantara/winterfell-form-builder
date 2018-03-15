import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FormGroup } from 'react-bootstrap';
import { editPageHeader, editPageText } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../UI/FieldGroup';

class PageEditor extends Component {
  static propTypes = {
    editPageHeader: PropTypes.func.isRequired,
    editPageText: PropTypes.func.isRequired,
    panelHeader: PropTypes.string,
    panelText: PropTypes.string,
    currentPanelIndex: PropTypes.number.isRequired,
  }

  static defaultProps = {
    currentPanelIndex: 0,
    panelHeader: '',
    panelText: '',
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

  render() {
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
    currentPanelIndex: ownProps.currentPanelIndex,
  };
}
export default connect(mapStateToProps, { editPageHeader, editPageText })(PageEditor);

