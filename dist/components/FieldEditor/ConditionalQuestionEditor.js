'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _immutable = require('immutable');

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

var _FieldGroup = require('../InputTypes/FieldGroup');

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

var _FormMenu = require('../FormMenu/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConditionalQuestionEditor = function (_PureComponent) {
  (0, _inherits3.default)(ConditionalQuestionEditor, _PureComponent);

  function ConditionalQuestionEditor(props) {
    (0, _classCallCheck3.default)(this, ConditionalQuestionEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConditionalQuestionEditor.__proto__ || (0, _getPrototypeOf2.default)(ConditionalQuestionEditor)).call(this, props));

    var conditionalQuestions = props.conditionalQuestions;


    _this.state = {
      conditionalQuestions: conditionalQuestions.toJS()
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSaveConditionalQuestion = _this.onSaveConditionalQuestion.bind(_this);
    _this.onDeleteConditionalQuestion = _this.onDeleteConditionalQuestion.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ConditionalQuestionEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        conditionalQuestions: nextProps.conditionalQuestions.toJS()
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(event, index) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      var copyConditionalQuestions = (0, _assign2.default)({}, this.state.conditionalQuestions);
      copyConditionalQuestions[index][name] = value;
      this.setState({ conditionalQuestions: copyConditionalQuestions });
    }
  }, {
    key: 'onSaveConditionalQuestion',
    value: function onSaveConditionalQuestion(conditionalQuestionIndex) {
      var _props = this.props,
          currentQuestionSetIndex = _props.currentQuestionSetIndex,
          currentQuestionIndex = _props.currentQuestionIndex,
          questionOptionIndex = _props.questionOptionIndex;
      var _state$conditionalQue = this.state.conditionalQuestions[conditionalQuestionIndex],
          questionId = _state$conditionalQue.questionId,
          question = _state$conditionalQue.question,
          text = _state$conditionalQue.text,
          postText = _state$conditionalQue.postText,
          type = _state$conditionalQue.type;


      this.props.saveConditionalQuestion(currentQuestionSetIndex, currentQuestionIndex, questionOptionIndex, conditionalQuestionIndex, questionId, question, text, postText, type);
    }
  }, {
    key: 'onDeleteConditionalQuestion',
    value: function onDeleteConditionalQuestion(conditionalQuestionIndex) {
      var _props2 = this.props,
          currentQuestionSetIndex = _props2.currentQuestionSetIndex,
          currentQuestionIndex = _props2.currentQuestionIndex,
          questionOptionIndex = _props2.questionOptionIndex;


      this.props.deleteConditionalQuestion(currentQuestionSetIndex, currentQuestionIndex, questionOptionIndex, conditionalQuestionIndex);
    }
  }, {
    key: 'getConditionalQuestions',
    value: function getConditionalQuestions() {
      var _this2 = this;

      return this.props.conditionalQuestions.map(function (conditionalQuestion, ix) {
        return _react2.default.createElement(
          'div',
          { key: ix },
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_FieldGroup2.default, {
              id: 'questionId',
              name: 'questionId',
              label: 'Conditional Question ID ' + (ix + 1) + ':',
              onChange: function onChange(e) {
                return _this2.onChange(e, ix);
              },
              value: _this2.state.conditionalQuestions[ix].questionId
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_FieldGroup2.default, {
              id: 'question',
              name: 'question',
              label: 'Conditional Question ' + (ix + 1) + ':',
              onChange: function onChange(e) {
                return _this2.onChange(e, ix);
              },
              value: _this2.state.conditionalQuestions[ix].question
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_FieldGroup2.default, {
              id: 'text',
              name: 'text',
              label: 'Conditional Question Pre Text ' + (ix + 1) + ':',
              onChange: function onChange(e) {
                return _this2.onChange(e, ix);
              },
              value: _this2.state.conditionalQuestions[ix].text
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_FieldGroup2.default, {
              id: 'postText',
              name: 'postText',
              label: 'Conditional Question Post Text ' + (ix + 1) + ':',
              onChange: function onChange(e) {
                return _this2.onChange(e, ix);
              },
              value: _this2.state.conditionalQuestions[ix].postText
            })
          ),
          _react2.default.createElement('br', null),
          _react2.default.createElement('br', null),
          _react2.default.createElement(
            _reactBootstrap.ButtonGroup,
            null,
            _react2.default.createElement(_FormMenu.DeleteConditionalQuestionButton, {
              currentQuestionSetIndex: _this2.props.currentQuestionSetIndex,
              currentQuestionIndex: _this2.props.currentQuestionIndex,
              questionOptionIndex: _this2.props.questionOptionIndex,
              conditionalQuestionIndex: ix
            }),
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                className: 'btn btn-warning',
                title: 'save this conditional question',
                onClick: function onClick() {
                  return _this2.onSaveConditionalQuestion(ix);
                }
              },
              'save'
            )
          ),
          _react2.default.createElement('br', null)
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Row,
        { className: 'winterfell-form-builder-conditional-questions alert-info' },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          _react2.default.createElement(
            'h6',
            null,
            'Option \'' + this.props.text + '\' Conditional Questions:'
          ),
          _react2.default.createElement(
            'h6',
            null,
            _react2.default.createElement(
              'i',
              null,
              'Display these questions if this option is selected'
            )
          ),
          this.getConditionalQuestions()
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          _react2.default.createElement('br', null),
          _react2.default.createElement(_FormMenu.AddConditionalQuestionButton, {
            currentQuestionSetIndex: this.props.currentQuestionSetIndex,
            currentQuestionIndex: this.props.currentQuestionIndex,
            questionOptionIndex: this.props.questionOptionIndex
          }),
          _react2.default.createElement('br', null)
        )
      );
    }
  }]);
  return ConditionalQuestionEditor;
}(_react.PureComponent);

ConditionalQuestionEditor.propTypes = {
  conditionalQuestions: _propTypes2.default.object,
  currentQuestionSetIndex: _propTypes2.default.number.isRequired,
  text: _propTypes2.default.string.isRequired,
  currentQuestionIndex: _propTypes2.default.number.isRequired,
  questionOptionIndex: _propTypes2.default.number.isRequired,
  saveConditionalQuestion: _propTypes2.default.func.isRequired,
  deleteConditionalQuestion: _propTypes2.default.func.isRequired
};
ConditionalQuestionEditor.defaultProps = {
  conditionalQuestions: (0, _immutable.fromJS)([])
};


function mapStateToProps(state, ownProps) {
  return {
    conditionalQuestions: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'input', 'options', ownProps.questionOptionIndex, 'conditionalQuestions']),
    text: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'input', 'options', ownProps.questionOptionIndex, 'text'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { saveConditionalQuestion: _winterfellFormBuilderActions.saveConditionalQuestion, deleteConditionalQuestion: _winterfellFormBuilderActions.deleteConditionalQuestion })(ConditionalQuestionEditor);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ConditionalQuestionEditor, 'ConditionalQuestionEditor', 'src/components/FieldEditor/ConditionalQuestionEditor.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FieldEditor/ConditionalQuestionEditor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FieldEditor/ConditionalQuestionEditor.js');
}();

;