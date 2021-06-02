const Hapi = require('@hapi/hapi');
const Routes = require('./routes');

(async () => {
  const server = Hapi.server({
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(Routes);

  await server.start();
  console.log(`Server run at ${server.info.uri}`);
})();
