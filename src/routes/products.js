const { getProductsHandler } = require('../handler/products');

const productRoutes = [
  {
    path: '/products',
    method: 'GET',
    config: {
      handler: getProductsHandler,
    },
  },
];
module.exports = { productRoutes };
