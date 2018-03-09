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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

var _EditQuestionButton = require('../FormMenu/EditQuestionButton');

var _EditQuestionButton2 = _interopRequireDefault(_EditQuestionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormEditorContainer = function (_Component) {
  (0, _inherits3.default)(FormEditorContainer, _Component);

  function FormEditorContainer(props) {
    (0, _classCallCheck3.default)(this, FormEditorContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FormEditorContainer.__proto__ || (0, _getPrototypeOf2.default)(FormEditorContainer)).call(this, props));

    _this.state = {
      currentPanel: null,
      currentQuestionSets: []
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onFormUpdate = _this.onFormUpdate.bind(_this);
    _this.getCurrentHeader = _this.getCurrentHeader.bind(_this);
    _this.getCurrentQuestions = _this.getCurrentQuestions.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(FormEditorContainer, [{
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
      this.props.editForm(this.state.formTitle);
      this.setState({ showModal: false });
    }
  }, {
    key: 'getCurrentHeader',
    value: function getCurrentHeader() {
      var _props = this.props,
          questionPanels = _props.questionPanels,
          currentPanelId = _props.currentPanelId;

      var currentPanel = _lodash2.default.find(questionPanels, function (panel) {
        return panel.panelId === currentPanelId;
      });
      return currentPanel && _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          null,
          currentPanel.panelHeader
        ),
        _react2.default.createElement(
          'p',
          null,
          currentPanel.panelText
        )
      );
    }
  }, {
    key: 'getCurrentQuestions',
    value: function getCurrentQuestions() {
      var _props2 = this.props,
          questionPanels = _props2.questionPanels,
          questionSets = _props2.questionSets,
          currentPanelId = _props2.currentPanelId;

      var currentPanel = _lodash2.default.find(questionPanels, function (panel) {
        return panel.panelId === currentPanelId;
      });
      if (currentPanel) {
        var currentQuestionSets = currentPanel.questionSets; // currentQuestionSets includes
        return currentQuestionSets.map(function (currentQuestionSet) {
          return questionSets.map(function (questionSet, index) {
            if (currentQuestionSet.questionSetId === questionSet.questionSetId) {
              return questionSet.questions.map(function (question, ix) {
                return _react2.default.createElement(
                  'p',
                  null,
                  _react2.default.createElement(
                    'i',
                    null,
                    question.question
                  ),
                  _react2.default.createElement(_EditQuestionButton2.default, {
                    questionSetIndex: index,
                    questionIndex: ix
                  })
                );
              });
            } // end-of-if
            return null;
          });
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          this.getCurrentHeader(),
          this.getCurrentQuestions()
        )
      );
    }
  }]);
  return FormEditorContainer;
}(_react.Component);

FormEditorContainer.propTypes = {
  editForm: _propTypes2.default.func.isRequired,
  questionSets: _propTypes2.default.array,
  questionPanels: _propTypes2.default.array,
  currentPanelId: _propTypes2.default.string
};
FormEditorContainer.defaultProps = {
  currentPanelId: _propTypes2.default.string,
  questionPanels: null,
  questionSets: null
};


function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
    questionPanels: state.getIn(['form', 'schema', 'questionPanels']).toJS(),
    questionSets: state.getIn(['form', 'schema', 'questionSets']).toJS(),
    schema: state.getIn(['form', 'schema'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { editForm: _winterfellFormBuilderActions.editForm })(FormEditorContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FormEditorContainer, 'FormEditorContainer', 'src/components/FormEditor/FormEditorContainer.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FormEditor/FormEditorContainer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormEditor/FormEditorContainer.js');
}();

;