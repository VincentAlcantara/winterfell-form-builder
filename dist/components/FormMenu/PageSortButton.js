"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var PageSortButton = function PageSortButton(props) {
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "btn btn-block btn-secondary",
    onClick: props.onClick,
    key: "sortPages"
  }, "Sort Pages");
};

PageSortButton.propTypes = {
  onClick: _propTypes["default"].func.isRequired
};
var _default = PageSortButton;
exports["default"] = _default;