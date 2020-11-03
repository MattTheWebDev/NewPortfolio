const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/marvelAPI',
    createProxyMiddleware({
      target: 'http://localhost:3093',
      changeOrigin: true,
    })
  );
};
module.exports = function(app) {
  app.use(
    '/foodAPI?ingredients=',
    createProxyMiddleware({
      target: 'http://localhost:3093',
      changeOrigin: true,
    })
  );
};