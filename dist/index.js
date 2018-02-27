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

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _winterfell = require('winterfell');

var _winterfell2 = _interopRequireDefault(_winterfell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WinterfellFormBuilder = function (_Component) {
  (0, _inherits3.default)(WinterfellFormBuilder, _Component);

  function WinterfellFormBuilder(props) {
    (0, _classCallCheck3.default)(this, WinterfellFormBuilder);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WinterfellFormBuilder.__proto__ || (0, _getPrototypeOf2.default)(WinterfellFormBuilder)).call(this, props));

    _this.state = {
      schema: _this.props.schema
    };

    _this.onDomChange = _this.onDomChange.bind(_this);
    _this.onFormUpdate = _this.onFormUpdate.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(WinterfellFormBuilder, [{
    key: 'onDomChange',
    value: function onDomChange(e) {
      e.preventDefault();
      this.setState({ schema: JSON.parse(e.target.value) });
    }
  }, {
    key: 'onFormUpdate',
    value: function onFormUpdate(e) {
      e.preventDefault();
      this.setState({ schema: JSON.parse(e.target.value) });
    }
  }, {
    key: 'render',
    value: function render() {
      var onRender = function onRender() {
        console.log('Great news! Winterfell rendered successfully');
      };

      var onUpdate = function onUpdate(questionAnswers) {
        console.log('Question Updated! The current set of answers is: ', questionAnswers);
      };

      var onSwitchPanel = function onSwitchPanel(panel) {
        console.log('Moving on to the panel that is identified as ' + panel.panelId);
      };

      var onSubmit = function onSubmit(questionAnswers) {
        console.log('Form submitted!', questionAnswers);
        console.log('-----');
        console.log('For this example, we disabled normal form submission functionality. ');
        console.log('-----');
        alert('Submitted. Check the console to see the answers!');
      };
      return _react2.default.createElement(
        'div',
        { className: 'grid' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-6 col-xs-offset-3' },
            _react2.default.createElement(_winterfell2.default, {
              schema: this.props.schema,
              onRender: onRender,
              onUpdate: onUpdate,
              onSwitchPanel: onSwitchPanel,
              onSubmit: onSubmit
            })
          )
        )
      );
    }
  }]);
  return WinterfellFormBuilder;
}(_react.Component);

WinterfellFormBuilder.propTypes = {
  schema: _propTypes2.default.object
};
WinterfellFormBuilder.defaultProps = {
  panelId: '',
  schema: {}
};


function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {})(WinterfellFormBuilder);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(WinterfellFormBuilder, 'WinterfellFormBuilder', 'src/index.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/index.js');
}();

;