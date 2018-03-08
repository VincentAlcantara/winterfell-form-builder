'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _winterfellFormBuilderActions = require('../actions/winterfellFormBuilderActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pagination(props) {
  var currentPanelId = props.currentPanelId,
      formPanels = props.formPanels;


  var getPages = function getPages() {
    return formPanels.map(function (panel, index) {
      return _react2.default.createElement(
        _reactBootstrap.MenuItem,
        {
          key: index + '-' + panel.panelId,
          onClick: function onClick() {
            props.goToPage(panel.panelId);
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
        formPanels && getPages()
      )
    )
  );
}

function mapStateToProps(state) {
  return {
    formPanels: state.getIn(['form', 'schema', 'formPanels']).toJS(),
    currentPanelId: state.getIn(['form', 'currentPanelId'])
  };
}

Pagination.propTypes = {
  formPanels: _propTypes2.default.array.isRequired,
  currentPanelId: _propTypes2.default.string.isRequired
};

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