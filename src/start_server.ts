import Hapi from '@hapi/hapi';
import { logger } from './logger';

export async function startServer() {
  const server = Hapi.server({ port: 3000, host: 'localhost' });

  server.route({
    method: 'GET',
    path: '/',
    handler: () => 'Hello World!',
  });

  server.route({
    method: 'GET',
    path: '/error',
    handler: () => {
      throw new Error('Something went wrong');
    },
  });

  await server.start();
  logger.info(`Server running on ${server.info.uri}`);
}
