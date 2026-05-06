'use strict';

const plugin = {};
const VERSION = '1.0.0';

plugin.init = async function init(params = {}) {
  const router = params.router;
  const middleware = params.middleware || {};
  if (!router || plugin._routesRegistered) return;
  plugin._routesRegistered = true;

  const middlewares = [middleware.authenticateRequest].filter(Boolean);
  router.get('/api/peipe-topic-detail/config', middlewares, (req, res) => {
    res.json({ ok: true, version: VERSION, plugin: 'nodebb-plugin-peipe-topic-detail' });
  });
};

plugin.filterConfig = async function filterConfig(config) {
  config.peipeTopicDetail = Object.assign({}, config.peipeTopicDetail, {
    version: VERSION,
    plugin: 'nodebb-plugin-peipe-topic-detail'
  });
  return config;
};

module.exports = plugin;
