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

var RadioButtonOptionsInput = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(RadioButtonOptionsInput, _React$Component);

  var _super = _createSuper(RadioButtonOptionsInput);

  function RadioButtonOptionsInput(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, RadioButtonOptionsInput);
    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value.length > 0 ? _this.props.value : []
    };
    _this.handleChange = _this.handleChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onBlur = _this.onBlur.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(RadioButtonOptionsInput, [{
    key: "onBlur",
    value: function onBlur(e) {
      var currentValue = this.state.value;

      if (e.target.checked) {
        currentValue = currentValue.filter(function (v) {
          return v !== e.target.value;
        });
      }

      this.setState({
        value: currentValue
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var currentValue = this.state.value;

      if (e.target.checked) {
        currentValue.push(e.target.value);
      } else {
        currentValue = currentValue.filter(function (v) {
          return v !== e.target.value;
        });
      }

      this.setState({
        value: currentValue
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return /*#__PURE__*/_react["default"].createElement("ul", {
        className: this.props.classes.checkboxList
      }, this.props.options.map(function (opt) {
        return /*#__PURE__*/_react["default"].createElement("li", {
          key: opt.value,
          className: _this2.props.classes.checkboxListItem
        }, /*#__PURE__*/_react["default"].createElement("label", {
          className: _this2.props.classes.checkboxLabel,
          htmlFor: "".concat(_this2.props.name, "-").concat(opt.value),
          id: _this2.props.labelId
        }, /*#__PURE__*/_react["default"].createElement("input", {
          type: "radio",
          id: "".concat(_this2.props.name, "-").concat(opt.value),
          name: _this2.props.name,
          "aria-labelledby": _this2.props.labelId,
          value: opt.value,
          checked: _this2.state.value.indexOf(opt.value) > -1,
          className: _this2.props.classes.checkbox,
          required: _this2.props.required ? 'required' : undefined,
          onChange: _this2.handleChange,
          onBlur: _this2.onBlur,
          autoComplete: "".concat(_this2.props.name, "-").concat(opt.value)
        }), opt.text));
      }));
    }
  }]);
  return RadioButtonOptionsInput;
}(_react["default"].Component);

RadioButtonOptionsInput.propTypes = {
  value: _propTypes["default"].array.isRequired,
  // onChange: PropTypes.func,
  options: _propTypes["default"].array.isRequired,
  classes: _propTypes["default"].object,
  name: _propTypes["default"].string,
  labelId: _propTypes["default"].string,
  required: _propTypes["default"].bool
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
exports["default"] = _default;