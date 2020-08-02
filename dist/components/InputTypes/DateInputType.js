"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.DateInput = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _moment = _interopRequireDefault(require("moment"));

var _constants = require("../../common/constants");

require("react-datepicker/dist/react-datepicker-cssmodules.css");

var DateInput = function DateInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      onBlur = _ref.onBlur,
      name = _ref.name,
      id = _ref.id,
      classes = _ref.classes,
      _onFocus = _ref.onFocus,
      labelId = _ref.labelId;

  var _useState = (0, _react.useState)(value && value.type ? (0, _moment["default"])(value.value).toDate() : (0, _moment["default"])().toDate()),
      _useState2 = (0, _slicedToArray2["default"])(_useState, 2),
      selectedDate = _useState2[0],
      setSelectedDate = _useState2[1];

  var handleChange = function handleChange(date) {
    setSelectedDate(date);
    onChange({
      type: "date",
      value: (0, _moment["default"])(date)
    });
  };

  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(_reactDatepicker["default"], {
    name: name,
    id: id,
    "aria-labelledby": labelId,
    className: classes.input,
    selected: selectedDate,
    onSelect: onBlur,
    onFocus: function onFocus() {
      return _onFocus ? _onFocus(id) : null;
    },
    onChange: function onChange(date) {
      return handleChange(date);
    },
    dateFormat: _constants.DATE_FORMAT,
    peekNextMonth: true,
    showMonthDropdown: true,
    showYearDropdown: true
  }));
};

exports.DateInput = DateInput;
var _default = DateInput;
exports["default"] = _default;