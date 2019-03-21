const fastify = require('fastify')({ logger: true });

import { getToken } from './controller';

fastify.get('/', async function(request, reply) {
  var data = await getToken();
  reply.send(data);
});

fastify.listen(3000, err => {
  if (err) throw err;
  fastify.log.info(`listening on ${fastify.server.address().port}`);
});
