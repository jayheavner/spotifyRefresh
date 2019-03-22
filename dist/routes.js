"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _controller = require("./controller");

var routes = [{
  method: 'GET',
  url: '/api./accessToken',
  handler: _controller.getToken
}];
var _default = routes;
exports.default = _default;