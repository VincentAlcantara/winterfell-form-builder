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

var _FormPageEditor = require('./FormPageEditor');

var _FormQuestionSetEditor = require('./FormQuestionSetEditor');

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
      this.props.editFormTitle(this.state.formTitle);
      this.setState({ showModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          currentPanelIndex = _props.currentPanelIndex,
          questionPanels = _props.questionPanels,
          questionSets = _props.questionSets,
          panelHeader = _props.panelHeader,
          panelText = _props.panelText;

      var questionPanelsArray = questionPanels && questionPanels.toJS();
      var questionSetsArray = questionSets && questionSets.toJS();
      console.log('panelHeader, panelText: ', panelHeader, panelText);
      return _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          typeof currentPanelIndex !== 'undefined' && _react2.default.createElement(_FormPageEditor.FormPageEditor, {
            panelHeader: panelHeader,
            panelText: panelText,
            onClick: function onClick() {
              return _this2.props.changeCurrentEditingField('page');
            }
          }),
          typeof currentPanelIndex !== 'undefined' && questionPanelsArray && _react2.default.createElement(_FormQuestionSetEditor.FormQuestionSetEditor, {
            currentQuestionSets: questionPanelsArray[currentPanelIndex].questionSets,
            questionSets: questionSetsArray,
            onClick: this.props.changeCurrentEditingField
          })
        )
      );
    }
  }]);
  return FormEditorContainer;
}(_react.Component);

FormEditorContainer.propTypes = {
  editFormTitle: _propTypes2.default.func.isRequired,
  changeCurrentEditingField: _propTypes2.default.func.isRequired,
  currentPanelIndex: _propTypes2.default.number.isRequired,
  questionSets: _propTypes2.default.object,
  questionPanels: _propTypes2.default.object,
  panelHeader: _propTypes2.default.string,
  panelText: _propTypes2.default.string
};
FormEditorContainer.defaultProps = {
  currentPanelId: 'Select Page',
  currentPanelIndex: 0,
  questionPanels: null,
  questionSets: null,
  panelHeader: '',
  panelText: ''
};


function mapStateToProps(state, ownProps) {
  return {
    title: state.getIn(['form', 'title']),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
    currentPanelIndex: state.getIn(['form', 'currentPanelIndex']),
    questionPanels: state.getIn(['form', 'schema', 'questionPanels']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
    schema: state.getIn(['form', 'schema']),
    panelHeader: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentPanelIndex, 'panelHeader']),
    panelText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentPanelIndex, 'panelText'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField, editFormTitle: _winterfellFormBuilderActions.editFormTitle })(FormEditorContainer);

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