require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var modal = {
  position: 'fixed',
  fontFamily: 'Arial, Helvetica, sans-serif',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  background: 'rgba(0, 0, 0, 0.8)',
  zIndex: 99999,
  transition: 'opacity 1s ease-in',
  pointerEvents: 'auto',
  overflowY: 'auto'
};

var container = {
  width: '400px',
  position: 'relative',
  margin: '10% auto',
  padding: '5px 20px 13px 20px',
  background: '#fff'
};

var close = {
  background: '#606061',
  color: '#FFFFFF',
  lineHeight: '25px',
  position: 'absolute',
  right: '-12px',
  textAlign: 'center',
  top: '-10px',
  width: '24px',
  textDecoration: 'none',
  fontWeight: 'bold',
  borderRadius: '12px',
  boxShadow: '1px 1px 3px #000',
  cursor: 'pointer'
};

exports['default'] = {
  modal: modal,
  container: container,
  close: close
};
module.exports = exports['default'];

},{}],"simple-react-modal":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

var Modal = (function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    _get(Object.getPrototypeOf(Modal.prototype), 'constructor', this).call(this);
    this.hideOnOuterClick = this.hideOnOuterClick.bind(this);
    this.fadeIn = this.fadeIn.bind(this);
    this.fadeOut = this.fadeOut.bind(this);

    var opacity = 0,
        display = 'block',
        visibility = 'hidden';

    if (props.show) {
      opacity = 1;
      display = 'block';
      visibility = 'visible';
    }

    this.state = {
      opacity: opacity,
      display: display,
      visibility: visibility,
      show: props.show
    };
  }

  _createClass(Modal, [{
    key: 'hideOnOuterClick',
    value: function hideOnOuterClick(event) {
      if (this.props.closeOnOuterClick === false) return;
      if (event.target.dataset.modal) this.props.onClose(event);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.props.show != props.show) {
        if (this.props.transitionSpeed) {
          if (props.show == true) this.fadeIn();else this.fadeOut();
        } else this.setState({ show: props.show });
      }
    }
  }, {
    key: 'fadeIn',
    value: function fadeIn() {
      var _this = this;

      this.setState({
        display: 'block',
        visibility: 'visible',
        show: true
      }, function () {
        setTimeout(function () {
          _this.setState({ opacity: 1 });
        }, 10);
      });
    }
  }, {
    key: 'fadeOut',
    value: function fadeOut() {
      var _this2 = this;

      this.setState({ opacity: 0 }, function () {
        setTimeout(function () {
          _this2.setState({ show: false });
        }, _this2.props.transitionSpeed);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (!this.state.show) return null;
      var modalStyle = undefined,
          containerStyle = undefined;
      //completely overwrite if they use a class
      if (this.props.className) {
        modalStyle = this.props.style;
        containerStyle = this.props.containerStyle;
      } else {
        modalStyle = _extends({}, _styles2['default'].modal, this.props.style);
        containerStyle = _extends({}, _styles2['default'].container, this.props.containerStyle);
      }
      if (this.props.transitionSpeed) modalStyle = _extends({}, this.state, modalStyle);

      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { style: modalStyle, onClick: this.hideOnOuterClick, 'data-modal': 'true' }),
        _react2['default'].createElement(
          'div',
          { className: this.props.containerClassName, style: containerStyle },
          this.props.children
        )
      );
    }
  }]);

  return Modal;
})(_react2['default'].Component);

exports['default'] = Modal;
var closeStyle = _styles2['default'].close;
exports.closeStyle = closeStyle;

},{"./styles":1,"react":undefined}]},{},[]);
