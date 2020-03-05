const { productRoutes } = require('./products');
const { categoryRoute } = require('./categories');

module.exports = [...productRoutes, ...categoryRoute];
