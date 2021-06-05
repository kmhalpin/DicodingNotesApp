const UsersHandler = require('./handler');
const routes = require('./routes');

/**
 * Users Plugin Options
 * @typedef PluginOptions
 * @property {import('../../services/postgres/UsersService')} service
 * @property {import('../../validator/users')} validator
 */

/**
 * Users Plugin
 * @type {import('@hapi/hapi').PluginBase<PluginOptions>
 * & (import('@hapi/hapi').PluginNameVersion
 * | import('@hapi/hapi').PluginPackage)}
 */
module.exports = {
  name: 'users',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const usersHandler = new UsersHandler(service, validator);
    server.route(routes(usersHandler));
  },
};
