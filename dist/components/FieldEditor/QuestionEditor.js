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

var _immutable = require('immutable');

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

var _FieldGroup = require('../InputTypes/FieldGroup');

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

var _DeleteQuestionButton = require('../FormMenu/DeleteQuestionButton');

var _DeleteQuestionButton2 = _interopRequireDefault(_DeleteQuestionButton);

var _AddQuestionButton = require('../FormMenu/AddQuestionButton');

var _AddQuestionButton2 = _interopRequireDefault(_AddQuestionButton);

var _SelectInput = require('../InputTypes/SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

var _ButtonBarEditor = require('./ButtonBarEditor');

var _ButtonBarEditor2 = _interopRequireDefault(_ButtonBarEditor);

var _constants = require('../../common/constants');

var _QuestionOptionEditor = require('./QuestionOptionEditor');

var _QuestionOptionEditor2 = _interopRequireDefault(_QuestionOptionEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var QuestionEditor = function (_PureComponent) {
  (0, _inherits3.default)(QuestionEditor, _PureComponent);

  function QuestionEditor(props) {
    (0, _classCallCheck3.default)(this, QuestionEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (QuestionEditor.__proto__ || (0, _getPrototypeOf2.default)(QuestionEditor)).call(this, props));

    var questionSetId = props.questionSetId,
        questionId = props.questionId,
        question = props.question,
        questionText = props.questionText,
        questionPostText = props.questionPostText,
        questionInputType = props.questionInputType,
        questionInputOptions = props.questionInputOptions,
        questionTarget = props.questionTarget,
        questionTargetMatch = props.questionTargetMatch;


    _this.state = {
      questionSetId: questionSetId,
      questionId: questionId,
      question: question,
      questionText: questionText,
      questionPostText: questionPostText,
      questionInputType: questionInputType,
      questionInputOptions: questionInputOptions.toJS(),
      editQuestionId: true,
      showConditionalPage: new Array(questionInputOptions.count()),
      showConditionalQuestions: new Array(questionInputOptions.count()),
      questionTarget: questionTarget,
      questionTargetMatch: questionTargetMatch
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSelect = _this.onSelect.bind(_this);
    _this.onEditQuestionIdClick = _this.onEditQuestionIdClick.bind(_this);
    _this.onUpdateNextQuestionTarget = _this.onUpdateNextQuestionTarget.bind(_this);
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
        questionInputOptions: nextProps.questionInputOptions.toJS(),
        questionTarget: nextProps.questionTarget,
        questionTargetMatch: nextProps.questionTargetMatch
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
      if (questionType !== '') {
        this.props.changeQuestionType(currentQuestionSetIndex, currentQuestionIndex, questionType);
      }
    }
  }, {
    key: 'onEditQuestionIdClick',
    value: function onEditQuestionIdClick() {
      this.setState({ editQuestionId: !this.state.editQuestionId });
    }
  }, {
    key: 'onUpdateNextQuestionTarget',
    value: function onUpdateNextQuestionTarget() {
      var _props3 = this.props,
          currentQuestionPanelIndex = _props3.currentQuestionPanelIndex,
          questionId = _props3.questionId;

      this.props.updateNextQuestionTarget(currentQuestionPanelIndex, questionId, this.state.questionTargetMatch, this.state.questionTarget);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          questionSetId = _props4.questionSetId,
          questionId = _props4.questionId,
          question = _props4.question,
          questionText = _props4.questionText,
          questionPostText = _props4.questionPostText,
          questionInputType = _props4.questionInputType,
          questionInputOptions = _props4.questionInputOptions,
          currentQuestionPanelIndex = _props4.currentQuestionPanelIndex;


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
              'Question Type'
            ),
            _react2.default.createElement(_SelectInput2.default, {
              id: 'questionInputType',
              labelId: 'questionInputType',
              options: _constants.INPUT_TYPE_OPTIONS,
              onSelect: this.onSelect,
              displayValue: this.props.questionInputType
            })
          )
        ),
        (questionInputType === 'checkboxOptionsInput' || questionInputType === 'selectInput' || questionInputType === 'radioOptionsInput') && questionInputOptions && this.props.currentQuestionIndex > -1 && _react2.default.createElement(_QuestionOptionEditor2.default, {
          questionInputOptions: this.props.questionInputOptions,
          questionId: this.props.questionId,
          currentQuestionPanelIndex: this.props.currentQuestionPanelIndex,
          currentQuestionSetIndex: this.props.currentQuestionSetIndex,
          currentQuestionIndex: this.props.currentQuestionIndex
        }),
        _react2.default.createElement(_ButtonBarEditor2.default, {
          currentQuestionPanelIndex: currentQuestionPanelIndex
        }),
        _react2.default.createElement(
          _reactBootstrap.ButtonGroup,
          null,
          this.props.currentQuestionIndex > -1 && _react2.default.createElement(_DeleteQuestionButton2.default, {
            currentQuestionSetIndex: this.props.currentQuestionSetIndex,
            currentQuestionIndex: this.props.currentQuestionIndex
          }),
          this.props.currentQuestionIndex > -1 && _react2.default.createElement(_AddQuestionButton2.default, {
            questionSetId: this.props.questionSetId,
            currentQuestionSetIndex: this.props.currentQuestionSetIndex
          })
        ),
        _react2.default.createElement('br', null)
      );
    }
  }]);
  return QuestionEditor;
}(_react.PureComponent);

QuestionEditor.propTypes = {
  editQuestionId: _propTypes2.default.func.isRequired,
  editQuestion: _propTypes2.default.func.isRequired,
  editQuestionText: _propTypes2.default.func.isRequired,
  editQuestionPostText: _propTypes2.default.func.isRequired,
  changeQuestionType: _propTypes2.default.func.isRequired,
  updateNextQuestionTarget: _propTypes2.default.func.isRequired,
  questionSetId: _propTypes2.default.string.isRequired,
  questionId: _propTypes2.default.string,
  question: _propTypes2.default.string,
  questionText: _propTypes2.default.string,
  questionPostText: _propTypes2.default.string,
  questionInputType: _propTypes2.default.string,
  questionInputOptions: _propTypes2.default.object,
  currentQuestionSetIndex: _propTypes2.default.number.isRequired,
  currentQuestionIndex: _propTypes2.default.number.isRequired,
  questionTarget: _propTypes2.default.string,
  questionTargetMatch: _propTypes2.default.string,
  currentQuestionPanelIndex: _propTypes2.default.number.isRequired
};
QuestionEditor.defaultProps = {
  questionId: '',
  question: '',
  questionText: '',
  questionPostText: '',
  questionInputType: '',
  questionInputOptions: (0, _immutable.fromJS)([]),
  questionTarget: '',
  questionTargetMatch: ''
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
    currentQuestionIndex: ownProps.currentQuestionIndex,
    questionTarget: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'conditions', 0, 'target']),
    questionTargetMatch: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'conditions', 0, 'value'])
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
  changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField,
  updateNextQuestionTarget: _winterfellFormBuilderActions.updateNextQuestionTarget
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