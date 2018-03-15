import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  static propTypes = {
    value: PropTypes.array.isRequired,
    // onChange: PropTypes.func,
    options: PropTypes.array.isRequired,
    classes: PropTypes.object,
    name: PropTypes.string,
    id: PropTypes.string,
    required: PropTypes.bool,
  };

  static defaultProps = {
    classes: {
      select: 'form-control',
    },
    id: '',
    name: '',
    value: [],
    options: [],
    onChange: () => {},
    onBlur: () => {},
    required: false,
  };
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value.length > 0 ? this.props.value : [],
    };

    this.handleChange = this.handleChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  onBlur(e) {
    let currentValue = this.state.value;

    if (e.target.checked) {
      currentValue = currentValue.filter(v => v !== e.target.value);
    }

    this.setState({ value: currentValue });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const options = this.props.options.map(opt =>
      <option
        key={opt.value}
        value={opt.value}
      >
        {opt.text}
      </option>,
    );
    return (
      <select
        name={this.props.name}
        id={this.props.id}
        className={this.props.classes.select}
        value={this.state.value}
        required={this.props.required
          ? 'required'
          : undefined}
        onChange={this.handleChange}
        onBlur={this.onBlur}
        multiple={this.state.value.length > 0}
      >
        {options}
      </select>
    );
  }
}

export default SelectInput;
