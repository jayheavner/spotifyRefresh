"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.update = exports.read = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _token = _interopRequireDefault(require("./models/token"));

var read =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _token.default.findOne();

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function read() {
    return _ref.apply(this, arguments);
  };
}();

exports.read = read;

var update =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(tokens, refreshToken) {
    var expiryTime;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log('\n   updating db\n');
            expiryTime = tokens.expires_in * 1000 + new Date().getTime();

            _token.default.findOneAndUpdate({
              refreshToken: refreshToken
            }, {
              $set: {
                accessToken: tokens.access_token,
                expiryTime: expiryTime
              }
            }, {
              new: true
            }, function (err, doc) {
              if (err) {
                console.log('Something wrong when updating data!');
              }
            });

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function update(_x, _x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.update = update;