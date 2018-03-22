import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Row, FormGroup } from 'react-bootstrap';
import { editFormTitle } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';


class EditFormTitleButton extends Component {
  static propTypes = {
    editFormTitle: PropTypes.func.isRequired,
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
    this.props.editFormTitle(event.target.value);
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.props.editFormTitle(this.state.formTitle);
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
export default connect(mapStateToProps, { editFormTitle })(EditFormTitleButton);

