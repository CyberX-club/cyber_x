const { createProxyMiddleware } = require('http-proxy-middleware');
const {getApiUrl} = require("./Api");
require('dotenv').config();

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: getApiUrl(),
            changeOrigin: true,
        })
    );
};
