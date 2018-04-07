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

var RadioButtonOptionsInput = function (_React$Component) {
  (0, _inherits3.default)(RadioButtonOptionsInput, _React$Component);

  function RadioButtonOptionsInput(props) {
    (0, _classCallCheck3.default)(this, RadioButtonOptionsInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (RadioButtonOptionsInput.__proto__ || (0, _getPrototypeOf2.default)(RadioButtonOptionsInput)).call(this, props));

    _this.state = {
      value: _this.props.value.length > 0 ? _this.props.value : []
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(RadioButtonOptionsInput, [{
    key: 'onBlur',
    value: function onBlur(e) {
      var currentValue = this.state.value;

      if (e.target.checked) {
        currentValue = currentValue.filter(function (v) {
          return v !== e.target.value;
        });
      }

      this.setState({ value: currentValue });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      var currentValue = this.state.value;

      if (e.target.checked) {
        currentValue.push(e.target.value);
      } else {
        currentValue = currentValue.filter(function (v) {
          return v !== e.target.value;
        });
      }

      this.setState({ value: currentValue });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'ul',
        { className: this.props.classes.checkboxList },
        this.props.options.map(function (opt) {
          return _react2.default.createElement(
            'li',
            {
              key: opt.value,
              className: _this2.props.classes.checkboxListItem
            },
            _react2.default.createElement(
              'label',
              {
                className: _this2.props.classes.checkboxLabel,
                htmlFor: _this2.props.name + '-' + opt.value,
                id: _this2.props.labelId
              },
              _react2.default.createElement('input', {
                type: 'radio',
                id: _this2.props.name + '-' + opt.value,
                name: _this2.props.name,
                'aria-labelledby': _this2.props.labelId,
                value: opt.value,
                checked: _this2.state.value.indexOf(opt.value) > -1,
                className: _this2.props.classes.checkbox,
                required: _this2.props.required ? 'required' : undefined,
                onChange: _this2.handleChange,
                onBlur: _this2.onBlur,
                autoComplete: _this2.props.name + '-' + opt.value
              }),
              opt.text
            )
          );
        })
      );
    }
  }]);
  return RadioButtonOptionsInput;
}(_react2.default.Component);

RadioButtonOptionsInput.propTypes = {
  value: _propTypes2.default.array.isRequired,
  // onChange: PropTypes.func,
  options: _propTypes2.default.array.isRequired,
  classes: _propTypes2.default.object,
  name: _propTypes2.default.string,
  labelId: _propTypes2.default.string,
  required: _propTypes2.default.bool
};
RadioButtonOptionsInput.defaultProps = {
  classes: {
    checkboxList: 'clean-list',
    checkboxListItem: 'radio'
  },
  labelId: '',
  name: '',
  value: [],
  options: [],
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  required: false
};
var _default = RadioButtonOptionsInput;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RadioButtonOptionsInput, 'RadioButtonOptionsInput', 'src/components/InputTypes/RadioButtonOptionsInput.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/InputTypes/RadioButtonOptionsInput.js');
}();

;