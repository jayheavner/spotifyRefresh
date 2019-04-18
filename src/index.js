const fastify = require('fastify')({ logger: true });
import 'dotenv/config';

import { connect } from 'mongoose';

import { getToken } from './controller';

console.log(process.env.NODE_ENV);

const db_path = process.env.NODE_ENV === 'production'
? process.env.db_path_prod
: process.env.db_path_dev

// Connect to DB
connect(
  `mongodb://${db_path}/spotify`,
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
