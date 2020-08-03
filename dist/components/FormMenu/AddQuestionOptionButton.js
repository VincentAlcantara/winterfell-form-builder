"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var AddQuestionOptionButton = function AddQuestionOptionButton(props) {
  var questionOptionText = props.questionOptionText,
      questionOptionValue = props.questionOptionValue,
      onChange = props.onChange,
      onClick = props.onClick;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "row"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "col"
  }, /*#__PURE__*/_react["default"].createElement("label", {
    htmlFor: "addOption"
  }, "Add Option")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "col"
  }, /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("tbody", {
    id: "addOption"
  }, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-control",
    type: "text",
    name: "questionOptionText",
    value: questionOptionText,
    onChange: onChange
  })), /*#__PURE__*/_react["default"].createElement("td", null, /*#__PURE__*/_react["default"].createElement("input", {
    className: "form-control",
    type: "text",
    name: "questionOptionValue",
    value: questionOptionValue,
    onChange: onChange
  })), /*#__PURE__*/_react["default"].createElement("td", {
    colSpan: 2
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: "btn btn-dark py-0",
    onClick: onClick,
    disabled: questionOptionText === '' || questionOptionValue === ''
  }, /*#__PURE__*/_react["default"].createElement("i", {
    className: "material-icons",
    id: "showConditionalPage"
  }, "add_circle"))))))));
};

AddQuestionOptionButton.propTypes = {
  questionOptionText: _propTypes["default"].string.isRequired,
  questionOptionValue: _propTypes["default"].string.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  onClick: _propTypes["default"].func.isRequired
};
var _default = AddQuestionOptionButton;
exports["default"] = _default;