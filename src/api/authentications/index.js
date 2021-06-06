const AuthenticationsHandler = require('./handler');
const routes = require('./routes');

/**
 * Authentications Plugin Options
 * @typedef PluginOptions
 * @property {import('../../services/postgres/AuthenticationsService')} authenticationsService
 * @property {import('../../services/postgres/UsersService')} usersService
 * @property {import('../../tokenize/TokenManager')} tokenManager
 * @property {import('../../validator/authentications')} validator
 */

/**
 * Authentications Plugin
 * @type {import('@hapi/hapi').PluginBase<PluginOptions>
 * & (import('@hapi/hapi').PluginNameVersion
 * | import('@hapi/hapi').PluginPackage)}
 */
module.exports = {
  name: 'authentications',
  version: '1.0.0',
  register: async (server, {
    authenticationsService,
    usersService,
    tokenManager,
    validator,
  }) => {
    const authenticationsHandler = new AuthenticationsHandler(
      authenticationsService,
      usersService,
      tokenManager,
      validator,
    );
    server.route(routes(authenticationsHandler));
  },
};
