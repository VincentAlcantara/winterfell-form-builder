'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _winterfellFormBuilderActions = require('../actions/winterfellFormBuilderActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeView = function (_Component) {
  (0, _inherits3.default)(TreeView, _Component);

  function TreeView(props) {
    (0, _classCallCheck3.default)(this, TreeView);

    var _this = (0, _possibleConstructorReturn3.default)(this, (TreeView.__proto__ || (0, _getPrototypeOf2.default)(TreeView)).call(this, props));

    _this.state = {
      showModal: false,
      questionId: '',
      question: '',
      questionText: '',
      questionType: ''
    };

    _this.getQuestionPanels = _this.getQuestionPanels.bind(_this);
    _this.getQuestionSets = _this.getQuestionSets.bind(_this);
    _this.onQuestionPanelClick = _this.onQuestionPanelClick.bind(_this);
    _this.onQuestionSetClick = _this.onQuestionSetClick.bind(_this);
    _this.onQuestionClick = _this.onQuestionClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(TreeView, [{
    key: 'onQuestionPanelClick',
    value: function onQuestionPanelClick(questionPanelId) {
      this.props.changeCurrentEditingField('page');
      this.props.goToPage(questionPanelId);
    }
  }, {
    key: 'onQuestionSetClick',
    value: function onQuestionSetClick(questionPanelId, questionSetIndex) {
      this.props.goToPage(questionPanelId);
      this.props.changeCurrentEditingField('questionSet', questionSetIndex);
    }
  }, {
    key: 'onQuestionClick',
    value: function onQuestionClick(questionPanelId, questionSetIndex, questionIndex) {
      this.props.goToPage(questionPanelId);
      this.props.changeCurrentEditingField('question', questionSetIndex, questionIndex);
    }
  }, {
    key: 'getQuestions',
    value: function getQuestions(questionSetId, questionPanelId) {
      var _this2 = this;

      var questionSetIndex = this.props.questionSets.findIndex(function (questionSet) {
        return questionSet.get('questionSetId') === questionSetId;
      });
      var questionsArray = questionSetIndex !== -1 && this.props.questionSets.getIn([questionSetIndex, 'questions']).toJS();
      return questionsArray.map(function (question, index) {
        return _react2.default.createElement(
          'div',
          { key: questionPanelId + '-' + questionSetId + '-' + index },
          '\xA0\xA0\xA0+\xA0',
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'btn btn-link',
              onClick: function onClick() {
                return _this2.onQuestionClick(questionPanelId, questionSetIndex, index);
              }
            },
            'Question: ',
            question.questionId
          )
        );
      });
    }
  }, {
    key: 'getQuestionSets',
    value: function getQuestionSets(questionSets, questionPanelId) {
      var _this3 = this;

      return questionSets && questionSets.map(function (questionSet, index) {
        return _react2.default.createElement(
          'div',
          { key: questionPanelId + '-' + index },
          '\xA0+\xA0',
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              href: '#',
              className: 'btn btn-link',
              onClick: function onClick() {
                return _this3.onQuestionSetClick(questionPanelId, index);
              }
            },
            'Set: ',
            questionSet.questionSetId
          ),
          _this3.getQuestions(questionSet.questionSetId, questionPanelId)
        );
      });
    }
  }, {
    key: 'getQuestionPanels',
    value: function getQuestionPanels() {
      var _this4 = this;

      var questionPanels = this.props.questionPanels;

      var questionPanelsArray = questionPanels && questionPanels.toJS();
      return questionPanelsArray && questionPanelsArray.map(function (questionPanel, index) {
        return _react2.default.createElement(
          'div',
          { key: index },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              href: '#',
              className: 'btn btn-link',
              onClick: function onClick() {
                return _this4.onQuestionPanelClick(questionPanel.panelId);
              }
            },
            'Page: ',
            questionPanel.panelId
          ),
          _this4.getQuestionSets(questionPanel.questionSets, questionPanel.panelId)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'winterfell-form-builder-tree-view' },
        this.getQuestionPanels()
      );
    }
  }]);
  return TreeView;
}(_react.Component);

TreeView.propTypes = {
  questionPanels: _propTypes2.default.object,
  questionSets: _propTypes2.default.object,
  changeCurrentEditingField: _propTypes2.default.func.isRequired,
  goToPage: _propTypes2.default.func.isRequired
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

var _default = (0, _reactRedux.connect)(mapStateToProps, { goToPage: _winterfellFormBuilderActions.goToPage, changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField })(TreeView);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(TreeView, 'TreeView', 'src/components/TreeView.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/TreeView.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/TreeView.js');
}();

;