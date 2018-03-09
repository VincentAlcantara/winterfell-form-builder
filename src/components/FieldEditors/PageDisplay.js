import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Button, Modal, FormGroup } from 'react-bootstrap';
import { editForm } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../UI/FieldGroup';


class EditFormTitleButton extends Component {
  static propTypes = {
    editForm: PropTypes.func.isRequired,
    currentPanelIndex: PropTypes.number.isRequired,
    questionPanels: PropTypes.array.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      pageHeader: this.props.questionPanels[this.props.currentPanelIndex].pageHeader,
      pageText: this.props.questionPanels[this.props.currentPanelIndex].pageText,
    };

    this.onChange = this.onChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
    this.props.editForm(event.target.value);
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.props.editForm(this.state.formTitle);
  }

  render() {
    const { title } = this.props;

    return (
      <Row>
        <form>
          <FormGroup>
            <FieldGroup
              id="pageHeader"
              name="pageHeader"
              label="Page Header"
              onChange={this.onChange}
              placeholder={title}
              value={this.state.pageHeader}
            />
          </FormGroup>
          <FormGroup>
            <FieldGroup
              id="pageText"
              name="pageText"
              label="Page Text"
              onChange={this.onChange}
              placeholder={title}
              value={this.state.pageText}
            />
          </FormGroup>
        </form>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentPanelIndex: state.get('currentPanelIndex'),
    questionPanels: state.getIn(['schema', 'questionPanels']).toJS(),
  };
}
export default connect(mapStateToProps, { editForm })(EditFormTitleButton);

