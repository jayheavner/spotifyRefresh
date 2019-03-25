"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.healthCheck = exports.getRefreshToken = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _axios = _interopRequireDefault(require("axios"));

require("dotenv/config");

var getRefreshToken =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(refreshToken) {
    var r;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("\n   api.getRefreshToken()\n");
            console.log("n ".concat(process.env.clientId, ":").concat(process.env.clientSecret));
            _context.next = 4;
            return (0, _axios.default)({
              method: 'post',
              url: 'https://accounts.spotify.com/api/token',
              params: {
                grant_type: 'refresh_token',
                refresh_token: refreshToken
              },
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: 'Basic ' + Buffer.from(process.env.clientId + ':' + process.env.clientSecret).toString('base64')
              }
            });

          case 4:
            r = _context.sent;
            console.log("\n   AFTER CALL\n");
            console.dir(r.data);
            console.log("\n\n");
            return _context.abrupt("return", r.data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getRefreshToken(_x) {
    return _ref.apply(this, arguments);
  };
}(); // uses the current access token to get info about current user as a health check


exports.getRefreshToken = getRefreshToken;

var healthCheck =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(accessToken) {
    var me;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _axios.default.get('https://api.spotify.com/v1/me', {
              headers: {
                Authorization: "Bearer ".concat(accessToken)
              }
            });

          case 2:
            me = _context2.sent;
            return _context2.abrupt("return", me.statusText === 'OK' ? true : false);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function healthCheck(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.healthCheck = healthCheck;