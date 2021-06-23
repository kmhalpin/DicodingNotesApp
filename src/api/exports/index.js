const ExportsHandler = require('./handler');
const routes = require('./routes');

/**
 * Exports Plugin Options
 * @typedef PluginOptions
 * @property {import('../../services/rabbitmq/ProducerService')} service
 * @property {import('../../validator/exports')} validator
 */

/**
 * Exports Plugin
 * @type {import('@hapi/hapi').PluginBase<PluginOptions>
 * & (import('@hapi/hapi').PluginNameVersion
 * | import('@hapi/hapi').PluginPackage)}
 */
module.exports = {
  name: 'exports',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const exportsHandler = new ExportsHandler(service, validator);
    server.route(routes(exportsHandler));
  },
};
