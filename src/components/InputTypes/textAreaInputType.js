import React from 'react';
import PropTypes from 'prop-types';

class TextAreaInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    }, this.props.onChange.bind(null, e.target.value));
  }

  render() {
    return (
      <textarea
        type="text"
        name={this.props.name}
        id={this.props.id}
        aria-labelledby={this.props.labelId}
        className={this.props.classes.input}
        placeholder={this.props.placeholder}
        value={this.state.value}
        required={this.props.required
          ? 'required'
          : undefined}
        onChange={this.handleChange}
        onFocus={() => this.props.onFocus(null, this.props.id)}
        onBlur={() => this.props.onBlur(null, this.state.value)}
      />
    );
  }
}

TextAreaInput.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  labelId: PropTypes.string,
  placeholder: PropTypes.string,
  classes: PropTypes.object,
  onChange: PropTypes.function,
  onFocus: PropTypes.function,
  onBlur: PropTypes.function,
  required: PropTypes.bool,
};

TextAreaInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  labelId: '',
  value: '',
  placeholder: '',
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  required: false,
};

module.exports = TextAreaInput;
