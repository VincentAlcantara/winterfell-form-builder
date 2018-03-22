'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _QuestionSelector = require('./QuestionSelector');

var _QuestionSelector2 = _interopRequireDefault(_QuestionSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuestionSetSelector = function QuestionSetSelector(props) {
  var currentQuestionSets = props.currentQuestionSets,
      questionSets = props.questionSets,
      _onClick = props.onClick,
      currentQuestionIndex = props.currentQuestionIndex;


  var displayQuestionSet = function displayQuestionSet() {
    return currentQuestionSets.map(function (currentQuestionSet) {
      return questionSets.map(function (questionSet, questionSetIndex) {
        if (currentQuestionSet.questionSetId === questionSet.questionSetId) {
          return _react2.default.createElement(
            'span',
            null,
            questionSet.questionSetHeader && _react2.default.createElement(
              _reactBootstrap.Button,
              {
                className: 'winterfell-field-editor btn-block',
                onClick: function onClick() {
                  return _onClick('questionSet', questionSetIndex, currentQuestionIndex);
                }
              },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'h4',
                  null,
                  questionSet.questionSetHeader
                ),
                _react2.default.createElement(
                  'p',
                  null,
                  questionSet.questionSetText
                )
              )
            ),
            _react2.default.createElement(_QuestionSelector2.default, {
              questionSetIndex: questionSetIndex,
              questions: questionSet.questions,
              onClick: _onClick,
              currentQuestionIndex: currentQuestionIndex
            })
          );
        }
        return null;
      });
    });
  };

  return _react2.default.createElement(
    'div',
    { className: 'winterfell-form-builder-question-set' },
    currentQuestionSets && displayQuestionSet()
  );
};

QuestionSetSelector.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  questionSets: _propTypes2.default.array,
  currentQuestionSets: _propTypes2.default.array,
  currentQuestionIndex: _propTypes2.default.number
};

QuestionSetSelector.defaultProps = {
  questionSetIndex: 0,
  questionSets: null,
  currentQuestionSets: null,
  currentQuestionIndex: 0
};

var _default = QuestionSetSelector;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(QuestionSetSelector, 'QuestionSetSelector', 'src/components/FieldSelector/QuestionSetSelector.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FieldSelector/QuestionSetSelector.js');
}();

;