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

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeleteQuestionOptionButton = function (_Component) {
  (0, _inherits3.default)(DeleteQuestionOptionButton, _Component);

  function DeleteQuestionOptionButton(props) {
    (0, _classCallCheck3.default)(this, DeleteQuestionOptionButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DeleteQuestionOptionButton.__proto__ || (0, _getPrototypeOf2.default)(DeleteQuestionOptionButton)).call(this, props));

    _this.state = {
      showModal: false
    };

    _this.onConfirmDelete = _this.onConfirmDelete.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DeleteQuestionOptionButton, [{
    key: 'onClose',
    value: function onClose(e) {
      e.preventDefault();
      this.setState({ showModal: false });
    }
  }, {
    key: 'onConfirmDelete',
    value: function onConfirmDelete(e) {
      var _props = this.props,
          currentQuestionSetIndex = _props.currentQuestionSetIndex,
          currentQuestionIndex = _props.currentQuestionIndex,
          questionOptionIndex = _props.questionOptionIndex;

      e.preventDefault();
      this.setState({ showModal: false });
      this.props.deleteQuestionOption(currentQuestionSetIndex, currentQuestionIndex, questionOptionIndex);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactBootstrap.Button,
        {
          className: 'btn alert-danger',
          title: 'delete this option',
          onClick: function onClick() {
            _this2.setState({ showModal: true });
          }
        },
        _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'glyphicon glyphicon-remove-circle' }),
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showModal },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            null,
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              'Delete Option Confirmation'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            'Are you sure you want to delete this option?'
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Footer,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                bsStyle: 'danger',
                onClick: function onClick() {
                  _this2.setState({ showModal: false });
                }
              },
              'Cancel'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                bsStyle: 'primary',
                onClick: this.onConfirmDelete
              },
              'Confirm Delete'
            )
          )
        )
      );
    }
  }]);
  return DeleteQuestionOptionButton;
}(_react.Component);

DeleteQuestionOptionButton.propTypes = {
  deleteQuestionOption: _propTypes2.default.func.isRequired,
  currentQuestionSetIndex: _propTypes2.default.number.isRequired,
  currentQuestionIndex: _propTypes2.default.number.isRequired,
  questionOptionIndex: _propTypes2.default.number.isRequired
};


function mapStateToProps(state, ownProps) {
  return {
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    questionOptionIndex: ownProps.questionOptionIndex
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { deleteQuestionOption: _winterfellFormBuilderActions.deleteQuestionOption })(DeleteQuestionOptionButton);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DeleteQuestionOptionButton, 'DeleteQuestionOptionButton', 'src/components/FormMenu/DeleteQuestionOptionButton.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FormMenu/DeleteQuestionOptionButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormMenu/DeleteQuestionOptionButton.js');
}();

;