'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Pagination(props) {
  var currentPanelId = props.currentPanelId,
      formPanels = props.formPanels,
      _onClick = props.onClick;

  var getPages = function getPages() {
    return formPanels.map(function (panel, index) {
      return _react2.default.createElement(
        'button',
        {
          key: index + '-' + panel,
          onClick: function onClick() {
            _onClick(panel);
          },
          className: 'dropdown-item'
        },
        panel
      );
    });
  };

  return _react2.default.createElement(
    'div',
    { className: 'dropdown' },
    _react2.default.createElement(
      'button',
      {
        id: 'pagination',
        title: currentPanelId || 'Select Page',
        className: 'btn btn-secondary btn-block dropdown-toggle h-100 text-left',
        type: 'button',
        'data-toggle': 'dropdown',
        'aria-haspopup': 'true',
        'aria-expanded': 'false'
      },
      'Quick link to page'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      'div',
      { className: 'dropdown-menu', 'aria-labelledby': 'dropdownMenuButton' },
      formPanels && getPages()
    )
  );
}

Pagination.propTypes = {
  formPanels: _propTypes2.default.object.isRequired,
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