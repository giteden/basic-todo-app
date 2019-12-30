"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    font-size: 18px;\n    font-weight: 700;\n    color: #adadad;\n    padding: 5px;\n    background-color: transparent;\n    border: 0;\n    appearance: none;\n    outline: unset;\n    transition: transform .8s;\n    &:hover{\n        color: #c75656\n        transform: rotate(180deg);\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position: relative;\n    font-family: 'Caveat', cursive;\n    font-size: 24px;\n    color: #343a48;\n    transition: position 0.8 ease-out;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    border-bottom: 1px #d1d1d1 solid;\n    border-right: 1px #d1d1d1 solid;\n    border-left: 1px #d1d1d1 solid;\n    &:first-child{\n        border-top: 1px #d1d1d1 solid;\n        border-top-left-radius: 5px;\n        border-top-right-radius: 5px;\n    }\n    &:last-child {\n        border-bottom-left-radius: 5px;\n        border-bottom-right-radius: 5px;\n    }\n    padding: 12px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    animation: ", " 1s ease;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    0% {\n    opacity: 0;\n    transform: translateY(-3px);\n    }\n    100% {\n        opacity: 1;\n        transform: translateY(0);\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var appear = (0, _styledComponents.keyframes)(_templateObject());

var Item = _styledComponents.default.li(_templateObject2(), appear);

var Text = _styledComponents.default.span(_templateObject3());

var DelButton = _styledComponents.default.button(_templateObject4());

var RemovableListItem = function RemovableListItem(props) {
  var id = props.id;
  var text = props.text;
  var removeItem = props.removeItem;
  return _react.default.createElement(Item, null, _react.default.createElement(Text, null, text), removeItem && id && _react.default.createElement(DelButton, {
    onClick: function onClick() {
      return removeItem(id);
    }
  }, "X"));
};

RemovableListItem.propTypes = {
  id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
  text: _propTypes.default.string.isRequired,
  removeItem: _propTypes.default.func
};
var _default = RemovableListItem;
exports.default = _default;

//# sourceMappingURL=RemovableListItem.js.map