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

var _reactRedux = require("react-redux");

var _reactSortableHoc = require("react-sortable-hoc");

var _winterfellFormBuilderActions = require("../../actions/winterfellFormBuilderActions");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var PageSortSelector = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(PageSortSelector, _Component);

  var _super = _createSuper(PageSortSelector);

  function PageSortSelector(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, PageSortSelector);
    _this = _super.call(this, props);
    _this.state = {
      items: _this.props.formPanels.map(function (formPanel) {
        return formPanel.get('panelId');
      })
    };
    _this.onSortEnd = _this.onSortEnd.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(PageSortSelector, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      this.state = {
        items: nextProps.formPanels.map(function (formPanel) {
          return formPanel.get('panelId');
        })
      };
    }
  }, {
    key: "onSortEnd",
    value: function onSortEnd(_ref) {
      var oldIndex = _ref.oldIndex,
          newIndex = _ref.newIndex;
      if (oldIndex === newIndex) return;
      this.setState({
        items: (0, _reactSortableHoc.arrayMove)(this.state.items, oldIndex, newIndex)
      });
      this.props.movePage(oldIndex, newIndex);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var SortableItem = (0, _reactSortableHoc.SortableElement)(function (_ref2) {
        var value = _ref2.value;
        return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("a", {
          href: "",
          onClick: function onClick() {
            return _this2.props.changeCurrentEditingField('page');
          }
        }, value));
      });
      var SortableList = (0, _reactSortableHoc.SortableContainer)(function (_ref3) {
        var items = _ref3.items;
        return /*#__PURE__*/_react["default"].createElement("div", null, items.map(function (value, index) {
          return /*#__PURE__*/_react["default"].createElement(SortableItem, {
            key: "item-".concat(index),
            index: index,
            value: value
          });
        }));
      });
      return [/*#__PURE__*/_react["default"].createElement("h3", {
        htmlFor: "sortableList",
        key: "sortPagesLabel"
      }, "Page Sort"), /*#__PURE__*/_react["default"].createElement("p", null, "To sort, drag and drop the pages below to the desired order."), /*#__PURE__*/_react["default"].createElement(SortableList, {
        key: "sortingPages",
        items: this.state.items,
        onSortEnd: this.onSortEnd
      })];
    }
  }]);
  return PageSortSelector;
}(_react.Component);

PageSortSelector.propTypes = {
  movePage: _propTypes["default"].func.isRequired,
  changeCurrentEditingField: _propTypes["default"].func.isRequired,
  formPanels: _propTypes["default"].object.isRequired
};

function mapStateToProps(state) {
  return {
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  movePage: _winterfellFormBuilderActions.movePage,
  changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField
})(PageSortSelector);

exports["default"] = _default;