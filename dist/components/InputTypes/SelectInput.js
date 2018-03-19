'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectInput = function (_React$Component) {
  (0, _inherits3.default)(SelectInput, _React$Component);

  function SelectInput(props) {
    (0, _classCallCheck3.default)(this, SelectInput);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SelectInput.__proto__ || (0, _getPrototypeOf2.default)(SelectInput)).call(this, props));

    _this.state = {
      value: _this.props.initialValue
    };

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SelectInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        value: nextProps.initialValue
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ value: e.target.value });
      this.props.onSelect(e.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var options = this.props.options && this.props.options.map(function (opt, index) {
        return _react2.default.createElement(
          'option',
          {
            key: index,
            value: opt.value
          },
          opt.text
        );
      });
      return _react2.default.createElement(
        'select',
        {
          name: this.props.name,
          className: this.props.classes.select,
          value: this.state.value,
          required: this.props.required ? 'required' : undefined,
          onChange: this.handleChange,
          onSelect: function onSelect() {
            return _this2.onSelect;
          },
          initialValue: this.props.initialValue
        },
        options
      );
    }
  }]);
  return SelectInput;
}(_react2.default.Component);

SelectInput.propTypes = {
  initialValue: _propTypes2.default.string,
  options: _propTypes2.default.array.isRequired,
  classes: _propTypes2.default.object,
  name: _propTypes2.default.string,
  onSelect: _propTypes2.default.func,
  required: _propTypes2.default.bool
};
SelectInput.defaultProps = {
  classes: {
    select: 'form-control'
  },
  id: '',
  name: '',
  value: [],
  options: [],
  onChange: function onChange() {},
  onSelect: function onSelect() {},
  required: false,
  initialValue: ''
};
var _default = SelectInput;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SelectInput, 'SelectInput', 'src/components/InputTypes/SelectInput.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/InputTypes/SelectInput.js');
}();

;