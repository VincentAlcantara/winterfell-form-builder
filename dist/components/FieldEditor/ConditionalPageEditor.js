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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _immutable = require("immutable");

var _winterfellFormBuilderActions = require("../../actions/winterfellFormBuilderActions");

var _SelectInput = _interopRequireDefault(require("../InputTypes/SelectInput"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ConditionalPageEditor = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ConditionalPageEditor, _Component);

  var _super = _createSuper(ConditionalPageEditor);

  function ConditionalPageEditor(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ConditionalPageEditor);
    _this = _super.call(this, props);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "nextButtonTargetOptions", function () {
      return _this.props.formPanels && _this.props.formPanels.toJS().map(function (formPanel) {
        var option = {};
        option.text = formPanel.panelId;
        option.value = formPanel.panelId;
        return option;
      });
    });
    _this.state = {
      questionTarget: ''
    };
    _this.onSelect = _this.onSelect.bind((0, _assertThisInitialized2["default"])(_this));
    _this.nextButtonTargetOptions = _this.nextButtonTargetOptions.bind((0, _assertThisInitialized2["default"])(_this));
    _this.initialTarget = _this.initialTarget.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onResetNextQuestionTarget = _this.onResetNextQuestionTarget.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ConditionalPageEditor, [{
    key: "onSelect",
    value: function onSelect(page) {
      this.setState({
        questionTarget: page
      });
      var _this$props = this.props,
          currentQuestionPanelIndex = _this$props.currentQuestionPanelIndex,
          questionId = _this$props.questionId,
          value = _this$props.value;
      this.props.updateNextQuestionTarget(currentQuestionPanelIndex, questionId, value, page, this.props.questionOptionIndex);
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
    key: "onResetNextQuestionTarget",
    value: function onResetNextQuestionTarget() {
      var _this$props2 = this.props,
          currentQuestionPanelIndex = _this$props2.currentQuestionPanelIndex,
          value = _this$props2.value;
      this.props.resetNextQuestionTarget(currentQuestionPanelIndex, value);
    }
  }, {
    key: "initialTarget",
    value: function initialTarget() {
      var _this$props3 = this.props,
          conditions = _this$props3.conditions,
          value = _this$props3.value;
      var conditionIndex = conditions.findIndex(function (condition) {
        return condition.get('value') === value;
      });

      if (conditionIndex !== -1) {
        return conditions.getIn([conditionIndex, 'target']);
      }

      return '';
    } // eslint-disable-next-line no-undef

  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "row winterfell-form-builder-conditional-page alert-warning"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col"
      }, /*#__PURE__*/_react["default"].createElement("h6", null, "Option '".concat(this.props.text, "' Conditional Page:")), /*#__PURE__*/_react["default"].createElement("p", null, /*#__PURE__*/_react["default"].createElement("i", null, "Go to this page if this is option selected.")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "input-group"
      }, /*#__PURE__*/_react["default"].createElement(_SelectInput["default"], {
        id: "questionTarget",
        labelId: "questionTarget",
        options: this.nextButtonTargetOptions(),
        onSelect: this.onSelect,
        displayValue: this.initialTarget(),
        value: this.state.questionTarget
      }), /*#__PURE__*/_react["default"].createElement("button", {
        type: "button",
        label: "find",
        className: "btn btn-danger",
        onClick: this.onResetNextQuestionTarget
      }, "reset")))));
    }
  }]);
  return ConditionalPageEditor;
}(_react.Component);

ConditionalPageEditor.propTypes = {
  updateNextQuestionTarget: _propTypes["default"].func.isRequired,
  resetNextQuestionTarget: _propTypes["default"].func.isRequired,
  questionOptionIndex: _propTypes["default"].number.isRequired,
  formPanels: _propTypes["default"].object.isRequired,
  currentQuestionPanelIndex: _propTypes["default"].number.isRequired,
  questionId: _propTypes["default"].string.isRequired,
  text: _propTypes["default"].string,
  value: _propTypes["default"].string,
  conditions: _propTypes["default"].object
};
ConditionalPageEditor.defaultProps = {
  text: '',
  value: '',
  questionTarget: '',
  conditions: (0, _immutable.fromJS)([])
};

function mapStateToProps(state, ownProps) {
  return {
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    text: ownProps.text,
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    questionId: ownProps.questionId,
    question: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'question']),
    value: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'input', 'options', ownProps.questionOptionIndex, 'value']),
    conditions: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'conditions'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  addConditionalQuestion: _winterfellFormBuilderActions.addConditionalQuestion,
  updateNextQuestionTarget: _winterfellFormBuilderActions.updateNextQuestionTarget,
  resetNextQuestionTarget: _winterfellFormBuilderActions.resetNextQuestionTarget
})(ConditionalPageEditor);

exports["default"] = _default;