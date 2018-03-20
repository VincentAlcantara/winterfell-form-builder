'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _reactBootstrap = require('react-bootstrap');

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

var _FieldGroup = require('../UI/FieldGroup');

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuestionSetEditor = function (_Component) {
  (0, _inherits3.default)(QuestionSetEditor, _Component);

  function QuestionSetEditor(props) {
    (0, _classCallCheck3.default)(this, QuestionSetEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (QuestionSetEditor.__proto__ || (0, _getPrototypeOf2.default)(QuestionSetEditor)).call(this, props));

    var questionSetId = props.questionSetId,
        questionSetHeader = props.questionSetHeader,
        questionSetText = props.questionSetText,
        questions = props.questions;


    _this.state = {
      questionSetId: questionSetId,
      questionSetHeader: questionSetHeader,
      questionSetText: questionSetText,
      questions: questions
    };

    _this.onChangeQuestionSetHeader = _this.onChangeQuestionSetHeader.bind(_this);
    _this.onChangeQuestionSetText = _this.onChangeQuestionSetText.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(QuestionSetEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var questionSetId = nextProps.questionSetId,
          questionSetHeader = nextProps.questionSetHeader,
          questionSetText = nextProps.questionSetText,
          questions = nextProps.questions;

      this.state = {
        questionSetId: questionSetId,
        questionSetHeader: questionSetHeader,
        questionSetText: questionSetText,
        questions: questions
      };
    }
  }, {
    key: 'onChangeQuestionSetHeader',
    value: function onChangeQuestionSetHeader(event) {
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
      this.props.editQuestionSetHeader(this.props.currentQuestionSetIndex, event.target.value);
    }
  }, {
    key: 'onChangeQuestionSetText',
    value: function onChangeQuestionSetText(event) {
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
      this.props.editQuestionSetText(this.props.currentQuestionSetIndex, event.target.value);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          currentQuestionSetIndex = _props.currentQuestionSetIndex,
          questions = _props.questions;

      var questionsArray = questions.toJS();
      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_FieldGroup2.default, {
            id: 'questionSetId',
            name: 'questionSetId',
            label: 'Question Set ID',
            onChange: this.onChangeQuestionSetId,
            placeholder: this.props.questionSetId,
            value: this.state.questionSetId
          }),
          _react2.default.createElement(_FieldGroup2.default, {
            id: 'questionSetHeader',
            name: 'questionSetHeader',
            label: 'Question Set Header',
            onChange: this.onChangeQuestionSetHeader,
            placeholder: this.props.questionSetHeader,
            value: this.state.questionSetHeader
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_FieldGroup2.default, {
            id: 'questionSetText',
            name: 'questionSetText',
            label: 'Question Set Text',
            placeholder: this.props.questionSetText,
            onChange: this.onChangeQuestionSetText,
            value: this.state.questionSetText
          })
        ),
        questionsArray && questionsArray.length > 0 && _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: 'questionList' },
            'Questions:'
          ),
          _react2.default.createElement(
            _reactBootstrap.Nav,
            { id: 'questionList', bsStyle: 'pills' },
            questionsArray.map(function (question, index) {
              return _react2.default.createElement(
                _reactBootstrap.NavItem,
                {
                  key: index,
                  onClick: function onClick() {
                    return _this2.props.changeCurrentEditingField('question', currentQuestionSetIndex, index);
                  }
                },
                question.questionId
              );
            })
          )
        )
      );
    }
  }]);
  return QuestionSetEditor;
}(_react.Component);

QuestionSetEditor.propTypes = {
  editQuestionSetHeader: _propTypes2.default.func.isRequired,
  editQuestionSetText: _propTypes2.default.func.isRequired,
  changeCurrentEditingField: _propTypes2.default.func.isRequired,
  questionSetId: _propTypes2.default.string,
  questionSetHeader: _propTypes2.default.string,
  questionSetText: _propTypes2.default.string,
  currentQuestionSetIndex: _propTypes2.default.number.isRequired,
  questions: _propTypes2.default.object
};
QuestionSetEditor.defaultProps = {
  currentQuestionSetIndex: 0,
  questionSetId: '',
  questionSetHeader: '',
  questionSetText: '',
  questions: []
};


function mapStateToProps(state, ownProps) {
  return {
    questionSetId: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questionSetId']),
    questionSetHeader: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questionSetHeader']),
    questionSetText: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questionSetText']),
    questions: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions']),
    currentQuestionSetIndex: ownProps.currentQuestionSetIndex
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  editQuestionSetHeader: _winterfellFormBuilderActions.editQuestionSetHeader,
  editQuestionSetText: _winterfellFormBuilderActions.editQuestionSetText,
  changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField })(QuestionSetEditor);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(QuestionSetEditor, 'QuestionSetEditor', 'src/components/FieldEditor/QuestionSetEditor.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FieldEditor/QuestionSetEditor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FieldEditor/QuestionSetEditor.js');
}();

;