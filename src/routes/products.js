const { getProducts } = require('../handler/products');

const productRoutes = [
  {
    path: '/products',
    method: 'GET',
    config: {
      handler: getProducts,
    },
  },
];
module.exports = { productRoutes };
