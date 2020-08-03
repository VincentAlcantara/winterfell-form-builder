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

var _FormMenu = require("../FormMenu");

var _FieldGroup = _interopRequireDefault(require("../InputTypes/FieldGroup"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PageEditor = /*#__PURE__*/function (_PureComponent) {
  (0, _inherits2["default"])(PageEditor, _PureComponent);

  var _super = _createSuper(PageEditor);

  function PageEditor(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PageEditor);
    _this = _super.call(this, props);
    var title = props.title,
        panelId = props.panelId,
        panelHeader = props.panelHeader,
        panelText = props.panelText;
    _this.state = {
      title: title,
      panelId: panelId,
      panelHeader: panelHeader,
      panelText: panelText
    };
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onClick = _this.onClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onUpdatePageId = _this.onUpdatePageId.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(PageEditor, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.state = {
        panelId: nextProps.panelId,
        panelHeader: nextProps.panelHeader,
        panelText: nextProps.panelText
      };
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      this.setState((0, _defineProperty2["default"])({}, event.target.name, event.target.value));

      switch (event.target.name) {
        case 'panelHeader':
          this.props.editPageHeader(this.props.currentQuestionPanelIndex, event.target.value);
          break;

        case 'panelText':
          this.props.editPageText(this.props.currentQuestionPanelIndex, event.target.value);
          break;

        default:
          break;
      }
    }
  }, {
    key: "onClick",
    value: function onClick(questionSetId) {
      var questionSetIndex = this.props.questionSets.findIndex(function (questionSet) {
        return questionSet.get('questionSetId') === questionSetId;
      });
      this.props.changeCurrentEditingField('questionSet', questionSetIndex);
    }
  }, {
    key: "onUpdatePageId",
    value: function onUpdatePageId() {
      var _this2 = this;

      var panelId = this.props.panelId;
      var formPanelIndex = this.props.formPanels.findIndex(function (formPanel) {
        return formPanel.get('panelId') === _this2.state.panelId;
      });

      if (formPanelIndex === -1) {
        this.props.editPageId(this.props.currentQuestionPanelIndex, this.state.panelId);
      } else {
        this.props.updateErrorMessage('Page ID already exists.  No update performed.');
        this.setState({
          panelId: panelId
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var questionSetsArray = this.props.currentQuestionSets.toJS();
      return [/*#__PURE__*/_react["default"].createElement("h3", null, "Question Editor"), /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "panelId"
      }, "Page ID"), /*#__PURE__*/_react["default"].createElement("div", {
        className: "input-group"
      }, /*#__PURE__*/_react["default"].createElement("input", {
        className: "form-control",
        id: "panelId",
        name: "panelId",
        onChange: this.onChange,
        placeholder: this.props.panelId,
        value: this.state.panelId
      }), /*#__PURE__*/_react["default"].createElement("div", {
        className: "input-group-append"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        onClick: this.onUpdatePageId,
        className: "btn btn-dark",
        title: "Click to update page title"
      }, "save")))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "panelHeader",
        name: "panelHeader",
        label: "Page Header",
        onChange: this.onChange,
        placeholder: this.props.panelHeader,
        value: this.state.panelHeader
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "panelText",
        name: "panelText",
        label: "Page Text",
        placeholder: this.props.panelText,
        onChange: this.onChange,
        value: this.state.panelText
      })), /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement(_FormMenu.AddQuestionSetButton, null)), questionSetsArray && questionSetsArray.length > 0 && /*#__PURE__*/_react["default"].createElement("div", {
        className: "form-group"
      }, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "questionSetList"
      }, "Question Sets"), /*#__PURE__*/_react["default"].createElement("div", {
        id: "questionSetList"
      }, questionSetsArray.map(function (questionSet, index) {
        return /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          key: "questionSet-".concat(index),
          variant: "link",
          onClick: function onClick() {
            return _this3.onClick(questionSet.questionSetId);
          }
        }, questionSet.questionSetId);
      }))))];
    }
  }]);
  return PageEditor;
}(_react.PureComponent);

PageEditor.propTypes = {
  editPageId: _propTypes["default"].func.isRequired,
  editPageHeader: _propTypes["default"].func.isRequired,
  editPageText: _propTypes["default"].func.isRequired,
  updateErrorMessage: _propTypes["default"].func.isRequired,
  changeCurrentEditingField: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string,
  panelId: _propTypes["default"].string,
  panelHeader: _propTypes["default"].string,
  panelText: _propTypes["default"].string,
  currentQuestionSets: _propTypes["default"].object,
  questionSets: _propTypes["default"].object,
  currentQuestionPanelIndex: _propTypes["default"].number.isRequired,
  formPanels: _propTypes["default"].object.isRequired
};
PageEditor.defaultProps = {
  currentQuestionPanelIndex: 0,
  title: '',
  panelId: '',
  panelHeader: '',
  panelText: '',
  questionSets: (0, _immutable.fromJS)({}),
  currentQuestionSets: (0, _immutable.fromJS)({}),
  formPanels: (0, _immutable.fromJS)({})
};

function mapStateToProps(state, ownProps) {
  return {
    title: state.getIn(['form', 'title']),
    panelId: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelId']),
    panelHeader: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelHeader']),
    panelText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelText']),
    currentQuestionSets: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'questionSets']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
    currentQuestionPanelIndex: state.getIn(['form', 'currentQuestionPanelIndex']),
    formPanels: state.getIn(['form', 'schema', 'formPanels'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  editPageId: _winterfellFormBuilderActions.editPageId,
  editPageHeader: _winterfellFormBuilderActions.editPageHeader,
  editPageText: _winterfellFormBuilderActions.editPageText,
  changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField,
  updateErrorMessage: _winterfellFormBuilderActions.updateErrorMessage,
  clearErrorMessage: _winterfellFormBuilderActions.clearErrorMessage
})(PageEditor);

exports["default"] = _default;