import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { updateForm } from '../../actions/winterfellFormBuilderActions';

class EditSchemaButton extends Component {
  static propTypes = {
    updateForm: PropTypes.func.isRequired,
    schema: PropTypes.object,
  };

  static defaultProps = {
    schema: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      schema: this.props.schema,
    };

    this.onChange = this.onChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.state = {
      schema: nextProps.schema,
    };
  }

  onChange(e) {
    this.setState({ schema: JSON.parse(e.target.value) });
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.props.updateForm(this.state.schema);
  }

  render() {
    return [
      <button
        className="btn btn-block btn-dark"
        data-toggle="modal"
        data-target="#editSchema"
        key="editSchema"
        title="Edit Schema"
      ><i className="material-icons">view_agenda</i><span className="icon-menu">Schema</span>
      </button>,
      <div className="modal fade" id="editSchema" tabIndex="-1" key="editSchemaModal">
        <div className="modal-dialog bg-white">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title">Edit Schema</div>
            </div>
            <div className="modal-body">
              <form>
                <textarea
                  rows="30"
                  cols="50"
                  value={JSON.stringify(this.state.schema, undefined, 2)}
                  onChange={this.onChange}
                />
              </form>
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-danger"
                data-dismiss="modal"
              >Cancel</button>
              <button
                className="btn btn-dark"
                onClick={this.onFormUpdate}
                data-dismiss="modal"
              >Save changes</button>
            </div>
          </div>
        </div>
      </div>,
    ];
  }
}

EditSchemaButton.propTypes = {
  updateForm: PropTypes.func.isRequired,
};

EditSchemaButton.defaultProps = {
  schema: null,
};

function mapStateToProps(state) {
  return {
    schema: state.getIn(['form', 'schema']),
  };
}

export default connect(mapStateToProps, { updateForm })(EditSchemaButton);
