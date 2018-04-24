'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _reactBootstrap = require('react-bootstrap');

var _DeleteQuestionOptionButton = require('../FormMenu/DeleteQuestionOptionButton');

var _DeleteQuestionOptionButton2 = _interopRequireDefault(_DeleteQuestionOptionButton);

var _ConditionalPageEditor = require('./ConditionalPageEditor');

var _ConditionalPageEditor2 = _interopRequireDefault(_ConditionalPageEditor);

var _ConditionalQuestionEditor = require('./ConditionalQuestionEditor');

var _ConditionalQuestionEditor2 = _interopRequireDefault(_ConditionalQuestionEditor);

var _AddQuestionOptionButton = require('../FormMenu/AddQuestionOptionButton');

var _AddQuestionOptionButton2 = _interopRequireDefault(_AddQuestionOptionButton);

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConditionalQuestionOptionEditor = function (_PureComponent) {
  (0, _inherits3.default)(ConditionalQuestionOptionEditor, _PureComponent);

  function ConditionalQuestionOptionEditor(props) {
    (0, _classCallCheck3.default)(this, ConditionalQuestionOptionEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ConditionalQuestionOptionEditor.__proto__ || (0, _getPrototypeOf2.default)(ConditionalQuestionOptionEditor)).call(this, props));

    var questionInputOptions = props.questionInputOptions;


    _this.state = {
      questionInputOptions: questionInputOptions || [],
      editQuestionId: true,
      showConditionalPage: questionInputOptions ? new Array(questionInputOptions.length) : [],
      showConditionalQuestions: questionInputOptions ? new Array(questionInputOptions.length) : [],
      questionOptionText: '',
      questionOptionValue: ''
    };

    _this.onOptionTextChange = _this.onOptionTextChange.bind(_this);
    _this.onOptionValueChange = _this.onOptionValueChange.bind(_this);
    _this.onShowConditonalClick = _this.onShowConditonalClick.bind(_this);
    _this.onAddOptionChange = _this.onAddOptionChange.bind(_this);
    _this.onAddOption = _this.onAddOption.bind(_this);
    _this.onDeleteOption = _this.onDeleteOption.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ConditionalQuestionOptionEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState({
        questionInputOptions: nextProps.questionInputOptions
      });
    }
  }, {
    key: 'onOptionTextChange',
    value: function onOptionTextChange(event, index) {
      var path = this.props.path;

      var questionInputOptions = (0, _assign2.default)({}, this.state.questionInputOptions);
      questionInputOptions[index].text = event.target.value;
      this.setState({ questionInputOptions: questionInputOptions });
      this.props.editQuestionOptionText([].concat((0, _toConsumableArray3.default)(path), ['input', 'options', index]), event.target.value);
    }
  }, {
    key: 'onOptionValueChange',
    value: function onOptionValueChange(event, index) {
      var path = this.props.path;

      var questionInputOptions = (0, _assign2.default)({}, this.state.questionInputOptions);
      questionInputOptions[index].value = event.target.value;
      this.setState({ questionInputOptions: questionInputOptions });
      this.props.editQuestionOptionValue([].concat((0, _toConsumableArray3.default)(path), ['input', 'options', index]), event.target.value);
    }
  }, {
    key: 'onShowConditonalClick',
    value: function onShowConditonalClick(index, event) {
      var showConditionalPageCopy = [].concat((0, _toConsumableArray3.default)(this.state.showConditionalPage));
      var showConditionalQuestionsCopy = [].concat((0, _toConsumableArray3.default)(this.state.showConditionalQuestions));
      var currentConditionalPageSelected = showConditionalPageCopy.findIndex(function (showCondition) {
        return showCondition;
      });
      var currentConditionalQuestionSelected = showConditionalQuestionsCopy.findIndex(function (showCondition) {
        return showCondition;
      });

      // Turn off the existing choices
      if (currentConditionalPageSelected !== -1) {
        showConditionalPageCopy[currentConditionalPageSelected] = !showConditionalPageCopy[currentConditionalPageSelected];
      }
      if (currentConditionalQuestionSelected !== -1) {
        showConditionalQuestionsCopy[currentConditionalQuestionSelected] = !showConditionalQuestionsCopy[currentConditionalQuestionSelected];
      }
      // Turn on the selected choice
      if ((event.target.id === 'showConditionalQuestion' || event.target.id === 'showConditionalQuestionButton') && index !== currentConditionalQuestionSelected) {
        showConditionalQuestionsCopy[index] = !showConditionalQuestionsCopy[index];
      }
      if ((event.target.id === 'showConditionalPage' || event.target.id === 'showConditionalPageButton') && index !== currentConditionalPageSelected) {
        showConditionalPageCopy[index] = !showConditionalPageCopy[index];
      }

      this.setState({
        showConditionalPage: showConditionalPageCopy,
        showConditionalQuestions: showConditionalQuestionsCopy
      });
    }
  }, {
    key: 'onAddOptionChange',
    value: function onAddOptionChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'onAddOption',
    value: function onAddOption() {
      var _state = this.state,
          questionOptionText = _state.questionOptionText,
          questionOptionValue = _state.questionOptionValue;

      var key = (0, _assign2.default)([], this.props.path);
      key.push('input');
      key.push('options');
      this.props.addQuestionOption(key, questionOptionText, questionOptionValue);
      this.setState({ questionOptionText: '', questionOptionValue: '' });
    }
  }, {
    key: 'onDeleteOption',
    value: function onDeleteOption(index) {
      var copyConditionalQuestions = (0, _assign2.default)([], this.state.questionInputOptions);
      copyConditionalQuestions.splice(index, 1);
      this.setState({ questionInputOptions: copyConditionalQuestions });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          questionInputOptions = _props.questionInputOptions,
          questionId = _props.questionId,
          path = _props.path;


      return _react2.default.createElement(
        'div',
        null,
        questionInputOptions && _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'b',
            null,
            'Options'
          )
        ),
        !this.state.questionInputOptions.length && _react2.default.createElement(
          'div',
          null,
          'No options'
        ),
        this.state.questionInputOptions && this.state.questionInputOptions.map(function (option, ix) {
          return _react2.default.createElement(
            'div',
            { key: '' + ix },
            _react2.default.createElement(
              _reactBootstrap.InputGroup,
              { className: 'winterfell-form-builder-conditional-question' },
              _react2.default.createElement(_reactBootstrap.FormControl, {
                type: 'text',
                name: _this2.state.questionInputOptions[ix].text,
                value: _this2.state.questionInputOptions[ix].text,
                onChange: function onChange(event) {
                  return _this2.onOptionTextChange(event, ix);
                }
              }),
              _react2.default.createElement(_reactBootstrap.FormControl, {
                type: 'text',
                name: _this2.state.questionInputOptions[ix].value,
                value: _this2.state.questionInputOptions[ix].value,
                onChange: function onChange(event) {
                  return _this2.onOptionValueChange(event, ix);
                }
              }),
              _react2.default.createElement(
                _reactBootstrap.InputGroup.Button,
                null,
                _react2.default.createElement(_DeleteQuestionOptionButton2.default, {
                  onDeleteQuestionOption: function onDeleteQuestionOption() {
                    return _this2.props.deleteQuestionOption([].concat((0, _toConsumableArray3.default)(path), ['input', 'options', ix]));
                  }
                })
              ),
              _react2.default.createElement(
                _reactBootstrap.InputGroup.Button,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  {
                    onClick: function onClick(event) {
                      return _this2.onShowConditonalClick(ix, event);
                    },
                    className: 'btn btn-warning',
                    id: 'showConditionalPageButton'
                  },
                  _this2.state.showConditionalPage && !_this2.state.showConditionalPage[ix] && _react2.default.createElement(_reactBootstrap.Glyphicon, { glyph: 'glyphicon glyphicon-share-alt', id: 'showConditionalPage' }),
                  _this2.state.showConditionalPage && _this2.state.showConditionalPage[ix] && _react2.default.createElement(_reactBootstrap.Glyphicon, {
                    glyph: 'glyphicon glyphicon glyphicon-minus-sign',
                    id: 'showConditionalPage'
                  })
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.InputGroup.Button,
                null,
                _react2.default.createElement(
                  _reactBootstrap.Button,
                  {
                    id: 'showConditionalQuestionButton',
                    onClick: function onClick(event) {
                      return _this2.onShowConditonalClick(ix, event);
                    },
                    className: 'btn btn-primary'
                  },
                  _this2.state.showConditionalQuestions && !_this2.state.showConditionalQuestions[ix] && _react2.default.createElement(_reactBootstrap.Glyphicon, {
                    glyph: 'glyphicon glyphicon-menu-hamburger',
                    id: 'showConditionalQuestion'
                  }),
                  _this2.state.showConditionalQuestions && _this2.state.showConditionalQuestions[ix] && _react2.default.createElement(_reactBootstrap.Glyphicon, {
                    glyph: 'glyphicon glyphicon glyphicon-minus-sign',
                    id: 'showConditionalQuestion'
                  })
                )
              ),
              _this2.state.showConditionalPage[ix] && _react2.default.createElement(_ConditionalPageEditor2.default, {
                questionOptionIndex: ix,
                questionId: questionId,
                text: _this2.state.questionInputOptions[ix].text
              }),
              _this2.state.showConditionalQuestions[ix] && _react2.default.createElement(_ConditionalQuestionEditor2.default, {
                parentPath: [].concat((0, _toConsumableArray3.default)(path), ['input', 'options', ix]),
                parentOptionText: _this2.state.questionInputOptions[ix].text
              })
            )
          );
        }),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(_AddQuestionOptionButton2.default, {
            questionOptionText: this.state.questionOptionText,
            questionOptionValue: this.state.questionOptionValue,
            onChange: function onChange(e) {
              return _this2.onAddOptionChange(e);
            },
            onClick: this.onAddOption
          })
        )
      );
    }
  }]);
  return ConditionalQuestionOptionEditor;
}(_react.PureComponent);

