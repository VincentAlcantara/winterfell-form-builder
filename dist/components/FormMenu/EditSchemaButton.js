'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _reactRedux = require('react-redux');

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditSchemaButton = function (_Component) {
  (0, _inherits3.default)(EditSchemaButton, _Component);

  function EditSchemaButton(props) {
    (0, _classCallCheck3.default)(this, EditSchemaButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EditSchemaButton.__proto__ || (0, _getPrototypeOf2.default)(EditSchemaButton)).call(this, props));

    _this.state = {
      schema: _this.props.schema
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onFormUpdate = _this.onFormUpdate.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EditSchemaButton, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.state = {
        schema: nextProps.schema
      };
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      this.setState({ schema: JSON.parse(e.target.value) });
    }
  }, {
    key: 'onFormUpdate',
    value: function onFormUpdate(e) {
      e.preventDefault();
      this.props.updateForm(this.state.schema);
    }
  }, {
    key: 'render',
    value: function render() {
      return [_react2.default.createElement(
        'button',
        {
          className: 'btn btn-block btn-dark',
          'data-toggle': 'modal',
          'data-target': '#editSchema',
          key: 'editSchema',
          title: 'Edit Schema'
        },
        _react2.default.createElement(
          'i',
          { className: 'material-icons' },
          'view_agenda'
        ),
        _react2.default.createElement(
          'span',
          { className: 'icon-menu' },
          'Schema'
        )
      ), _react2.default.createElement(
        'div',
        { className: 'modal fade', id: 'editSchema', tabIndex: '-1', key: 'editSchemaModal' },
        _react2.default.createElement(
          'div',
          { className: 'modal-dialog bg-white' },
          _react2.default.createElement(
            'div',
            { className: 'modal-content' },
            _react2.default.createElement(
              'div',
              { className: 'modal-header' },
              _react2.default.createElement(
                'div',
                { className: 'modal-title' },
                'Edit Schema'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'modal-body' },
              _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement('textarea', {
                  rows: '30',
                  cols: '50',
                  value: (0, _stringify2.default)(this.state.schema, undefined, 2),
                  onChange: this.onChange
                })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'modal-footer' },
              _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-danger',
                  'data-dismiss': 'modal'
                },
                'Cancel'
              ),
              _react2.default.createElement(
                'button',
                {
                  className: 'btn btn-dark',
                  onClick: this.onFormUpdate,
                  'data-dismiss': 'modal'
                },
                'Save changes'
              )
            )
          )
        )
      )];
    }
  }]);
  return EditSchemaButton;
}(_react.Component);

EditSchemaButton.propTypes = {
  updateForm: _propTypes2.default.func.isRequired,
  schema: _propTypes2.default.object
};
EditSchemaButton.defaultProps = {
  schema: null
};


EditSchemaButton.propTypes = {
  updateForm: _propTypes2.default.func.isRequired
};

EditSchemaButton.defaultProps = {
  schema: null
};

function mapStateToProps(state) {
  return {
    schema: state.getIn(['form', 'schema'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { updateForm: _winterfellFormBuilderActions.updateForm })(EditSchemaButton);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EditSchemaButton, 'EditSchemaButton', 'src/components/FormMenu/EditSchemaButton.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FormMenu/EditSchemaButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormMenu/EditSchemaButton.js');
}();

;