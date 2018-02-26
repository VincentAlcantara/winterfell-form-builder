import React from 'react';


class WinterfellFormBuilder extends Component {
  static propTypes = {
    title: PropTypes.string,
    schema: PropTypes.object,
    updateForm: PropTypes.func.isRequired,
  }

  static defaultProps = {
    title: '',
    panelId: '',
    schema: {},
  }

  constructor(props) {
    super(props);

    this.state = {
      schema: this.props.schema,
    };

    this.onDomChange = this.onDomChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  onChange(e) {
    e.preventDefault();
    this.setState({ schema: JSON.parse(e.target.value) });
  }

mv   onFormUpdate(e) {
    e.preventDefault();
    this.props.updateForm(this.state.schema);
  }

  render () {
    return (
      <div className="winterfell-formbuilder">
        Coming soon.
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
    schema: state.getIn(['form', 'schema']).toJS(),
  };
}

export default connect(mapStateToProps, { createForm, updateForm })(WinterFormBuilder);

