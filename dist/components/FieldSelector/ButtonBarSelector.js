'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonBarSelector = function ButtonBarSelector(props) {
  var nextButton = props.nextButton,
      backButton = props.backButton,
      backButtonDisabled = props.backButtonDisabled,
      onClick = props.onClick;


  return _react2.default.createElement(
    'button',
    {
      type: 'button',
      className: 'winterfell-form-builder-selector btn-default btn-block',
      onClick: onClick
    },
    _react2.default.createElement(
      'div',
      { className: 'button-bar' },
      backButton && !backButtonDisabled && _react2.default.createElement(
        'button',
        { className: 'btn btn-danger float-left' },
        backButton
      ),
      nextButton && _react2.default.createElement(
        'button',
        { className: 'btn btn-dark float-right' },
        nextButton
      ),
      !nextButton && _react2.default.createElement(
        'button',
        { className: 'btn btn-dark float-right' },
        'Submit'
      )
    )
  );
};

ButtonBarSelector.propTypes = {
  nextButton: _propTypes2.default.string,
  backButton: _propTypes2.default.string,
  backButtonDisabled: _propTypes2.default.bool,
  onClick: _propTypes2.default.func.isRequired
};

ButtonBarSelector.defaultProps = {
  nextButton: null,
  backButton: null,
  backButtonDisabled: false,
  onClick: _propTypes2.default.func.isRequired
};

var _default = ButtonBarSelector;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ButtonBarSelector, 'ButtonBarSelector', 'src/components/FieldSelector/ButtonBarSelector.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FieldSelector/ButtonBarSelector.js');
}();

;