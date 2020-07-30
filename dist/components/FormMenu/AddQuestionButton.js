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

var AddQuestionButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(AddQuestionButton, _Component);

  var _super = _createSuper(AddQuestionButton);

  function AddQuestionButton(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AddQuestionButton);
    _this = _super.call(this, props);
    _this.state = {
      showModal: false,
      questionSetId: _this.props.questionSetId,
      questionId: '',
      question: '',
      questionText: '',
      questionType: ''
    };
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onSelect = _this.onSelect.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onFormUpdate = _this.onFormUpdate.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(AddQuestionButton, [{
    key: "onChange",
    value: function onChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty2["default"])({}, event.target.name, event.target.value));
    }
  }, {
    key: "onSelect",
    value: function onSelect(type) {
      this.setState({
        questionType: type
      });
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
    key: "onFormUpdate",
    value: function onFormUpdate(e) {
      e.preventDefault();
      this.props.addQuestion(this.props.currentQuestionSetIndex, this.state.questionSetId, this.state.questionId, this.state.question, this.state.questionText, this.state.questionType);
      this.setState({
        showModal: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return [/*#__PURE__*/_react["default"].createElement("div", {
        className: "static-modal"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal fade",
        id: "addQuestion",
        tabIndex: "-1"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-dialog bg-white"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-title"
      }, "Add a new question to the question set")), /*#__PURE__*/_react["default"].createElement("div", {
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
      }, "Save changes")))))), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "btn btn-dark",
        "data-toggle": "modal",
        "data-target": "#addQuestion"
      }, "Add question")];
    }
  }]);
  return AddQuestionButton;
}(_react.Component);

AddQuestionButton.propTypes = {
  addQuestion: _propTypes["default"].func.isRequired,
  questionSetId: _propTypes["default"].string,
  currentQuestionSetIndex: _propTypes["default"].number.isRequired
};
AddQuestionButton.defaultProps = {
  questionSetId: ''
};

var _default = (0, _reactRedux.connect)(null, {
  addQuestion: _winterfellFormBuilderActions.addQuestion
})(AddQuestionButton);

exports["default"] = _default;