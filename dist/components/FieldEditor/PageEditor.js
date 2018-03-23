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

    var panelHeader = props.panelHeader,
        panelText = props.panelText;


    _this.state = {
      panelHeader: panelHeader,
      panelText: panelText
    };

    _this.onChangePageHeader = _this.onChangePageHeader.bind(_this);
    _this.onChangePageText = _this.onChangePageText.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(PageEditor, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.state = {
        panelHeader: nextProps.panelHeader,
        panelText: nextProps.panelText
      };
    }
  }, {
    key: 'onChangePageHeader',
    value: function onChangePageHeader(event) {
      event.preventDefault();
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
      this.props.editPageHeader(this.props.currentQuestionPanelIndex, event.target.value);
    }
  }, {
    key: 'onChangePageText',
    value: function onChangePageText(event) {
      event.preventDefault();
      this.setState((0, _defineProperty3.default)({}, event.target.name, event.target.value));
      this.props.editPageText(this.props.currentQuestionPanelIndex, event.target.value);
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
    key: 'render',
    value: function render() {
      var _this2 = this;

      var questionSetsArray = this.props.currentQuestionSets.toJS();
      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          _reactBootstrap.FormGroup,
          null,
          _react2.default.createElement(_FieldGroup2.default, {
            id: 'panelHeader',
            name: 'panelHeader',
            label: 'Page Header',
            onChange: this.onChangePageHeader,
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
            onChange: this.onChangePageText,
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
                  bsStyle: 'link',
                  onClick: function onClick() {
                    return _this2.onClick(questionSet.questionSetId);
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
  editPageHeader: _propTypes2.default.func.isRequired,
  editPageText: _propTypes2.default.func.isRequired,
  changeCurrentEditingField: _propTypes2.default.func.isRequired,
  panelHeader: _propTypes2.default.string,
  panelText: _propTypes2.default.string,
  currentQuestionSets: _propTypes2.default.object,
  questionSets: _propTypes2.default.object,
  currentQuestionPanelIndex: _propTypes2.default.number.isRequired
};
PageEditor.defaultProps = {
  currentQuestionPanelIndex: 0,
  panelHeader: '',
  panelText: '',
  questionSets: (0, _immutable.fromJS)({}),
  currentQuestionSets: (0, _immutable.fromJS)({})
};


function mapStateToProps(state, ownProps) {
  return {
    panelHeader: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelHeader']),
    panelText: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'panelText']),
    currentQuestionSets: state.getIn(['form', 'schema', 'questionPanels', ownProps.currentQuestionPanelIndex, 'questionSets']),
    questionSets: state.getIn(['form', 'schema', 'questionSets'])
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, {
  editPageHeader: _winterfellFormBuilderActions.editPageHeader,
  editPageText: _winterfellFormBuilderActions.editPageText,
  changeCurrentEditingField: _winterfellFormBuilderActions.changeCurrentEditingField
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