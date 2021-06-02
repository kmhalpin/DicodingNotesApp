const Hapi = require('@hapi/hapi');
const notes = require('./api/notes');
const NotesService = require('./services/inMemory/NotesService');
const NotesValidator = require('./validator/notes');

(async () => {
  const notesService = new NotesService();
  const server = Hapi.server({
    port: 5000,
    host: process.argv[2] !== 'production' ? 'localhost' : 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: notes,
    options: {
      service: notesService,
      validator: NotesValidator,
    },
  });

  await server.start();
  console.log(`Server run at ${server.info.uri}`);
})();
