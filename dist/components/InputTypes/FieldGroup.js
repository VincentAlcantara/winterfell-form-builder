"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function FieldGroup(props) {
  var id = props.id,
      label = props.label,
      value = props.value;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "form-group",
    controlId: id
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: id
  }, label), /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({
    className: "form-control",
    value: value
  }, props, {
    autoComplete: id
  })));
}

FieldGroup.propTypes = {
  id: _propTypes["default"].string,
  label: _propTypes["default"].string,
  value: _propTypes["default"].string
};
FieldGroup.defaultProps = {
  id: '',
  label: '',
  value: ''
};
var _default = FieldGroup;
exports["default"] = _default;