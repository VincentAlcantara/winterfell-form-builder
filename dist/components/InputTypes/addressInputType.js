'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddressInput = function (_React$Component) {
  (0, _inherits3.default)(AddressInput, _React$Component);

  function AddressInput(props) {
    (0, _classCallCheck3.default)(this, AddressInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddressInput.__proto__ || (0, _getPrototypeOf2.default)(AddressInput)).call(this, props));

    _this.state = {
      value: _this.props.value.type ? _this.props.value.value : _this.props.value
    };

    _this.handleChangeField = _this.handleChangeField.bind(_this);
    _this.handleSelectState = _this.handleSelectState.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(AddressInput, [{
    key: 'handleSelectState',
    value: function handleSelectState(e) {
      var index = e.nativeEvent.target.selectedIndex;
      var _state$value = this.state.value,
          line1 = _state$value.line1,
          line2 = _state$value.line2,
          city = _state$value.city,
          postcode = _state$value.postcode;

      var theState = this.props.states.find(function (ss) {
        return ss.value === e.nativeEvent.target[index].value;
      });
      var state = {
        value: {
          line1: line1, line2: line2, city: city, state: theState, postcode: postcode
        }
      };
      this.setState(state, this.props.onChange.bind(null, { type: 'address', value: state.value }));
    }
  }, {
    key: 'handleChangeField',
    value: function handleChangeField(field, e) {
      var _this2 = this;

      var _state$value2 = this.state.value,
          line1 = _state$value2.line1,
          line2 = _state$value2.line2,
          city = _state$value2.city,
          postcode = _state$value2.postcode;

      var theState = this.props.states.find(function (ss) {
        return ss.value === _this2.state.value.state.value;
      });
      if (!theState) {
        theState = this.props.states[0];
      }
      var ns = {
        value: {
          line1: line1, line2: line2, city: city, state: theState, postcode: postcode
        }
      };
      ns.value[field] = e.target.value;
      this.setState(ns, this.props.onChange.bind(null, { type: 'address', value: ns.value }));
    }
  }, {
    key: 'renderSelect',
    value: function renderSelect() {
      var _this3 = this;

      var options = this.props.states.map(function (opt) {
        return _react2.default.createElement(
          'option',
          { key: opt.value, value: opt.value },
          opt.text
        );
      });

      return _react2.default.createElement(
        'select',
        {
          name: this.props.name + '-state',
          id: this.props.id + '-state',
          className: this.props.classes.select,
          value: this.state.value.state ? this.state.value.state.value : '',
          required: this.props.required ? 'required' : undefined,
          onChange: function onChange(e) {
            return _this3.handleSelectState(e);
          },
          onFocus: function onFocus() {
            return _this3.props.onFocus(_this3.props.id);
          }
        },
        options
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props,
          _onFocus = _props.onFocus,
          placeholders = _props.placeholders;

      var sel = this.renderSelect();
      var address = _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', {
            type: 'text',
            name: this.props.name + '-line1',
            id: this.props.id + '-line1',
            'aria-labelledby': this.props.labelId + '-line1',
            className: this.props.classes.input,
            placeholder: placeholders.line1,
            value: this.state.value.line1,
            required: this.props.required ? 'required' : undefined,
            onChange: function onChange(e) {
              return _this4.handleChangeField('line1', e);
            },
            onFocus: function onFocus() {
              return _onFocus(_this4.props.id);
            }
          })
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement('input', {
            type: 'text',
            name: this.props.name + '-line2',
            id: this.props.id + '-line2',
            'aria-labelledby': this.props.labelId + '-line2',
            className: this.props.classes.input,
            placeholder: placeholders.line2,
            value: this.state.value.line2,
            required: this.props.required ? 'required' : undefined,
            onChange: function onChange(e) {
              return _this4.handleChangeField('line2', e);
            },
            onFocus: function onFocus() {
              return _onFocus(_this4.props.id);
            }
          })
        ),
        _react2.default.createElement(
          'div',
          { className: 'city-line' },
          _react2.default.createElement(
            'div',
            { className: 'beginning' },
            _react2.default.createElement('input', {
              type: 'text',
              name: this.props.name + '-city',
              id: this.props.id + '-city',
              'aria-labelledby': this.props.labelId + '-city',
              className: this.props.classes.input,
              placeholder: placeholders.city,
              value: this.state.value.city,
              required: this.props.required ? 'required' : undefined,
              onChange: function onChange(e) {
                return _this4.handleChangeField('city', e);
              },
              onFocus: function onFocus() {
                return _onFocus(_this4.props.id);
              }
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'middle' },
            sel
          ),
          _react2.default.createElement(
            'div',
            { className: 'ending' },
            _react2.default.createElement('input', {
              type: 'text',
              name: this.props.name + '-postcode',
              id: this.props.id + '-postcode',
              'aria-labelledby': this.props.labelId + '-postcode',
              className: this.props.classes.input,
              placeholder: placeholders.postcode,
              value: this.state.value.postcode,
              required: this.props.required ? 'required' : undefined,
              onChange: function onChange(e) {
                return _this4.handleChangeField('postcode', e);
              },
              onFocus: function onFocus() {
                return _onFocus(_this4.props.id);
              }
            })
          )
        )
      );

      return address;
    }
  }]);
  return AddressInput;
}(_react2.default.Component);

var _default = AddressInput;
exports.default = _default;


AddressInput.propTypes = {
  value: _propTypes2.default.object,
  states: _propTypes2.default.array,
  onChange: _propTypes2.default.func,
  name: _propTypes2.default.string,
  id: _propTypes2.default.string,
  classes: _propTypes2.default.string,
  required: _propTypes2.default.string,
  onFocus: _propTypes2.default.func,
  placeholders: _propTypes2.default.object,
  labelId: _propTypes2.default.string.isRequired
};

AddressInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  required: undefined,
  value: {
    line1: '',
    line2: '',
    city: '',
    state: {
      text: 'Australian Capital Territory',
      value: 'ACT'
    },
    postcode: ''
  },
  placeholders: {
    line1: 'e.g 100 Pitt St',
    line2: 'e.g Sydney CBD',
    city: 'e.g Sydney',
    postcode: 'e.g 2000'
  },
  states: [{
    text: 'Select state',
    value: ''
  }, {
    text: 'Australian Capital Territory',
    value: 'ACT'
  }, {
    text: 'New South Wales',
    value: 'NSW'
  }, {
    text: 'Northern Territory',
    value: 'NT'
  }, {
    text: 'Queensland',
    value: 'QLD'
  }, {
    text: 'South Australia',
    value: 'SA'
  }, {
    text: 'Tasmania',
    value: 'TAS'
  }, {
    text: 'Victoria',
    value: 'VIC'
  }, {
    text: 'Western Australia',
    value: 'WA'
  }],
  onChange: function onChange() {},
  onFocus: function onFocus() {}
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AddressInput, 'AddressInput', 'src/components/InputTypes/addressInputType.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/InputTypes/addressInputType.js');
}();

;