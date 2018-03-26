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

var _PageSelector = require('./PageSelector');

var _PageSelector2 = _interopRequireDefault(_PageSelector);

var _QuestionSetSelector = require('./QuestionSetSelector');

var _QuestionSetSelector2 = _interopRequireDefault(_QuestionSetSelector);

var _ButtonBarSelector = require('./ButtonBarSelector');

var _ButtonBarSelector2 = _interopRequireDefault(_ButtonBarSelector);

var _PageSortSelector = require('./PageSortSelector');

var _PageSortSelector2 = _interopRequireDefault(_PageSortSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FieldSelectorContainer = function (_Component) {
  (0, _inherits3.default)(FieldSelectorContainer, _Component);

  function FieldSelectorContainer(props) {
    (0, _classCallCheck3.default)(this, FieldSelectorContainer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (FieldSelectorContainer.__proto__ || (0, _getPrototypeOf2.default)(FieldSelectorContainer)).call(this, props));

    _this.state = {
      currentPanel: null,
      currentQuestionSets: []
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onFormUpdate = _this.onFormUpdate.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(FieldSelectorContainer, [{
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
          currentQuestionPanelIndex = _props.currentQuestionPanelIndex,
          questionPanels = _props.questionPanels,
          questionSets = _props.questionSets,
          panelHeader = _props.panelHeader,
          panelText = _props.panelText,
          currentQuestionSetIndex = _props.currentQuestionSetIndex,
          currentQuestionIndex = _props.currentQuestionIndex,
          backButton = _props.backButton,
          nextButton = _props.nextButton,
          currentEditingField = _props.currentEditingField;

      var questionPanelsArray = questionPanels && questionPanels.toJS();
      var questionSetsArray = questionSets && questionSets.toJS();
      return _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          currentEditingField === 'pageSort' && _react2.default.createElement(_PageSortSelector2.default, null),
          currentEditingField !== 'pageSort' && _react2.default.createElement(
            'form',
            null,
            typeof currentQuestionPanelIndex !== 'undefined' && _react2.default.createElement(_PageSelector2.default, {
              panelHeader: panelHeader,
              panelText: panelText,
              onClick: function onClick() {
                return _this2.props.changeCurrentEditingField('page', currentQuestionSetIndex, currentQuestionIndex);
              }
            }),
            typeof currentQuestionPanelIndex !== 'undefined' && questionPanelsArray && _react2.default.createElement(_QuestionSetSelector2.default, {
              currentQuestionSets: questionPanelsArray[currentQuestionPanelIndex].questionSets,
              questionSets: questionSetsArray,
              onClick: this.props.changeCurrentEditingField,
              currentQuestionIndex: this.props.currentQuestionIndex
            }),
            typeof currentQuestionPanelIndex !== 'undefined' && _react2.default.createElement(_ButtonBarSelector2.default, {
              backButton: backButton,
              nextButton: nextButton,
              onClick: function onClick() {
                return _this2.props.changeCurrentEditingField('buttons', currentQuestionSetIndex, currentQuestionIndex);
              }
            })
          )
        )
      );
    }
  }]);
  return FieldSelectorContainer;
}(_react.Component);

FieldSelectorContainer.propTypes = {
  editFormTitle: _propTypes2.default.func.isRequired,
  changeCurrentEditingField: _propTypes2.default.func.isRequired,
  currentQuestionPanelIndex: _propTypes2.default.number.isRequired,
  currentEditingField: _propTypes2.default.string.isRequired,
  currentQuestionSetIndex: _propTypes2.default.number,
  currentQuestionIndex: _propTypes2.default.number,
  questionSets: _propTypes2.default.object,
  questionPanels: _propTypes2.default.object,
  panelHeader: _propTypes2.default.string,
  panelText: _propTypes2.default.string,
  backButton: _propTypes2.default.string,
  nextButton: _propTypes2.default.string
};
FieldSelectorContainer.defaultProps = {
  currentPanelId: 'Select Page',
  currentQuestionPanelIndex: 0,
  questionPanels: null,
  questionSets: null,
  panelHeader: '',
  panelText: '',
  backButton: '',
  nextButton: '',
  currentQuestionSetIndex: 0,
  currentQuestionIndex: 0
};


function mapStateToProps(state, ownProps) {
  return {
    title: state.getIn(['form', 'title']),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
    currentEditingField: state.getIn(['form', 'currentEditingField']),
    currentQuestionPanelIndex: state.getIn(['form', 'currentQuestionPanelIndex']),
    questionPanels: state.getIn(['form', 'schema', 'questionPanels']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
    schema: state.getIn(['form', 'schema']),
    panelHeader: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelHeader']),
    panelText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelText']),
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    nextButton: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'button', 'text']),
    backButton: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'backButton', 'text'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField, editFormTitle: _winterfellFormBuilderActions.editFormTitle })(FieldSelectorContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(FieldSelectorContainer, 'FieldSelectorContainer', 'src/components/FieldSelector/index.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FieldSelector/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FieldSelector/index.js');
}();

;