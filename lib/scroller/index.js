"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Scroller = function Scroller(props) {
  var width = props.width,
      height = props.height,
      isHorizontalBar = props.isHorizontalBar,
      isVerticalBar = props.isVerticalBar;
  return /*#__PURE__*/_react["default"].createElement("div", {
    id: "container",
    style: {
      width: width ? width : '100%',
      height: height ? height : '100%',
      overflowX: isHorizontalBar ? 'auto' : 'hidden',
      overflowY: isVerticalBar ? 'auto' : 'hidden'
    }
  }, props.children);
};

var _default = Scroller;
exports["default"] = _default;