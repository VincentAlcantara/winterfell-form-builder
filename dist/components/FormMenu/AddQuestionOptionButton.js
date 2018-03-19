'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddQuestionOptionButton = function (_Component) {
  (0, _inherits3.default)(AddQuestionOptionButton, _Component);

  function AddQuestionOptionButton(props) {
    (0, _classCallCheck3.default)(this, AddQuestionOptionButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddQuestionOptionButton.__proto__ || (0, _getPrototypeOf2.default)(AddQuestionOptionButton)).call(this, props));

    _this.state = {
      showConfirm: false,
      questionOptionText: '',
      questionOptionValue: ''
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onAddOption = _this.onAddOption.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(AddQuestionOptionButton, [{
    key: 'onChange',
    value: function onChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'onClose',
    value: function onClose(e) {
      e.preventDefault();
      this.setState({ showConfirm: true });
    }
  }, {
    key: 'onAddOption',
    value: function onAddOption(e) {
      e.preventDefault();
      var _props = this.props,
          currentQuestionSetIndex = _props.currentQuestionSetIndex,
          currentQuestionIndex = _props.currentQuestionIndex;

      this.props.addQuestionOption(currentQuestionSetIndex, currentQuestionIndex, this.state.questionOptionText, this.state.questionOptionValue);
      this.setState({ questionOptionText: '', questionOptionValue: '' });
    }
  }, {
    key: 'render',
    value: function render() {
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
                    value: this.state.questionOptionText,
                    onChange: this.onChange
                  })
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(_reactBootstrap.FormControl, {
                    type: 'text',
                    name: 'questionOptionValue',
                    value: this.state.questionOptionValue,
                    onChange: this.onChange
                  })
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    {
                      className: 'btn btn-block btn-success',
                      onClick: this.onAddOption,
                      disabled: !this.state.questionOptionValue || !this.state.questionOptionText
                    },
                    '+'
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);
  return AddQuestionOptionButton;
}(_react.Component);

AddQuestionOptionButton.propTypes = {
  addQuestionOption: _propTypes2.default.func.isRequired,
  currentQuestionSetIndex: _propTypes2.default.number.isRequired,
  currentQuestionIndex: _propTypes2.default.number.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    questionInputOptions: ownProps.questionInputOptions
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { addQuestionOption: _winterfellFormBuilderActions.addQuestionOption })(AddQuestionOptionButton);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AddQuestionOptionButton, 'AddQuestionOptionButton', 'src/components/FormMenu/AddQuestionOptionButton.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FormMenu/AddQuestionOptionButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormMenu/AddQuestionOptionButton.js');
}();

;