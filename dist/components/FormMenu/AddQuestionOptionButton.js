'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddQuestionOptionButton = function AddQuestionOptionButton(props) {
  var questionOptionText = props.questionOptionText,
      questionOptionValue = props.questionOptionValue,
      onChange = props.onChange,
      onClick = props.onClick;


  return _react2.default.createElement(
    _reactBootstrap.Row,
    null,
    _react2.default.createElement(
      _reactBootstrap.Col,
      { xs: 12 },
      _react2.default.createElement(
        'label',
        {
          htmlFor: 'addOption'
        },
        'Add Option'
      )
    ),
    _react2.default.createElement(
      _reactBootstrap.Col,
      { xs: 12 },
      _react2.default.createElement(
        'table',
        null,
        _react2.default.createElement(
          'tbody',
          { id: 'addOption' },
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_reactBootstrap.FormControl, {
                type: 'text',
                name: 'questionOptionText',
                value: questionOptionText,
                onChange: onChange
              })
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(_reactBootstrap.FormControl, {
                type: 'text',
                name: 'questionOptionValue',
                value: questionOptionValue,
                onChange: onChange
              })
            ),
            _react2.default.createElement(
              'td',
              { colSpan: 2 },
              _react2.default.createElement(
                _reactBootstrap.Button,
                {
                  className: 'btn btn-dark',
                  onClick: onClick,
                  disabled: questionOptionText === '' || questionOptionValue === ''
                },
                _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'glyphicon glyphicon-plus' })
              )
            )
          )
        )
      )
    )
  );
};

AddQuestionOptionButton.propTypes = {
  questionOptionText: _propTypes2.default.string.isRequired,
  questionOptionValue: _propTypes2.default.string.isRequired,
  onChange: _propTypes2.default.func.isRequired,
  onClick: _propTypes2.default.func.isRequired
};

var _default = AddQuestionOptionButton;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AddQuestionOptionButton, 'AddQuestionOptionButton', 'src/components/FormMenu/AddQuestionOptionButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormMenu/AddQuestionOptionButton.js');
}();

;