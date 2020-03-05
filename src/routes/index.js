const { productRoutes } = require('./products');
const { categoryRoutes } = require('./categories');
const { quantityRoutes } = require('./quantities');

module.exports = [...productRoutes, ...categoryRoutes, ...quantityRoutes];
