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

var _immutable = require('immutable');

var _reactBootstrap = require('react-bootstrap');

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

var _SelectInput = require('../InputTypes/SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConditionalPageEditor = function (_Component) {
  (0, _inherits3.default)(ConditionalPageEditor, _Component);

  function ConditionalPageEditor(props) {
    (0, _classCallCheck3.default)(this, ConditionalPageEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConditionalPageEditor.__proto__ || (0, _getPrototypeOf2.default)(ConditionalPageEditor)).call(this, props));

    _this.nextButtonTargetOptions = function () {
      return _this.__nextButtonTargetOptions__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.state = {
      questionTarget: ''
    };

    _this.onSelect = _this.onSelect.bind(_this);
    _this.nextButtonTargetOptions = _this.nextButtonTargetOptions.bind(_this);
    _this.initialTarget = _this.initialTarget.bind(_this);
    _this.onResetNextQuestionTarget = _this.onResetNextQuestionTarget.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ConditionalPageEditor, [{
    key: '__nextButtonTargetOptions__REACT_HOT_LOADER__',
    value: function __nextButtonTargetOptions__REACT_HOT_LOADER__() {
      return this.__nextButtonTargetOptions__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: 'onSelect',
    value: function onSelect(page) {
      this.setState({ questionTarget: page });
      var _props = this.props,
          currentQuestionPanelIndex = _props.currentQuestionPanelIndex,
          questionId = _props.questionId,
          value = _props.value;

      this.props.updateNextQuestionTarget(currentQuestionPanelIndex, questionId, value, page, this.props.questionOptionIndex);
    }
  }, {
    key: 'onClose',
    value: function onClose(e) {
      e.preventDefault();
      this.setState({ showModal: true });
    }
  }, {
    key: 'onResetNextQuestionTarget',
    value: function onResetNextQuestionTarget() {
      var _props2 = this.props,
          currentQuestionPanelIndex = _props2.currentQuestionPanelIndex,
          value = _props2.value;

      this.props.resetNextQuestionTarget(currentQuestionPanelIndex, value);
    }
  }, {
    key: 'initialTarget',
    value: function initialTarget() {
      var _props3 = this.props,
          conditions = _props3.conditions,
          value = _props3.value;

      var conditionIndex = conditions.findIndex(function (condition) {
        return condition.get('value') === value;
      });
      if (conditionIndex !== -1) {
        return conditions.getIn([conditionIndex, 'target']);
      }
      return '';
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
      return _react2.default.createElement(
        _reactBootstrap.Row,
        { className: 'winterfell-form-builder-conditional-page alert-warning' },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          _react2.default.createElement(
            'h6',
            null,
            'Conditional Page:'
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(
              'p',
              null,
              _react2.default.createElement(
                'b',
                null,
                'If question ',
                _react2.default.createElement(
                  'i',
                  null,
                  this.props.question
                ),
                ' is: ',
                _react2.default.createElement(
                  'i',
                  null,
                  this.props.value
                )
              ),
              ','
            ),
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
                onSelect: this.onSelect,
                initialValue: this.initialTarget(),
                value: this.state.questionTarget
              }),
              _react2.default.createElement(
                _reactBootstrap.InputGroup.Button,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  {
                    label: 'find',
                    className: 'btn btn-danger',
                    onClick: this.onResetNextQuestionTarget
                  },
                  'reset'
                )
              )
            )
          )
        )
      );
    }
  }]);
  return ConditionalPageEditor;
}(_react.Component);

ConditionalPageEditor.propTypes = {
  updateNextQuestionTarget: _propTypes2.default.func.isRequired,
  resetNextQuestionTarget: _propTypes2.default.func.isRequired,
  questionOptionIndex: _propTypes2.default.number.isRequired,
  formPanels: _propTypes2.default.object.isRequired,
  currentQuestionPanelIndex: _propTypes2.default.number.isRequired,
  questionId: _propTypes2.default.string.isRequired,
  question: _propTypes2.default.string,
  value: _propTypes2.default.string,
  conditions: _propTypes2.default.object
};
ConditionalPageEditor.defaultProps = {
  question: '',
  value: '',
  questionTarget: '',
  conditions: (0, _immutable.fromJS)([])
};


function mapStateToProps(state, ownProps) {
  return {
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    text: ownProps.text,
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    questionId: ownProps.questionId,
    question: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'question']),
    value: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'input', 'options', ownProps.questionOptionIndex, 'value']),
    conditions: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'conditions'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  addConditionalQuestion: _winterfellFormBuilderActions.addConditionalQuestion,
  updateNextQuestionTarget: _winterfellFormBuilderActions.updateNextQuestionTarget,
  resetNextQuestionTarget: _winterfellFormBuilderActions.resetNextQuestionTarget
})(ConditionalPageEditor);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ConditionalPageEditor, 'ConditionalPageEditor', 'src/components/FieldEditor/ConditionalPageEditor.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FieldEditor/ConditionalPageEditor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FieldEditor/ConditionalPageEditor.js');
}();

;