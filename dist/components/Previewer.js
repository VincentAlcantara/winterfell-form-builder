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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _winterfell = _interopRequireDefault(require("winterfell"));

var _reactRedux = require("react-redux");

var _winterfellFormBuilderActions = require("../actions/winterfellFormBuilderActions");

var _DateInputType = _interopRequireDefault(require("../components/InputTypes/DateInputType"));

var _addressInputType = _interopRequireDefault(require("../components/InputTypes/addressInputType"));

var _textAreaInputType = _interopRequireDefault(require("../components/InputTypes/textAreaInputType"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var onRenderDefault = function onRenderDefault() {
  console.log('Great news! Winterfell rendered successfully');
};

var onSwitchPanelDefault = function onSwitchPanelDefault(panel) {
  console.log("Moving on to the panel that is identified as ".concat(panel.panelId));
};

var onSubmitDefault = function onSubmitDefault(questionAndAnswers, target) {
  console.log('Form submitted!', questionAndAnswers);
  console.log('-----');
  console.log('For this example, we disabled normal form submission functionality. ');
  console.log('-----');
  console.log('Target: ', target);
  console.log('-----'); // alert('Submitted. Check the console to see the answers!');
};

var Previewer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Previewer, _Component);

  var _super = _createSuper(Previewer);

  function Previewer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Previewer);
    _this = _super.call(this, props);
    _this.onUpdateQuestionAnswers = _this.onUpdateQuestionAnswers.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Previewer, [{
    key: "onUpdateQuestionAnswers",
    value: function onUpdateQuestionAnswers(questionAndAnswers) {
      console.log('Question Updated! The current set of answers is: ', questionAndAnswers);
      this.props.updateQuestionAnswers(questionAndAnswers);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          schema = _this$props.schema,
          currentPanelId = _this$props.currentPanelId,
          onRender = _this$props.onRender,
          onSwitchPanel = _this$props.onSwitchPanel,
          onSubmit = _this$props.onSubmit,
          questionAnswers = _this$props.questionAnswers;

      _winterfell["default"].addInputTypes({
        dateInput: _DateInputType["default"],
        addressInput: _addressInputType["default"],
        textAreaInput: _textAreaInputType["default"]
      });

      var displayWinterFellForm = function displayWinterFellForm() {
        return schema.formPanels.map(function (formPanel, index) {
          return formPanel.panelId === currentPanelId && /*#__PURE__*/_react["default"].createElement(_winterfell["default"], {
            schema: schema,
            disableSubmit: true,
            onRender: onRender,
            onUpdate: _this2.onUpdateQuestionAnswers,
            onSwitchPanel: onSwitchPanel,
            onSubmit: onSubmit,
            questionAnswers: questionAnswers,
            panelId: currentPanelId,
            key: index
          }) || currentPanelId === 'Select Page' && /*#__PURE__*/_react["default"].createElement(_winterfell["default"], {
            schema: schema,
            disableSubmit: true,
            onRender: onRender,
            onUpdate: _this2.onUpdate,
            onSwitchPanel: onSwitchPanel,
            onSubmit: onSubmit,
            questionAnswers: questionAnswers
          });
        });
      };

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "card p-3"
      }, schema && schema.formPanels && schema.formPanels.length > 0 && currentPanelId && currentPanelId !== 'Select Page' && displayWinterFellForm());
    }
  }]);
  return Previewer;
}(_react.Component);

Previewer.propTypes = {
  currentPanelId: _propTypes["default"].string,
  schema: _propTypes["default"].object.isRequired,
  onRender: _propTypes["default"].func,
  updateQuestionAnswers: _propTypes["default"].func,
  onSubmit: _propTypes["default"].func,
  onSwitchPanel: _propTypes["default"].func,
  questionAnswers: _propTypes["default"].object
};
Previewer.defaultProps = {
  currentPanelId: null,
  schema: {},
  onRender: onRenderDefault,
  onSubmit: onSubmitDefault,
  onSwitchPanel: onSwitchPanelDefault,
  questionAnswers: {},
  onUpdate: function onUpdate() {},
  updateQuestionAnswers: function updateQuestionAnswers() {}
};

var _default = (0, _reactRedux.connect)(null, {
  updateQuestionAnswers: _winterfellFormBuilderActions.updateQuestionAnswers
})(Previewer);

exports["default"] = _default;