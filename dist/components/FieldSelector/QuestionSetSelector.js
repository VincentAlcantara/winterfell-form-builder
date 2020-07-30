"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _QuestionSelector = _interopRequireDefault(require("./QuestionSelector"));

var QuestionSetSelector = function QuestionSetSelector(props) {
  var currentQuestionSets = props.currentQuestionSets,
      questionSets = props.questionSets,
      _onClick = props.onClick,
      currentQuestionIndex = props.currentQuestionIndex;

  var displayQuestionSet = function displayQuestionSet() {
    return currentQuestionSets.map(function (currentQuestionSet) {
      return questionSets.map(function (questionSet, questionSetIndex) {
        if (currentQuestionSet.questionSetId === questionSet.questionSetId) {
          return /*#__PURE__*/_react["default"].createElement("span", {
            key: questionSetIndex
          }, questionSet.questionSetHeader && /*#__PURE__*/_react["default"].createElement("button", {
            className: "winterfell-form-builder-selector btn-default btn-block",
            onClick: function onClick() {
              return _onClick('questionSet', questionSetIndex, currentQuestionIndex);
            }
          }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h4", null, questionSet.questionSetHeader), /*#__PURE__*/_react["default"].createElement("p", null, questionSet.questionSetText))), /*#__PURE__*/_react["default"].createElement(_QuestionSelector["default"], {
            questionSetIndex: questionSetIndex,
            questions: questionSet.questions,
            onClick: _onClick,
            currentQuestionIndex: currentQuestionIndex
          }));
        }

        return null;
      });
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "winterfell-form-builder-question-set"
  }, currentQuestionSets && displayQuestionSet());
};

QuestionSetSelector.propTypes = {
  onClick: _propTypes["default"].func.isRequired,
  questionSets: _propTypes["default"].array,
  currentQuestionSets: _propTypes["default"].array,
  currentQuestionIndex: _propTypes["default"].number
};
QuestionSetSelector.defaultProps = {
  questionSetIndex: 0,
  questionSets: null,
  currentQuestionSets: null,
  currentQuestionIndex: 0
};
var _default = QuestionSetSelector;
exports["default"] = _default;