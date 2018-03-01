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

var _reactBootstrap = require('react-bootstrap');

var _winterfellFormBuilderActions = require('../actions/winterfellFormBuilderActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pagination = function (_Component) {
  (0, _inherits3.default)(Pagination, _Component);

  function Pagination() {
    (0, _classCallCheck3.default)(this, Pagination);
    return (0, _possibleConstructorReturn3.default)(this, (Pagination.__proto__ || (0, _getPrototypeOf2.default)(Pagination)).apply(this, arguments));
  }

  (0, _createClass3.default)(Pagination, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          schema = _props.schema,
          currentPanelId = _props.currentPanelId;


      var getPages = function getPages() {
        return schema.formPanels.map(function (panel, index) {
          return _react2.default.createElement(
            _reactBootstrap.MenuItem,
            {
              key: index + '-' + panel.panelId,
              onClick: function onClick() {
                _this2.props.goToPage(panel.panelId);
              }
            },
            panel.panelId
          );
        });
      };

      return _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          _react2.default.createElement(
            _reactBootstrap.DropdownButton,
            {
              id: 'pagination',
              title: currentPanelId
            },
            schema.formPanels && getPages()
          )
        )
      );
    }
  }]);
  return Pagination;
}(_react.Component);

Pagination.propTypes = {
  goToPage: _propTypes2.default.func.isRequired,
  schema: _propTypes2.default.object.isRequired,
  currentPanelId: _propTypes2.default.string.isRequired
};


function mapStateToProps(state) {
  return {
    schema: state.getIn(['form', 'schema']).toJS(),
    currentPanelId: state.getIn(['form', 'currentPanelId'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { goToPage: _winterfellFormBuilderActions.goToPage })(Pagination);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Pagination, 'Pagination', 'src/components/Pagination.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/Pagination.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Pagination.js');
}();

;