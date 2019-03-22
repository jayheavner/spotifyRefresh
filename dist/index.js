"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = require("mongoose");

var _controller = require("./controller");

var fastify = require('fastify')({
  logger: true
});

// Connect to DB
(0, _mongoose.connect)('mongodb://192.168.1.10/spotify', {
  useNewUrlParser: true
}).then(function () {
  return console.log('MongoDB connected...');
}).catch(function (err) {
  return console.log(err);
});
fastify.get('/',
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee(request, reply) {
    var data;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return (0, _controller.getToken)();

          case 2:
            data = _context.sent;
            reply.send(data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
fastify.listen(3000, function (err) {
  if (err) throw err;
  fastify.log.info("listening on ".concat(fastify.server.address().port));
});