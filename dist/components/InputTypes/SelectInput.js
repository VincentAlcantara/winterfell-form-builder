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
      value: _this.props.value.length > 0 ? _this.props.value : []
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SelectInput, [{
    key: 'onBlur',
    value: function onBlur(e) {
      var currentValue = this.state.value;

      if (e.target.checked) {
        currentValue = currentValue.filter(function (v) {
          return v !== e.target.value;
        });
      }

      this.setState({ value: currentValue });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(e) {
      this.setState({ value: e.target.value });
    }
  }, {
    key: 'render',
    value: function render() {
      var options = this.props.options.map(function (opt) {
        return _react2.default.createElement(
          'option',
          {
            key: opt.value,
            value: opt.value
          },
          opt.text
        );
      });
      return _react2.default.createElement(
        'select',
        {
          name: this.props.name,
          id: this.props.id,
          className: this.props.classes.select,
          value: this.state.value,
          required: this.props.required ? 'required' : undefined,
          onChange: this.handleChange,
          onBlur: this.onBlur,
          multiple: this.state.value.length > 0
        },
        options
      );
    }
  }]);
  return SelectInput;
}(_react2.default.Component);

SelectInput.propTypes = {
  value: _propTypes2.default.array.isRequired,
  // onChange: PropTypes.func,
  options: _propTypes2.default.array.isRequired,
  classes: _propTypes2.default.object,
  name: _propTypes2.default.string,
  id: _propTypes2.default.string,
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
  onBlur: function onBlur() {},
  required: false
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