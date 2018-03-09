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

var _winterfellFormBuilderActions = require('../actions/winterfellFormBuilderActions');

var _Pagination = require('./Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Previewer = require('./Previewer');

var _Previewer2 = _interopRequireDefault(_Previewer);

var _FormMenu = require('./FormMenu');

var _FormEditor = require('./FormEditor');

var _FormEditor2 = _interopRequireDefault(_FormEditor);

var _FieldEditors = require('./FieldEditors');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WinterfellFormBuilder = function (_Component) {
  (0, _inherits3.default)(WinterfellFormBuilder, _Component);

  function WinterfellFormBuilder(props) {
    (0, _classCallCheck3.default)(this, WinterfellFormBuilder);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WinterfellFormBuilder.__proto__ || (0, _getPrototypeOf2.default)(WinterfellFormBuilder)).call(this, props));

    _this.onDomChange = _this.onDomChange.bind(_this);
    _this.onFormUpdate = _this.onFormUpdate.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(WinterfellFormBuilder, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var inputSchema = this.props.inputSchema;

      this.props.loadForm(inputSchema);
    }
  }, {
    key: 'onDomChange',
    value: function onDomChange(e) {
      e.preventDefault();
      this.setState({ schema: JSON.parse(e.target.value) });
    }
  }, {
    key: 'onFormUpdate',
    value: function onFormUpdate(e) {
      e.preventDefault();
      this.setState({ schema: JSON.parse(e.target.value) });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          title = _props.title,
          schema = _props.schema,
          currentPanelId = _props.currentPanelId,
          currentPanelIndex = _props.currentPanelIndex;

      console.log('currentPanelIndex: ', currentPanelIndex);
      return _react2.default.createElement(
        _reactBootstrap.Grid,
        null,
        _react2.default.createElement(
          _reactBootstrap.Row,
          null,
          _react2.default.createElement(
            _reactBootstrap.Col,
            { xs: 12 },
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12 },
                _react2.default.createElement(
                  'h2',
                  null,
                  'Winterfell Form Builder'
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 10 },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Form: ',
                  title
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 2, className: 'text-right' },
                _react2.default.createElement(_Pagination2.default, null)
              )
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 2 },
                _react2.default.createElement(_FormMenu.CreateFormButton, null)
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 2 },
                _react2.default.createElement(_FormMenu.EditFormTitleButton, null)
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 2 },
                _react2.default.createElement(_FormMenu.AddPageButton, null)
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 2 },
                _react2.default.createElement(_FormMenu.EditSchemaButton, null)
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 2 },
                _react2.default.createElement(_FormMenu.AddQuestionButton, null)
              )
            ),
            _react2.default.createElement('hr', null),
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 3 },
                _react2.default.createElement(_FieldEditors.PageEditor, {
                  currentPanelIndex: currentPanelIndex
                })
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 9 },
                _react2.default.createElement(_FormEditor2.default, null)
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12 },
                _react2.default.createElement(_Previewer2.default, {
                  schema: schema,
                  currentPanelId: currentPanelId
                })
              )
            )
          )
        )
      );
    }
  }]);
  return WinterfellFormBuilder;
}(_react.Component);

WinterfellFormBuilder.propTypes = {
  inputSchema: _propTypes2.default.object,
  title: _propTypes2.default.string,
  schema: _propTypes2.default.object,
  currentPanelId: _propTypes2.default.string,
  currentPanelIndex: _propTypes2.default.number.isRequired,
  loadForm: _propTypes2.default.func.isRequired
};
WinterfellFormBuilder.defaultProps = {
  title: '',
  schema: null,
  currentPanelId: null,
  inputSchema: {},
  formPanels: null
};


function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
    schema: state.getIn(['form', 'schema']).toJS(),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
    currentPanelIndex: state.getIn(['form', 'currentPanelIndex']),
    questionSet: state.getIn(['form', 'schema', 'questionSets', 0])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { loadForm: _winterfellFormBuilderActions.loadForm, goToPage: _winterfellFormBuilderActions.goToPage })(WinterfellFormBuilder);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(WinterfellFormBuilder, 'WinterfellFormBuilder', 'src/components/WinterfellFormBuilder.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/WinterfellFormBuilder.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/WinterfellFormBuilder.js');
}();

;