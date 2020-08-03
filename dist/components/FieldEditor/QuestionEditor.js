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

var _immutable = require("immutable");

var _winterfellFormBuilderActions = require("../../actions/winterfellFormBuilderActions");

var _FieldGroup = _interopRequireDefault(require("../InputTypes/FieldGroup"));

var _DeleteQuestionButton = _interopRequireDefault(require("../FormMenu/DeleteQuestionButton"));

var _AddQuestionButton = _interopRequireDefault(require("../FormMenu/AddQuestionButton"));

var _SelectInput = _interopRequireDefault(require("../InputTypes/SelectInput"));

var _ButtonBarEditor = _interopRequireDefault(require("./ButtonBarEditor"));

var _constants = require("../../common/constants");

var _QuestionOptionEditor = _interopRequireDefault(require("./QuestionOptionEditor"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var QuestionEditor = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(QuestionEditor, _PureComponent);

  var _super = _createSuper(QuestionEditor);

  function QuestionEditor(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, QuestionEditor);
    _this = _super.call(this, props);
    var questionSetId = props.questionSetId,
        questionId = props.questionId,
        question = props.question,
        questionText = props.questionText,
        questionPostText = props.questionPostText,
        questionInputType = props.questionInputType,
        questionInputOptions = props.questionInputOptions,
        questionTarget = props.questionTarget,
        questionTargetMatch = props.questionTargetMatch;
    _this.state = {
      questionSetId: questionSetId,
      questionId: questionId,
      question: question,
      questionText: questionText,
      questionPostText: questionPostText,
      questionInputType: questionInputType,
      questionInputOptions: questionInputOptions.toJS(),
      editQuestionId: true,
      showConditionalPage: new Array(questionInputOptions.count()),
      showConditionalQuestions: new Array(questionInputOptions.count()),
      questionTarget: questionTarget,
      questionTargetMatch: questionTargetMatch
    };
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onSelect = _this.onSelect.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onEditQuestionIdClick = _this.onEditQuestionIdClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onUpdateNextQuestionTarget = _this.onUpdateNextQuestionTarget.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(QuestionEditor, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        questionId: nextProps.questionId,
        question: nextProps.question,
        questionText: nextProps.questionText,
        questionPostText: nextProps.questionPostText,
        questionInputType: nextProps.questionInputType,
        questionInputOptions: nextProps.questionInputOptions.toJS(),
        questionTarget: nextProps.questionTarget,
        questionTargetMatch: nextProps.questionTargetMatch
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;
      var _this$props = this.props,
          currentQuestionSetIndex = _this$props.currentQuestionSetIndex,
          currentQuestionIndex = _this$props.currentQuestionIndex;
      this.setState((0, _defineProperty2["default"])({}, name, value));

      switch (name) {
        case 'questionId':
          this.props.editQuestionId(currentQuestionSetIndex, currentQuestionIndex, value);
          break;

        case 'question':
          this.props.editQuestion(currentQuestionSetIndex, currentQuestionIndex, value);
          break;

        case 'questionText':
          this.props.editQuestionText(currentQuestionSetIndex, currentQuestionIndex, value);
          break;

        case 'questionPostText':
          this.props.editQuestionPostText(currentQuestionSetIndex, currentQuestionIndex, value);
          break;

        default:
      }
    }
  }, {
    key: "onSelect",
    value: function onSelect(questionType) {
      var _this$props2 = this.props,
          currentQuestionSetIndex = _this$props2.currentQuestionSetIndex,
          currentQuestionIndex = _this$props2.currentQuestionIndex;
      this.setState({
        questionInputType: questionType
      });

      if (questionType !== '') {
        this.props.changeQuestionType(currentQuestionSetIndex, currentQuestionIndex, questionType);
      }
    }
  }, {
    key: "onEditQuestionIdClick",
    value: function onEditQuestionIdClick() {
      this.setState({
        editQuestionId: !this.state.editQuestionId
      });
    }
  }, {
    key: "onUpdateNextQuestionTarget",
    value: function onUpdateNextQuestionTarget() {
      var _this$props3 = this.props,
          currentQuestionPanelIndex = _this$props3.currentQuestionPanelIndex,
          questionId = _this$props3.questionId;
      this.props.updateNextQuestionTarget(currentQuestionPanelIndex, questionId, this.state.questionTargetMatch, this.state.questionTarget);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          questionSetId = _this$props4.questionSetId,
          questionId = _this$props4.questionId,
          question = _this$props4.question,
          questionText = _this$props4.questionText,
          questionPostText = _this$props4.questionPostText,
          questionInputType = _this$props4.questionInputType,
          questionInputOptions = _this$props4.questionInputOptions,
          currentQuestionPanelIndex = _this$props4.currentQuestionPanelIndex;
      return /*#__PURE__*/_react["default"].createElement("form", null, this.props.currentQuestionIndex > -1 && /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "questionSetId",
        name: "questionSetId",
        label: "Question Set ID",
        onChange: this.onChange,
        placeholder: questionSetId,
        value: this.state.questionSetId,
        disabled: true
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "questionId",
        name: "questionId",
        label: "Question ID",
        onChange: this.onChange,
        placeholder: questionId,
        value: this.state.questionId,
        disabled: this.state.editQuestionId
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "edit-question-id",
        id: "edit-question-id-label"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "edit-question-id",
        type: "checkbox",
        onClick: this.onEditQuestionIdClick
      }), "\xA0edit question id (not recommended)")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "question",
        name: "question",
        label: "Question",
        onChange: this.onChange,
        placeholder: question,
        value: this.state.question
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "questionText",
        name: "questionText",
        label: "Question Pre Text",
        placeholder: questionText,
        onChange: this.onChange,
        value: this.state.questionText
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "questionPostText",
        name: "questionPostText",
        label: "Question Post Text",
        placeholder: questionPostText,
        onChange: this.onChange,
        value: this.state.questionPostText
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "questionInputType"
      }, "Question Type"), /*#__PURE__*/_react["default"].createElement(_SelectInput["default"], {
        id: "questionInputType",
        labelId: "questionInputType",
        options: _constants.INPUT_TYPE_OPTIONS,
        onSelect: this.onSelect,
        displayValue: this.props.questionInputType
      }))), (questionInputType === 'checkboxOptionsInput' || questionInputType === 'selectInput' || questionInputType === 'radioOptionsInput') && questionInputOptions && this.props.currentQuestionIndex > -1 && /*#__PURE__*/_react["default"].createElement(_QuestionOptionEditor["default"], {
        questionInputOptions: this.props.questionInputOptions,
        questionId: this.props.questionId,
        currentQuestionPanelIndex: this.props.currentQuestionPanelIndex,
        currentQuestionSetIndex: this.props.currentQuestionSetIndex,
        currentQuestionIndex: this.props.currentQuestionIndex
      }), /*#__PURE__*/_react["default"].createElement(_ButtonBarEditor["default"], {
        currentQuestionPanelIndex: currentQuestionPanelIndex
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "btn-group"
      }, this.props.currentQuestionIndex > -1 && /*#__PURE__*/_react["default"].createElement(_DeleteQuestionButton["default"], {
        currentQuestionSetIndex: this.props.currentQuestionSetIndex,
        currentQuestionIndex: this.props.currentQuestionIndex
      }), this.props.currentQuestionIndex > -1 && /*#__PURE__*/_react["default"].createElement(_AddQuestionButton["default"], {
        questionSetId: this.props.questionSetId,
        currentQuestionSetIndex: this.props.currentQuestionSetIndex
      })), /*#__PURE__*/_react["default"].createElement("br", null));
    }
  }]);
  return QuestionEditor;
}(_react.PureComponent);

