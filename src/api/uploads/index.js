const UploadsHandler = require('./handler');
const routes = require('./routes');

/**
 * Uploads Plugin Options
 * @typedef PluginOptions
 * @property {import('../../services/storage/StorageService')} service
 * @property {import('../../validator/uploads')} validator
 */

/**
 * Uploads Plugin
 * @type {import('@hapi/hapi').PluginBase<PluginOptions>
 * & (import('@hapi/hapi').PluginNameVersion
 * | import('@hapi/hapi').PluginPackage)}
 */
module.exports = {
  name: 'uploads',
  version: '1.0.0',
  register: async (server, { service, validator }) => {
    const uploadsHandler = new UploadsHandler(service, validator);
    server.route(routes(uploadsHandler));
  },
};
