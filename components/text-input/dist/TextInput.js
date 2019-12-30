"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    border-radius: 5px;\n    width: 100%;\n    padding: 8px 10px;\n    border: 1px solid #007bff;\n    display: inline-block;\n    font-size: 16px;\n    transition: box-shadow 0.3s;\n    &:focus {\n        outline: none;\n        box-shadow: 0px 0px 6px 2px rgba(79,156,239,0.3);\n        border: 1px solid #4f9cef;\n    } \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TextInput = _styledComponents.default.input(_templateObject());

var _default = TextInput;
exports.default = _default;

//# sourceMappingURL=TextInput.js.map