QuestionEditor.propTypes = {
  editQuestionId: _propTypes["default"].func.isRequired,
  editQuestion: _propTypes["default"].func.isRequired,
  editQuestionText: _propTypes["default"].func.isRequired,
  editQuestionPostText: _propTypes["default"].func.isRequired,
  changeQuestionType: _propTypes["default"].func.isRequired,
  updateNextQuestionTarget: _propTypes["default"].func.isRequired,
  questionSetId: _propTypes["default"].string.isRequired,
  questionId: _propTypes["default"].string,
  question: _propTypes["default"].string,
  questionText: _propTypes["default"].string,
  questionPostText: _propTypes["default"].string,
  questionInputType: _propTypes["default"].string,
  questionInputOptions: _propTypes["default"].object,
  currentQuestionSetIndex: _propTypes["default"].number.isRequired,
  currentQuestionIndex: _propTypes["default"].number.isRequired,
  questionTarget: _propTypes["default"].string,
  questionTargetMatch: _propTypes["default"].string,
  currentQuestionPanelIndex: _propTypes["default"].number.isRequired
};
QuestionEditor.defaultProps = {
  questionId: '',
  question: '',
  questionText: '',
  questionPostText: '',
  questionInputType: '',
  questionInputOptions: (0, _immutable.fromJS)([]),
  questionTarget: '',
  questionTargetMatch: ''
};

function mapStateToProps(state, ownProps) {
  return {
    questionSetId: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questionSetId']),
    questionId: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'questionId']),
    question: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'question']),
    questionText: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'text']),
    questionPostText: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'postText']),
    questionInputType: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'input', 'type']),
    questionInputOptions: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'input', 'options']),
    currentQuestionSetIndex: ownProps.currentQuestionSetIndex,
    currentQuestionIndex: ownProps.currentQuestionIndex,
    questionTarget: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'conditions', 0, 'target']),
    questionTargetMatch: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'conditions', 0, 'value'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  editQuestionId: _winterfellFormBuilderActions.editQuestionId,
  editQuestion: _winterfellFormBuilderActions.editQuestion,
  editQuestionText: _winterfellFormBuilderActions.editQuestionText,
  editQuestionPostText: _winterfellFormBuilderActions.editQuestionPostText,
  editQuestionOptionText: _winterfellFormBuilderActions.editQuestionOptionText,
  editQuestionOptionValue: _winterfellFormBuilderActions.editQuestionOptionValue,
  addQuestionOption: _winterfellFormBuilderActions.addQuestionOption,
  deleteQuestion: _winterfellFormBuilderActions.deleteQuestion,
  deleteQuestionOption: _winterfellFormBuilderActions.deleteQuestionOption,
  changeQuestionType: _winterfellFormBuilderActions.changeQuestionType,
  changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField,
  updateNextQuestionTarget: _winterfellFormBuilderActions.updateNextQuestionTarget
})(QuestionEditor);

exports["default"] = _default;