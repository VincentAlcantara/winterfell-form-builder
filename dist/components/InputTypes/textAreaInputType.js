"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TextAreaInput = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(TextAreaInput, _React$Component);

  var _super = _createSuper(TextAreaInput);

  function TextAreaInput(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TextAreaInput);
    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value
    };
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(TextAreaInput, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        value: e.target.value
      }, this.props.onChange.bind(null, e.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("textarea", {
        type: "text",
        name: this.props.name,
        id: this.props.id,
        "aria-labelledby": this.props.labelId,
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
}(_react["default"].Component);

exports["default"] = TextAreaInput;
TextAreaInput.propTypes = {
  value: _propTypes["default"].string,
  id: _propTypes["default"].string,
  name: _propTypes["default"].string,
  labelId: _propTypes["default"].string,
  placeholder: _propTypes["default"].string,
  classes: _propTypes["default"].object,
  onChange: _propTypes["default"]["function"],
  onFocus: _propTypes["default"]["function"],
  onBlur: _propTypes["default"]["function"],
  required: _propTypes["default"].bool
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