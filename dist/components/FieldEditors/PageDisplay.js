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

var EditFormTitleButton = function (_Component) {
  (0, _inherits3.default)(EditFormTitleButton, _Component);

  function EditFormTitleButton(props) {
    (0, _classCallCheck3.default)(this, EditFormTitleButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, (EditFormTitleButton.__proto__ || (0, _getPrototypeOf2.default)(EditFormTitleButton)).call(this, props));

    _this.state = {
      showModal: false,
      pageHeader: _this.props.questionPanels[_this.props.currentPanelIndex].pageHeader,
      pageText: _this.props.questionPanels[_this.props.currentPanelIndex].pageText
    };

    _this.onChange = _this.onChange.bind(_this);
    _this.onFormUpdate = _this.onFormUpdate.bind(_this);
    return _this;
  }

  (0, _createClass3.default)(EditFormTitleButton, [{
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
      var title = this.props.title;


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
              id: 'pageHeader',
              name: 'pageHeader',
              label: 'Page Header',
              onChange: this.onChange,
              placeholder: title,
              value: this.state.pageHeader
            })
          ),
          _react2.default.createElement(
            _reactBootstrap.FormGroup,
            null,
            _react2.default.createElement(_FieldGroup2.default, {
              id: 'pageText',
              name: 'pageText',
              label: 'Page Text',
              onChange: this.onChange,
              placeholder: title,
              value: this.state.pageText
            })
          )
        )
      );
    }
  }]);
  return EditFormTitleButton;
}(_react.Component);

EditFormTitleButton.propTypes = {
  editForm: _propTypes2.default.func.isRequired,
  currentPanelIndex: _propTypes2.default.number.isRequired,
  questionPanels: _propTypes2.default.array.isRequired
};


function mapStateToProps(state) {
  return {
    currentPanelIndex: state.get('currentPanelIndex'),
    questionPanels: state.getIn(['schema', 'questionPanels']).toJS()
  };
}

var _default = (0, _reactRedux.connect)(mapStateToProps, { editForm: _winterfellFormBuilderActions.editForm })(EditFormTitleButton);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(EditFormTitleButton, 'EditFormTitleButton', 'src/components/FieldEditors/PageDisplay.js');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', 'src/components/FieldEditors/PageDisplay.js');

  __REACT_HOT_LOADER__.register(_default, 'default', 'src/components/FieldEditors/PageDisplay.js');
}();

;