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

var AddressInput = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(AddressInput, _React$Component);

  var _super = _createSuper(AddressInput);

  function AddressInput(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AddressInput);
    _this = _super.call(this, props);
    _this.state = {
      value: _this.props.value.type ? _this.props.value.value : _this.props.value
    };
    _this.handleChangeField = _this.handleChangeField.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleSelectState = _this.handleSelectState.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(AddressInput, [{
    key: "handleSelectState",
    value: function handleSelectState(e) {
      var index = e.nativeEvent.target.selectedIndex;
      var _this$state$value = this.state.value,
          line1 = _this$state$value.line1,
          line2 = _this$state$value.line2,
          city = _this$state$value.city,
          postcode = _this$state$value.postcode;
      var theState = this.props.states.find(function (ss) {
        return ss.value === e.nativeEvent.target[index].value;
      });
      var state = {
        value: {
          line1: line1,
          line2: line2,
          city: city,
          state: theState,
          postcode: postcode
        }
      };
      this.setState(state, this.props.onChange.bind(null, {
        type: 'address',
        value: state.value
      }));
    }
  }, {
    key: "handleChangeField",
    value: function handleChangeField(field, e) {
      var _this2 = this;

      var _this$state$value2 = this.state.value,
          line1 = _this$state$value2.line1,
          line2 = _this$state$value2.line2,
          city = _this$state$value2.city,
          postcode = _this$state$value2.postcode;
      var theState = this.props.states.find(function (ss) {
        return ss.value === _this2.state.value.state.value;
      });

      if (!theState) {
        theState = this.props.states[0];
      }

      var ns = {
        value: {
          line1: line1,
          line2: line2,
          city: city,
          state: theState,
          postcode: postcode
        }
      };
      ns.value[field] = e.target.value;
      this.setState(ns, this.props.onChange.bind(null, {
        type: 'address',
        value: ns.value
      }));
    }
  }, {
    key: "renderSelect",
    value: function renderSelect() {
      var _this3 = this;

      var options = this.props.states.map(function (opt) {
        return /*#__PURE__*/_react["default"].createElement("option", {
          key: opt.value,
          value: opt.value
        }, opt.text);
      });
      return /*#__PURE__*/_react["default"].createElement("select", {
        name: "".concat(this.props.name, "-state"),
        id: "".concat(this.props.id, "-state"),
        className: this.props.classes.select,
        value: this.state.value.state ? this.state.value.state.value : '',
        required: this.props.required ? 'required' : undefined,
        onChange: function onChange(e) {
          return _this3.handleSelectState(e);
        },
        onFocus: function onFocus() {
          return _this3.props.onFocus(_this3.props.id);
        }
      }, options);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props = this.props,
          _onFocus = _this$props.onFocus,
          placeholders = _this$props.placeholders;
      var sel = this.renderSelect();

      var address = /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        name: "".concat(this.props.name, "-line1"),
        id: "".concat(this.props.id, "-line1"),
        "aria-labelledby": "".concat(this.props.labelId, "-line1"),
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
      })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        name: "".concat(this.props.name, "-line2"),
        id: "".concat(this.props.id, "-line2"),
        "aria-labelledby": "".concat(this.props.labelId, "-line2"),
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
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "city-line"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "beginning"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        name: "".concat(this.props.name, "-city"),
        id: "".concat(this.props.id, "-city"),
        "aria-labelledby": "".concat(this.props.labelId, "-city"),
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
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "middle"
      }, sel), /*#__PURE__*/_react["default"].createElement("div", {
        className: "ending"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        type: "text",
        name: "".concat(this.props.name, "-postcode"),
        id: "".concat(this.props.id, "-postcode"),
        "aria-labelledby": "".concat(this.props.labelId, "-postcode"),
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
      }))));

      return address;
    }
  }]);
  return AddressInput;
}(_react["default"].Component);

exports["default"] = AddressInput;
AddressInput.propTypes = {
  value: _propTypes["default"].object,
  states: _propTypes["default"].array,
  onChange: _propTypes["default"].func,
  name: _propTypes["default"].string,
  id: _propTypes["default"].string,
  classes: _propTypes["default"].string,
  required: _propTypes["default"].string,
  onFocus: _propTypes["default"].func,
  placeholders: _propTypes["default"].object,
  labelId: _propTypes["default"].string.isRequired
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
      text: 'New South Wales',
      value: 'NSW'
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
    text: 'New South Wales',
    value: 'NSW'
  }, {
    text: 'Australian Capital Territory',
    value: 'ACT'
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