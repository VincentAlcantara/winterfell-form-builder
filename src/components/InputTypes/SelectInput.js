import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  state = {
    value: this.props.displayValue,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.displayValue,
    });
  }
  
  handleChange = (e) => {
    this.setState({ value: e.target.value });
    this.props.onSelect(e.target.value);
  }

  render() {
    const options = this.props.options && this.props.options.map((opt, index) =>
      (<option
        key={index}
        value={opt.value}
      >
        {opt.text}
      </option>),
    );
    return (
      <select
        name={this.props.name}
        className={this.props.classes.select}
        value={this.state.value}
        required={this.props.required
          ? 'required'
          : undefined}
        onChange={this.handleChange}
        onSelect={() => this.props.onSelect}
        autoComplete={this.props.name}
      >
        <option value="">&nbsp;</option>
        {options}
      </select>
    );
  }
}

SelectInput.propTypes = {
  displayValue: PropTypes.string,
  options: PropTypes.array.isRequired,
  classes: PropTypes.object,
  name: PropTypes.string,
  onSelect: PropTypes.func,
  required: PropTypes.bool,
};

SelectInput.defaultProps = {
  classes: {
    select: 'form-control',
  },
  id: '',
  name: '',
  value: '',
  options: [],
  onChange: () => {},
  onSelect: () => {},
  required: false,
  displayValue: '',
};

export default SelectInput;
