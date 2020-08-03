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

var _reactRedux = require("react-redux");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _winterfellFormBuilderActions = require("../../actions/winterfellFormBuilderActions");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var UploadJSONButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(UploadJSONButton, _Component);

  var _super = _createSuper(UploadJSONButton);

  function UploadJSONButton(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, UploadJSONButton);
    _this = _super.call(this, props);
    _this.state = {
      showModal: false,
      schema: '',
      fileName: ''
    };
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onJSONUpload = _this.onJSONUpload.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(UploadJSONButton, [{
    key: "onChange",
    value: function onChange(event) {
      var _this2 = this;

      event.preventDefault();
      var file = event.target.files[0];
      var reader = new FileReader();

      reader.onload = function (e) {
        var contents = e.target.result;

        _this2.setState({
          schema: JSON.parse(contents),
          fileName: file.name
        });
      };

      reader.readAsText(file);
    }
  }, {
    key: "onJSONUpload",
    value: function onJSONUpload(e) {
      e.preventDefault();
      this.props.uploadJSON(this.state.schema, this.state.fileName);
      this.setState({
        showModal: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return [/*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-block btn-dark",
        "data-toggle": "modal",
        "data-target": "#uploadJSON",
        key: "uploadJSON",
        title: "Upload Winterfell form"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "material-icons"
      }, "archive"), /*#__PURE__*/_react["default"].createElement("span", {
        className: "icon-menu"
      }, "Import")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal fade",
        id: "uploadJSON",
        tabIndex: "-1",
        key: "uploadJSONModal"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-dialog bg-white"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-title"
      }, "Upload a form")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-body"
      }, "Upload an existing Winterfell form.", /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("label", {
        htmlFor: "jsonUpload"
      }), /*#__PURE__*/_react["default"].createElement("input", {
        name: "schema",
        id: "jsonUpload",
        type: "file",
        onChange: function onChange(e) {
          return _this3.onChange(e);
        }
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-footer"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-danger",
        "data-dismiss": "modal"
      }, "Cancel"), /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-dark",
        onClick: this.onJSONUpload
      }, "Continue")))))];
    }
  }]);
  return UploadJSONButton;
}(_react.Component);

UploadJSONButton.propTypes = {
  uploadJSON: _propTypes["default"].func.isRequired
};

function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'currentForm', 'title'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  uploadJSON: _winterfellFormBuilderActions.uploadJSON
})(UploadJSONButton);

exports["default"] = _default;