"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _share = _interopRequireDefault(require("./media/share.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 12px;\n  height: 12px;\n  background: url(", ");\n  border: none;\n  cursor: pointer;\n  vertical-align: middle;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _default = _styledComponents.default.button(_templateObject(), _share.default);

exports.default = _default;
//# sourceMappingURL=index.js.map