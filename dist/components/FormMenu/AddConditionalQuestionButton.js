"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

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

var _FieldGroup = _interopRequireDefault(require("../InputTypes/FieldGroup"));

var _SelectInput = _interopRequireDefault(require("../InputTypes/SelectInput"));

var _constants = require("../../common/constants");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var AddConditionalQuestionButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(AddConditionalQuestionButton, _Component);

  var _super = _createSuper(AddConditionalQuestionButton);

  function AddConditionalQuestionButton(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AddConditionalQuestionButton);
    _this = _super.call(this, props);
    _this.state = {
      showModal: false,
      questionId: '',
      question: '',
      questionText: '',
      questionType: ''
    };
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onFormUpdate = _this.onFormUpdate.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onSelect = _this.onSelect.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(AddConditionalQuestionButton, [{
    key: "onChange",
    value: function onChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty2["default"])({}, event.target.name, event.target.value));
    }
  }, {
    key: "onClose",
    value: function onClose(e) {
      e.preventDefault();
      this.setState({
        showModal: true
      });
    }
  }, {
    key: "onSelect",
    value: function onSelect(type) {
      this.setState({
        questionType: type
      });
    }
  }, {
    key: "onFormUpdate",
    value: function onFormUpdate(e) {
      e.preventDefault();
      var path = this.props.path;
      var _this$state = this.state,
          questionId = _this$state.questionId,
          question = _this$state.question,
          questionText = _this$state.questionText,
          questionType = _this$state.questionType;
      this.props.addConditionalQuestion(path, questionId, question, questionText, questionType);
      this.setState({
        showModal: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return [/*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "btn btn-dark btn-block",
        "data-toggle": "modal",
        "data-target": "#createForm"
      }, "add conditional question"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal fade",
        id: "createForm",
        tabIndex: "-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-dialog bg-white"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-title"
      }, "Add a new conditional question to this question")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-body"
      }, /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "questionId",
        name: "questionId",
        label: "Question ID",
        onChange: this.onChange,
        placeholder: "(optional)",
        value: this.state.questionId
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "question",
        name: "question",
        label: "Enter Question",
        onChange: this.onChange,
        placeholder: "",
        value: this.state.question
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "questionType"
      }, "Select Question Type"), /*#__PURE__*/_react["default"].createElement(_SelectInput["default"], {
        id: "questionType",
        labelId: "questionType",
        options: _constants.INPUT_TYPE_OPTIONS,
        onSelect: this.onSelect,
        displayValue: this.state.questionType
      })))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-footer"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-danger",
        "data-dismiss": "modal"
      }, "Cancel"), /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-dark",
        onClick: this.onFormUpdate,
        "data-dismiss": "modal"
      }, "Save changes")))))];
    }
  }]);
  return AddConditionalQuestionButton;
}(_react.Component);

AddConditionalQuestionButton.propTypes = {
  addConditionalQuestion: _propTypes["default"].func.isRequired,
  path: _propTypes["default"].array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    path: ownProps.path
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  addConditionalQuestion: _winterfellFormBuilderActions.addConditionalQuestion
})(AddConditionalQuestionButton);

exports["default"] = _default;