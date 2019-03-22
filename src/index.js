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

fastify.get('/', async function(request, reply) {
  var data = await getToken();
  reply.send(data);
});

fastify.listen(3000, err => {
  if (err) throw err;
  fastify.log.info(`listening on ${fastify.server.address().port}`);
});
