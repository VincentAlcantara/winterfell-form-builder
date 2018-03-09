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

var PageEditor = function (_Component) {
  (0, _inherits3.default)(PageEditor, _Component);

  function PageEditor(props) {
    (0, _classCallCheck3.default)(this, PageEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PageEditor.__proto__ || (0, _getPrototypeOf2.default)(PageEditor)).call(this, props));

    var panelHeader = props.panelHeader,
        panelText = props.panelText;


    _this.state = {
      panelHeader: panelHeader,
      panelText: panelText
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onFormUpdate = _this.onFormUpdate.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(PageEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      console.log('nextProps', nextProps);
      this.state = {
        panelHeader: nextProps.panelHeader,
        panelText: nextProps.panelText
      };
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      event.preventDefault();
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
      this.props.editForm(event.target.value);
    }
  }, {
    key: 'onFormUpdate',
    value: function onFormUpdate(e) {
      e.preventDefault();
      this.props.editForm(this.state.formTitle);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _reactBootstrap.Row,
        null,
        _react2.default.createElement(
          'form',
          null,
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_FieldGroup2.default, {
              id: 'panelHeader',
              name: 'panelHeader',
              label: 'Page Header',
              onChange: this.onChange,
              placeholder: this.props.panelHeader,
              value: this.state.panelHeader
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_FieldGroup2.default, {
              id: 'panelText',
              name: 'panelText',
              label: 'Page Text',
              placeholder: 'low',
              onChange: this.onChange,
              value: this.state.panelText
            })
          )
        )
      );
    }
  }]);
  return PageEditor;
}(_react.Component);

PageEditor.propTypes = {
  editForm: _propTypes2.default.func.isRequired,
  panelHeader: _propTypes2.default.string,
  panelText: _propTypes2.default.string
};
PageEditor.defaultProps = {
  currentPanelIndex: 0,
  panelHeader: '',
  panelText: ''
};


function mapStateToProps(state, ownProps) {
  console.log('ownProps:', ownProps);
  console.log('panelHeader:', state.getIn(['form', 'schema', 'questionPanels', ownProps.currentPanelIndex, 'panelHeader']));

  return {
    panelHeader: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentPanelIndex, 'panelHeader']),
    panelText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentPanelIndex, 'panelText'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { editForm: _winterfellFormBuilderActions.editForm })(PageEditor);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageEditor, 'PageEditor', 'src/components/FieldEditors/PageEditor.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FieldEditors/PageEditor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FieldEditors/PageEditor.js');
}();

;