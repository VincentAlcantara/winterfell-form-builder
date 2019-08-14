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

var _immutable = require('immutable');

var _winterfellFormBuilderActions = require('../../actions/winterfellFormBuilderActions');

var _FormMenu = require('../FormMenu');

var _FieldGroup = require('../InputTypes/FieldGroup');

var _FieldGroup2 = _interopRequireDefault(_FieldGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageEditor = function (_PureComponent) {
  (0, _inherits3.default)(PageEditor, _PureComponent);

  function PageEditor(props) {
    (0, _classCallCheck3.default)(this, PageEditor);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PageEditor.__proto__ || (0, _getPrototypeOf2.default)(PageEditor)).call(this, props));

    var title = props.title,
        panelId = props.panelId,
        panelHeader = props.panelHeader,
        panelText = props.panelText;


    _this.state = {
      title: title,
      panelId: panelId,
      panelHeader: panelHeader,
      panelText: panelText
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.onUpdatePageId = _this.onUpdatePageId.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(PageEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.state = {
        panelId: nextProps.panelId,
        panelHeader: nextProps.panelHeader,
        panelText: nextProps.panelText
      };
    }
  }, {
    key: 'onChange',
    value: function onChange(event) {
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
      switch (event.target.name) {
        case 'panelHeader':
          this.props.editPageHeader(this.props.currentQuestionPanelIndex, event.target.value);break;
        case 'panelText':
          this.props.editPageText(this.props.currentQuestionPanelIndex, event.target.value);break;
        default:
          break;
      }
    }
  }, {
    key: 'onClick',
    value: function onClick(questionSetId) {
      var questionSetIndex = this.props.questionSets.findIndex(function (questionSet) {
        return questionSet.get('questionSetId') === questionSetId;
      });
      this.props.changeCurrentEditingField('questionSet', questionSetIndex);
    }
  }, {
    key: 'onUpdatePageId',
    value: function onUpdatePageId() {
      var _this2 = this;

      var panelId = this.props.panelId;

      var formPanelIndex = this.props.formPanels.findIndex(function (formPanel) {
        return formPanel.get('panelId') === _this2.state.panelId;
      });
      if (formPanelIndex === -1) {
        this.props.editPageId(this.props.currentQuestionPanelIndex, this.state.panelId);
      } else {
        this.props.updateErrorMessage('Page ID already exists.  No update performed.');
        this.setState({ panelId: panelId });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var questionSetsArray = this.props.currentQuestionSets.toJS();
      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: 'filename' },
            'Filename'
          ),
          _react2.default.createElement(
            'p',
            { disabled: true, id: 'filename' },
            this.props.title
          )
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: 'panelId' },
            'Page ID'
          ),
          _react2.default.createElement(
            'div',
            { className: 'input-group' },
            _react2.default.createElement(_reactBootstrap.FormControl, {
              id: 'panelId',
              name: 'panelId',
              onChange: this.onChange,
              placeholder: this.props.panelId,
              value: this.state.panelId
            }),
            _react2.default.createElement(
              'div',
              { className: 'input-group-append' },
              _react2.default.createElement(
                'button',
                {
                  onClick: this.onUpdatePageId,
                  className: 'btn btn-dark',
                  title: 'Click to update page title'
                },
                'save'
              )
            )
          )
        ),
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
            placeholder: this.props.panelText,
            onChange: this.onChange,
            value: this.state.panelText
          })
        ),
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_FormMenu.AddQuestionSetButton, null)
        ),
        questionSetsArray && questionSetsArray.length > 0 && _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: 'questionSetList' },
            'Question Sets'
          ),
          _react2.default.createElement(
            'div',
            { id: 'questionSetList' },
            questionSetsArray.map(function (questionSet, index) {
              return _react2.default.createElement(
                _reactBootstrap.Button,
                {
                  key: 'questionSet-' + index,
                  variant: 'link',
                  onClick: function onClick() {
                    return _this3.onClick(questionSet.questionSetId);
                  }
                },
                questionSet.questionSetId
              );
            })
          )
        )
      );
    }
  }]);
  return PageEditor;
}(_react.PureComponent);

PageEditor.propTypes = {
  editPageId: _propTypes2.default.func.isRequired,
  editPageHeader: _propTypes2.default.func.isRequired,
  editPageText: _propTypes2.default.func.isRequired,
  updateErrorMessage: _propTypes2.default.func.isRequired,
  changeCurrentEditingField: _propTypes2.default.func.isRequired,
  title: _propTypes2.default.string,
  panelId: _propTypes2.default.string,
  panelHeader: _propTypes2.default.string,
  panelText: _propTypes2.default.string,
  currentQuestionSets: _propTypes2.default.object,
  questionSets: _propTypes2.default.object,
  currentQuestionPanelIndex: _propTypes2.default.number.isRequired,
  formPanels: _propTypes2.default.object.isRequired
};

PageEditor.defaultProps = {
  currentQuestionPanelIndex: 0,
  title: '',
  panelId: '',
  panelHeader: '',
  panelText: '',
  questionSets: (0, _immutable.fromJS)({}),
  currentQuestionSets: (0, _immutable.fromJS)({}),
  formPanels: (0, _immutable.fromJS)({})
};

function mapStateToProps(state, ownProps) {
  return {
    title: state.getIn(['form', 'title']),
    panelId: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelId']),
    panelHeader: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelHeader']),
    panelText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelText']),
    currentQuestionSets: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'questionSets']),
    questionSets: state.getIn(['form', 'schema', 'questionSets']),
    currentQuestionPanelIndex: state.getIn(['form', 'currentQuestionPanelIndex']),
    formPanels: state.getIn(['form', 'schema', 'formPanels'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  editPageId: _winterfellFormBuilderActions.editPageId,
  editPageHeader: _winterfellFormBuilderActions.editPageHeader,
  editPageText: _winterfellFormBuilderActions.editPageText,
  changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField,
  updateErrorMessage: _winterfellFormBuilderActions.updateErrorMessage,
  clearErrorMessage: _winterfellFormBuilderActions.clearErrorMessage
})(PageEditor);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(PageEditor, 'PageEditor', 'src/components/FieldEditor/PageEditor.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FieldEditor/PageEditor.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FieldEditor/PageEditor.js');
}();

;