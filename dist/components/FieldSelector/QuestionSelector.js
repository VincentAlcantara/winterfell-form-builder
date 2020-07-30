"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputTypes = require("../InputTypes/");

var FormQuestionEditor = function FormQuestionEditor(props) {
  var questionSetIndex = props.questionSetIndex,
      questions = props.questions,
      _onClick = props.onClick;

  var displayQuestionButtons = function displayQuestionButtons() {
    return questions.map(function (question, questionIndex) {
      return /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "winterfell-form-builder-selector btn-default btn-block",
        onClick: function onClick() {
          return _onClick('question', questionSetIndex, questionIndex);
        },
        key: "".concat(question.questionId)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: question.questionId
      }, question.question), question.text && /*#__PURE__*/_react["default"].createElement("p", null, question.text), question.input && question.input.type === 'checkboxInput' && /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement("input", {
        type: "checkbox"
      }), "\xA0", question.input.text), question.input && (question.input.type === 'textInput' || question.input.type === 'emailInput') && /*#__PURE__*/_react["default"].createElement("input", {
        id: question.questionId,
        type: "text",
        className: "form-control",
        autoComplete: question.questionId
      }), question.input && question.input.type === 'textAreaInput' && /*#__PURE__*/_react["default"].createElement("textarea", {
        id: question.questionId,
        type: "text",
        className: "form-control",
        autoComplete: question.questionId
      }), question.input && question.input.type === 'radioOptionsInput' && /*#__PURE__*/_react["default"].createElement(_InputTypes.RadioButtonOptionsInput, {
        id: question.questionId,
        labelId: question.questionId,
        options: question.input.options
      }), question.input && question.input.type === 'checkboxOptionsInput' && /*#__PURE__*/_react["default"].createElement(_InputTypes.CheckboxOptionsInput, {
        id: question.questionId,
        labelId: question.questionId,
        options: question.input.options
      }), question.input && question.input.type === 'selectInput' && /*#__PURE__*/_react["default"].createElement(_InputTypes.SelectInput, {
        id: question.questionId,
        labelId: question.questionId,
        options: question.input.options
      }), question.input && question.input.type === 'dateInput' && /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("i", null, "(date input)")), question.input && question.input.type === 'addressInput' && /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("i", null, "(address input)")), question.postText && /*#__PURE__*/_react["default"].createElement("p", null, question.postText)));
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, questions && displayQuestionButtons());
};

FormQuestionEditor.propTypes = {
  questionSetIndex: _propTypes["default"].number,
  questions: _propTypes["default"].array,
  onClick: _propTypes["default"].func.isRequired
};
FormQuestionEditor.defaultProps = {
  questionSetIndex: 0,
  questions: []
};
var _default = FormQuestionEditor;
exports["default"] = _default;