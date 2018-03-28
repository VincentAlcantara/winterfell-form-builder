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

var _FieldGroup = require('../InputTypes/FieldGroup');

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

var _SelectInput = require('../InputTypes/SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

var _constants = require('../../common/constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConditionalQuestionForm = function (_Component) {
  (0, _inherits3.default)(ConditionalQuestionForm, _Component);

  function ConditionalQuestionForm(props) {
    (0, _classCallCheck3.default)(this, ConditionalQuestionForm);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConditionalQuestionForm.__proto__ || (0, _getPrototypeOf2.default)(ConditionalQuestionForm)).call(this, props));

    _this.nextButtonTargetOptions = function () {
      return _this.__nextButtonTargetOptions__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      showModal: false,
      questionId: '',
      question: '',
      questionText: '',
      questionType: '',
      questionTarget: ''
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onSelect = _this.onSelect.bind(_this);
    _this.onFormUpdate = _this.onFormUpdate.bind(_this);
    _this.nextButtonTargetOptions = _this.nextButtonTargetOptions.bind(_this);
    _this.onUpdateNextQuestionTarget = _this.onUpdateNextQuestionTarget.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ConditionalQuestionForm, [{
    key: '__nextButtonTargetOptions__REACT_HOT_LOADER__',
    value: function __nextButtonTargetOptions__REACT_HOT_LOADER__() {
      return this.__nextButtonTargetOptions__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'onSelect',
    value: function onSelect(type) {
      this.setState({ questionType: type });
    }
  }, {
    key: 'onClose',
    value: function onClose(e) {
      e.preventDefault();
      this.setState({ showModal: true });
    }
  }, {
    key: 'onFormUpdate',
    value: function onFormUpdate(e) {
      e.preventDefault();
      var _props = this.props,
          currentQuestionSetIndex = _props.currentQuestionSetIndex,
          currentQuestionIndex = _props.currentQuestionIndex,
          questionOptionIndex = _props.questionOptionIndex;
      var _state = this.state,
          questionId = _state.questionId,
          question = _state.question,
          questionText = _state.questionText,
          questionType = _state.questionType;

      this.props.addConditionalQuestion(currentQuestionSetIndex, currentQuestionIndex, questionOptionIndex, questionId, question, questionText, questionType);
      this.setState({ showModal: false });
    }
  }, {
    key: 'onUpdateNextQuestionTarget',
    value: function onUpdateNextQuestionTarget() {
      var _props2 = this.props,
          currentQuestionPanelIndex = _props2.currentQuestionPanelIndex,
          questionId = _props2.questionId,
          text = _props2.text;

      this.props.updateNextQuestionTarget(currentQuestionPanelIndex, questionId, text, this.state.questionTarget, this.props.questionOptionIndex);
    }
  }, {
    key: '__nextButtonTargetOptions__REACT_HOT_LOADER__',
    value: function __nextButtonTargetOptions__REACT_HOT_LOADER__() {
      return this.props.formPanels && this.props.formPanels.toJS().map(function (formPanel) {
        var option = {};
        option.text = formPanel.panelId;
        option.value = formPanel.panelId;
        return option;
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactBootstrap.Row,
        { className: 'winterfell-form-builder-conditional-questions' },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          _react2.default.createElement(
            'h5',
            null,
            'Add Conditional Logic for Option "',
            this.props.text,
            '":'
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'questionTarget' },
              'Go To Page'
            ),
            _react2.default.createElement(
              _reactBootstrap.InputGroup,
              null,
              _react2.default.createElement(_SelectInput2.default, {
                id: 'questionTarget',
                labelId: 'questionTarget',
                options: this.nextButtonTargetOptions(),
                onSelect: function onSelect(e) {
                  return _this2.setState({ questionTarget: e });
                },
                initialValue: this.props.questionTarget
              }),
              _react2.default.createElement(
                _reactBootstrap.InputGroup.Button,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  {
                    label: 'find',
                    className: 'btn btn-primary btn-block',
                    onClick: this.onUpdateNextQuestionTarget,
                    disabled: !this.state.questionTarget
                  },
                  'save'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          _react2.default.createElement(
            'h5',
            null,
            'Conditional Questions for Option "',
            this.props.text,
            '"'
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_FieldGroup2.default, {
              id: 'questionId',
              name: 'questionId',
              label: 'Question ID',
              onChange: this.onChange,
              placeholder: '(optional)',
              value: this.state.questionId
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_FieldGroup2.default, {
              id: 'question',
              name: 'question',
              label: 'Enter Question',
              onChange: this.onChange,
              placeholder: '',
              value: this.state.question
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_FieldGroup2.default, {
              id: 'questionText',
              name: 'questionText',
              label: 'Enter Question Text',
              onChange: this.onChange,
              placeholder: '',
              value: this.state.questionText
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(
              'label',
              { htmlFor: 'questionType' },
              'Select Question Type'
            ),
            _react2.default.createElement(_SelectInput2.default, {
              id: 'questionType',
              labelId: 'questionType',
              options: _constants.INPUT_TYPE_OPTIONS,
              onSelect: this.onSelect
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            {
              className: 'btn-danger',
              onClick: function onClick() {
                _this2.setState({ showModal: false });
              }
            },
            'Delete'
          ),
          _react2.default.createElement(
            _reactBootstrap.Button,
            {
              className: 'primary pull-right',
              onClick: this.onFormUpdate
            },
            'Save'
          )
        )
      );
    }
  }]);
  return ConditionalQuestionForm;
}(_react.Component);

ConditionalQuestionForm.propTypes = {
  addConditionalQuestion: _propTypes2.default.func.isRequired,
  updateNextQuestionTarget: _propTypes2.default.func.isRequired,
  currentQuestionSetIndex: _propTypes2.default.number.isRequired,
  currentQuestionIndex: _propTypes2.default.number.isRequired,
  questionOptionIndex: _propTypes2.default.number.isRequired,
  text: _propTypes2.default.string.isRequired,
  formPanels: _propTypes2.default.object.isRequired,
  currentQuestionPanelIndex: _propTypes2.default.number.isRequired,
  questionId: _propTypes2.default.string.isRequired,
  questionTarget: _propTypes2.default.string
};
ConditionalQuestionForm.defaultProps = {
  questionTarget: ''
};


function mapStateToProps(state, ownProps) {
  return {
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    questionOptionIndex: ownProps.questionOptionIndex,
    text: ownProps.text,
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    currentQuestionPanelIndex: ownProps.currentQuestionPanelIndex,
    questionId: ownProps.questionId,
    questionTarget: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'conditions', ownProps.questionOptionIndex, 'target'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { addConditionalQuestion: _winterfellFormBuilderActions.addConditionalQuestion, updateNextQuestionTarget: _winterfellFormBuilderActions.updateNextQuestionTarget })(ConditionalQuestionForm);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ConditionalQuestionForm, 'ConditionalQuestionForm', 'src/components/FormMenu/ConditionalQuestionForm.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FormMenu/ConditionalQuestionForm.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormMenu/ConditionalQuestionForm.js');
}();

;