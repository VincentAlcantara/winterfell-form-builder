'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _immutable = require('immutable');

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

var _FieldGroup = require('../InputTypes/FieldGroup');

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

var _DeleteQuestionOptionButton = require('../FormMenu/DeleteQuestionOptionButton');

var _DeleteQuestionOptionButton2 = _interopRequireDefault(_DeleteQuestionOptionButton);

var _AddConditionalQuestionButton = require('../FormMenu/AddConditionalQuestionButton');

var _AddConditionalQuestionButton2 = _interopRequireDefault(_AddConditionalQuestionButton);

var _DeleteQuestionButton = require('../FormMenu/DeleteQuestionButton');

var _DeleteQuestionButton2 = _interopRequireDefault(_DeleteQuestionButton);

var _AddQuestionButton = require('../FormMenu/AddQuestionButton');

var _AddQuestionButton2 = _interopRequireDefault(_AddQuestionButton);

var _AddQuestionOptionButton = require('../FormMenu/AddQuestionOptionButton');

var _AddQuestionOptionButton2 = _interopRequireDefault(_AddQuestionOptionButton);

var _SelectInput = require('../InputTypes/SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

var _constants = require('../../common/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuestionEditor = function (_Component) {
  (0, _inherits3.default)(QuestionEditor, _Component);

  function QuestionEditor(props) {
    (0, _classCallCheck3.default)(this, QuestionEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (QuestionEditor.__proto__ || (0, _getPrototypeOf2.default)(QuestionEditor)).call(this, props));

    var questionSetId = props.questionSetId,
        questionId = props.questionId,
        question = props.question,
        questionText = props.questionText,
        questionPostText = props.questionPostText,
        questionInputType = props.questionInputType,
        questionInputOptions = props.questionInputOptions;


    _this.state = {
      questionSetId: questionSetId,
      questionId: questionId,
      question: question,
      questionText: questionText,
      questionPostText: questionPostText,
      questionInputType: questionInputType,
      questionInputOptions: questionInputOptions.toJS(),
      editQuestionId: true
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSelect = _this.onSelect.bind(_this);
    _this.onOptionTextChange = _this.onOptionTextChange.bind(_this);
    _this.onOptionValueChange = _this.onOptionValueChange.bind(_this);
    _this.onAddQuestionOptionClick = _this.onAddQuestionOptionClick.bind(_this);
    _this.onEditQuestionIdClick = _this.onEditQuestionIdClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(QuestionEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        questionId: nextProps.questionId,
        question: nextProps.question,
        questionText: nextProps.questionText,
        questionPostText: nextProps.questionPostText,
        questionInputType: nextProps.questionInputType,
        questionInputOptions: nextProps.questionInputOptions.toJS()
      });
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
    key: 'onSelect',
    value: function onSelect(questionType) {
      var _props2 = this.props,
          currentQuestionSetIndex = _props2.currentQuestionSetIndex,
          currentQuestionIndex = _props2.currentQuestionIndex;

      this.setState({ questionInputType: questionType });
      this.props.changeQuestionType(currentQuestionSetIndex, currentQuestionIndex, questionType);
    }
  }, {
    key: 'onOptionTextChange',
    value: function onOptionTextChange(event, index) {
      var _props3 = this.props,
          currentQuestionSetIndex = _props3.currentQuestionSetIndex,
          currentQuestionIndex = _props3.currentQuestionIndex;

      var questionInputOptions = (0, _assign2.default)({}, this.state.questionInputOptions);
      questionInputOptions[index].text = event.target.value;
      this.setState({ questionInputOptions: questionInputOptions });
      this.props.editQuestionOptionText(currentQuestionSetIndex, currentQuestionIndex, index, event.target.value);
    }
  }, {
    key: 'onOptionValueChange',
    value: function onOptionValueChange(event, index) {
      var _props4 = this.props,
          currentQuestionSetIndex = _props4.currentQuestionSetIndex,
          currentQuestionIndex = _props4.currentQuestionIndex;

      var questionInputOptions = (0, _assign2.default)({}, this.state.questionInputOptions);
      questionInputOptions[index].value = event.target.value;
      this.setState({ questionInputOptions: questionInputOptions });
      this.props.editQuestionOptionValue(currentQuestionSetIndex, currentQuestionIndex, index, event.target.value);
    }
  }, {
    key: 'onAddQuestionOptionClick',
    value: function onAddQuestionOptionClick() {
      var _props5 = this.props,
          currentQuestionSetIndex = _props5.currentQuestionSetIndex,
          currentQuestionIndex = _props5.currentQuestionIndex;

      var questionInputOptions = [];
      for (var i = 0; i < this.state.questionInputOptions.length; i += 1) {
        questionInputOptions.push(this.state.questionInputOptions[i]);
      }
      questionInputOptions.push({ text: '', value: '' });

      this.setState({ questionInputOptions: questionInputOptions });
      this.props.addQuestionOption(currentQuestionSetIndex, currentQuestionIndex);
    }
  }, {
    key: 'onDeleteOptionClick',
    value: function onDeleteOptionClick() {
      var _props6 = this.props,
          currentQuestionSetIndex = _props6.currentQuestionSetIndex,
          currentQuestionIndex = _props6.currentQuestionIndex;

      var questionInputOptions = [];
      for (var i = 0; i < this.state.questionInputOptions.length; i += 1) {
        questionInputOptions.push(this.state.questionInputOptions[i]);
      }
      this.props.addQuestionOption(currentQuestionSetIndex, currentQuestionIndex);
    }
  }, {
    key: 'onEditQuestionIdClick',
    value: function onEditQuestionIdClick() {
      this.setState({ editQuestionId: !this.state.editQuestionId });
    }
  }, {
    key: 'getQuestionOptions',
    value: function getQuestionOptions() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactBootstrap.FormGroup,
        null,
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'tbody',
            null,
            this.props.questionInputOptions && this.props.questionInputOptions.size > 0 && _react2.default.createElement(
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
              ),
              _react2.default.createElement(
                'th',
                null,
                'Del'
              ),
              _react2.default.createElement(
                'th',
                null,
                'Flow'
              )
            ),
            this.props.questionInputOptions && this.props.questionInputOptions.toJS().map(function (option, ix) {
              return _react2.default.createElement(
                'tr',
                { key: '' + ix },
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(_reactBootstrap.FormControl, {
                    type: 'text',
                    name: _this2.state.questionInputOptions[ix].text,
                    value: _this2.state.questionInputOptions[ix].text,
                    onChange: function onChange(event) {
                      return _this2.onOptionTextChange(event, ix);
                    }
                  })
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(_reactBootstrap.FormControl, {
                    type: 'text',
                    name: _this2.state.questionInputOptions[ix].value,
                    value: _this2.state.questionInputOptions[ix].value,
                    onChange: function onChange(event) {
                      return _this2.onOptionValueChange(event, ix);
                    }
                  })
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(_DeleteQuestionOptionButton2.default, {
                    questionOptionIndex: ix
                  })
                ),
                _react2.default.createElement(
                  'td',
                  null,
                  _react2.default.createElement(_AddConditionalQuestionButton2.default, {
                    questionOptionIndex: ix
                  })
                )
              );
            })
          )
        ),
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
                'td',
                { colSpan: 3 },
                '\xA0'
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { colSpan: 3 },
                _react2.default.createElement(_AddQuestionOptionButton2.default, {
                  questionInputOptions: this.state.questionInputOptions
                })
              )
            )
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props7 = this.props,
          questionSetId = _props7.questionSetId,
          questionId = _props7.questionId,
          question = _props7.question,
          questionText = _props7.questionText,
          questionPostText = _props7.questionPostText,
          questionInputType = _props7.questionInputType,
          questionInputOptions = _props7.questionInputOptions;

      return _react2.default.createElement(
        'form',
        null,
        this.props.currentQuestionIndex > -1 && _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_FieldGroup2.default, {
              id: 'questionSetId',
              name: 'questionSetId',
              label: 'Question Set ID',
              onChange: this.onChange,
              placeholder: questionSetId,
              value: this.state.questionSetId,
              disabled: true
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_FieldGroup2.default, {
              id: 'questionId',
              name: 'questionId',
              label: 'Question ID',
              onChange: this.onChange,
              placeholder: questionId,
              value: this.state.questionId,
              disabled: this.state.editQuestionId
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'edit-question-id', id: 'edit-question-id-label' },
              _react2.default.createElement('input', {
                id: 'edit-question-id',
                type: 'checkbox',
                onClick: this.onEditQuestionIdClick
              }),
              '\xA0edit question id (not recommended)'
            )
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
              label: 'Question Pre Text',
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
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'questionInputType' },
              'Change Question Type'
            ),
            _react2.default.createElement(_SelectInput2.default, {
              id: 'questionInputType',
              labelId: 'questionInputType',
              options: _constants.INPUT_TYPE_OPTIONS,
              onSelect: this.onSelect,
              initialValue: this.props.questionInputType
            })
          )
        ),
        (questionInputType === 'checkboxOptionsInput' || questionInputType === 'selectInput' || questionInputType === 'radioOptionsInput') && questionInputOptions && this.props.currentQuestionIndex > -1 && this.getQuestionOptions(),
        this.props.currentQuestionIndex > -1 && _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_DeleteQuestionButton2.default, {
            currentQuestionSetIndex: this.props.currentQuestionSetIndex,
            currentQuestionIndex: this.props.currentQuestionIndex
          })
        ),
        this.props.currentQuestionIndex > -1 && _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_AddQuestionButton2.default, {
            questionSetId: this.props.questionSetId,
            currentQuestionSetIndex: this.props.currentQuestionSetIndex
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            _reactBootstrap.Button,
            {
              className: 'btn btn-block',
              onClick: this.onEditQuestionIdClick
            },
            'toggle edit question id (not recommended)'
          )
        )
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
  editQuestionOptionText: _propTypes2.default.func.isRequired,
  editQuestionOptionValue: _propTypes2.default.func.isRequired,
  changeQuestionType: _propTypes2.default.func.isRequired,
  addQuestionOption: _propTypes2.default.func.isRequired,
  questionSetId: _propTypes2.default.string.isRequired,
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
  questionInputOptions: (0, _immutable.fromJS)([])
};


function mapStateToProps(state, ownProps) {
  return {
    questionSetId: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questionSetId']),
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

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  editQuestionId: _winterfellFormBuilderActions.editQuestionId,
  editQuestion: _winterfellFormBuilderActions.editQuestion,
  editQuestionText: _winterfellFormBuilderActions.editQuestionText,
  editQuestionPostText: _winterfellFormBuilderActions.editQuestionPostText,
  editQuestionOptionText: _winterfellFormBuilderActions.editQuestionOptionText,
  editQuestionOptionValue: _winterfellFormBuilderActions.editQuestionOptionValue,
  addQuestionOption: _winterfellFormBuilderActions.addQuestionOption,
  deleteQuestion: _winterfellFormBuilderActions.deleteQuestion,
  deleteQuestionOption: _winterfellFormBuilderActions.deleteQuestionOption,
  changeQuestionType: _winterfellFormBuilderActions.changeQuestionType,
  changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField
})(QuestionEditor);

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