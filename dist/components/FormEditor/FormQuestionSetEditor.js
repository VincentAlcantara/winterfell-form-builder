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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormQuestionSetEditor = exports.FormQuestionSetEditor = function FormQuestionSetEditor(props) {
  var questionSets = props.questionSets,
      questionSetIndex = props.questionSetIndex,
      onClick = props.onClick;

  return _react2.default.createElement(
    _reactBootstrap.Button,
    {
      className: 'winterfell-field-editor',
      onClick: onClick
    },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h4',
        null,
        questionSets[questionSetIndex].panelHeader
      ),
      _react2.default.createElement(
        'p',
        null,
        questionSets[questionSetIndex].panelText
      )
    )
  );
};

FormQuestionSetEditor.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  questionSets: _propTypes2.default.array,
  questionSetIndex: _propTypes2.default.number
};

FormQuestionSetEditor.defaultProps = {
  questionSetIndex: 0,
  questionSets: null,
  changeCurrentEditingField: null
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