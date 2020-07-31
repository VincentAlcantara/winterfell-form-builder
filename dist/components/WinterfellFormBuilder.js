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

var _winterfellFormBuilderActions = require("../actions/winterfellFormBuilderActions");

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _Previewer = _interopRequireDefault(require("./Previewer"));

var _TreeView = _interopRequireDefault(require("./TreeView"));

var _FormMenu = require("./FormMenu");

var _FieldSelector = _interopRequireDefault(require("./FieldSelector"));

var _FieldEditor = _interopRequireDefault(require("./FieldEditor"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var WinterfellFormBuilder = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(WinterfellFormBuilder, _Component);

  var _super = _createSuper(WinterfellFormBuilder);

  function WinterfellFormBuilder() {
    var _this;

    (0, _classCallCheck2["default"])(this, WinterfellFormBuilder);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onFormUpdate", function (e) {
      e.preventDefault();

      _this.setState({
        schema: JSON.parse(e.target.value)
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(WinterfellFormBuilder, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          schema = _this$props.schema,
          currentPanelId = _this$props.currentPanelId,
          formPanels = _this$props.formPanels,
          currentEditingField = _this$props.currentEditingField,
          currentQuestionPanelIndex = _this$props.currentQuestionPanelIndex,
          currentQuestionSetIndex = _this$props.currentQuestionSetIndex,
          currentQuestionIndex = _this$props.currentQuestionIndex,
          errorMessage = _this$props.errorMessage,
          title = _this$props.title;
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "container winterfell-form-builder"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "row"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "col-12"
      }, /*#__PURE__*/_react["default"].createElement("h1", null, "Winterfell Form Builder"))));
    }
  }]);
  return WinterfellFormBuilder;
}(_react.Component);

WinterfellFormBuilder.propTypes = {
  schema: _propTypes["default"].object,
  currentPanelId: _propTypes["default"].string,
  currentQuestionPanelIndex: _propTypes["default"].number,
  currentQuestionSetIndex: _propTypes["default"].number,
  currentQuestionIndex: _propTypes["default"].number,
  formPanels: _propTypes["default"].object,
  goToPage: _propTypes["default"].func.isRequired,
  currentEditingField: _propTypes["default"].string,
  changeCurrentEditingField: _propTypes["default"].func.isRequired,
  clearErrorMessage: _propTypes["default"].func.isRequired,
  errorMessage: _propTypes["default"].string,
  title: _propTypes["default"].string
};
WinterfellFormBuilder.defaultProps = {
  title: '',
  schema: null,
  currentPanelId: null,
  inputSchema: {},
  formPanels: null,
  questionSets: null,
  currentQuestionPanelIndex: 0,
  // first page by default
  currentQuestionSetIndex: null,
  currentQuestionIndex: null,
  currentEditingField: 'page',
  errorMessage: ''
};

function mapStateToProps(state, ownProps) {
  console.log("This is what i have got in here ", state, ownProps);
  var data = {
    title: state.getIn(['form', 'title']),
    schema: state.getIn(['form', 'schema']),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
    currentEditingField: state.getIn(['form', 'currentEditingField']),
    currentQuestionPanelIndex: state.getIn(['form', 'currentQuestionPanelIndex']),
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    errorMessage: state.getIn(['error', 'message'])
  };
  console.log("This is data ", data);
  return {
    title: state.getIn(['form', 'title']),
    schema: state.getIn(['form', 'schema']),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
    currentEditingField: state.getIn(['form', 'currentEditingField']),
    currentQuestionPanelIndex: state.getIn(['form', 'currentQuestionPanelIndex']),
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    errorMessage: state.getIn(['error', 'message'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  goToPage: _winterfellFormBuilderActions.goToPage,
  changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField,
  clearErrorMessage: _winterfellFormBuilderActions.clearErrorMessage
})(WinterfellFormBuilder);

exports["default"] = _default;