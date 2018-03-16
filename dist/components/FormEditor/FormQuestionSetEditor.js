'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormQuestionSetEditor = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _FormQuestionEditor = require('./FormQuestionEditor');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormQuestionSetEditor = exports.FormQuestionSetEditor = function FormQuestionSetEditor(props) {
  var currentQuestionSets = props.currentQuestionSets,
      questionSets = props.questionSets,
      _onClick = props.onClick;


  var displayQuestionSet = function displayQuestionSet() {
    return currentQuestionSets.map(function (currentQuestionSet) {
      return questionSets.map(function (questionSet, questionSetIndex) {
        if (currentQuestionSet.questionSetId === questionSet.questionSetId) {
          return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                className: 'winterfell-field-editor btn-block',
                onClick: function onClick() {
                  return _onClick('questionSet', questionSetIndex);
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
            _react2.default.createElement(_FormQuestionEditor.FormQuestionEditor, {
              questionSetIndex: questionSetIndex,
              questions: questionSet.questions,
              onClick: _onClick
            })
          );
        }
        return null;
      });
    });
  };

  return _react2.default.createElement(
    'div',
    null,
    currentQuestionSets && displayQuestionSet()
  );
};

FormQuestionSetEditor.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  questionSets: _propTypes2.default.array,
  currentQuestionSets: _propTypes2.default.array
};

FormQuestionSetEditor.defaultProps = {
  questionSetIndex: 0,
  questionSets: null,
  currentQuestionSets: null
};

var _default = FormQuestionSetEditor;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FormQuestionSetEditor, 'FormQuestionSetEditor', 'src/components/FormEditor/FormQuestionSetEditor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormEditor/FormQuestionSetEditor.js');
}();

;