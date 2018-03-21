'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pagination(props) {
  var currentPanelId = props.currentPanelId,
      formPanels = props.formPanels,
      _onClick = props.onClick;

  var getPages = function getPages() {
    return formPanels.map(function (panel, index) {
      return _react2.default.createElement(
        _reactBootstrap.MenuItem,
        {
          key: index + '-' + panel.panelId,
          onClick: function onClick() {
            _onClick(panel.panelId);
          },
          className: 'btn-block'
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
        _reactBootstrap.FormGroup,
        null,
        _react2.default.createElement(
          'label',
          { htmlFor: 'pagination', style: { display: 'block' } },
          'Page'
        ),
        _react2.default.createElement(
          _reactBootstrap.DropdownButton,
          {
            id: 'pagination',
            title: currentPanelId || 'Select Page',
            className: 'btn-block'
          },
          formPanels && getPages()
        )
      )
    )
  );
}

Pagination.propTypes = {
  formPanels: _propTypes2.default.array.isRequired,
  currentPanelId: _propTypes2.default.string,
  onClick: _propTypes2.default.func.isRequired
};

Pagination.defaultProps = {
  currentPanelId: 'Select Page'
};

var _default = Pagination;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Pagination, 'Pagination', 'src/components/Pagination.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/Pagination.js');
}();

;