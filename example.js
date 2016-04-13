require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _simpleReactModal = require('simple-react-modal');

var _simpleReactModal2 = _interopRequireDefault(_simpleReactModal);

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).call(this);
    this.state = {};
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      var _this = this;

      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement('br', null),
        'Both examples allow you to close on clicking outside of the modal.',
        _react2['default'].createElement(
          'a',
          { onClick: function () {
              return _this.setState({ showFade: true });
            } },
          _react2['default'].createElement(
            'h3',
            null,
            'Open With Fade'
          )
        ),
        _react2['default'].createElement(
          _simpleReactModal2['default'],
          {
            closeOnOuterClick: true,
            show: this.state.showFade,
            onClose: function () {
              return _this.setState({ showFade: false });
            },
            transitionSpeed: 1000 },
          _react2['default'].createElement(
            'a',
            { key: 'close', style: _simpleReactModal.closeStyle, onClick: function () {
                return _this.setState({ showFade: false });
              } },
            'X'
          ),
          _react2['default'].createElement(
            'div',
            { key: 'content' },
            'hey'
          )
        ),
        _react2['default'].createElement(
          'a',
          { onClick: function () {
              return _this.setState({ showNoFade: true });
            } },
          _react2['default'].createElement(
            'h3',
            null,
            'Open Without Fade'
          )
        ),
        _react2['default'].createElement(
          _simpleReactModal2['default'],
          {
            closeOnOuterClick: true,
            show: this.state.showNoFade,
            onClose: function () {
              return _this.setState({ showNoFade: false });
            } },
          _react2['default'].createElement(
            'a',
            { key: 'close', style: _simpleReactModal.closeStyle, onClick: function () {
                return _this.setState({ showNoFade: false });
              } },
            'X'
          ),
          _react2['default'].createElement(
            'div',
            { key: 'content' },
            'hey'
          )
        )
      );
    }
  }]);

  return App;
})(_react2['default'].Component);

exports['default'] = App;

_react2['default'].render(_react2['default'].createElement(App, null), document.getElementById('app'));
module.exports = exports['default'];

},{"react":undefined,"simple-react-modal":undefined}]},{},[1]);
