"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    color: #fff;\n    position: relative;\n    font-size: 16px;\n    padding: 10px;\n    min-width: 120px;\n    border-radius: 5px;\n    background-color: ", ";\n    transition: background-color 0.3s ease, box-shadow 0.7s ease;\n    &:active {\n        top: 2px;\n    }\n    &:enabled:hover {\n        background-color: #4f9cef;\n        box-shadow: 0px 0px 6px 2px rgba(79,156,239,0.3);\n    }\n    &:focus {\n        outline: none;\n    } \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject(), function (props) {
  return props.disabled ? '#6c757d' : '#007bff';
});

var _default = Button;
exports.default = _default;

//# sourceMappingURL=Button.js.map