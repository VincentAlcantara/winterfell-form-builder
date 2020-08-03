"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function Pagination(props) {
  var currentPanelId = props.currentPanelId,
      formPanels = props.formPanels,
      _onClick = props.onClick;

  var getPages = function getPages() {
    return formPanels.map(function (panel, index) {
      return /*#__PURE__*/_react["default"].createElement("button", {
        key: "".concat(index, "-").concat(panel),
        onClick: function onClick() {
          _onClick(panel);
        },
        className: "dropdown-item"
      }, panel);
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    id: "pagination",
    title: currentPanelId || 'Select Page',
    className: "btn btn-secondary btn-block dropdown-toggle h-100 text-left",
    type: "button",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, "Quick link to page"), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown-menu",
    "aria-labelledby": "dropdownMenuButton"
  }, formPanels && getPages()));
}

Pagination.propTypes = {
  formPanels: _propTypes["default"].object.isRequired,
  currentPanelId: _propTypes["default"].string,
  onClick: _propTypes["default"].func.isRequired
};
Pagination.defaultProps = {
  currentPanelId: 'Select Page'
};
var _default = Pagination;
exports["default"] = _default;