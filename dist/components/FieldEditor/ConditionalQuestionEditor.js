'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

var _immutable = require('immutable');

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

var _FieldGroup = require('../InputTypes/FieldGroup');

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

var _FormMenu = require('../FormMenu/');

var _SelectInput = require('../InputTypes/SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

var _ConditionalQuestionOptionEditor = require('./ConditionalQuestionOptionEditor');

var _ConditionalQuestionOptionEditor2 = _interopRequireDefault(_ConditionalQuestionOptionEditor);

var _constants = require('../../common/constants');

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
    _this.onSelect = _this.onSelect.bind(_this);
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

      var copyConditionalQuestions = (0, _assign2.default)([], this.state.conditionalQuestions);
      copyConditionalQuestions[index][name] = value;
      this.setState({ conditionalQuestions: copyConditionalQuestions });
    }
  }, {
    key: 'onSelect',
    value: function onSelect(questionType, index) {
      var copyConditionalQuestions = (0, _assign2.default)([], this.state.conditionalQuestions);
      copyConditionalQuestions[index].input.type = questionType;
      this.setState({ conditionalQuestions: copyConditionalQuestions });
    }
  }, {
    key: 'onSaveConditionalQuestion',
    value: function onSaveConditionalQuestion(conditionalQuestionIndex, path) {
      var _state$conditionalQue = this.state.conditionalQuestions[conditionalQuestionIndex],
          questionId = _state$conditionalQue.questionId,
          question = _state$conditionalQue.question,
          text = _state$conditionalQue.text,
          postText = _state$conditionalQue.postText,
          input = _state$conditionalQue.input;

      var newPath = (0, _assign2.default)([], path);
      newPath.push('conditionalQuestions');
      newPath.push(conditionalQuestionIndex);
      this.props.saveConditionalQuestion(newPath, questionId, question, text, postText, input.type, input.options);
    }
  }, {
    key: 'getConditionalQuestions',
    value: function getConditionalQuestions() {
      var _this2 = this;

      return this.state.conditionalQuestions.map(function (conditionalQuestion, ix) {
        var questionId = conditionalQuestion.questionId,
            question = conditionalQuestion.question,
            text = conditionalQuestion.text,
            postText = conditionalQuestion.postText,
            input = conditionalQuestion.input;

        var conditionalPath = (0, _assign2.default)([], _this2.props.parentPath);
        conditionalPath.push('conditionalQuestions');
        conditionalPath.push(ix);
        return (// return #2
          _react2.default.createElement(
            'div',
            { key: ix },
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_FieldGroup2.default, {
                id: 'questionId',
                name: 'questionId',
                label: 'Conditional Question ID ' + (ix + 1) + ':',
                onChange: function onChange(e) {
                  return _this2.onChange(e, ix);
                },
                value: questionId
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_FieldGroup2.default, {
                id: 'question',
                name: 'question',
                label: 'Conditional Question ' + (ix + 1) + ':',
                onChange: function onChange(e) {
                  return _this2.onChange(e, ix);
                },
                value: question
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_FieldGroup2.default, {
                id: 'text',
                name: 'text',
                label: 'Conditional Question Pre Text ' + (ix + 1) + ':',
                onChange: function onChange(e) {
                  return _this2.onChange(e, ix);
                },
                value: text
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(_FieldGroup2.default, {
                id: 'postText',
                name: 'postText',
                label: 'Conditional Question Post Text ' + (ix + 1) + ':',
                onChange: function onChange(e) {
                  return _this2.onChange(e, ix);
                },
                value: postText
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'form-group' },
              _react2.default.createElement(
                'label',
                { htmlFor: 'questionInputType' },
                'Question Type'
              ),
              _react2.default.createElement(_SelectInput2.default, {
                id: 'questionInputType',
                labelId: 'questionInputType',
                options: _constants.INPUT_TYPE_OPTIONS,
                onSelect: function onSelect(e) {
                  return _this2.onSelect(e, ix);
                },
                displayValue: input.type
              })
            ),
            (input.type === 'checkboxOptionsInput' || input.type === 'selectInput' || input.type === 'radioOptionsInput') && _react2.default.createElement(_ConditionalQuestionOptionEditor2.default, {
              questionInputOptions: input.options,
              questionId: questionId,
              currentQuestionPanelIndex: _this2.props.currentQuestionPanelIndex,
              currentQuestionSetIndex: _this2.props.currentQuestionSetIndex,
              path: conditionalPath
            }),
            _react2.default.createElement('br', null),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(_FormMenu.DeleteConditionalQuestionButton, {
                path: conditionalPath,
                deleteConditionalQuestion: _this2.props.deleteConditionalQuestion
              }),
              _react2.default.createElement(
                'button',
                {
                  type: 'button',
                  className: 'btn btn-warning',
                  title: 'save this conditional question',
                  onClick: function onClick() {
                    return _this2.onSaveConditionalQuestion(ix, _this2.props.parentPath);
                  }
                },
                'save'
              )
            ),
            _react2.default.createElement('br', null)
          )
        ); // end of return #2
      }); // end of return #1
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'row winterfell-form-builder-conditional-questions alert alert-info' },
        _react2.default.createElement(
          'div',
          { className: 'col' },
          _react2.default.createElement(
            'h6',
            null,
            'Option \'' + this.props.parentOptionText + '\' Conditional Questions:'
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
          this.props.conditionalQuestions && this.getConditionalQuestions()
        ),
        _react2.default.createElement(
          'div',
          { className: 'col' },
          _react2.default.createElement('br', null),
          _react2.default.createElement(_FormMenu.AddConditionalQuestionButton, {
            path: this.props.parentPath
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
  parentOptionText: _propTypes2.default.string.isRequired,
  currentQuestionPanelIndex: _propTypes2.default.number.isRequired,
  saveConditionalQuestion: _propTypes2.default.func.isRequired,
  deleteConditionalQuestion: _propTypes2.default.func.isRequired,
  parentPath: _propTypes2.default.array.isRequired
};

ConditionalQuestionEditor.defaultProps = {
  conditionalQuestions: (0, _immutable.fromJS)([])
};

function mapStateToProps(state, ownProps) {
  return {
    conditionalQuestions: state.getIn(['form'].concat((0, _toConsumableArray3.default)(ownProps.parentPath), ['conditionalQuestions']))
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