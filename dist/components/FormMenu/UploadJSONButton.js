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
      schema: '',
      fileName: ''
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
        _this2.setState({
          schema: JSON.parse(contents),
          fileName: file.name
        });
      };
      reader.readAsText(file);
    }
  }, {
    key: 'onJSONUpload',
    value: function onJSONUpload(e) {
      e.preventDefault();
      this.props.uploadJSON(this.state.schema, this.state.fileName);
      this.setState({ showModal: false });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return [_react2.default.createElement(
        'button',
        {
          className: 'btn btn-block btn-dark',
          'data-toggle': 'modal',
          'data-target': '#uploadJSON',
          key: 'uploadJSON',
          title: 'Upload Winterfell form'
        },
        _react2.default.createElement(
          'i',
          { 'class': 'material-icons' },
          'archive'
        ),
        _react2.default.createElement(
          'span',
          { className: 'icon-menu' },
          'Import'
        )
      ), _react2.default.createElement(
        'div',
        { className: 'modal fade', id: 'uploadJSON', tabIndex: '-1', key: 'uploadJSONModal' },
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
                'Upload a form'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'modal-body' },
              'Upload an existing Winterfell form.',
              _react2.default.createElement(
                'form',
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
                  onClick: this.onJSONUpload
                },
                'Continue'
              )
            )
          )
        )
      )];
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