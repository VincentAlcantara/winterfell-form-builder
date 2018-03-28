'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

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

var _reactFileDownload = require('react-file-download');

var _reactFileDownload2 = _interopRequireDefault(_reactFileDownload);

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

var _FieldGroup = require('../InputTypes/FieldGroup');

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SaveFormButton = function (_Component) {
  (0, _inherits3.default)(SaveFormButton, _Component);

  function SaveFormButton(props) {
    (0, _classCallCheck3.default)(this, SaveFormButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (SaveFormButton.__proto__ || (0, _getPrototypeOf2.default)(SaveFormButton)).call(this, props));

    _this.state = {
      showModal: false,
      filename: _this.props.title
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onJSONSave = _this.onJSONSave.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(SaveFormButton, [{
    key: 'onChange',
    value: function onChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: 'onJSONSave',
    value: function onJSONSave(e) {
      e.preventDefault();
      (0, _reactFileDownload2.default)((0, _stringify2.default)(this.props.schema.toJS()), this.state.filename);
      this.props.saveJSON(this.props.schema.toJS(), this.state.filename);
      this.setState({ showModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _reactBootstrap.Button,
        {
          className: 'btn btn-block btn-primary',
          onClick: function onClick() {
            _this2.setState({ showModal: true });
          }
        },
        'save form',
        _react2.default.createElement(
          _reactBootstrap.Modal,
          { show: this.state.showModal },
          _react2.default.createElement(
            _reactBootstrap.Modal.Header,
            null,
            _react2.default.createElement(
              _reactBootstrap.Modal.Title,
              null,
              'Save form'
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
                  id: 'filename',
                  name: 'filename',
                  label: 'Enter title of the form',
                  onChange: this.onChange,
                  placeholder: this.props.title,
                  value: this.state.filename
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
                onClick: this.onJSONSave,
                disabled: !this.state.filename
              },
              'Save'
            )
          )
        )
      );
    }
  }]);
  return SaveFormButton;
}(_react.Component);

SaveFormButton.propTypes = {
  saveJSON: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.string.isRequired,
  schema: _propTypes2.default.object.isRequired
};


function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
    schema: state.getIn(['form', 'schema'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { saveJSON: _winterfellFormBuilderActions.saveJSON })(SaveFormButton);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SaveFormButton, 'SaveFormButton', 'src/components/FormMenu/SaveFormButton.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FormMenu/SaveFormButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormMenu/SaveFormButton.js');
}();

;