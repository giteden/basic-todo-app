"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _RemovableListItem = _interopRequireDefault(require("../RemovableListItem"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(props) {
  var items = props.items;
  var removeItem = props.removeItem;
  return _react.default.createElement("ul", {
    style: {
      paddingLeft: 0
    }
  }, items.map(function (item) {
    return _react.default.createElement(_RemovableListItem.default, {
      key: item.key,
      text: item.text,
      id: item.key,
      removeItem: removeItem
    });
  }));
};

List.propTypes = {
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string.isRequired,
    text: _propTypes.default.string.isRequired
  })),
  removeItem: _propTypes.default.func
};
var _default = List;
exports.default = _default;

//# sourceMappingURL=List.js.map