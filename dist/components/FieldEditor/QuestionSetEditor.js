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

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var QuestionSetEditor = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(QuestionSetEditor, _PureComponent);

  var _super = _createSuper(QuestionSetEditor);

  function QuestionSetEditor(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, QuestionSetEditor);
    _this = _super.call(this, props);
    var questionSetId = props.questionSetId,
        questionSetHeader = props.questionSetHeader,
        questionSetText = props.questionSetText,
        questions = props.questions;
    _this.state = {
      questionSetId: questionSetId,
      questionSetHeader: questionSetHeader,
      questionSetText: questionSetText,
      questions: questions
    };
    _this.onChangeQuestionSetHeader = _this.onChangeQuestionSetHeader.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onChangeQuestionSetText = _this.onChangeQuestionSetText.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(QuestionSetEditor, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var questionSetId = nextProps.questionSetId,
          questionSetHeader = nextProps.questionSetHeader,
          questionSetText = nextProps.questionSetText,
          questions = nextProps.questions;
      this.state = {
        questionSetId: questionSetId,
        questionSetHeader: questionSetHeader,
        questionSetText: questionSetText,
        questions: questions
      };
    }
  }, {
    key: "onChangeQuestionSetHeader",
    value: function onChangeQuestionSetHeader(event) {
      this.setState((0, _defineProperty2["default"])({}, event.target.name, event.target.value));
      this.props.editQuestionSetHeader(this.props.currentQuestionSetIndex, event.target.value);
    }
  }, {
    key: "onChangeQuestionSetText",
    value: function onChangeQuestionSetText(event) {
      this.setState((0, _defineProperty2["default"])({}, event.target.name, event.target.value));
      this.props.editQuestionSetText(this.props.currentQuestionSetIndex, event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          currentQuestionSetIndex = _this$props.currentQuestionSetIndex,
          questions = _this$props.questions;
      var questionsArray = questions.toJS();
      return /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "questionSetId",
        name: "questionSetId",
        label: "Question Set ID",
        placeholder: this.props.questionSetId,
        value: this.state.questionSetId,
        disabled: true
      }), /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "questionSetHeader",
        name: "questionSetHeader",
        label: "Question Set Header",
        onChange: this.onChangeQuestionSetHeader,
        placeholder: this.props.questionSetHeader,
        value: this.state.questionSetHeader
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "questionSetText",
        name: "questionSetText",
        label: "Question Set Text",
        placeholder: this.props.questionSetText,
        onChange: this.onChangeQuestionSetText,
        value: this.state.questionSetText
      })), questionsArray && questionsArray.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "questionList"
      }, "Questions"), /*#__PURE__*/_react["default"].createElement("div", {
        id: "questionList"
      }, questionsArray.map(function (question, index) {
        return /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          key: "question-".concat(index),
          variant: "link",
          onClick: function onClick() {
            return _this2.props.changeCurrentEditingField('question', currentQuestionSetIndex, index);
          }
        }, question.questionId);
      }))));
    }
  }]);
  return QuestionSetEditor;
}(_react.PureComponent);

QuestionSetEditor.propTypes = {
  editQuestionSetHeader: _propTypes["default"].func.isRequired,
  editQuestionSetText: _propTypes["default"].func.isRequired,
  changeCurrentEditingField: _propTypes["default"].func.isRequired,
  questionSetId: _propTypes["default"].string,
  questionSetHeader: _propTypes["default"].string,
  questionSetText: _propTypes["default"].string,
  currentQuestionSetIndex: _propTypes["default"].number.isRequired,
  questions: _propTypes["default"].object
};
QuestionSetEditor.defaultProps = {
  currentQuestionSetIndex: 0,
  questionSetId: '',
  questionSetHeader: '',
  questionSetText: '',
  questions: []
};

function mapStateToProps(state, ownProps) {
  return {
    questionSetId: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questionSetId']),
    questionSetHeader: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questionSetHeader']),
    questionSetText: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questionSetText']),
    questions: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions']),
    currentQuestionSetIndex: ownProps.currentQuestionSetIndex
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  editQuestionSetHeader: _winterfellFormBuilderActions.editQuestionSetHeader,
  editQuestionSetText: _winterfellFormBuilderActions.editQuestionSetText,
  changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField
})(QuestionSetEditor);

exports["default"] = _default;