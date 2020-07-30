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

var _jsFileDownload = _interopRequireDefault(require("js-file-download"));

var _winterfellFormBuilderActions = require("../../actions/winterfellFormBuilderActions");

var _FieldGroup = _interopRequireDefault(require("../InputTypes/FieldGroup"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var SaveFormButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(SaveFormButton, _Component);

  var _super = _createSuper(SaveFormButton);

  function SaveFormButton(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, SaveFormButton);
    _this = _super.call(this, props);
    _this.state = {
      showModal: false,
      filename: _this.props.title
    };
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onJSONSave = _this.onJSONSave.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(SaveFormButton, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.state = {
        filename: nextProps.title
      };
    }
  }, {
    key: "onChange",
    value: function onChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty2["default"])({}, event.target.name, event.target.value));
    }
  }, {
    key: "onJSONSave",
    value: function onJSONSave(e) {
      e.preventDefault();
      (0, _jsFileDownload["default"])(JSON.stringify(this.props.schema.toJS()), this.state.filename);
      this.props.saveJSON(this.props.schema.toJS(), this.state.filename);
      this.setState({
        showModal: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      return [/*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-block btn-dark",
        "data-toggle": "modal",
        "data-target": "#uploadButton",
        key: "uploadButton",
        title: "Export",
        disabled: !this.props.schema || this.props.schema === 'null'
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "material-icons"
      }, "unarchive"), /*#__PURE__*/_react["default"].createElement("span", {
        className: "icon-menu"
      }, "Export")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal fade",
        id: "uploadButton",
        tabIndex: "-1",
        key: "uploadButtonModal"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-dialog bg-white"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-title"
      }, "Export Winterfell Form")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-body"
      }, /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement(_FieldGroup["default"], {
        id: "filename",
        name: "filename",
        label: "Filename",
        onChange: this.onChange,
        placeholder: this.props.title,
        value: this.state.filename
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-footer"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-danger",
        "data-dismiss": "modal"
      }, "Cancel"), /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-dark",
        onClick: this.onJSONSave,
        disabled: !this.state.filename,
        "data-dismiss": "modal"
      }, "Continue")))))];
    }
  }]);
  return SaveFormButton;
}(_react.Component);

SaveFormButton.propTypes = {
  saveJSON: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string.isRequired,
  schema: _propTypes["default"].object
};
SaveFormButton.defaultProps = {
  schema: null
};

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
    schema: state.getIn(['form', 'schema'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  saveJSON: _winterfellFormBuilderActions.saveJSON
})(SaveFormButton);

exports["default"] = _default;