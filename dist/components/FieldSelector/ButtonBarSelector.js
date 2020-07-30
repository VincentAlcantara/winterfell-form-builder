"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var ButtonBarSelector = function ButtonBarSelector(props) {
  var nextButton = props.nextButton,
      backButton = props.backButton,
      backButtonDisabled = props.backButtonDisabled,
      onClick = props.onClick;
  return /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "winterfell-form-builder-selector btn-default btn-block",
    onClick: onClick
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "button-bar"
  }, backButton && !backButtonDisabled && /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-danger float-left"
  }, backButton), nextButton && /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-dark float-right"
  }, nextButton), !nextButton && /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-dark float-right"
  }, "Submit")));
};

ButtonBarSelector.propTypes = {
  nextButton: _propTypes["default"].string,
  backButton: _propTypes["default"].string,
  backButtonDisabled: _propTypes["default"].bool,
  onClick: _propTypes["default"].func.isRequired
};
ButtonBarSelector.defaultProps = {
  nextButton: null,
  backButton: null,
  backButtonDisabled: false,
  onClick: _propTypes["default"].func.isRequired
};
var _default = ButtonBarSelector;
exports["default"] = _default;