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

var _reactBootstrap = require('react-bootstrap');

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EditSchemaButton = function (_Component) {
  (0, _inherits3.default)(EditSchemaButton, _Component);

  function EditSchemaButton(props) {
    (0, _classCallCheck3.default)(this, EditSchemaButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EditSchemaButton.__proto__ || (0, _getPrototypeOf2.default)(EditSchemaButton)).call(this, props));

    console.log('schema1:', _this.props.schema);
    _this.state = {
      schema: _this.props.schema
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onFormUpdate = _this.onFormUpdate.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EditSchemaButton, [{
    key: 'onChange',
    value: function onChange(e) {
      this.setState({ schema: JSON.parse(e.target.value) });
    }
  }, {
    key: 'onFormUpdate',
    value: function onFormUpdate(e) {
      e.preventDefault();
      this.props.updateForm(this.state.schema);
      this.setState({ showModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          'div',
          { className: 'static-modal' },
          _react2.default.createElement(
            _reactBootstrap.Modal,
            { show: this.state.showModal },
            _react2.default.createElement(
              _reactBootstrap.Modal.Header,
              null,
              _react2.default.createElement(
                _reactBootstrap.Modal.Title,
                null,
                'Edit Schema'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Body,
              null,
              _react2.default.createElement(
                'form',
                null,
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement('textarea', {
                    rows: '30',
                    cols: '78',
                    value: (0, _stringify2.default)(this.state.schema, undefined, 2),
                    onChange: this.onChange
                  })
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Footer,
              null,
              _react2.default.createElement(
                _reactBootstrap.Button,
                {
                  bsStyle: 'danger',
                  onClick: function onClick() {
                    _this2.setState({ showModal: false });
                  }
                },
                'Cancel'
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                {
                  bsStyle: 'primary',
                  onClick: this.onFormUpdate
                },
                'Save changes'
              )
            )
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.Col,
          { xs: 12 },
          _react2.default.createElement(
            _reactBootstrap.Button,
            {
              className: 'btn btn-block btn-info',
              onClick: function onClick() {
                _this2.setState({
                  schema: _this2.props.schema,
                  showModal: true
                });
              }
            },
            'edit schema'
          )
        )
      );
    }
  }]);
  return EditSchemaButton;
}(_react.Component);

EditSchemaButton.propTypes = {
  schema: _propTypes2.default.object,
  updateForm: _propTypes2.default.func.isRequired
};
EditSchemaButton.defaultProps = {
  schema: {}
};


function mapStateToProps(state) {
  return {
    schema: state.getIn(['form', 'schema']).toJS()
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