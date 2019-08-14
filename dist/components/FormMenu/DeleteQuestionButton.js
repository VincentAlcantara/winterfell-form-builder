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

var DeleteQuestionButton = function (_Component) {
  (0, _inherits3.default)(DeleteQuestionButton, _Component);

  function DeleteQuestionButton(props) {
    (0, _classCallCheck3.default)(this, DeleteQuestionButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DeleteQuestionButton.__proto__ || (0, _getPrototypeOf2.default)(DeleteQuestionButton)).call(this, props));

    _this.state = {
      showModal: false
    };

    _this.onConfirmDelete = _this.onConfirmDelete.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DeleteQuestionButton, [{
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
          currentQuestionIndex = _props.currentQuestionIndex;

      e.preventDefault();
      this.setState({ showModal: false });
      this.props.deleteQuestion(currentQuestionSetIndex, currentQuestionIndex);
    }
  }, {
    key: 'render',
    value: function render() {
      return [_react2.default.createElement(
        _reactBootstrap.Button,
        {
          className: 'btn btn-danger',
          'data-toggle': 'modal',
          'data-target': '#deleteQuestion'
        },
        'Delete question'
      ), _react2.default.createElement(
        'div',
        { className: 'modal fade', id: 'deleteQuestion', tabIndex: '-1' },
        _react2.default.createElement(
          'div',
          { className: 'modal-dialog bg-white' },
          _react2.default.createElement(
            'div',
            { className: 'modal-header' },
            _react2.default.createElement(
              'div',
              { className: 'modal-title' },
              'Delete Option Confirmation'
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-body' },
            'Are you sure you want to delete this question?'
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-footer' },
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-danger',
                'data-dismiss': 'modal'
              },
              'Cancel'
            ),
            _react2.default.createElement(
              'button',
              {
                className: 'btn btn-dark',
                onClick: this.onConfirmDelete
              },
              'Confirm Delete'
            )
          )
        )
      )];
    }
  }]);
  return DeleteQuestionButton;
}(_react.Component);

DeleteQuestionButton.propTypes = {
  deleteQuestion: _propTypes2.default.func.isRequired,
  currentQuestionSetIndex: _propTypes2.default.number.isRequired,
  currentQuestionIndex: _propTypes2.default.number.isRequired
};

function mapStateToProps(state) {
  return {
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { deleteQuestion: _winterfellFormBuilderActions.deleteQuestion })(DeleteQuestionButton);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DeleteQuestionButton, 'DeleteQuestionButton', 'src/components/FormMenu/DeleteQuestionButton.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FormMenu/DeleteQuestionButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormMenu/DeleteQuestionButton.js');
}();

;