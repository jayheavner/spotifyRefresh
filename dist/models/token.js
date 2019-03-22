"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

// External Dependancies
var tokenSchema = new _mongoose.Schema({
  accessToken: String,
  refreshToken: String,
  expiryTime: Number
});

var _default = (0, _mongoose.model)('Token', tokenSchema);

exports.default = _default;