ConditionalQuestionOptionEditor.propTypes = {
  questionInputOptions: _propTypes2.default.array.isRequired,
  questionId: _propTypes2.default.string.isRequired,
  editQuestionOptionText: _propTypes2.default.func.isRequired,
  editQuestionOptionValue: _propTypes2.default.func.isRequired,
  addQuestionOption: _propTypes2.default.func.isRequired,
  deleteQuestionOption: _propTypes2.default.func.isRequired,
  path: _propTypes2.default.array.isRequired
};

var _default = (0, _reactRedux.connect)(null, {
  editQuestionOptionText: _winterfellFormBuilderActions.editQuestionOptionText,
  editQuestionOptionValue: _winterfellFormBuilderActions.editQuestionOptionValue,
  addQuestionOption: _winterfellFormBuilderActions.addQuestionOption,
  deleteQuestion: _winterfellFormBuilderActions.deleteQuestion,
  deleteQuestionOption: _winterfellFormBuilderActions.deleteQuestionOption,
  changeQuestionType: _winterfellFormBuilderActions.changeQuestionType,
  changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField,
  updateNextQuestionTarget: _winterfellFormBuilderActions.updateNextQuestionTarget
})(ConditionalQuestionOptionEditor);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ConditionalQuestionOptionEditor, 'ConditionalQuestionOptionEditor', 'src/components/FieldEditor/ConditionalQuestionOptionEditor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FieldEditor/ConditionalQuestionOptionEditor.js');
}();

;