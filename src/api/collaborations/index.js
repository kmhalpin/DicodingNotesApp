const CollaborationsHandler = require('./handler');
const routes = require('./routes');

/**
 * Collaborations Plugin Options
 * @typedef PluginOptions
 * @property {import('../../services/postgres/CollaborationsService')} collaborationsService
 * @property {import('../../services/postgres/NotesService')} notesService
 * @property {import('../../validator/notes')} validator
 */

/**
 * Collaborations Plugin
 * @type {import('@hapi/hapi').PluginBase<PluginOptions>
 * & (import('@hapi/hapi').PluginNameVersion
 * | import('@hapi/hapi').PluginPackage)}
 */
module.exports = {
  name: 'collaborations',
  version: '1.0.0',
  register: async (server, { collaborationsService, notesService, validator }) => {
    const collaborationsHandler = new CollaborationsHandler(
      collaborationsService, notesService, validator,
    );
    server.route(routes(collaborationsHandler));
  },
};
