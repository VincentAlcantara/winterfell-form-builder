import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class DateInput extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value.type ? this.props.value.value : this.props.value,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      value: date,
    }, this.props.onChange.bind(null, { type: 'date', value: date }));
  }

  render() {
    const { onFocus } = this.props;
    return (
      <div>
        <DatePicker
          name={`${this.props.name}`}
          id={`${this.props.id}`}
          aria-labelledby={`${this.props.labelId}`}
          className={this.props.classes.input}
          selected={this.state.value}
          onSelect={this.props.onBlur}
          onFocus={() => onFocus(this.props.id)}
          onChange={this.handleChange}
          dateFormat="LL"
        />
      </div>);
  }
}

DateInput.propTypes = {
  value: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string.isRequired,
  classes: PropTypes.object,
  onFocus: PropTypes.func,
  labelId: PropTypes.string.isRequired,
};

DateInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: moment(),
  onChange: () => {
  },
  onBlur: () => {
  },
  onFocus: () => {
  },
};
