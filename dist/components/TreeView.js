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

var _winterfellFormBuilderActions = require("../actions/winterfellFormBuilderActions");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var TreeView = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(TreeView, _Component);

  var _super = _createSuper(TreeView);

  function TreeView(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TreeView);
    _this = _super.call(this, props);
    _this.state = {
      showModal: false,
      questionId: '',
      question: '',
      questionText: '',
      questionType: ''
    };
    _this.getQuestionPanels = _this.getQuestionPanels.bind((0, _assertThisInitialized2["default"])(_this));
    _this.getQuestionSets = _this.getQuestionSets.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onQuestionPanelClick = _this.onQuestionPanelClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onQuestionSetClick = _this.onQuestionSetClick.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onQuestionClick = _this.onQuestionClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(TreeView, [{
    key: "onQuestionPanelClick",
    value: function onQuestionPanelClick(questionPanelId) {
      this.props.changeCurrentEditingField('page');
      this.props.goToPage(questionPanelId);
    }
  }, {
    key: "onQuestionSetClick",
    value: function onQuestionSetClick(questionPanelId, questionSetIndex) {
      this.props.goToPage(questionPanelId);
      this.props.changeCurrentEditingField('questionSet', questionSetIndex);
    }
  }, {
    key: "onQuestionClick",
    value: function onQuestionClick(questionPanelId, questionSetIndex, questionIndex) {
      this.props.goToPage(questionPanelId);
      this.props.changeCurrentEditingField('question', questionSetIndex, questionIndex);
    }
  }, {
    key: "getQuestions",
    value: function getQuestions(questionSetId, questionPanelId) {
      var _this2 = this;

      var questionSetIndex = this.props.questionSets.findIndex(function (questionSet) {
        return questionSet.get('questionSetId') === questionSetId;
      });
      var questionsArray = questionSetIndex !== -1 && this.props.questionSets.getIn([questionSetIndex, 'questions']).toJS();
      return questionsArray.map(function (question, index) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: "".concat(questionPanelId, "-").concat(questionSetId, "-").concat(index)
        }, "\xA0\xA0\xA0+\xA0", /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          className: "btn btn-link",
          onClick: function onClick() {
            return _this2.onQuestionClick(questionPanelId, questionSetIndex, index);
          }
        }, question.questionId));
      });
    }
  }, {
    key: "getQuestionSets",
    value: function getQuestionSets(questionSets, questionPanelId) {
      var _this3 = this;

      return questionSets && questionSets.map(function (questionSet, index) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: "".concat(questionPanelId, "-").concat(index)
        }, "\xA0\xA0+\xA0", /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          href: "#",
          className: "btn btn-link",
          onClick: function onClick() {
            return _this3.onQuestionSetClick(questionPanelId, index);
          }
        }, questionSet.questionSetId), _this3.getQuestions(questionSet.questionSetId, questionPanelId));
      });
    }
  }, {
    key: "getQuestionPanels",
    value: function getQuestionPanels() {
      var _this4 = this;

      var questionPanels = this.props.questionPanels;
      var questionPanelsArray = questionPanels && questionPanels.toJS();
      return questionPanelsArray && questionPanelsArray.map(function (questionPanel, index) {
        return /*#__PURE__*/_react["default"].createElement("div", {
          key: index
        }, /*#__PURE__*/_react["default"].createElement("button", {
          type: "button",
          href: "#",
          className: "btn btn-link",
          onClick: function onClick() {
            return _this4.onQuestionPanelClick(questionPanel.panelId);
          }
        }, /*#__PURE__*/_react["default"].createElement("i", {
          className: "material-icons"
        }, "insert_drive_file"), questionPanel.panelId), _this4.getQuestionSets(questionPanel.questionSets, questionPanel.panelId));
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react["default"].createElement("div", {
        className: "winterfell-form-builder-tree-view"
      }, this.getQuestionPanels());
    }
  }]);
  return TreeView;
}(_react.Component);

TreeView.propTypes = {
  questionPanels: _propTypes["default"].object,
  questionSets: _propTypes["default"].object,
  changeCurrentEditingField: _propTypes["default"].func.isRequired,
  goToPage: _propTypes["default"].func.isRequired
};
TreeView.defaultProps = {
  questionPanels: null,
  questionSets: null
};

function mapStateToProps(state, ownProps) {
  return {
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    questionOptionIndex: ownProps.questionOptionIndex,
    questionPanels: state.getIn(['form', 'schema', 'questionPanels']),
    questionSets: state.getIn(['form', 'schema', 'questionSets'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  goToPage: _winterfellFormBuilderActions.goToPage,
  changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField
})(TreeView);

exports["default"] = _default;