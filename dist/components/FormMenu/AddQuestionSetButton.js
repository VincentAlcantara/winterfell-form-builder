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

var AddQuestionSetButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(AddQuestionSetButton, _Component);

  var _super = _createSuper(AddQuestionSetButton);

  function AddQuestionSetButton(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AddQuestionSetButton);
    _this = _super.call(this, props);
    _this.state = {
      showModal: false,
      questionSetId: '',
      questionSetHeader: '',
      questionSetText: '',
      question: '',
      questionText: '',
      questionType: ''
    };
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onSelect = _this.onSelect.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onFormUpdate = _this.onFormUpdate.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(AddQuestionSetButton, [{
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
      this.props.addQuestionSet(this.props.currentPanelId, this.state.questionSetId, this.state.questionSetHeader, this.state.questionSetText, this.state.question, this.state.questionText, this.state.questionType);
      this.setState({
        showModal: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return [/*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        className: "btn btn-block btn-dark",
        disabled: !this.props.currentPanelId || this.props.currentPanelId === 'Select Page',
        "data-toggle": "modal",
        "data-target": "#addQuestionSet",
        key: "addQuestionSet",
        tittle: "Add question"
      }, "Add question set"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal fade",
        id: "addQuestionSet",
        tabIndex: "-1",
        key: "addQuestionSetModal"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-dialog bg-white"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-title"
      }, "Add a new question set")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-body"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "questionSetId",
        name: "questionSetId",
        label: "Question Set ID",
        onChange: this.onChange,
        placeholder: "(optional)",
        value: this.state.questionSetId,
        key: "questionSetId"
      }), /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "questionSetHeader",
        name: "questionSetHeader",
        label: "Question Set Title",
        onChange: this.onChange,
        placeholder: "",
        value: this.state.questionSetHeader,
        key: "questionSetHeader"
      }), /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "questionSetText",
        name: "questionSetText",
        label: "Enter Question Set Description",
        onChange: this.onChange,
        placeholder: "",
        value: this.state.questionSetText,
        key: "questionSetText"
      }), /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "question",
        name: "question",
        label: "Enter Question",
        onChange: this.onChange,
        placeholder: "",
        value: this.state.question,
        key: "question"
      }), /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "questionText",
        name: "questionText",
        label: "Enter Question Text",
        onChange: this.onChange,
        placeholder: "",
        value: this.state.questionText,
        key: "questionText"
      }), /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "questionType"
      }, "Select Question Type"), /*#__PURE__*/_react["default"].createElement(_SelectInput["default"], {
        id: "questionType",
        labelId: "questionType",
        options: _constants.INPUT_TYPE_OPTIONS,
        onSelect: this.onSelect,
        value: this.state.questionType,
        key: "questionType"
      })), /*#__PURE__*/_react["default"].createElement("div", {
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
  return AddQuestionSetButton;
}(_react.Component);

AddQuestionSetButton.propTypes = {
  addQuestionSet: _propTypes["default"].func.isRequired,
  currentPanelId: _propTypes["default"].string
};
AddQuestionSetButton.defaultProps = {
  currentPanelId: ''
};

function mapStateToProps(state) {
  return {
    currentPanelId: state.getIn(['form', 'currentPanelId'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  addQuestionSet: _winterfellFormBuilderActions.addQuestionSet
})(AddQuestionSetButton);

exports["default"] = _default;