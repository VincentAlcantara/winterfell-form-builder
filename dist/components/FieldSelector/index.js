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

var _PageSelector = _interopRequireDefault(require("./PageSelector"));

var _QuestionSetSelector = _interopRequireDefault(require("./QuestionSetSelector"));

var _ButtonBarSelector = _interopRequireDefault(require("./ButtonBarSelector"));

var _PageSortSelector = _interopRequireDefault(require("./PageSortSelector"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var FieldSelectorContainer = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(FieldSelectorContainer, _Component);

  var _super = _createSuper(FieldSelectorContainer);

  function FieldSelectorContainer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, FieldSelectorContainer);
    _this = _super.call(this, props);
    _this.state = {
      currentPanel: null,
      currentQuestionSets: []
    };
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onFormUpdate = _this.onFormUpdate.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(FieldSelectorContainer, [{
    key: "onChange",
    value: function onChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty2["default"])({}, event.target.name, event.target.value));
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
      this.props.editFormTitle(this.state.formTitle);
      this.setState({
        showModal: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          currentQuestionPanelIndex = _this$props.currentQuestionPanelIndex,
          questionPanels = _this$props.questionPanels,
          questionSets = _this$props.questionSets,
          panelHeader = _this$props.panelHeader,
          panelText = _this$props.panelText,
          currentQuestionSetIndex = _this$props.currentQuestionSetIndex,
          currentQuestionIndex = _this$props.currentQuestionIndex,
          backButton = _this$props.backButton,
          backButtonDisabled = _this$props.backButtonDisabled,
          nextButton = _this$props.nextButton,
          currentEditingField = _this$props.currentEditingField;
      var questionPanelsArray = questionPanels && questionPanels.toJS();
      console.log("questionSetsArray = questionSets && questionSets.toJS() ", questionSets);
      var questionSetsArray = questionSets && questionSets.toJS();
      return [currentEditingField === 'pageSort' && /*#__PURE__*/_react["default"].createElement(_PageSortSelector["default"], {
        key: "pageSortSelector"
      }), currentEditingField !== 'pageSort' && /*#__PURE__*/_react["default"].createElement("div", {
        key: true
      }, currentQuestionPanelIndex >= 0 && /*#__PURE__*/_react["default"].createElement(_PageSelector["default"], {
        panelHeader: panelHeader,
        panelText: panelText,
        onClick: function onClick() {
          return _this2.props.changeCurrentEditingField('page', currentQuestionSetIndex, currentQuestionIndex);
        }
      }), currentQuestionPanelIndex >= 0 && questionPanelsArray && /*#__PURE__*/_react["default"].createElement(_QuestionSetSelector["default"], {
        currentQuestionSets: questionPanelsArray[currentQuestionPanelIndex].questionSets,
        questionSets: questionSetsArray,
        onClick: this.props.changeCurrentEditingField,
        currentQuestionIndex: this.props.currentQuestionIndex
      }), currentQuestionPanelIndex >= 0 && /*#__PURE__*/_react["default"].createElement(_ButtonBarSelector["default"], {
        backButton: backButton,
        backButtonDisabled: backButtonDisabled,
        nextButton: nextButton,
        onClick: function onClick() {
          return _this2.props.changeCurrentEditingField('buttons', currentQuestionSetIndex, currentQuestionIndex);
        }
      }))];
    }
  }]);
  return FieldSelectorContainer;
}(_react.Component);

FieldSelectorContainer.propTypes = {
  editFormTitle: _propTypes["default"].func.isRequired,
  changeCurrentEditingField: _propTypes["default"].func.isRequired,
  currentQuestionPanelIndex: _propTypes["default"].number.isRequired,
  currentEditingField: _propTypes["default"].string,
  currentQuestionSetIndex: _propTypes["default"].number,
  currentQuestionIndex: _propTypes["default"].number,
  questionSets: _propTypes["default"].object,
  questionPanels: _propTypes["default"].object,
  panelHeader: _propTypes["default"].string,
  panelText: _propTypes["default"].string,
  backButton: _propTypes["default"].string,
  backButtonDisabled: _propTypes["default"].bool,
  nextButton: _propTypes["default"].string
};
FieldSelectorContainer.defaultProps = {
  currentPanelId: 'Select Page',
  currentQuestionPanelIndex: 0,
  currentEditingField: 'page',
  questionPanels: null,
  questionSets: null,
  panelHeader: '',
  panelText: '',
  backButton: '',
  backButtonDisabled: false,
  nextButton: '',
  currentQuestionSetIndex: 0,
  currentQuestionIndex: 0
};

function mapStateToProps(state, ownProps) {
  return {
    title: state.getIn(['form', 'title']),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
    currentEditingField: state.getIn(['form', 'currentEditingField']),
    currentQuestionPanelIndex: state.getIn(['form', 'currentQuestionPanelIndex']),
    questionPanels: state.getIn(['form', 'schema', 'questionPanels']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
    schema: state.getIn(['form', 'schema']),
    panelHeader: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelHeader']),
    panelText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelText']),
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    nextButton: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'button', 'text']),
    backButton: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'backButton', 'text']),
    backButtonDisabled: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'backButton', 'disabled'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField,
  editFormTitle: _winterfellFormBuilderActions.editFormTitle
})(FieldSelectorContainer);

exports["default"] = _default;