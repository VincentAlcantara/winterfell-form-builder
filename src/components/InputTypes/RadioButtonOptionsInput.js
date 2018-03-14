import React from 'react';
import PropTypes from 'prop-types';

class RadioButtonOptionsInput extends React.Component {
  static propTypes = {
    value: PropTypes.array.isRequired,
    // onChange: PropTypes.func,
    options: PropTypes.array.isRequired,
    classes: PropTypes.object,
    name: PropTypes.string,
    labelId: PropTypes.string,
    required: PropTypes.bool,
  };

  static defaultProps = {
    classes: {
      checkboxList: 'clean-list',
      checkboxListItem: 'radio',
    },
    labelId: '',
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
    let currentValue = this.state.value;

    if (e.target.checked) {
      currentValue.push(e.target.value);
    } else {
      currentValue = currentValue.filter(v => v !== e.target.value);
    }

    this.setState({ value: currentValue });
  }

  render() {
    return (
      <ul className={this.props.classes.checkboxList}>
        {this.props.options.map(opt =>
          <li
            key={opt.value}
            className={this.props.classes.checkboxListItem}
          >
            <label
              className={this.props.classes.checkboxLabel}
              htmlFor={`${this.props.name}-${opt.value}`}
              id={this.props.labelId}
            >
              <input
                type="radio"
                id={`${this.props.name}-${opt.value}`}
                name={this.props.name}
                aria-labelledby={this.props.labelId}
                value={opt.value}
                checked={this.state.value.indexOf(opt.value) > -1}
                className={this.props.classes.checkbox}
                required={this.props.required ? 'required' : undefined}
                onChange={this.handleChange}
                onBlur={this.onBlur}
              />
              {opt.text}
            </label>
          </li>,
        )}
      </ul>
    );
  }
}

export default RadioButtonOptionsInput;
