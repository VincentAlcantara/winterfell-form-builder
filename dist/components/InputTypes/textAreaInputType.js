'use strict';

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

var TextAreaInput = function (_React$Component) {
  (0, _inherits3.default)(TextAreaInput, _React$Component);

  function TextAreaInput(props) {
    (0, _classCallCheck3.default)(this, TextAreaInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TextAreaInput.__proto__ || (0, _getPrototypeOf2.default)(TextAreaInput)).call(this, props));

    _this.state = {
      value: _this.props.value
    };
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TextAreaInput, [{
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      }, this.props.onChange.bind(null, e.target.value));
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('textarea', {
        type: 'text',
        name: this.props.name,
        id: this.props.id,
        'aria-labelledby': this.props.labelId,
        className: this.props.classes.input,
        placeholder: this.props.placeholder,
        value: this.state.value,
        required: this.props.required ? 'required' : undefined,
        onChange: this.handleChange,
        onFocus: function onFocus() {
          return _this2.props.onFocus(null, _this2.props.id);
        },
        onBlur: function onBlur() {
          return _this2.props.onBlur(null, _this2.state.value);
        }
      });
    }
  }]);
  return TextAreaInput;
}(_react2.default.Component);

TextAreaInput.propTypes = {
  value: _propTypes2.default.string,
  id: _propTypes2.default.string,
  name: _propTypes2.default.string,
  labelId: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  classes: _propTypes2.default.object,
  onChange: _propTypes2.default.function,
  onFocus: _propTypes2.default.function,
  onBlur: _propTypes2.default.function,
  required: _propTypes2.default.bool
};

TextAreaInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  labelId: '',
  value: '',
  placeholder: '',
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {},
  required: false
};

module.exports = TextAreaInput;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TextAreaInput, 'TextAreaInput', 'src/components/InputTypes/textAreaInputType.js');
}();

;