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

var DeleteConditionalQuestionButton = function (_Component) {
  (0, _inherits3.default)(DeleteConditionalQuestionButton, _Component);

  function DeleteConditionalQuestionButton(props) {
    (0, _classCallCheck3.default)(this, DeleteConditionalQuestionButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (DeleteConditionalQuestionButton.__proto__ || (0, _getPrototypeOf2.default)(DeleteConditionalQuestionButton)).call(this, props));

    _this.state = {
      showModal: false
    };

    _this.onConfirmDelete = _this.onConfirmDelete.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(DeleteConditionalQuestionButton, [{
    key: 'onClose',
    value: function onClose(e) {
      e.preventDefault();
      this.setState({ showModal: false });
    }
  }, {
    key: 'onConfirmDelete',
    value: function onConfirmDelete(e) {
      var path = this.props.path;

      e.preventDefault();
      this.setState({ showModal: false });
      this.props.deleteConditionalQuestion(path);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactBootstrap.Button,
        {
          className: 'btn btn-danger',
          title: 'delete this conditional question',
          onClick: function onClick() {
            _this2.setState({ showModal: true });
          }
        },
        'delete',
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showModal },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            null,
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              'Delete Conditional Question Confirmation'
            )
          ),
          _react2.default.createElement(
            _reactBootstrap.Modal.Body,
            null,
            'Are you sure you want to delete this conditional question?'
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
  return DeleteConditionalQuestionButton;
}(_react.Component);

DeleteConditionalQuestionButton.propTypes = {
  deleteConditionalQuestion: _propTypes2.default.func.isRequired,
  path: _propTypes2.default.array.isRequired
};

var _default = (0, _reactRedux.connect)(null, { deleteConditionalQuestion: _winterfellFormBuilderActions.deleteConditionalQuestion })(DeleteConditionalQuestionButton);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DeleteConditionalQuestionButton, 'DeleteConditionalQuestionButton', 'src/components/FormMenu/DeleteConditionalQuestionButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormMenu/DeleteConditionalQuestionButton.js');
}();

;