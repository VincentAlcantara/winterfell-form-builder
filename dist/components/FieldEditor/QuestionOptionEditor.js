"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _DeleteQuestionOptionButton = _interopRequireDefault(require("../FormMenu/DeleteQuestionOptionButton"));

var _ConditionalPageEditor = _interopRequireDefault(require("./ConditionalPageEditor"));

var _ConditionalQuestionEditor = _interopRequireDefault(require("./ConditionalQuestionEditor"));

var _AddQuestionOptionButton = _interopRequireDefault(require("../FormMenu/AddQuestionOptionButton"));

var _winterfellFormBuilderActions = require("../../actions/winterfellFormBuilderActions");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var QuestionOptionEditor = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(QuestionOptionEditor, _PureComponent);

  var _super = _createSuper(QuestionOptionEditor);

  function QuestionOptionEditor(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, QuestionOptionEditor);
    _this = _super.call(this, props);
    var questionInputOptions = props.questionInputOptions;
    _this.state = {
      questionInputOptions: questionInputOptions ? questionInputOptions.toJS() : [],
      editQuestionId: true,
      showConditionalPage: questionInputOptions ? new Array(questionInputOptions.count()) : [],
      showConditionalQuestions: questionInputOptions ? new Array(questionInputOptions.count()) : [],
      questionOptionText: '',
      questionOptionValue: ''
    };
    _this.onOptionTextChange = _this.onOptionTextChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onOptionValueChange = _this.onOptionValueChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onShowConditonalClick = _this.onShowConditonalClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onAddOption = _this.onAddOption.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(QuestionOptionEditor, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        questionInputOptions: nextProps.questionInputOptions.toJS()
      });
    }
  }, {
    key: "onOptionTextChange",
    value: function onOptionTextChange(event, index) {
      var _this$props = this.props,
          currentQuestionSetIndex = _this$props.currentQuestionSetIndex,
          currentQuestionIndex = _this$props.currentQuestionIndex;
      var questionInputOptions = Object.assign([], this.state.questionInputOptions);
      questionInputOptions[index].text = event.target.value;
      this.setState({
        questionInputOptions: questionInputOptions
      });
      var path = ['schema', 'questionSets', currentQuestionSetIndex, 'questions', currentQuestionIndex, 'input', 'options', index];
      this.props.editQuestionOptionText(path, event.target.value);
    }
  }, {
    key: "onOptionValueChange",
    value: function onOptionValueChange(event, index) {
      var _this$props2 = this.props,
          currentQuestionSetIndex = _this$props2.currentQuestionSetIndex,
          currentQuestionIndex = _this$props2.currentQuestionIndex;
      var questionInputOptions = Object.assign([], this.state.questionInputOptions);
      questionInputOptions[index].value = event.target.value;
      this.setState({
        questionInputOptions: questionInputOptions
      });
      var path = ['schema', 'questionSets', currentQuestionSetIndex, 'questions', currentQuestionIndex, 'input', 'options', index];
      this.props.editQuestionOptionValue(path, event.target.value);
    }
  }, {
    key: "onDeleteQuestionOption",
    value: function onDeleteQuestionOption(index) {
      var _this$props3 = this.props,
          currentQuestionSetIndex = _this$props3.currentQuestionSetIndex,
          currentQuestionIndex = _this$props3.currentQuestionIndex;
      var path = ['schema', 'questionSets', currentQuestionSetIndex, 'questions', currentQuestionIndex, 'input', 'options', index];
      this.props.deleteQuestionOption(path);
    }
  }, {
    key: "onAddOptionChange",
    value: function onAddOptionChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty2["default"])({}, event.target.name, event.target.value));
    }
  }, {
    key: "onAddOption",
    value: function onAddOption() {
      var _this$props4 = this.props,
          currentQuestionSetIndex = _this$props4.currentQuestionSetIndex,
          currentQuestionIndex = _this$props4.currentQuestionIndex;
      var _this$state = this.state,
          questionOptionText = _this$state.questionOptionText,
          questionOptionValue = _this$state.questionOptionValue;
      var key = ['schema', 'questionSets', currentQuestionSetIndex, 'questions', currentQuestionIndex, 'input', 'options'];
      this.props.addQuestionOption(key, questionOptionText, questionOptionValue);
      this.setState({
        questionOptionText: '',
        questionOptionValue: ''
      });
    }
  }, {
    key: "onShowConditonalClick",
    value: function onShowConditonalClick(index, event) {
      var showConditionalPageCopy = (0, _toConsumableArray2["default"])(this.state.showConditionalPage);
      var showConditionalQuestionsCopy = (0, _toConsumableArray2["default"])(this.state.showConditionalQuestions);
      var currentConditionalPageSelected = showConditionalPageCopy.findIndex(function (showCondition) {
        return showCondition;
      });
      var currentConditionalQuestionSelected = showConditionalQuestionsCopy.findIndex(function (showCondition) {
        return showCondition;
      }); // Turn off the existing choices

      if (currentConditionalPageSelected !== -1) {
        showConditionalPageCopy[currentConditionalPageSelected] = !showConditionalPageCopy[currentConditionalPageSelected];
      }

      if (currentConditionalQuestionSelected !== -1) {
        showConditionalQuestionsCopy[currentConditionalQuestionSelected] = !showConditionalQuestionsCopy[currentConditionalQuestionSelected];
      } // Turn on the selected choice


      if ((event.target.id === 'showConditionalQuestion' || event.target.id === 'showConditionalQuestionButton') && index !== currentConditionalQuestionSelected) {
        showConditionalQuestionsCopy[index] = !showConditionalQuestionsCopy[index];
      }

      if ((event.target.id === 'showConditionalPage' || event.target.id === 'showConditionalPageButton') && index !== currentConditionalPageSelected) {
        showConditionalPageCopy[index] = !showConditionalPageCopy[index];
      }

      this.setState({
        showConditionalPage: showConditionalPageCopy,
        showConditionalQuestions: showConditionalQuestionsCopy
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props5 = this.props,
          questionInputOptions = _this$props5.questionInputOptions,
          questionId = _this$props5.questionId,
          currentQuestionPanelIndex = _this$props5.currentQuestionPanelIndex,
          currentQuestionSetIndex = _this$props5.currentQuestionSetIndex,
          currentQuestionIndex = _this$props5.currentQuestionIndex;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col"
      }, questionInputOptions && /*#__PURE__*/_react["default"].createElement("b", null, "Options"), this.state.questionInputOptions && this.state.questionInputOptions.map(function (option, ix) {
        var currentPath = ['schema', 'questionSets', currentQuestionSetIndex, 'questions', currentQuestionIndex, 'input', 'options', ix];
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: "".concat(ix)
        }, /*#__PURE__*/_react["default"].createElement("div", {
          className: "input-group winterfell-form-builder-conditional-question"
        }, /*#__PURE__*/_react["default"].createElement("input", {
          className: "form-control",
          type: "text",
          name: _this2.state.questionInputOptions[ix].text,
          value: _this2.state.questionInputOptions[ix].text,
          onChange: function onChange(event) {
            return _this2.onOptionTextChange(event, ix);
          }
        }), /*#__PURE__*/_react["default"].createElement("input", {
          className: "form-control",
          type: "text",
          name: _this2.state.questionInputOptions[ix].value,
          value: _this2.state.questionInputOptions[ix].value,
          onChange: function onChange(event) {
            return _this2.onOptionValueChange(event, ix);
          }
        }), /*#__PURE__*/_react["default"].createElement("div", {
          className: "input-group"
        }, /*#__PURE__*/_react["default"].createElement(_DeleteQuestionOptionButton["default"], {
          questionOptionIndex: ix,
          onDeleteQuestionOption: function onDeleteQuestionOption() {
            return _this2.onDeleteQuestionOption(ix);
          }
        })), /*#__PURE__*/_react["default"].createElement("div", {
          className: "input-group"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          onClick: function onClick(event) {
            return _this2.onShowConditonalClick(ix, event);
          },
          className: "btn btn-warning",
          id: "showConditionalPageButton"
        }, _this2.state.showConditionalPage && !_this2.state.showConditionalPage[ix] && /*#__PURE__*/_react["default"].createElement("i", {
          className: "material-icons",
          id: "showConditionalPage"
        }, "share"), _this2.state.showConditionalPage && _this2.state.showConditionalPage[ix] && /*#__PURE__*/_react["default"].createElement("i", {
          className: "material-icons",
          id: "showConditionalPage"
        }, "remove_circle "))), /*#__PURE__*/_react["default"].createElement("div", {
          className: "input-group"
        }, /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          id: "showConditionalQuestionButton",
          onClick: function onClick(event) {
            return _this2.onShowConditonalClick(ix, event);
          },
          className: "btn btn-dark"
        }, _this2.state.showConditionalQuestions && !_this2.state.showConditionalQuestions[ix] && /*#__PURE__*/_react["default"].createElement("i", {
          className: "material-icons",
          id: "showConditionalPage"
        }, "menu"), _this2.state.showConditionalQuestions && _this2.state.showConditionalQuestions[ix] && /*#__PURE__*/_react["default"].createElement("i", {
          className: "material-icons",
          id: "showConditionalPage"
        }, "remove_circle "))), _this2.state.showConditionalPage[ix] && /*#__PURE__*/_react["default"].createElement(_ConditionalPageEditor["default"], {
          questionOptionIndex: ix,
          questionId: questionId,
          currentQuestionPanelIndex: currentQuestionPanelIndex,
          currentQuestionSetIndex: currentQuestionSetIndex,
          currentQuestionIndex: currentQuestionIndex,
          text: _this2.state.questionInputOptions[ix].text
        }), _this2.state.showConditionalQuestions[ix] && /*#__PURE__*/_react["default"].createElement(_ConditionalQuestionEditor["default"], {
          parentPath: currentPath,
          parentOptionText: _this2.state.questionInputOptions[ix].text
        })));
      }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_AddQuestionOptionButton["default"], {
        questionOptionText: this.state.questionOptionText,
        questionOptionValue: this.state.questionOptionValue,
        onChange: function onChange(e) {
          return _this2.onAddOptionChange(e);
        },
        onClick: this.onAddOption
      }))));
    }
  }]);
  return QuestionOptionEditor;
}(_react.PureComponent);

