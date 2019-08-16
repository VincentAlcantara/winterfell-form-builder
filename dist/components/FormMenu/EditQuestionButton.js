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

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

var _FieldGroup = require('../InputTypes/FieldGroup');

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateQuestionButton = function (_Component) {
  (0, _inherits3.default)(updateQuestionButton, _Component);

  function updateQuestionButton(props) {
    (0, _classCallCheck3.default)(this, updateQuestionButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (updateQuestionButton.__proto__ || (0, _getPrototypeOf2.default)(updateQuestionButton)).call(this, props));

    var question = props.question,
        questionText = props.questionText,
        questionType = props.questionType;


    _this.state = {
      showModal: false,
      question: question,
      questionText: questionText,
      questionType: questionType
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onFormUpdate = _this.onFormUpdate.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(updateQuestionButton, [{
    key: 'onChange',
    value: function onChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
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
      this.props.updateQuestion(this.props.questionSetIndex, this.props.questionIndex, this.state.question, this.state.questionText, this.state.questionType);
      this.setState({ showModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      return [_react2.default.createElement(
        'button',
        {
          type: 'button',
          className: 'btn',
          'data-toggle': 'modal',
          'data-target': '#editQuestion'
        },
        'edit'
      ), _react2.default.createElement(
        'div',
        { className: 'modal fade', id: 'createForm', tabIndex: '-1' },
        _react2.default.createElement(
          'div',
          { className: 'modal-dialog bg-white' },
          _react2.default.createElement(
            'div',
            { className: 'modal-content' },
            _react2.default.createElement(
              'div',
              { className: 'modal-header' },
              _react2.default.createElement(
                'div',
                { className: 'modal-title' },
                'Add a new question to the page'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'modal-body' },
              _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'form-group' },
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
                  'div',
                  { className: 'form-group' },
                  _react2.default.createElement(_FieldGroup2.default, {
                    id: 'questionText',
                    name: 'questionText',
                    label: 'Enter Question Text',
                    onChange: this.onChange,
                    placeholder: '',
                    value: this.state.questionText
                  })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'modal-footer' },
              _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-danger',
                  'data-dismiss': 'modal'
                },
                'Cancel'
              ),
              _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-dark',
                  onClick: this.onFormUpdate,
                  'data-dismiss': 'modal'
                },
                'Save changes'
              )
            )
          )
        )
      )];
    }
  }]);
  return updateQuestionButton;
}(_react.Component);

updateQuestionButton.propTypes = {
  updateQuestion: _propTypes2.default.func.isRequired,
  questionSetIndex: _propTypes2.default.number.isRequired,
  questionIndex: _propTypes2.default.number.isRequired,
  question: _propTypes2.default.string.isRequired,
  questionText: _propTypes2.default.string,
  questionType: _propTypes2.default.string.isRequired
};

updateQuestionButton.defaultProps = {
  questionText: ''
};

function mapStateToProps(state, ownProps) {
  return {
    question: state.getIn(['form', 'schema', 'questionSets', ownProps.questionSetIndex, 'questions', ownProps.questionIndex, 'question']),
    questionText: state.getIn(['form', 'schema', 'questionSets', ownProps.questionSetIndex, 'questions', ownProps.questionIndex, 'text']),
    questionType: state.getIn(['form', 'schema', 'questionSets', ownProps.questionSetIndex, 'questions', ownProps.questionIndex, 'input', 'type'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { updateQuestion: _winterfellFormBuilderActions.updateQuestion })(updateQuestionButton);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(updateQuestionButton, 'updateQuestionButton', 'src/components/FormMenu/EditQuestionButton.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FormMenu/EditQuestionButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormMenu/EditQuestionButton.js');
}();

;