"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getToken = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _db = require("./db");

var _api = require("./api");

var getToken =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var tokens, refreshToken;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log('\n\n\n\n\n\n\n\n\n');
            _context.next = 3;
            return (0, _db.read)();

          case 3:
            tokens = _context.sent;
            _context.t0 = tokens && new Date().getTime() < tokens.expiryTime && tokens.accessToken;

            if (!_context.t0) {
              _context.next = 9;
              break;
            }

            _context.next = 8;
            return (0, _api.healthCheck)(tokens.accessToken);

          case 8:
            _context.t0 = _context.sent;

          case 9:
            if (!_context.t0) {
              _context.next = 14;
              break;
            }

            console.log("\n   Access Token is valid\n");
            return _context.abrupt("return", {
              accessToken: tokens.accessToken
            });

          case 14:
            console.log("\n   Access Token is NOT valid, getching new tokens\n");
            refreshToken = tokens.refreshToken;
            console.log("\n   refreshToken = ".concat(refreshToken, "\n"));
            _context.next = 19;
            return (0, _api.getRefreshToken)(refreshToken);

          case 19:
            tokens = _context.sent;
            console.log("\n   got tokens\n");
            console.log("\n   doing DB update\n");
            (0, _db.update)(tokens, refreshToken);
            _context.next = 25;
            return getToken();

          case 25:
            return _context.abrupt("return", _context.sent);

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getToken() {
    return _ref.apply(this, arguments);
  };
}();

exports.getToken = getToken;