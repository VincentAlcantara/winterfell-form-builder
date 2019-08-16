'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddQuestionOptionButton = function AddQuestionOptionButton(props) {
  var questionOptionText = props.questionOptionText,
      questionOptionValue = props.questionOptionValue,
      onChange = props.onChange,
      onClick = props.onClick;


  return _react2.default.createElement(
    'div',
    { className: 'row' },
    _react2.default.createElement(
      'div',
      { className: 'col' },
      _react2.default.createElement(
        'label',
        {
          htmlFor: 'addOption'
        },
        'Add Option'
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'col' },
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
              _react2.default.createElement('input', {
                className: 'form-control',
                type: 'text',
                name: 'questionOptionText',
                value: questionOptionText,
                onChange: onChange
              })
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement('input', {
                className: 'form-control',
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
                'button',
                {
                  type: 'button',
                  className: 'btn btn-dark py-0',
                  onClick: onClick,
                  disabled: questionOptionText === '' || questionOptionValue === ''
                },
                _react2.default.createElement(
                  'i',
                  { className: 'material-icons', id: 'showConditionalPage' },
                  'add_circle'
                )
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