QuestionOptionEditor.propTypes = {
  questionInputOptions: _propTypes["default"].object.isRequired,
  questionId: _propTypes["default"].string.isRequired,
  currentQuestionPanelIndex: _propTypes["default"].number.isRequired,
  currentQuestionSetIndex: _propTypes["default"].number.isRequired,
  currentQuestionIndex: _propTypes["default"].number.isRequired,
  editQuestionOptionText: _propTypes["default"].func.isRequired,
  editQuestionOptionValue: _propTypes["default"].func.isRequired,
  deleteQuestionOption: _propTypes["default"].func.isRequired,
  addQuestionOption: _propTypes["default"].func.isRequired
};

var _default = (0, _reactRedux.connect)(null, {
  editQuestionOptionText: _winterfellFormBuilderActions.editQuestionOptionText,
  editQuestionOptionValue: _winterfellFormBuilderActions.editQuestionOptionValue,
  addQuestionOption: _winterfellFormBuilderActions.addQuestionOption,
  deleteQuestion: _winterfellFormBuilderActions.deleteQuestion,
  deleteQuestionOption: _winterfellFormBuilderActions.deleteQuestionOption,
  changeQuestionType: _winterfellFormBuilderActions.changeQuestionType,
  changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField,
  updateNextQuestionTarget: _winterfellFormBuilderActions.updateNextQuestionTarget
})(QuestionOptionEditor);

exports["default"] = _default;