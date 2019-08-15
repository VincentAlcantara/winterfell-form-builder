import React from 'react';
import PropTypes from 'prop-types';

class CheckboxOptionsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value.length > 0 ? this.props.value : [],
    };
    this.handleChange = this.handleChange.bind(this);
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
          (<li
            key={opt.value}
            className={this.props.classes.checkboxListItem}
          >
            <div className="form-group">
              <label
                className={this.props.classes.checkboxLabel}
                htmlFor={`${this.props.name}-${opt.value}`}
                id={this.props.labelId}
              >
                <input
                  type="checkbox"
                  id={`${this.props.name}-${opt.value}`}
                  name={this.props.name}
                  aria-labelledby={this.props.labelId}
                  value={opt.value}
                  checked={this.state.value.indexOf(opt.value) > -1}
                  className={this.props.classes.checkbox}
                  required={this.props.required ? 'required' : undefined}
                  onChange={this.handleChange}
                  autoComplete={`${this.props.name}-${opt.value}`}
                />
                {opt.text}
              </label>
            </div>
          </li>),
        )}
      </ul>
    );
  }
}

CheckboxOptionsInput.propTypes = {
  value: PropTypes.array.isRequired,
  // onChange: PropTypes.func,
  options: PropTypes.array.isRequired,
  classes: PropTypes.object,
  name: PropTypes.string,
  labelId: PropTypes.string,
  required: PropTypes.bool,
};

CheckboxOptionsInput.defaultProps = {
  classes: {
    checkboxList: 'clean-list',
    checkboxListItem: 'checkbox',
  },
  labelId: '',
  name: '',
  value: [],
  options: [],
  onChange: () => {},
  required: false,
};

export default CheckboxOptionsInput;
