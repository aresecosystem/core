'use strict'

/**
 * Register webhook routes.
 * @param  {Hapi.Server} server
 * @param  {Object} options
 * @return {void}
 */
const register = async (server, options) => {
  const handler = require('./handler')

  server.route([{
    method: 'GET',
    path: '/webhooks',
    ...handler.index
  }, {
    method: 'POST',
    path: '/webhooks',
    ...handler.store
  }, {
    method: 'GET',
    path: '/webhooks/{id}',
    ...handler.show
  }, {
    method: 'PUT',
    path: '/webhooks/{id}',
    ...handler.update
  }, {
    method: 'DELETE',
    path: '/webhooks/{id}',
    ...handler.destroy
  }, {
    method: 'GET',
    path: '/webhooks/events',
    ...handler.events
  }])
}

/**
 * The struct used by hapi.js.
 * @type {Object}
 */
exports.plugin = {
  name: 'ARK Webhooks API',
  version: '0.0.1',
  register
}
