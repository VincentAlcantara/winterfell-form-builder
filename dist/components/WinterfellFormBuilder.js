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
        'div',
        { className: 'container winterfell-form-builder' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-12' },
            _react2.default.createElement(
              'h1',
              null,
              'Winterfell Form Builder'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            {
              className: 'modal fade ' + (errorMessage !== '' ? 'show' : ''),
              id: 'errorMessage',
              tabIndex: '-1',
              key: 'errorMessageModal'
            },
            _react2.default.createElement(
              'div',
              { className: 'modal-dialog bg-white' },
              _react2.default.createElement(
                'div',
                { className: 'modal-header' },
                _react2.default.createElement(
                  'div',
                  { className: 'modal-title' },
                  'Error'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'modal-body' },
                errorMessage
              ),
              _react2.default.createElement(
                'div',
                { className: 'modal-footer' },
                _react2.default.createElement(
                  'button',
                  {
                    type: 'button',
                    className: 'btn btn-primary',
                    onClick: this.props.clearErrorMessage
                  },
                  'Ok'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row py-3' },
          _react2.default.createElement(
            'div',
            { className: 'col-12' },
            _react2.default.createElement(
              'div',
              { className: 'btn-group' },
              _react2.default.createElement(_FormMenu.CreateFormButton, null),
              _react2.default.createElement(_FormMenu.UploadJSONButton, null),
              _react2.default.createElement(_FormMenu.SaveFormButton, null),
              _react2.default.createElement(_FormMenu.EditSchemaButton, null),
              _react2.default.createElement(_FormMenu.EditFormTitleButton, null)
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-4 text-left' },
            _react2.default.createElement(
              'div',
              { className: 'btn-group' },
              formPanels && _react2.default.createElement(_Pagination2.default, {
                formPanels: formPanels.map(function (panel) {
                  return panel.get('panelId');
                }),
                currentPanelId: currentPanelId,
                onClick: this.props.goToPage
              }),
              _react2.default.createElement(_FormMenu.AddPageButton, null),
              _react2.default.createElement(_FormMenu.PageSortButton, {
                onClick: function onClick() {
                  return _this2.props.changeCurrentEditingField('pageSort');
                }
              })
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-8' },
            _react2.default.createElement(
              'nav',
              { 'aria-label': 'breadcrumb' },
              _react2.default.createElement(
                'ol',
                { className: 'breadcrumb' },
                _react2.default.createElement(
                  'li',
                  { className: 'breadcrumb-item' },
                  _react2.default.createElement(
                    'a',
                    {
                      href: '#',
                      active: currentEditingField === 'page',
                      onClick: function onClick() {
                        return _this2.props.changeCurrentEditingField('page');
                      }
                    },
                    currentPanelId !== 'Select Page' && currentPanelId
                  )
                ),
                (currentEditingField === 'questionSet' || currentEditingField === 'question') && questionSets && _react2.default.createElement(
                  'li',
                  { className: 'breadcrumb-item' },
                  _react2.default.createElement(
                    'a',
                    {
                      href: '',
                      active: currentEditingField === 'questionSet',
                      onClick: function onClick() {
                        return _this2.props.changeCurrentEditingField('questionSet', currentQuestionSetIndex);
                      }
                    },
                    questionSets.getIn([currentQuestionSetIndex, 'questionSetId'])
                  )
                ),
                currentEditingField === 'question' && questionSets && _react2.default.createElement(
                  'li',
                  { className: 'breadcrumb-item' },
                  _react2.default.createElement(
                    'a',
                    {
                      active: currentEditingField === 'question'
                    },
                    questionSets.getIn([currentQuestionSetIndex, 'questions', currentQuestionIndex, 'questionId'])
                  )
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row winterfell-form-builder-editor' },
          _react2.default.createElement(
            'div',
            { className: 'col-4' },
            currentQuestionPanelIndex >= 0 && _react2.default.createElement(_FieldEditor2.default, {
              currentQuestionPanelIndex: currentQuestionPanelIndex,
              currentEditingField: currentEditingField,
              currentQuestionSetIndex: currentQuestionSetIndex,
              currentQuestionIndex: currentQuestionIndex
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-8 winterfell-form-builder-page-editor' },
            this.props.schema && currentQuestionPanelIndex >= 0 && _react2.default.createElement(_FieldSelector2.default, {
              currentQuestionPanelIndex: currentQuestionPanelIndex
            }),
            (!this.props.schema || this.props.schema.size === 0) && _react2.default.createElement(
              'div',
              { className: 'alert alert-info', role: 'alert' },
              'No form loaded.  Click on \'new\' to create a new form, or \'upload\' to load an existing form.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row winterfell-form-builder-previewer' },
          _react2.default.createElement(
            'div',
            { className: 'col-12 mb-5 py-3' },
            _react2.default.createElement(
              'h2',
              null,
              'Form Preview:'
            ),
            schema && _react2.default.createElement(_Previewer2.default, {
              currentPanelId: currentPanelId,
              schema: schema.toJS()
            }),
            currentPanelId === 'Select Page' && _react2.default.createElement(
              'div',
              { className: 'alert alert-info', role: 'alert' },
              'No page selected to preview.  Select a page from the dropdown above.'
            )
          )
        )
      );
    }
  }]);
  return WinterfellFormBuilder;
}(_react.Component);

WinterfellFormBuilder.propTypes = {
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