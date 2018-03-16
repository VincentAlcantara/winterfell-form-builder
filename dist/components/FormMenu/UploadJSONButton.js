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

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UploadJSONButton = function (_Component) {
  (0, _inherits3.default)(UploadJSONButton, _Component);

  function UploadJSONButton(props) {
    (0, _classCallCheck3.default)(this, UploadJSONButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (UploadJSONButton.__proto__ || (0, _getPrototypeOf2.default)(UploadJSONButton)).call(this, props));

    _this.state = {
      showModal: false,
      schema: ''
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onJSONUpload = _this.onJSONUpload.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(UploadJSONButton, [{
    key: 'onChange',
    value: function onChange(event) {
      var _this2 = this;

      event.preventDefault();
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = function (e) {
        var contents = e.target.result;
        console.log('contents', JSON.parse(contents));
        _this2.setState({ schema: JSON.parse(contents) });
      };
      reader.readAsText(file);
    }
  }, {
    key: 'onJSONUpload',
    value: function onJSONUpload(e) {
      e.preventDefault();
      this.props.uploadJSON(this.state.schema);
      this.setState({ showModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

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
                'Open a form'
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
                  _react2.default.createElement('label', {
                    htmlFor: 'jsonUpload'
                  }),
                  _react2.default.createElement('input', {
                    name: 'schema',
                    id: 'jsonUpload',
                    type: 'file',
                    onChange: function onChange(e) {
                      return _this3.onChange(e);
                    }
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
                    _this3.setState({ showModal: false });
                  }
                },
                'Cancel'
              ),
              _react2.default.createElement(
                _reactBootstrap.Button,
                {
                  bsStyle: 'primary',
                  onClick: this.onJSONUpload
                },
                'Upload'
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
                _this3.setState({ showModal: true });
              }
            },
            'open form'
          )
        )
      );
    }
  }]);
  return UploadJSONButton;
}(_react.Component);

UploadJSONButton.propTypes = {
  uploadJSON: _propTypes2.default.func.isRequired
};


function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'currentForm', 'title'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { uploadJSON: _winterfellFormBuilderActions.uploadJSON })(UploadJSONButton);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(UploadJSONButton, 'UploadJSONButton', 'src/components/FormMenu/UploadJSONButton.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FormMenu/UploadJSONButton.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FormMenu/UploadJSONButton.js');
}();

;