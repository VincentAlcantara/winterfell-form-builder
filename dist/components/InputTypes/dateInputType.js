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

var _reactDatepicker = require('react-datepicker');

var _reactDatepicker2 = _interopRequireDefault(_reactDatepicker);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateInput = function (_React$Component) {
  (0, _inherits3.default)(DateInput, _React$Component);

  function DateInput(props) {
    (0, _classCallCheck3.default)(this, DateInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DateInput.__proto__ || (0, _getPrototypeOf2.default)(DateInput)).call(this, props));

    _this.state = {
      value: _this.props.value.type ? _this.props.value.value : (0, _moment2.default)()
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DateInput, [{
    key: 'handleChange',
    value: function handleChange(date) {
      this.setState({
        value: date
      }, this.props.onChange.bind(null, { type: 'date', value: date }));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _onFocus = this.props.onFocus;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactDatepicker2.default, {
          name: '' + this.props.name,
          id: '' + this.props.id,
          'aria-labelledby': '' + this.props.labelId,
          className: this.props.classes.input,
          selected: this.state.value,
          onSelect: this.props.onBlur,
          onFocus: function onFocus() {
            return _onFocus(_this2.props.id);
          },
          onChange: this.handleChange,
          dateFormat: 'LL'
        })
      );
    }
  }]);
  return DateInput;
}(_react2.default.Component);

var _default = DateInput;
exports.default = _default;


DateInput.propTypes = {
  value: _propTypes2.default.any,
  onChange: _propTypes2.default.func.isRequired,
  onBlur: _propTypes2.default.func,
  name: _propTypes2.default.string,
  id: _propTypes2.default.string.isRequired,
  classes: _propTypes2.default.object,
  onFocus: _propTypes2.default.func,
  labelId: _propTypes2.default.string.isRequired
};

DateInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: (0, _moment2.default)(),
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DateInput, 'DateInput', 'src/components/InputTypes/dateInputType.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/InputTypes/dateInputType.js');
}();

;