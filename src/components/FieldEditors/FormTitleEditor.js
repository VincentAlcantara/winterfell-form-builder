import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col, Button, Modal, FormGroup } from 'react-bootstrap';
import { editForm } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../UI/FieldGroup';


class EditFormTitleButton extends Component {
  static propTypes = {
    editForm: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      formTitle: '',
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
              id="formTitle"
              name="formTitle"
              label="Enter title of the form"
              onChange={this.onChange}
              placeholder={title}
              value={this.state.formTitle}
            />
          </FormGroup>
        </form>
      </Row>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
  };
}
export default connect(mapStateToProps, { editForm })(EditFormTitleButton);

