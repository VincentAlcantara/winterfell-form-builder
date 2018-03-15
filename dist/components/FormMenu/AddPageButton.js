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

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

var _FieldGroup = require('../UI/FieldGroup');

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddPageButton = function (_Component) {
  (0, _inherits3.default)(AddPageButton, _Component);

  function AddPageButton(props) {
    (0, _classCallCheck3.default)(this, AddPageButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AddPageButton.__proto__ || (0, _getPrototypeOf2.default)(AddPageButton)).call(this, props));

    _this.state = {
      showModal: false,
      panelId: '',
      panelHeader: '',
      panelText: ''
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onFormUpdate = _this.onFormUpdate.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(AddPageButton, [{
    key: 'onChange',
    value: function onChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'onClose',
    value: function onClose(e) {
      e.preventDefault();
      this.setState({ showModal: true });
    }
  }, {
    key: 'onFormUpdate',
    value: function onFormUpdate(e) {
      e.preventDefault();
      this.props.addPage(this.state.panelId, this.state.panelHeader, this.state.panelText);
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
                'Add a new page to the form'
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
                  _react2.default.createElement(_FieldGroup2.default, {
                    id: 'panelId',
                    name: 'panelId',
                    label: 'Page ID',
                    onChange: this.onChange,
                    placeholder: '(optional)',
                    value: this.state.panelId
                  })
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(_FieldGroup2.default, {
                    id: 'panelHeader',
                    name: 'panelHeader',
                    label: 'Page Title',
                    onChange: this.onChange,
                    placeholder: '',
                    value: this.state.panelHeader
                  })
                ),
                _react2.default.createElement(
                  _reactBootstrap.FormGroup,
                  null,
                  _react2.default.createElement(_FieldGroup2.default, {
                    id: 'panelText',
                    name: 'panelText',
                    label: 'Enter Page Description',
                    onChange: this.onChange,
                    placeholder: '',
                    value: this.state.panelText
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
                _this2.setState({ showModal: true });
              }
            },
            'add page'
          )
        )
      );
    }
  }]);
  return AddPageButton;
}(_react.Component);

AddPageButton.propTypes = {
  addPage: _propTypes2.default.func.isRequired
};


function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'currentForm', 'title'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { addPage: _winterfellFormBuilderActions.addPage })(AddPageButton);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AddPageButton, 'AddPageButton', 'src/components/FormMenu/AddPageButton.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FormMenu/AddPageButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormMenu/AddPageButton.js');
}();

;