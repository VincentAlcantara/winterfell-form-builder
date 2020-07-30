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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _winterfellFormBuilderActions = require("../../actions/winterfellFormBuilderActions");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var EditSchemaButton = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(EditSchemaButton, _Component);

  var _super = _createSuper(EditSchemaButton);

  function EditSchemaButton(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, EditSchemaButton);
    _this = _super.call(this, props);
    _this.state = {
      schema: _this.props.schema
    };
    _this.onChange = _this.onChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onFormUpdate = _this.onFormUpdate.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(EditSchemaButton, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.state = {
        schema: nextProps.schema
      };
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      this.setState({
        schema: JSON.parse(e.target.value)
      });
    }
  }, {
    key: "onFormUpdate",
    value: function onFormUpdate(e) {
      e.preventDefault();
      this.props.updateForm(this.state.schema);
    }
  }, {
    key: "render",
    value: function render() {
      return [/*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-block btn-dark",
        "data-toggle": "modal",
        "data-target": "#editSchema",
        key: "editSchema",
        title: "Edit Schema"
      }, /*#__PURE__*/_react["default"].createElement("i", {
        className: "material-icons"
      }, "view_agenda"), /*#__PURE__*/_react["default"].createElement("span", {
        className: "icon-menu"
      }, "Schema")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal fade",
        id: "editSchema",
        tabIndex: "-1",
        key: "editSchemaModal"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-dialog bg-white"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-content"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-header"
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-title"
      }, "Edit Schema")), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-body"
      }, /*#__PURE__*/_react["default"].createElement("form", null, /*#__PURE__*/_react["default"].createElement("textarea", {
        rows: "30",
        cols: "50",
        value: JSON.stringify(this.state.schema, undefined, 2),
        onChange: this.onChange
      }))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "modal-footer"
      }, /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-danger",
        "data-dismiss": "modal"
      }, "Cancel"), /*#__PURE__*/_react["default"].createElement("button", {
        className: "btn btn-dark",
        onClick: this.onFormUpdate,
        "data-dismiss": "modal"
      }, "Save changes")))))];
    }
  }]);
  return EditSchemaButton;
}(_react.Component);

(0, _defineProperty2["default"])(EditSchemaButton, "propTypes", {
  updateForm: _propTypes["default"].func.isRequired,
  schema: _propTypes["default"].object
});
(0, _defineProperty2["default"])(EditSchemaButton, "defaultProps", {
  schema: null
});
EditSchemaButton.propTypes = {
  updateForm: _propTypes["default"].func.isRequired
};
EditSchemaButton.defaultProps = {
  schema: null
};

function mapStateToProps(state) {
  return {
    schema: state.getIn(['form', 'schema'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  updateForm: _winterfellFormBuilderActions.updateForm
})(EditSchemaButton);

exports["default"] = _default;