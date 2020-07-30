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

var _SelectInput = _interopRequireDefault(require("../InputTypes/SelectInput"));

var _FieldGroup = _interopRequireDefault(require("../InputTypes/FieldGroup"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var ButtonBarEditor = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(ButtonBarEditor, _PureComponent);

  var _super = _createSuper(ButtonBarEditor);

  function ButtonBarEditor(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ButtonBarEditor);
    _this = _super.call(this, props);
    var backButtonText = props.backButtonText,
        nextButtonText = props.nextButtonText,
        defaultGoToAction = props.defaultGoToAction,
        defaultGoToTarget = props.defaultGoToTarget;
    _this.state = {
      backButtonText: backButtonText,
      nextButtonText: nextButtonText,
      defaultGoToAction: defaultGoToAction,
      defaultGoToTarget: defaultGoToTarget
    };
    _this.onChangeBackButtonText = _this.onChangeBackButtonText.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onChangeNextButtonText = _this.onChangeNextButtonText.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onChangeNextButtonTargetText = _this.onChangeNextButtonTargetText.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onClick = _this.onClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onSelectDefaultAction = _this.onSelectDefaultAction.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onSelectDefaultTarget = _this.onSelectDefaultTarget.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onDisableBackButtonClick = _this.onDisableBackButtonClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ButtonBarEditor, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.state = {
        backButtonText: nextProps.backButtonText,
        nextButtonText: nextProps.nextButtonText,
        defaultGoToAction: nextProps.defaultGoToAction,
        defaultGoToTarget: nextProps.defaultGoToTarget
      };
    }
  }, {
    key: "onChangeBackButtonText",
    value: function onChangeBackButtonText(event) {
      this.setState((0, _defineProperty2["default"])({}, event.target.name, event.target.value));
      this.props.editBackButtonText(this.props.currentQuestionPanelIndex, event.target.value);
    }
  }, {
    key: "onChangeNextButtonText",
    value: function onChangeNextButtonText(event) {
      this.setState((0, _defineProperty2["default"])({}, event.target.name, event.target.value));
      this.props.editNextButtonText(this.props.currentQuestionPanelIndex, event.target.value);
    }
  }, {
    key: "onChangeNextButtonTargetText",
    value: function onChangeNextButtonTargetText(event) {
      this.setState((0, _defineProperty2["default"])({}, event.target.name, event.target.value));
      this.props.onSelectNextButtonTarget(this.props.currentQuestionPanelIndex, event.target.value);
    }
  }, {
    key: "onClick",
    value: function onClick(questionSetId) {
      var questionSetIndex = this.props.formPanels.findIndex(function (questionSet) {
        return questionSet.get('questionSetId') === questionSetId;
      });
      this.props.onSelectNextButtonAction('questionSet', questionSetIndex);
    }
  }, {
    key: "onSelectDefaultAction",
    value: function onSelectDefaultAction(action) {
      this.setState({
        defaultGoToAction: action
      });
      this.props.onSelectNextButtonAction(this.props.currentQuestionPanelIndex, action);
    }
  }, {
    key: "onSelectDefaultTarget",
    value: function onSelectDefaultTarget(target) {
      this.setState({
        defaultGoToTarget: target
      });
      this.props.onSelectNextButtonTarget(this.props.currentQuestionPanelIndex, target);
    }
  }, {
    key: "onDisableBackButtonClick",
    value: function onDisableBackButtonClick() {
      this.props.disableBackButton(this.props.currentQuestionPanelIndex, !this.props.backButtonDisabled);
    }
  }, {
    key: "formPanelIds",
    value: function formPanelIds() {
      var formPanelsArray = this.props.formPanels.toJS();
      return formPanelsArray.map(function (formPanel) {
        return {
          text: formPanel.panelId,
          value: formPanel.panelId
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "backButtonText",
        name: "backButtonText",
        label: "Back Button Text",
        onChange: this.onChangeBackButtonText,
        placeholder: this.props.backButtonText,
        value: this.state.backButtonText
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("span", {
        htmlFor: "disable-back-button",
        id: "disable-back-button-label"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        id: "disable-back-button",
        type: "checkbox",
        onClick: this.onDisableBackButtonClick,
        checked: this.props.backButtonDisabled
      }), "\xA0disable back button")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "nextButtonText",
        name: "nextButtonText",
        label: "Next Button Text",
        placeholder: this.props.nextButtonText,
        onChange: this.onChangeNextButtonText,
        value: this.state.nextButtonText
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "goToAction"
      }, "Default Next Button Option"), /*#__PURE__*/_react["default"].createElement(_SelectInput["default"], {
        id: "goToAction",
        labelId: "goToAction",
        options: [{
          text: 'SUBMIT',
          value: 'SUBMIT'
        }, {
          text: 'GOTO',
          value: 'GOTO'
        }],
        onSelect: this.onSelectDefaultAction,
        displayValue: this.props.defaultGoToAction
      })), this.state.defaultGoToAction === 'GOTO' && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "goToPanel"
      }, "Default Next Button Target"), /*#__PURE__*/_react["default"].createElement(_SelectInput["default"], {
        id: "goToPanel",
        labelId: "goToPanel",
        options: this.formPanelIds(),
        onSelect: this.onSelectDefaultTarget,
        displayValue: this.props.defaultGoToTarget
      })), this.state.defaultGoToAction === 'SUBMIT' && /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "defaultGoToTarget",
        name: "defaultGoToTarget",
        label: "Submit Target",
        placeholder: this.props.defaultGoToTarget,
        onChange: this.onChangeNextButtonTargetText,
        value: this.state.defaultGoToTarget
      }));
    }
  }]);
  return ButtonBarEditor;
}(_react.PureComponent);

ButtonBarEditor.propTypes = {
  editNextButtonText: _propTypes["default"].func.isRequired,
  backButtonDisabled: _propTypes["default"].bool,
  editBackButtonText: _propTypes["default"].func.isRequired,
  disableBackButton: _propTypes["default"].func.isRequired,
  onSelectNextButtonAction: _propTypes["default"].func.isRequired,
  onSelectNextButtonTarget: _propTypes["default"].func.isRequired,
  backButtonText: _propTypes["default"].string,
  nextButtonText: _propTypes["default"].string,
  formPanels: _propTypes["default"].object,
  currentQuestionPanelIndex: _propTypes["default"].number.isRequired,
  defaultGoToAction: _propTypes["default"].string,
  defaultGoToTarget: _propTypes["default"].string
};
ButtonBarEditor.defaultProps = {
  currentQuestionPanelIndex: 0,
  backButtonText: '',
  backButtonDisabled: false,
  nextButtonText: '',
  formPanels: (0, _immutable.fromJS)({}),
  defaultGoToAction: '',
  defaultGoToTarget: ''
};

function mapStateToProps(state, ownProps) {
  return {
    backButtonText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'backButton', 'text']),
    backButtonDisabled: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'backButton', 'disabled']),
    nextButtonText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'button', 'text']),
    defaultAction: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'default']),
    conditionalActions: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'conditions']),
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    defaultGoToAction: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'default', 'action']),
    defaultGoToTarget: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'default', 'target'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  editNextButtonText: _winterfellFormBuilderActions.editNextButtonText,
  editBackButtonText: _winterfellFormBuilderActions.editBackButtonText,
  onSelectNextButtonAction: _winterfellFormBuilderActions.onSelectNextButtonAction,
  onSelectNextButtonTarget: _winterfellFormBuilderActions.onSelectNextButtonTarget,
  disableBackButton: _winterfellFormBuilderActions.disableBackButton
})(ButtonBarEditor);

exports["default"] = _default;