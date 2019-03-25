const fastify = require('fastify')({ logger: true });

import { connect } from 'mongoose';

import { getToken } from './controller';

// Connect to DB
connect(
  'mongodb://192.168.1.10/spotify',
  { useNewUrlParser: true }
)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

fastify.register(require('fastify-cors'));

fastify.get('/', async function(request, reply) {
  var data = await getToken();
  reply.send(data);
});

fastify.listen(3001, '::', function(err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log('STARTING...with CORS?');
  fastify.log.info(`server listening on ${address}`);
});
