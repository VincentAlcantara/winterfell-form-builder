'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormQuestionEditor = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _InputTypes = require('../InputTypes/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormQuestionEditor = exports.FormQuestionEditor = function FormQuestionEditor(props) {
  var questionSetIndex = props.questionSetIndex,
      questions = props.questions,
      _onClick = props.onClick;


  var displayQuestionButtons = function displayQuestionButtons() {
    return questions.map(function (question, questionIndex) {
      return _react2.default.createElement(
        _reactBootstrap.Button,
        {
          className: 'winterfell-field-editor btn-block',
          onClick: function onClick() {
            return _onClick('question', questionSetIndex, questionIndex);
          },
          key: '' + question.questionId
        },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: question.questionId },
            question.question
          ),
          question.text && _react2.default.createElement(
            'p',
            null,
            question.text
          ),
          question.input && (question.input.type === 'textInput' || question.input.type === 'emailInput') && _react2.default.createElement('input', { id: question.questionId, type: 'text', className: 'form-control' }),
          question.input && question.input.type === 'radioOptionsInput' && _react2.default.createElement(_InputTypes.RadioButtonOptionsInput, {
            id: question.questionId,
            labelId: question.questionId,
            options: question.input.options
          }),
          question.input && question.input.type === 'checkboxOptionsInput' && _react2.default.createElement(_InputTypes.CheckboxOptionsInput, {
            id: question.questionId,
            labelId: question.questionId,
            options: question.input.options
          }),
          question.input && question.input.type === 'selectInput' && _react2.default.createElement(_InputTypes.SelectInput, {
            id: question.questionId,
            labelId: question.questionId,
            options: question.input.options
          }),
          question.postText && _react2.default.createElement(
            'p',
            null,
            question.postText
          )
        )
      );
    });
  };

  return _react2.default.createElement(
    'div',
    null,
    questions && displayQuestionButtons()
  );
};

FormQuestionEditor.propTypes = {
  questionSetIndex: _propTypes2.default.number,
  questions: _propTypes2.default.array,
  onClick: _propTypes2.default.func.isRequired
};

FormQuestionEditor.defaultProps = {
  questionSetIndex: 0,
  questions: []
};

var _default = FormQuestionEditor;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FormQuestionEditor, 'FormQuestionEditor', 'src/components/FormEditor/FormQuestionEditor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormEditor/FormQuestionEditor.js');
}();

;