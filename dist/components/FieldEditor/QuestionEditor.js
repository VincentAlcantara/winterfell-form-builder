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

var QuestionEditor = function (_Component) {
  (0, _inherits3.default)(QuestionEditor, _Component);

  function QuestionEditor(props) {
    (0, _classCallCheck3.default)(this, QuestionEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (QuestionEditor.__proto__ || (0, _getPrototypeOf2.default)(QuestionEditor)).call(this, props));

    var questionId = props.questionId,
        question = props.question,
        questionText = props.questionText,
        questionPostText = props.questionPostText,
        questionInputType = props.questionInputType,
        questionInputOptions = props.questionInputOptions;


    _this.state = {
      questionId: questionId,
      question: question,
      questionText: questionText,
      questionPostText: questionPostText,
      questionInputType: questionInputType,
      questionInputOptions: questionInputOptions
    };

    _this.onChange = _this.onChange.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(QuestionEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.state = {
        questionId: nextProps.questionId,
        question: nextProps.question,
        questionText: nextProps.questionText,
        questionPostText: nextProps.questionPostText
      };
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;
      var _props = this.props,
          currentQuestionSetIndex = _props.currentQuestionSetIndex,
          currentQuestionIndex = _props.currentQuestionIndex;

      this.setState((0, _defineProperty3.default)({}, name, value));
      switch (name) {
        case 'questionId':
          this.props.editQuestionId(currentQuestionSetIndex, currentQuestionIndex, value);
          break;
        case 'question':
          this.props.editQuestion(currentQuestionSetIndex, currentQuestionIndex, value);
          break;
        case 'questionText':
          this.props.editQuestionText(currentQuestionSetIndex, currentQuestionIndex, value);
          break;
        case 'questionPostText':
          this.props.editQuestionPostText(currentQuestionSetIndex, currentQuestionIndex, value);
          break;
        default:
      }
    }
  }, {
    key: 'getQuestionOptions',
    value: function getQuestionOptions() {
      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        null,
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                'Options'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Values'
              )
            ),
            this.props.questionInputOptions && this.props.questionInputOptions.toJS().map(function (option, ix) {
              return _react2.default.createElement(
                'tr',
                { key: option.text + '-' + ix },
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(_reactBootstrap.FormControl, {
                    type: 'text',
                    value: option.text
                  })
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(_reactBootstrap.FormControl, {
                    type: 'text',
                    value: option.value
                  })
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { className: 'btn-success' },
                    '+'
                  )
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Button,
                    { className: 'btn-danger' },
                    '-'
                  )
                )
              );
            })
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          questionId = _props2.questionId,
          question = _props2.question,
          questionText = _props2.questionText,
          questionPostText = _props2.questionPostText,
          questionInputType = _props2.questionInputType,
          questionInputOptions = _props2.questionInputOptions;

      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_FieldGroup2.default, {
            id: 'questionId',
            name: 'questionId',
            label: 'Question ID',
            onChange: this.onChange,
            placeholder: questionId,
            value: this.state.questionId
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_FieldGroup2.default, {
            id: 'question',
            name: 'question',
            label: 'Question',
            onChange: this.onChange,
            placeholder: question,
            value: this.state.question
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_FieldGroup2.default, {
            id: 'questionText',
            name: 'questionText',
            label: 'Question Text',
            placeholder: questionText,
            onChange: this.onChange,
            value: this.state.questionText
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_FieldGroup2.default, {
            id: 'questionPostText',
            name: 'questionPostText',
            label: 'Question Post Text',
            placeholder: questionPostText,
            onChange: this.onChange,
            value: this.state.questionPostText
          })
        ),
        (questionInputType === 'checkboxOptionsInput' || questionInputType === 'selectInput' || questionInputType === 'radioOptionsInput') && questionInputOptions && this.getQuestionOptions()
      );
    }
  }]);
  return QuestionEditor;
}(_react.Component);

QuestionEditor.propTypes = {
  editQuestionId: _propTypes2.default.func.isRequired,
  editQuestion: _propTypes2.default.func.isRequired,
  editQuestionText: _propTypes2.default.func.isRequired,
  editQuestionPostText: _propTypes2.default.func.isRequired,
  questionId: _propTypes2.default.string,
  question: _propTypes2.default.string,
  questionText: _propTypes2.default.string,
  questionPostText: _propTypes2.default.string,
  questionInputType: _propTypes2.default.string,
  questionInputOptions: _propTypes2.default.object,
  currentQuestionSetIndex: _propTypes2.default.number.isRequired,
  currentQuestionIndex: _propTypes2.default.number.isRequired
};
QuestionEditor.defaultProps = {
  questionId: '',
  question: '',
  questionText: '',
  questionPostText: '',
  questionInputType: '',
  questionInputOptions: []
};


function mapStateToProps(state, ownProps) {
  return {
    questionId: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'questionId']),
    question: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'question']),
    questionText: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'text']),
    questionPostText: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'postText']),
    questionInputType: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'input', 'type']),
    questionInputOptions: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'input', 'options']),
    currentQuestionSetIndex: ownProps.currentQuestionSetIndex,
    currentQuestionIndex: ownProps.currentQuestionIndex
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { editQuestionId: _winterfellFormBuilderActions.editQuestionId, editQuestion: _winterfellFormBuilderActions.editQuestion, editQuestionText: _winterfellFormBuilderActions.editQuestionText, editQuestionPostText: _winterfellFormBuilderActions.editQuestionPostText })(QuestionEditor);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(QuestionEditor, 'QuestionEditor', 'src/components/FieldEditor/QuestionEditor.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FieldEditor/QuestionEditor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FieldEditor/QuestionEditor.js');
}();

;