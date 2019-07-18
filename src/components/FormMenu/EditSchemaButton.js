import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, FormGroup } from 'react-bootstrap';

import { updateForm } from '../../actions/winterfellFormBuilderActions';

class EditSchemaButton extends Component {
  static propTypes = {
    updateForm: PropTypes.func.isRequired,
  };

  static defaultProps = {
    schema: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      schemaObject: null,
    };

    this.onChange = this.onChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  onChange(e) {
    this.setState({ schema: JSON.parse(e.target.value) });
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.props.updateForm(this.state.schema);
    this.setState({ showModal: false });
  }

  render() {
    return [
      <Button
        className="btn btn-block btn-primary"
        data-toggle="modal"
        data-target="#editSchema"
      >edit schema
      </Button>,
      <div className="modal fade" id="editSchema" tabIndex="-1">
        <div className="modal-dialog bg-white">
          <div className="modal-header">
            <div className="modal-title">Edit Schema</div>
          </div>
          <div className="modal-body">
            <form>
              <FormGroup>
                <textarea
                  rows="30"
                  cols="78"
                  value={JSON.stringify(this.state.schema, undefined, 2)}
                  onChange={this.onChange}
                />
              </FormGroup>
            </form>
          </div>
          <div className="modal-footer">
            <Button
              bsStyle="danger"
              onClick={() => { this.setState({ showModal: false }); }}
            >Cancel</Button>
            <Button
              bsStyle="primary"
              onClick={this.onFormUpdate}
            >Save changes</Button>
          </div>
        </div>
      </div>,
    ];
  }
}

function mapStateToProps(state) {
  return {
    schema: state.getIn(['form', 'schema']),
  };
}

export default connect(mapStateToProps, { updateForm })(EditSchemaButton);
