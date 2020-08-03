"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _PageEditor = _interopRequireDefault(require("./PageEditor"));

var _QuestionSetEditor = _interopRequireDefault(require("./QuestionSetEditor"));

var _QuestionEditor = _interopRequireDefault(require("./QuestionEditor"));

var _ButtonBarEditor = _interopRequireDefault(require("./ButtonBarEditor"));

function FieldEditor(props) {
  var currentEditingField = props.currentEditingField,
      currentQuestionPanelIndex = props.currentQuestionPanelIndex,
      currentQuestionSetIndex = props.currentQuestionSetIndex,
      currentQuestionIndex = props.currentQuestionIndex;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "winterfell-form-builder-field-editor bg-light p-3"
  }, (currentEditingField === 'page' || currentEditingField === 'pageSort') && /*#__PURE__*/_react["default"].createElement(_PageEditor["default"], {
    currentQuestionPanelIndex: currentQuestionPanelIndex
  }), currentEditingField === 'questionSet' && /*#__PURE__*/_react["default"].createElement(_QuestionSetEditor["default"], {
    currentQuestionSetIndex: currentQuestionSetIndex
  }), currentEditingField === 'question' && /*#__PURE__*/_react["default"].createElement(_QuestionEditor["default"], {
    currentQuestionPanelIndex: currentQuestionPanelIndex,
    currentQuestionSetIndex: currentQuestionSetIndex,
    currentQuestionIndex: currentQuestionIndex
  }), currentEditingField === 'buttons' && /*#__PURE__*/_react["default"].createElement(_ButtonBarEditor["default"], {
    currentQuestionPanelIndex: currentQuestionPanelIndex
  }));
}

FieldEditor.propTypes = {
  currentEditingField: _propTypes["default"].string.isRequired,
  currentQuestionPanelIndex: _propTypes["default"].number.isRequired,
  currentQuestionSetIndex: _propTypes["default"].number,
  currentQuestionIndex: _propTypes["default"].number
};
FieldEditor.defaultProps = {
  currentQuestionSetIndex: null,
  currentQuestionIndex: null
};
var _default = FieldEditor;
exports["default"] = _default;