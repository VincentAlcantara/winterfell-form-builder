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

var _SelectInput = require('../InputTypes/SelectInput');

var _SelectInput2 = _interopRequireDefault(_SelectInput);

var _FieldGroup = require('../InputTypes/FieldGroup');

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonBarEditor = function (_PureComponent) {
  (0, _inherits3.default)(ButtonBarEditor, _PureComponent);

  function ButtonBarEditor(props) {
    (0, _classCallCheck3.default)(this, ButtonBarEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ButtonBarEditor.__proto__ || (0, _getPrototypeOf2.default)(ButtonBarEditor)).call(this, props));

    var backButtonText = props.backButtonText,
        nextButtonText = props.nextButtonText,
        defaultGoToAction = props.defaultGoToAction,
        defaultGoToTarget = props.defaultGoToTarget;


    _this.state = {
      backButtonText: backButtonText,
      nextButtonText: nextButtonText,
      defaultGoToAction: defaultGoToAction,
      defaultGoToTarget: defaultGoToTarget
    };

    _this.onChangeBackButtonText = _this.onChangeBackButtonText.bind(_this);
    _this.onChangeNextButtonText = _this.onChangeNextButtonText.bind(_this);
    _this.onChangeNextButtonTargetText = _this.onChangeNextButtonTargetText.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.onSelectDefaultAction = _this.onSelectDefaultAction.bind(_this);
    _this.onSelectDefaultTarget = _this.onSelectDefaultTarget.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(ButtonBarEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.state = {
        backButtonText: nextProps.backButtonText,
        nextButtonText: nextProps.nextButtonText,
        defaultGoToAction: nextProps.defaultGoToAction,
        defaultGoToTarget: nextProps.defaultGoToTarget
      };
    }
  }, {
    key: 'onChangeBackButtonText',
    value: function onChangeBackButtonText(event) {
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
      this.props.editBackButtonText(this.props.currentQuestionPanelIndex, event.target.value);
    }
  }, {
    key: 'onChangeNextButtonText',
    value: function onChangeNextButtonText(event) {
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
      this.props.editNextButtonText(this.props.currentQuestionPanelIndex, event.target.value);
    }
  }, {
    key: 'onChangeNextButtonTargetText',
    value: function onChangeNextButtonTargetText(event) {
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
      this.props.onSelectNextButtonTarget(this.props.currentQuestionPanelIndex, event.target.value);
    }
  }, {
    key: 'onClick',
    value: function onClick(questionSetId) {
      var questionSetIndex = this.props.formPanels.findIndex(function (questionSet) {
        return questionSet.get('questionSetId') === questionSetId;
      });
      this.props.onSelectNextButtonAction('questionSet', questionSetIndex);
    }
  }, {
    key: 'onSelectDefaultAction',
    value: function onSelectDefaultAction(action) {
      this.setState({ defaultGoToAction: action });
      this.props.onSelectNextButtonAction(this.props.currentQuestionPanelIndex, action);
    }
  }, {
    key: 'onSelectDefaultTarget',
    value: function onSelectDefaultTarget(target) {
      this.setState({ defaultGoToTarget: target });
      this.props.onSelectNextButtonTarget(this.props.currentQuestionPanelIndex, target);
    }
  }, {
    key: 'render',
    value: function render() {
      var formPanelIds = this.props.formPanels.toJS().map(function (formPanel) {
        return {
          text: formPanel.panelId,
          value: formPanel.panelId
        };
      });

      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_FieldGroup2.default, {
            id: 'backButtonText',
            name: 'backButtonText',
            label: 'Back Button Text',
            onChange: this.onChangeBackButtonText,
            placeholder: this.props.backButtonText,
            value: this.state.backButtonText
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_FieldGroup2.default, {
            id: 'nextButtonText',
            name: 'nextButtonText',
            label: 'Next Button Text',
            placeholder: this.props.nextButtonText,
            onChange: this.onChangeNextButtonText,
            value: this.state.nextButtonText
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: 'goToAction' },
            'Default Next Button Option'
          ),
          _react2.default.createElement(_SelectInput2.default, {
            id: 'goToAction',
            labelId: 'goToAction',
            options: [{
              text: 'SUBMIT',
              value: 'SUBMIT'
            }, {
              text: 'GOTO',
              value: 'GOTO'
            }],
            onSelect: this.onSelectDefaultAction,
            initialValue: this.props.defaultGoToAction
          })
        ),
        this.state.defaultGoToAction === 'GOTO' && _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: 'goToPanel' },
            'Default Next Button Target'
          ),
          _react2.default.createElement(_SelectInput2.default, {
            id: 'goToPanel',
            labelId: 'goToPanel',
            options: formPanelIds,
            onSelect: this.onSelectDefaultTarget,
            initialValue: this.props.defaultGoToTarget
          })
        ),
        this.state.defaultGoToAction === 'SUBMIT' && _react2.default.createElement(_FieldGroup2.default, {
          id: 'defaultGoToTarget',
          name: 'defaultGoToTarget',
          label: 'Submit Target',
          placeholder: this.props.defaultGoToTarget,
          onChange: this.onChangeNextButtonTargetText,
          value: this.state.defaultGoToTarget
        })
      );
    }
  }]);
  return ButtonBarEditor;
}(_react.PureComponent);

ButtonBarEditor.propTypes = {
  editNextButtonText: _propTypes2.default.func.isRequired,
  editBackButtonText: _propTypes2.default.func.isRequired,
  onSelectNextButtonAction: _propTypes2.default.func.isRequired,
  onSelectNextButtonTarget: _propTypes2.default.func.isRequired,
  backButtonText: _propTypes2.default.string,
  nextButtonText: _propTypes2.default.string,
  formPanels: _propTypes2.default.object,
  currentQuestionPanelIndex: _propTypes2.default.number.isRequired,
  defaultGoToAction: _propTypes2.default.string,
  defaultGoToTarget: _propTypes2.default.string
};
ButtonBarEditor.defaultProps = {
  currentQuestionPanelIndex: 0,
  backButtonText: '',
  nextButtonText: '',
  formPanels: (0, _immutable.fromJS)({}),
  defaultGoToAction: '',
  defaultGoToTarget: ''
};


function mapStateToProps(state, ownProps) {
  return {
    backButtonText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'backButton', 'text']),
    nextButtonText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'button', 'text']),
    defaultAction: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'default']),
    conditionalActions: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'conditions']),
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    defaultGoToAction: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'default', 'action']),
    defaultGoToTarget: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'action', 'default', 'target'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  editNextButtonText: _winterfellFormBuilderActions.editNextButtonText,
  editBackButtonText: _winterfellFormBuilderActions.editBackButtonText,
  onSelectNextButtonAction: _winterfellFormBuilderActions.onSelectNextButtonAction,
  onSelectNextButtonTarget: _winterfellFormBuilderActions.onSelectNextButtonTarget
})(ButtonBarEditor);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ButtonBarEditor, 'ButtonBarEditor', 'src/components/FieldEditor/ButtonBarEditor.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FieldEditor/ButtonBarEditor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FieldEditor/ButtonBarEditor.js');
}();

;