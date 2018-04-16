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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _winterfell = require('winterfell');

var _winterfell2 = _interopRequireDefault(_winterfell);

var _reactBootstrap = require('react-bootstrap');

var _reactRedux = require('react-redux');

var _winterfellFormBuilderActions = require('../actions/winterfellFormBuilderActions');

var _dateInputType = require('../components/InputTypes/dateInputType');

var _dateInputType2 = _interopRequireDefault(_dateInputType);

var _addressInputType = require('../components/InputTypes/addressInputType');

var _addressInputType2 = _interopRequireDefault(_addressInputType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onRenderDefault = function onRenderDefault() {
  console.log('Great news! Winterfell rendered successfully');
};

var onSwitchPanelDefault = function onSwitchPanelDefault(panel) {
  console.log('Moving on to the panel that is identified as ' + panel.panelId);
};

var onSubmitDefault = function onSubmitDefault(questionAndAnswers, target) {
  console.log('Form submitted!', questionAndAnswers);
  console.log('-----');
  console.log('For this example, we disabled normal form submission functionality. ');
  console.log('-----');
  console.log('Target: ', target);
  console.log('-----');
  alert('Submitted. Check the console to see the answers!');
};

var Previewer = function (_Component) {
  (0, _inherits3.default)(Previewer, _Component);

  function Previewer(props) {
    (0, _classCallCheck3.default)(this, Previewer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Previewer.__proto__ || (0, _getPrototypeOf2.default)(Previewer)).call(this, props));

    _this.onUpdateQuestionAnswers = function () {
      return _this.__onUpdateQuestionAnswers__REACT_HOT_LOADER__.apply(_this, arguments);
    };

    _this.onUpdateQuestionAnswers = _this.onUpdateQuestionAnswers.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(Previewer, [{
    key: '__onUpdateQuestionAnswers__REACT_HOT_LOADER__',
    value: function __onUpdateQuestionAnswers__REACT_HOT_LOADER__() {
      return this.__onUpdateQuestionAnswers__REACT_HOT_LOADER__.apply(this, arguments);
    }
  }, {
    key: '__onUpdateQuestionAnswers__REACT_HOT_LOADER__',
    value: function __onUpdateQuestionAnswers__REACT_HOT_LOADER__(questionAndAnswers) {
      console.log('Question Updated! The current set of answers is: ', questionAndAnswers);
      this.props.updateQuestionAnswers(questionAndAnswers);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          schema = _props.schema,
          currentPanelId = _props.currentPanelId,
          onRender = _props.onRender,
          onSwitchPanel = _props.onSwitchPanel,
          onSubmit = _props.onSubmit,
          questionAnswers = _props.questionAnswers;


      _winterfell2.default.addInputTypes({ dateInput: _dateInputType2.default, addressInput: _addressInputType2.default });
      var displayWinterFellForm = function displayWinterFellForm() {
        return schema.formPanels.map(function (formPanel, index) {
          return formPanel.panelId === currentPanelId && _react2.default.createElement(_winterfell2.default, {
            schema: schema,
            disableSubmit: true,
            onRender: onRender,
            onUpdate: _this2.onUpdateQuestionAnswers,
            onSwitchPanel: onSwitchPanel,
            onSubmit: onSubmit,
            questionAnswers: questionAnswers,
            panelId: currentPanelId,
            key: index
          }) || currentPanelId === 'Select Page' && _react2.default.createElement(_winterfell2.default, {
            schema: schema,
            disableSubmit: true,
            onRender: onRender,
            onUpdate: _this2.onUpdate,
            onSwitchPanel: onSwitchPanel,
            onSubmit: onSubmit,
            questionAnswers: questionAnswers
          });
        });
      };

      return _react2.default.createElement(
        _reactBootstrap.Row,
        { className: 'winterfell-form-builer-previewer' },
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          schema && schema.formPanels && schema.formPanels.length > 0 && currentPanelId && currentPanelId !== 'Select Page' && displayWinterFellForm()
        )
      );
    }
  }]);
  return Previewer;
}(_react.Component);

Previewer.propTypes = {
  currentPanelId: _propTypes2.default.string,
  schema: _propTypes2.default.object.isRequired,
  onRender: _propTypes2.default.func,
  updateQuestionAnswers: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onSwitchPanel: _propTypes2.default.func,
  questionAnswers: _propTypes2.default.object
};
Previewer.defaultProps = {
  currentPanelId: null,
  schema: {},
  onRender: onRenderDefault,
  onSubmit: onSubmitDefault,
  onSwitchPanel: onSwitchPanelDefault,
  questionAnswers: {},
  onUpdate: function onUpdate() {},
  updateQuestionAnswers: function updateQuestionAnswers() {}
};

var _default = (0, _reactRedux.connect)(null, { updateQuestionAnswers: _winterfellFormBuilderActions.updateQuestionAnswers })(Previewer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(onRenderDefault, 'onRenderDefault', 'src/components/Previewer.js');

  __REACT_HOT_LOADER__.register(onSwitchPanelDefault, 'onSwitchPanelDefault', 'src/components/Previewer.js');

  __REACT_HOT_LOADER__.register(onSubmitDefault, 'onSubmitDefault', 'src/components/Previewer.js');

  __REACT_HOT_LOADER__.register(Previewer, 'Previewer', 'src/components/Previewer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Previewer.js');
}();

;