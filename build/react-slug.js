'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Slug = (function (_React$Component) {
  function Slug(props) {
    _classCallCheck(this, Slug);

    _get(Object.getPrototypeOf(Slug.prototype), 'constructor', this).call(this);

    this.state = {
      value: this.slugify(props.value)
    };
    this.handleChange = this.handleChange.bind(this);
  }

  _inherits(Slug, _React$Component);

  _createClass(Slug, [{
    key: 'slugify',
    value: function slugify(text) {
      return text.replace(/[^-a-zA-Z0-9\s+]+/ig, '').replace(/\s+/gi, '-').toLowerCase();
    }
  }, {
    key: 'handleChange',
    value: function handleChange(event) {
      var value = this.slugify(event.target.value);
      var modifedEvent = event;
      modifedEvent.target.value = value;

      this.setState({ value: value });
      if (this.props.onChange) this.props.onChange(modifedEvent);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement('input', _extends({}, this.props, { value: this.state.value, onChange: this.handleChange }));
    }
  }]);

  return Slug;
})(_react2['default'].Component);

exports['default'] = Slug;
module.exports = exports['default'];