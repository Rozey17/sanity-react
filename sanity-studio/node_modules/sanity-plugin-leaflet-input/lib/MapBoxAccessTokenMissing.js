"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _GeopointInput = _interopRequireDefault(require("./GeopointInput.css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapBoxAccessTokenMissing = () => /*#__PURE__*/_react.default.createElement("div", {
  className: _GeopointInput.default.errorContainer
}, /*#__PURE__*/_react.default.createElement("h2", {
  className: _GeopointInput.default.errorHeading
}, "Error"), /*#__PURE__*/_react.default.createElement("p", null, "Mapbox access token is missing from configuration."), /*#__PURE__*/_react.default.createElement("p", null, "Please add it to the ", /*#__PURE__*/_react.default.createElement("code", null, "tileLayer.accessToken"), " property in", ' ', /*#__PURE__*/_react.default.createElement("code", null, "<sanity-studio>/config/leaflet-input.json"), "."), /*#__PURE__*/_react.default.createElement("p", null, /*#__PURE__*/_react.default.createElement("a", {
  href: "https://docs.mapbox.com/help/how-mapbox-works/access-tokens/",
  rel: "noopener noreferrer"
}, "Read more"), ' ', "about how to get hold of an access token, or consider specifying the URL of a different tile provider in the ", /*#__PURE__*/_react.default.createElement("code", null, "tileLayer.url"), " property."));

var _default = MapBoxAccessTokenMissing;
exports.default = _default;
//# sourceMappingURL=MapBoxAccessTokenMissing.js.map