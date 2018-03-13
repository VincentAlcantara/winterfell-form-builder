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

var EditQuestionButton = function (_Component) {
  (0, _inherits3.default)(EditQuestionButton, _Component);

  function EditQuestionButton(props) {
    (0, _classCallCheck3.default)(this, EditQuestionButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EditQuestionButton.__proto__ || (0, _getPrototypeOf2.default)(EditQuestionButton)).call(this, props));

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

  (0, _createClass3.default)(EditQuestionButton, [{
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
      this.props.editQuestion(this.props.questionSetIndex, this.props.questionIndex, this.state.question, this.state.questionText, this.state.questionType);
      this.setState({ showModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          'div',
          { className: 'static-modal' },
          _react2.default.createElement(
            _reactBootstrap.Modal,
            { show: this.state.showModal },
            _react2.default.createElement(
              _reactBootstrap.Modal.Header,
              null,
              _react2.default.createElement(
                _reactBootstrap.Modal.Title,
                null,
                'Add a new question to the page'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Body,
              null,
              _react2.default.createElement(
                'form',
                null,
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
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Footer,
              null,
              _react2.default.createElement(
                _reactBootstrap.Button,
                {
                  bsStyle: 'danger',
                  onClick: function onClick() {
                    _this2.setState({ showModal: false });
                  }
                },
                'Cancel'
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                {
                  bsStyle: 'primary',
                  onClick: this.onFormUpdate
                },
                'Save changes'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          _react2.default.createElement(
            _reactBootstrap.Button,
            {
              className: 'btn',
              onClick: function onClick() {
                _this2.setState({ showModal: true });
              }
            },
            'edit'
          )
        )
      );
    }
  }]);
  return EditQuestionButton;
}(_react.Component);

EditQuestionButton.propTypes = {
  editQuestion: _propTypes2.default.func.isRequired,
  questionSetIndex: _propTypes2.default.number.isRequired,
  questionIndex: _propTypes2.default.number.isRequired,
  question: _propTypes2.default.string.isRequired,
  questionText: _propTypes2.default.string,
  questionType: _propTypes2.default.string.isRequired
};
EditQuestionButton.defaultProps = {
  questionText: ''
};


function mapStateToProps(state, ownProps) {
  return {
    question: state.getIn(['form', 'schema', 'questionSets', ownProps.questionSetIndex, 'questions', ownProps.questionIndex, 'question']),
    questionText: state.getIn(['form', 'schema', 'questionSets', ownProps.questionSetIndex, 'questions', ownProps.questionIndex, 'text']),
    questionType: state.getIn(['form', 'schema', 'questionSets', ownProps.questionSetIndex, 'questions', ownProps.questionIndex, 'input', 'type'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { editQuestion: _winterfellFormBuilderActions.editQuestion })(EditQuestionButton);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EditQuestionButton, 'EditQuestionButton', 'src/components/FormMenu/EditQuestionButton.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FormMenu/EditQuestionButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormMenu/EditQuestionButton.js');
}();

;