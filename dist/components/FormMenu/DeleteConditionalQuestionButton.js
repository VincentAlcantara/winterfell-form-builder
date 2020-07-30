"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _winterfellFormBuilderActions = require("../../actions/winterfellFormBuilderActions");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var DeleteConditionalQuestionButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(DeleteConditionalQuestionButton, _Component);

  var _super = _createSuper(DeleteConditionalQuestionButton);

  function DeleteConditionalQuestionButton(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, DeleteConditionalQuestionButton);
    _this = _super.call(this, props);
    _this.state = {
      showModal: false
    };
    _this.onConfirmDelete = _this.onConfirmDelete.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(DeleteConditionalQuestionButton, [{
    key: "onClose",
    value: function onClose(e) {
      e.preventDefault();
      this.setState({
        showModal: false
      });
    }
  }, {
    key: "onConfirmDelete",
    value: function onConfirmDelete(e) {
      var path = this.props.path;
      e.preventDefault();
      this.setState({
        showModal: false
      });
      this.props.deleteConditionalQuestion(path);
    }
  }, {
    key: "render",
    value: function render() {
      return [/*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "btn btn-danger",
        title: "delete this conditional question",
        "data-toggle": "modal",
        "data-target": "#deleteConditionalQuestion"
      }, "delete"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal fade",
        id: "deleteConditionalQuestion",
        tabIndex: "-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-dialog bg-white"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-title"
      }, "Delete Conditional Question Confirmation")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-body"
      }, "Are you sure you want to delete this conditional question?"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-footer"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-danger",
        "data-dismiss": "modal"
      }, "Cancel"), /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-dark",
        onClick: this.onConfirmDelete
      }, "Confirm Delete")))))];
    }
  }]);
  return DeleteConditionalQuestionButton;
}(_react.Component);

DeleteConditionalQuestionButton.propTypes = {
  deleteConditionalQuestion: _propTypes["default"].func.isRequired,
  path: _propTypes["default"].array.isRequired
};

var _default = (0, _reactRedux.connect)(null, {
  deleteConditionalQuestion: _winterfellFormBuilderActions.deleteConditionalQuestion
})(DeleteConditionalQuestionButton);

exports["default"] = _default;