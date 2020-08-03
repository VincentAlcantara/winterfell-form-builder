"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var PageSelector = function PageSelector(props) {
  var panelHeader = props.panelHeader,
      panelText = props.panelText,
      onClick = props.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "winterfell-form-builder-selector btn-default btn-block",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h3", null, panelHeader), /*#__PURE__*/_react["default"].createElement("p", null, panelText)));
};

PageSelector.propTypes = {
  onClick: _propTypes["default"].func.isRequired,
  panelHeader: _propTypes["default"].string,
  panelText: _propTypes["default"].string
};
PageSelector.defaultProps = {
  panelHeader: '',
  panelText: ''
};
var _default = PageSelector;
exports["default"] = _default;