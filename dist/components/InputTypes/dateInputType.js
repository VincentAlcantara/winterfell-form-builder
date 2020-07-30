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

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DateInput = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(DateInput, _React$Component);

  var _super = _createSuper(DateInput);

  function DateInput(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, DateInput);
    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value.type ? _this.props.value.value : (0, _moment["default"])()
    };
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(DateInput, [{
    key: "handleChange",
    value: function handleChange(date) {
      this.setState({
        value: date
      }, this.props.onChange.bind(null, {
        type: 'date',
        value: date
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _onFocus = this.props.onFocus;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactDatepicker["default"], {
        name: "".concat(this.props.name),
        id: "".concat(this.props.id),
        "aria-labelledby": "".concat(this.props.labelId),
        className: this.props.classes.input,
        selected: this.state.value,
        onSelect: this.props.onBlur,
        onFocus: function onFocus() {
          return _onFocus(_this2.props.id);
        },
        onChange: this.handleChange,
        dateFormat: "LL"
      }));
    }
  }]);
  return DateInput;
}(_react["default"].Component);

exports["default"] = DateInput;
DateInput.propTypes = {
  value: _propTypes["default"].any,
  onChange: _propTypes["default"].func.isRequired,
  onBlur: _propTypes["default"].func,
  name: _propTypes["default"].string,
  id: _propTypes["default"].string.isRequired,
  classes: _propTypes["default"].object,
  onFocus: _propTypes["default"].func,
  labelId: _propTypes["default"].string.isRequired
};
DateInput.defaultProps = {
  classes: {},
  name: '',
  id: '',
  value: (0, _moment["default"])(),
  onChange: function onChange() {},
  onBlur: function onBlur() {},
  onFocus: function onFocus() {}
};