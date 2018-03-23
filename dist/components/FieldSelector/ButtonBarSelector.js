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

var ButtonBarSelector = function ButtonBarSelector(props) {
  var nextButton = props.nextButton,
      backButton = props.backButton,
      onClick = props.onClick;


  return _react2.default.createElement(
    _reactBootstrap.Button,
    {
      className: 'winterfell-form-builder-selector btn-block',
      onClick: onClick
    },
    _react2.default.createElement(
      'div',
      { className: 'button-bar' },
      backButton && _react2.default.createElement(
        'button',
        { className: 'btn btn-default pull-left' },
        backButton
      ),
      nextButton && _react2.default.createElement(
        'button',
        { className: 'btn btn-primary pull-right' },
        nextButton
      ),
      !nextButton && _react2.default.createElement(
        'button',
        { className: 'btn btn-primary pull-right' },
        'Submit'
      )
    )
  );
};

ButtonBarSelector.propTypes = {
  nextButton: _propTypes2.default.string,
  backButton: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired
};

ButtonBarSelector.defaultProps = {
  nextButton: null,
  backButton: null,
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