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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var onRenderDefault = function onRenderDefault() {
  console.log('Great news! Winterfell rendered successfully');
};

var onUpdateDefault = function onUpdateDefault(questionAndAnswers) {
  console.log('Question Updated! The current set of answers is: ', questionAndAnswers);
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

  function Previewer() {
    (0, _classCallCheck3.default)(this, Previewer);
    return (0, _possibleConstructorReturn3.default)(this, (Previewer.__proto__ || (0, _getPrototypeOf2.default)(Previewer)).apply(this, arguments));
  }

  (0, _createClass3.default)(Previewer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          schema = _props.schema,
          currentPanelId = _props.currentPanelId,
          onRender = _props.onRender,
          onUpdate = _props.onUpdate,
          onSwitchPanel = _props.onSwitchPanel,
          onSubmit = _props.onSubmit,
          questionAnswers = _props.questionAnswers;


      var displayWinterFellForm = function displayWinterFellForm() {
        return schema.formPanels.map(function (formPanel, index) {
          return formPanel.panelId === currentPanelId && _react2.default.createElement(_winterfell2.default, {
            schema: schema,
            disableSubmit: true,
            onRender: onRender,
            onUpdate: onUpdate,
            onSwitchPanel: onSwitchPanel,
            onSubmit: onSubmit,
            questionAnswers: questionAnswers,
            panelId: currentPanelId,
            key: index
          }) || currentPanelId === 'Select Page' && _react2.default.createElement(_winterfell2.default, {
            schema: schema,
            disableSubmit: true,
            onRender: onRender,
            onUpdate: onUpdate,
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
  onUpdate: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  onSwitchPanel: _propTypes2.default.func,
  questionAnswers: _propTypes2.default.object
};
Previewer.defaultProps = {
  currentPanelId: null,
  schema: {},
  onRender: onRenderDefault,
  onUpdate: onUpdateDefault,
  onSubmit: onSubmitDefault,
  onSwitchPanel: onSwitchPanelDefault,
  questionAnswers: {}
};
var _default = Previewer;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(onRenderDefault, 'onRenderDefault', 'src/components/Previewer.js');

  __REACT_HOT_LOADER__.register(onUpdateDefault, 'onUpdateDefault', 'src/components/Previewer.js');

  __REACT_HOT_LOADER__.register(onSwitchPanelDefault, 'onSwitchPanelDefault', 'src/components/Previewer.js');

  __REACT_HOT_LOADER__.register(onSubmitDefault, 'onSubmitDefault', 'src/components/Previewer.js');

  __REACT_HOT_LOADER__.register(Previewer, 'Previewer', 'src/components/Previewer.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Previewer.js');
}();

;