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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SelectInput = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(SelectInput, _React$Component);

  var _super = _createSuper(SelectInput);

  function SelectInput(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SelectInput);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (e) {
      console.log("This is handle change is called");

      _this.setState({
        value: e.target.value
      });

      _this.props.onSelect(e.target.value);
    });
    console.log("this.props.displayValue", _this.props.displayValue);
    _this.state = {
      value: _this.props.displayValue
    };
    return _this;
  }

  (0, _createClass2["default"])(SelectInput, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      console.log("This is handle change is called", nextProps);
      this.setState({
        value: nextProps.displayValue
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var options = this.props.options && this.props.options.map(function (opt, index) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: index,
          value: opt.value
        }, opt.text);
      });
      return /*#__PURE__*/_react["default"].createElement("select", {
        name: this.props.name,
        className: this.props.classes.select,
        value: this.state.value,
        required: this.props.required ? 'required' : undefined,
        onChange: this.handleChange,
        onSelect: function onSelect() {
          return _this2.props.onSelect;
        },
        autoComplete: this.props.name
      }, /*#__PURE__*/_react["default"].createElement("option", {
        value: ""
      }, "\xA0"), options);
    }
  }]);
  return SelectInput;
}(_react["default"].Component);

SelectInput.propTypes = {
  displayValue: _propTypes["default"].string,
  options: _propTypes["default"].array.isRequired,
  classes: _propTypes["default"].object,
  name: _propTypes["default"].string,
  onSelect: _propTypes["default"].func,
  required: _propTypes["default"].bool
};
SelectInput.defaultProps = {
  classes: {
    select: 'form-control'
  },
  id: '',
  name: '',
  value: '',
  options: [],
  onChange: function onChange() {},
  onSelect: function onSelect() {},
  required: false,
  displayValue: ''
};
var _default = SelectInput;
exports["default"] = _default;