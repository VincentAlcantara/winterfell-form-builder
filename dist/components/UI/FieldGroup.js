'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FieldGroup(props) {
  var id = props.id,
      label = props.label,
      value = props.value;


  return _react2.default.createElement(
    _reactBootstrap.FormGroup,
    { controlId: id },
    _react2.default.createElement(
      _reactBootstrap.ControlLabel,
      null,
      label
    ),
    _react2.default.createElement(_reactBootstrap.FormControl, (0, _extends3.default)({ value: value }, props))
  );
}

FieldGroup.propTypes = {
  id: _propTypes2.default.string,
  label: _propTypes2.default.string,
  value: _propTypes2.default.string
};

FieldGroup.defaultProps = {
  id: '',
  label: '',
  value: ''
};

exports.default = FieldGroup;