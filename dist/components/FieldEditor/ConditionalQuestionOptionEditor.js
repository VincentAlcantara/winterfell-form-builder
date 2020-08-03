"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

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

var ConditionalQuestionOptionEditor = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(ConditionalQuestionOptionEditor, _PureComponent);

  var _super = _createSuper(ConditionalQuestionOptionEditor);

  function ConditionalQuestionOptionEditor(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ConditionalQuestionOptionEditor);
    _this = _super.call(this, props);
    var questionInputOptions = props.questionInputOptions;
    _this.state = {
      questionInputOptions: questionInputOptions || [],
      editQuestionId: true,
      showConditionalPage: questionInputOptions ? new Array(questionInputOptions.length) : [],
      showConditionalQuestions: questionInputOptions ? new Array(questionInputOptions.length) : [],
      questionOptionText: '',
      questionOptionValue: ''
    };
    _this.onOptionTextChange = _this.onOptionTextChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onOptionValueChange = _this.onOptionValueChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onShowConditonalClick = _this.onShowConditonalClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onAddOptionChange = _this.onAddOptionChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onAddOption = _this.onAddOption.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDeleteOption = _this.onDeleteOption.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ConditionalQuestionOptionEditor, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        questionInputOptions: nextProps.questionInputOptions
      });
    }
  }, {
    key: "onOptionTextChange",
    value: function onOptionTextChange(event, index) {
      var path = this.props.path;
      var questionInputOptions = Object.assign({}, this.state.questionInputOptions);
      questionInputOptions[index].text = event.target.value;
      this.setState({
        questionInputOptions: questionInputOptions
      });
      this.props.editQuestionOptionText([].concat((0, _toConsumableArray2["default"])(path), ['input', 'options', index]), event.target.value);
    }
  }, {
    key: "onOptionValueChange",
    value: function onOptionValueChange(event, index) {
      var path = this.props.path;
      var questionInputOptions = Object.assign({}, this.state.questionInputOptions);
      questionInputOptions[index].value = event.target.value;
      this.setState({
        questionInputOptions: questionInputOptions
      });
      this.props.editQuestionOptionValue([].concat((0, _toConsumableArray2["default"])(path), ['input', 'options', index]), event.target.value);
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
    key: "onAddOptionChange",
    value: function onAddOptionChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty2["default"])({}, event.target.name, event.target.value));
    }
  }, {
    key: "onAddOption",
    value: function onAddOption() {
      var _this$state = this.state,
          questionOptionText = _this$state.questionOptionText,
          questionOptionValue = _this$state.questionOptionValue;
      var key = Object.assign([], this.props.path);
      key.push('input');
      key.push('options');
      this.props.addQuestionOption(key, questionOptionText, questionOptionValue);
      this.setState({
        questionOptionText: '',
        questionOptionValue: ''
      });
    }
  }, {
    key: "onDeleteOption",
    value: function onDeleteOption(index) {
      var copyConditionalQuestions = Object.assign([], this.state.questionInputOptions);
      copyConditionalQuestions.splice(index, 1);
      this.setState({
        questionInputOptions: copyConditionalQuestions
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          questionInputOptions = _this$props.questionInputOptions,
          questionId = _this$props.questionId,
          path = _this$props.path;
      return /*#__PURE__*/_react["default"].createElement("div", null, questionInputOptions && /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("b", null, "Options")), !this.state.questionInputOptions.length && /*#__PURE__*/_react["default"].createElement("div", null, "No options"), this.state.questionInputOptions && this.state.questionInputOptions.map(function (option, ix) {
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
        }), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_DeleteQuestionOptionButton["default"], {
          onDeleteQuestionOption: function onDeleteQuestionOption() {
            return _this2.props.deleteQuestionOption([].concat((0, _toConsumableArray2["default"])(path), ['input', 'options', ix]));
          }
        })), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
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
        }, "remove_circle "))), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("button", {
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
          text: _this2.state.questionInputOptions[ix].text
        }), _this2.state.showConditionalQuestions[ix] && /*#__PURE__*/_react["default"].createElement(_ConditionalQuestionEditor["default"], {
          parentPath: [].concat((0, _toConsumableArray2["default"])(path), ['input', 'options', ix]),
          parentOptionText: _this2.state.questionInputOptions[ix].text
        })));
      }), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_AddQuestionOptionButton["default"], {
        questionOptionText: this.state.questionOptionText,
        questionOptionValue: this.state.questionOptionValue,
        onChange: function onChange(e) {
          return _this2.onAddOptionChange(e);
        },
        onClick: this.onAddOption
      })));
    }
  }]);
  return ConditionalQuestionOptionEditor;
}(_react.PureComponent);

ConditionalQuestionOptionEditor.propTypes = {
  questionInputOptions: _propTypes["default"].array.isRequired,
  questionId: _propTypes["default"].string.isRequired,
  editQuestionOptionText: _propTypes["default"].func.isRequired,
  editQuestionOptionValue: _propTypes["default"].func.isRequired,
  addQuestionOption: _propTypes["default"].func.isRequired,
  deleteQuestionOption: _propTypes["default"].func.isRequired,
  path: _propTypes["default"].array.isRequired
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
})(ConditionalQuestionOptionEditor);

exports["default"] = _default;