import React from 'react';
import PropTypes from 'prop-types';

export default class AddressInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value.type ? this.props.value.value : this.props.value,
    };

    this.handleChangeField = this.handleChangeField.bind(this);
    this.handleSelectState = this.handleSelectState.bind(this);
  }

  handleSelectState(e) {
    const index = e.nativeEvent.target.selectedIndex;
    const {
      line1, line2, city, postcode,
    } = this.state.value;
    const theState = this.props.states.find(ss => ss.value === e.nativeEvent.target[index].value);
    const state = {
      value: {
        line1, line2, city, state: theState, postcode,
      },
    };
    this.setState(state, this.props.onChange.bind(null, { type: 'address', value: state.value }));
  }

  handleChangeField(field, e) {
    const {
      line1, line2, city, postcode,
    } = this.state.value;
    let theState = this.props.states.find(ss => ss.value === this.state.value.state.value);
    if (!theState) {
      theState = this.props.states[0];
    }
    const ns = {
      value: {
        line1, line2, city, state: theState, postcode,
      },
    };
    ns.value[field] = e.target.value;
    this.setState(ns, this.props.onChange.bind(null, { type: 'address', value: ns.value }));
  }

  renderSelect() {
    const options = this.props.states.map(opt =>
      (<option key={opt.value} value={opt.value}>{opt.text}</option>));

    return (
      <select
        name={`${this.props.name}-state`}
        id={`${this.props.id}-state`}
        className={this.props.classes.select}
        value={this.state.value.state ? this.state.value.state.value : ''}
        required={this.props.required
          ? 'required'
          : undefined}
        onChange={e => this.handleSelectState(e)}
        onFocus={() => this.props.onFocus(this.props.id)}
      >
        {options}
      </select>
    );
  }

  render() {
    const { onFocus, placeholders } = this.props;
    const sel = this.renderSelect();
    const address = (
      <div>
        <div>
          <input
            type="text"
            name={`${this.props.name}-line1`}
            id={`${this.props.id}-line1`}
            aria-labelledby={`${this.props.labelId}-line1`}
            className={this.props.classes.input}
            placeholder={placeholders.line1}
            value={this.state.value.line1}
            required={this.props.required ? 'required' : undefined}
            onChange={e => this.handleChangeField('line1', e)}
            onFocus={() => onFocus(this.props.id)}
          />
        </div>
        <div>
          <input
            type="text"
            name={`${this.props.name}-line2`}
            id={`${this.props.id}-line2`}
            aria-labelledby={`${this.props.labelId}-line2`}
            className={this.props.classes.input}
            placeholder={placeholders.line2}
            value={this.state.value.line2}
            required={this.props.required ? 'required' : undefined}
            onChange={e => this.handleChangeField('line2', e)}
            onFocus={() => onFocus(this.props.id)}
          />
        </div>
        <div className="city-line">
          <div className="beginning">
            <input
              type="text"
              name={`${this.props.name}-city`}
              id={`${this.props.id}-city`}
              aria-labelledby={`${this.props.labelId}-city`}
              className={this.props.classes.input}
              placeholder={placeholders.city}
              value={this.state.value.city}
              required={this.props.required ? 'required' : undefined}
              onChange={e => this.handleChangeField('city', e)}
              onFocus={() => onFocus(this.props.id)}
            />
          </div>
          <div className="middle">
            {sel}
          </div>
          <div className="ending">
            <input
              type="text"
              name={`${this.props.name}-postcode`}
              id={`${this.props.id}-postcode`}
              aria-labelledby={`${this.props.labelId}-postcode`}
              className={this.props.classes.input}
              placeholder={placeholders.postcode}
              value={this.state.value.postcode}
              required={this.props.required ? 'required' : undefined}
              onChange={e => this.handleChangeField('postcode', e)}
              onFocus={() => onFocus(this.props.id)}
            />
          </div>
        </div>
      </div>);

    return address;
  }
}

AddressInput.propTypes = {
  value: PropTypes.object,
  states: PropTypes.array,
  onChange: PropTypes.func,
  name: PropTypes.string,
  id: PropTypes.string,
  classes: PropTypes.string,
  required: PropTypes.bool.isRequired,
  onFocus: PropTypes.func,
  placeholders: PropTypes.object,
  labelId: PropTypes.string.isRequired,
};

AddressInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: {
    line1: '',
    line2: '',
    city: '',
    state: {
      text: 'Australian Capital Territory',
      value: 'ACT',
    },
    postcode: '',
  },
  placeholders: {
    line1: 'e.g 100 Pitt St',
    line2: 'e.g Sydney CBD',
    city: 'e.g Sydney',
    postcode: 'e.g 2000',
  },
  states: [{
    text: 'Australian Capital Territory',
    value: 'ACT',
  }, {
    text: 'New South Wales',
    value: 'NSW',
  }, {
    text: 'Northern Territory',
    value: 'NT',
  }, {
    text: 'Queensland',
    value: 'QLD',
  }, {
    text: 'South Australia',
    value: 'SA',
  }, {
    text: 'Tasmania',
    value: 'TAS',
  }, {
    text: 'Victoria',
    value: 'VIC',
  }, {
    text: 'Western Australia',
    value: 'WA',
  }],
  onChange: () => {
  },
  onFocus: () => {
  },
};
