'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormPageEditor = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormPageEditor = exports.FormPageEditor = function FormPageEditor(props) {
  var questionPanels = props.questionPanels,
      currentPanelIndex = props.currentPanelIndex,
      onClick = props.onClick;

  return _react2.default.createElement(
    _reactBootstrap.Button,
    {
      className: 'winterfell-field-editor btn-block',
      onClick: onClick
    },
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h3',
        null,
        questionPanels[currentPanelIndex].panelHeader
      ),
      _react2.default.createElement(
        'p',
        null,
        questionPanels[currentPanelIndex].panelText
      )
    )
  );
};

FormPageEditor.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  questionPanels: _propTypes2.default.array,
  currentPanelIndex: _propTypes2.default.number
};

FormPageEditor.defaultProps = {
  currentPanelIndex: 0,
  questionPanels: null,
  changeCurrentEditingField: null
};

var _default = FormPageEditor;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FormPageEditor, 'FormPageEditor', 'src/components/FormEditor/FormPageEditor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormEditor/FormPageEditor.js');
}();

;