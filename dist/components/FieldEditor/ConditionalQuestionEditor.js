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
    key: 'getConditionalQuestions',
    value: function getConditionalQuestions() {
      var _this2 = this;

      return this.props.conditionalQuestions.map(function (conditionalQuestion, ix) {
        return _react2.default.createElement(
          'div',
          { key: ix },
          _react2.default.createElement('br', null),
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
              id: 'post',
              name: 'post',
              label: 'Conditional Question Post Text ' + (ix + 1) + ':',
              onChange: function onChange(e) {
                return _this2.onChange(e, ix);
              },
              value: _this2.state.conditionalQuestions[ix].post
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.ButtonGroup,
            null,
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                className: 'btn btn-danger',
                title: 'delete this conditional question',
                onClick: function onClick() {
                  _this2.setState({ showModal: true });
                }
              },
              'delete'
            ),
            _react2.default.createElement(
              _reactBootstrap.Button,
              {
                className: 'btn btn-warning',
                title: 'save this conditional question',
                onClick: function onClick() {
                  _this2.setState({ showModal: true });
                }
              },
              'save'
            )
          )
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
            'Conditional Questions:'
          ),
          _react2.default.createElement(
            'b',
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
          _react2.default.createElement(_FormMenu.AddConditionalQuestionButton, {
            currentQuestionSetIndex: this.props.currentQuestionSetIndex,
            currentQuestionIndex: this.props.currentQuestionIndex,
            questionOptionIndex: this.props.questionOptionIndex
          })
        )
      );
    }
  }]);
  return ConditionalQuestionEditor;
}(_react.PureComponent);

ConditionalQuestionEditor.propTypes = {
  conditionalQuestions: _propTypes2.default.object,
  currentQuestionSetIndex: _propTypes2.default.number.isRequired,
  currentQuestionIndex: _propTypes2.default.number.isRequired,
  questionOptionIndex: _propTypes2.default.number.isRequired
};
ConditionalQuestionEditor.defaultProps = {
  conditionalQuestions: (0, _immutable.fromJS)([])
};


function mapStateToProps(state, ownProps) {
  return {
    conditionalQuestions: state.getIn(['form', 'schema', 'questionSets', ownProps.currentQuestionSetIndex, 'questions', ownProps.currentQuestionIndex, 'input', 'options', ownProps.questionOptionIndex, 'conditionalQuestions'])
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
})(ConditionalQuestionEditor);

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