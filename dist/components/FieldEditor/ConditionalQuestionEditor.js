"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var _FormMenu = require("../FormMenu/");

var _SelectInput = _interopRequireDefault(require("../InputTypes/SelectInput"));

var _ConditionalQuestionOptionEditor = _interopRequireDefault(require("./ConditionalQuestionOptionEditor"));

var _constants = require("../../common/constants");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ConditionalQuestionEditor = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(ConditionalQuestionEditor, _PureComponent);

  var _super = _createSuper(ConditionalQuestionEditor);

  function ConditionalQuestionEditor(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ConditionalQuestionEditor);
    _this = _super.call(this, props);
    var conditionalQuestions = props.conditionalQuestions;
    _this.state = {
      conditionalQuestions: conditionalQuestions.toJS()
    };
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onSaveConditionalQuestion = _this.onSaveConditionalQuestion.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onSelect = _this.onSelect.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ConditionalQuestionEditor, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        conditionalQuestions: nextProps.conditionalQuestions.toJS()
      });
    }
  }, {
    key: "onChange",
    value: function onChange(event, index) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;
      var copyConditionalQuestions = Object.assign([], this.state.conditionalQuestions);
      copyConditionalQuestions[index][name] = value;
      this.setState({
        conditionalQuestions: copyConditionalQuestions
      });
    }
  }, {
    key: "onSelect",
    value: function onSelect(questionType, index) {
      var copyConditionalQuestions = Object.assign([], this.state.conditionalQuestions);
      copyConditionalQuestions[index].input.type = questionType;
      this.setState({
        conditionalQuestions: copyConditionalQuestions
      });
    }
  }, {
    key: "onSaveConditionalQuestion",
    value: function onSaveConditionalQuestion(conditionalQuestionIndex, path) {
      var _this$state$condition = this.state.conditionalQuestions[conditionalQuestionIndex],
          questionId = _this$state$condition.questionId,
          question = _this$state$condition.question,
          text = _this$state$condition.text,
          postText = _this$state$condition.postText,
          input = _this$state$condition.input;
      var newPath = Object.assign([], path);
      newPath.push('conditionalQuestions');
      newPath.push(conditionalQuestionIndex);
      this.props.saveConditionalQuestion(newPath, questionId, question, text, postText, input.type, input.options);
    }
  }, {
    key: "getConditionalQuestions",
    value: function getConditionalQuestions() {
      var _this2 = this;

      return this.state.conditionalQuestions.map(function (conditionalQuestion, ix) {
        var questionId = conditionalQuestion.questionId,
            question = conditionalQuestion.question,
            text = conditionalQuestion.text,
            postText = conditionalQuestion.postText,
            input = conditionalQuestion.input;
        var conditionalPath = Object.assign([], _this2.props.parentPath);
        conditionalPath.push('conditionalQuestions');
        conditionalPath.push(ix);
        return (
          /*#__PURE__*/
          // return #2
          _react["default"].createElement("div", {
            key: ix
          }, /*#__PURE__*/_react["default"].createElement("div", {
            className: "form-group"
          }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
            id: "questionId",
            name: "questionId",
            label: "Conditional Question ID ".concat(ix + 1, ":"),
            onChange: function onChange(e) {
              return _this2.onChange(e, ix);
            },
            value: questionId
          })), /*#__PURE__*/_react["default"].createElement("div", {
            className: "form-group"
          }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
            id: "question",
            name: "question",
            label: "Conditional Question ".concat(ix + 1, ":"),
            onChange: function onChange(e) {
              return _this2.onChange(e, ix);
            },
            value: question
          })), /*#__PURE__*/_react["default"].createElement("div", {
            className: "form-group"
          }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
            id: "text",
            name: "text",
            label: "Conditional Question Pre Text ".concat(ix + 1, ":"),
            onChange: function onChange(e) {
              return _this2.onChange(e, ix);
            },
            value: text
          })), /*#__PURE__*/_react["default"].createElement("div", {
            className: "form-group"
          }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
            id: "postText",
            name: "postText",
            label: "Conditional Question Post Text ".concat(ix + 1, ":"),
            onChange: function onChange(e) {
              return _this2.onChange(e, ix);
            },
            value: postText
          })), /*#__PURE__*/_react["default"].createElement("div", {
            className: "form-group"
          }, /*#__PURE__*/_react["default"].createElement("label", {
            htmlFor: "questionInputType"
          }, "Question Type"), /*#__PURE__*/_react["default"].createElement(_SelectInput["default"], {
            id: "questionInputType",
            labelId: "questionInputType",
            options: _constants.INPUT_TYPE_OPTIONS,
            onSelect: function onSelect(e) {
              return _this2.onSelect(e, ix);
            },
            displayValue: input.type
          })), (input.type === 'checkboxOptionsInput' || input.type === 'selectInput' || input.type === 'radioOptionsInput') && /*#__PURE__*/_react["default"].createElement(_ConditionalQuestionOptionEditor["default"], {
            questionInputOptions: input.options,
            questionId: questionId,
            currentQuestionPanelIndex: _this2.props.currentQuestionPanelIndex,
            currentQuestionSetIndex: _this2.props.currentQuestionSetIndex,
            path: conditionalPath
          }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_FormMenu.DeleteConditionalQuestionButton, {
            path: conditionalPath,
            deleteConditionalQuestion: _this2.props.deleteConditionalQuestion
          }), /*#__PURE__*/_react["default"].createElement("button", {
            type: "button",
            className: "btn btn-warning",
            title: "save this conditional question",
            onClick: function onClick() {
              return _this2.onSaveConditionalQuestion(ix, _this2.props.parentPath);
            }
          }, "save")), /*#__PURE__*/_react["default"].createElement("br", null))
        ); // end of return #2
      }); // end of return #1
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "row winterfell-form-builder-conditional-questions alert alert-info"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col"
      }, /*#__PURE__*/_react["default"].createElement("h6", null, "Option '".concat(this.props.parentOptionText, "' Conditional Questions:")), /*#__PURE__*/_react["default"].createElement("h6", null, /*#__PURE__*/_react["default"].createElement("i", null, "Display these questions if this option is selected")), this.props.conditionalQuestions && this.getConditionalQuestions()), /*#__PURE__*/_react["default"].createElement("div", {
        className: "col"
      }, /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement(_FormMenu.AddConditionalQuestionButton, {
        path: this.props.parentPath
      }), /*#__PURE__*/_react["default"].createElement("br", null)));
    }
  }]);
  return ConditionalQuestionEditor;
}(_react.PureComponent);

ConditionalQuestionEditor.propTypes = {
  conditionalQuestions: _propTypes["default"].object,
  currentQuestionSetIndex: _propTypes["default"].number.isRequired,
  parentOptionText: _propTypes["default"].string.isRequired,
  currentQuestionPanelIndex: _propTypes["default"].number.isRequired,
  saveConditionalQuestion: _propTypes["default"].func.isRequired,
  deleteConditionalQuestion: _propTypes["default"].func.isRequired,
  parentPath: _propTypes["default"].array.isRequired
};
ConditionalQuestionEditor.defaultProps = {
  conditionalQuestions: (0, _immutable.fromJS)([])
};

function mapStateToProps(state, ownProps) {
  return {
    conditionalQuestions: state.getIn(['form'].concat((0, _toConsumableArray2["default"])(ownProps.parentPath), ['conditionalQuestions']))
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  saveConditionalQuestion: _winterfellFormBuilderActions.saveConditionalQuestion,
  deleteConditionalQuestion: _winterfellFormBuilderActions.deleteConditionalQuestion
})(ConditionalQuestionEditor);

exports["default"] = _default;