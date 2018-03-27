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

var _FieldSelector = require('./FieldSelector');

var _FieldSelector2 = _interopRequireDefault(_FieldSelector);

var _FieldEditor = require('./FieldEditor');

var _FieldEditor2 = _interopRequireDefault(_FieldEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WinterfellFormBuilder = function (_Component) {
  (0, _inherits3.default)(WinterfellFormBuilder, _Component);

  function WinterfellFormBuilder(props) {
    (0, _classCallCheck3.default)(this, WinterfellFormBuilder);

    var _this = (0, _possibleConstructorReturn3.default)(this, (WinterfellFormBuilder.__proto__ || (0, _getPrototypeOf2.default)(WinterfellFormBuilder)).call(this, props));

    _this.onFormUpdate = _this.onFormUpdate.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(WinterfellFormBuilder, [{
    key: 'onFormUpdate',
    value: function onFormUpdate(e) {
      e.preventDefault();
      this.setState({ schema: JSON.parse(e.target.value) });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          title = _props.title,
          schema = _props.schema,
          currentPanelId = _props.currentPanelId,
          formPanels = _props.formPanels,
          currentEditingField = _props.currentEditingField,
          currentQuestionPanelIndex = _props.currentQuestionPanelIndex,
          currentQuestionSetIndex = _props.currentQuestionSetIndex,
          currentQuestionIndex = _props.currentQuestionIndex,
          questionSets = _props.questionSets,
          errorMessage = _props.errorMessage;


      return _react2.default.createElement(
        _reactBootstrap.Grid,
        { className: 'winterfell-form-builder' },
        _react2.default.createElement(
          'div',
          { className: 'static-modal' },
          _react2.default.createElement(
            _reactBootstrap.Modal,
            { show: errorMessage !== '' },
            _react2.default.createElement(
              _reactBootstrap.Modal.Header,
              null,
              _react2.default.createElement(
                _reactBootstrap.Modal.Title,
                null,
                'Error'
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Body,
              null,
              errorMessage
            ),
            _react2.default.createElement(
              _reactBootstrap.Modal.Footer,
              null,
              _react2.default.createElement(
                _reactBootstrap.Button,
                {
                  bsStyle: 'primary',
                  onClick: this.props.clearErrorMessage
                },
                'Ok'
              )
            )
          )
        ),
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
                  'h3',
                  null,
                  'Form: ',
                  title
                )
              )
            ),
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
                _react2.default.createElement(_FormMenu.UploadJSONButton, null)
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
                _react2.default.createElement(_FormMenu.PageSortButton, {
                  onClick: function onClick() {
                    return _this2.props.changeCurrentEditingField('pageSort');
                  }
                })
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 2 },
                _react2.default.createElement(_FormMenu.SaveFormButton, null)
              )
            ),
            _react2.default.createElement('br', null),
            _react2.default.createElement(
              _reactBootstrap.Row,
              null,
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12 },
                _react2.default.createElement(
                  _reactBootstrap.Breadcrumb,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Breadcrumb.Item,
                    {
                      href: '#',
                      active: currentEditingField === 'page',
                      onClick: function onClick() {
                        return _this2.props.changeCurrentEditingField('page');
                      }
                    },
                    currentPanelId
                  ),
                  (currentEditingField === 'questionSet' || currentEditingField === 'question') && _react2.default.createElement(
                    _reactBootstrap.Breadcrumb.Item,
                    {
                      href: '',
                      active: currentEditingField === 'questionSet',
                      onClick: function onClick() {
                        return _this2.props.changeCurrentEditingField('questionSet', currentQuestionSetIndex);
                      }
                    },
                    questionSets.getIn([currentQuestionSetIndex, 'questionSetId'])
                  ),
                  currentEditingField === 'question' && _react2.default.createElement(
                    _reactBootstrap.Breadcrumb.Item,
                    {
                      active: currentEditingField === 'question'
                    },
                    questionSets.getIn([currentQuestionSetIndex, 'questions', currentQuestionIndex, 'questionId'])
                  )
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              { className: 'winterfell-form-builder-editor' },
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 4, className: 'winterfell-form-builder-field-editor' },
                _react2.default.createElement(
                  _reactBootstrap.Row,
                  null,
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 12, className: 'text-left' },
                    formPanels && _react2.default.createElement(_Pagination2.default, {
                      formPanels: formPanels.map(function (panel) {
                        return panel.get('panelId');
                      }),
                      currentPanelId: currentPanelId,
                      onClick: this.props.goToPage
                    })
                  ),
                  _react2.default.createElement(
                    _reactBootstrap.Col,
                    { xs: 12 },
                    typeof currentQuestionPanelIndex !== 'undefined' && _react2.default.createElement(_FieldEditor2.default, {
                      currentQuestionPanelIndex: currentQuestionPanelIndex,
                      currentEditingField: currentEditingField,
                      currentQuestionSetIndex: currentQuestionSetIndex,
                      currentQuestionIndex: currentQuestionIndex
                    })
                  )
                )
              ),
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 8, className: 'winterfell-form-builder-page-editor' },
                this.props.schema.size !== 0 && _react2.default.createElement(_FieldSelector2.default, {
                  currentQuestionPanelIndex: currentQuestionPanelIndex
                }),
                this.props.schema.size === 0 && _react2.default.createElement(
                  _reactBootstrap.Alert,
                  { bsStyle: 'info' },
                  'No form loaded.  Click on \'new form\' to create a new form, or \'open form\' to load an existing form.'
                )
              )
            ),
            _react2.default.createElement(
              _reactBootstrap.Row,
              { className: 'winterfell-form-builder-previewer' },
              _react2.default.createElement(
                _reactBootstrap.Col,
                { xs: 12 },
                _react2.default.createElement(
                  'h3',
                  null,
                  'Preview:'
                ),
                schema && _react2.default.createElement(_Previewer2.default, {
                  currentPanelId: currentPanelId,
                  schema: schema.toJS()
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
  title: _propTypes2.default.string,
  schema: _propTypes2.default.object,
  currentPanelId: _propTypes2.default.string,
  currentQuestionPanelIndex: _propTypes2.default.number,
  currentQuestionSetIndex: _propTypes2.default.number,
  currentQuestionIndex: _propTypes2.default.number,
  formPanels: _propTypes2.default.object,
  questionSets: _propTypes2.default.object,
  goToPage: _propTypes2.default.func.isRequired,
  currentEditingField: _propTypes2.default.string,
  changeCurrentEditingField: _propTypes2.default.func.isRequired,
  clearErrorMessage: _propTypes2.default.func.isRequired,
  errorMessage: _propTypes2.default.string
};
WinterfellFormBuilder.defaultProps = {
  title: '',
  schema: null,
  currentPanelId: null,
  inputSchema: {},
  formPanels: null,
  questionSets: null,
  currentQuestionPanelIndex: 0, // first page by default
  currentQuestionSetIndex: null,
  currentQuestionIndex: null,
  currentEditingField: 'page',
  errorMessage: ''
};


function mapStateToProps(state) {
  return {
    title: state.getIn(['form', 'title']),
    schema: state.getIn(['form', 'schema']),
    currentPanelId: state.getIn(['form', 'currentPanelId']),
    formPanels: state.getIn(['form', 'schema', 'formPanels']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
    currentEditingField: state.getIn(['form', 'currentEditingField']),
    currentQuestionPanelIndex: state.getIn(['form', 'currentQuestionPanelIndex']),
    currentQuestionSetIndex: state.getIn(['form', 'currentQuestionSetIndex']),
    currentQuestionIndex: state.getIn(['form', 'currentQuestionIndex']),
    errorMessage: state.getIn(['error', 'message'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { goToPage: _winterfellFormBuilderActions.goToPage, changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField, clearErrorMessage: _winterfellFormBuilderActions.clearErrorMessage })(WinterfellFormBuilder);

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