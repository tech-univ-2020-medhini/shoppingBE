const { getProductsHandler } = require('../handler/products');
const updateCartHandler = require('../handler/cart');

const productRoutes = [
  {
    path: '/products',
    method: 'GET',
    config: {
      handler: getProductsHandler,
    },
  },
  {
    path: '/products/{id}/cart',
    method: 'PATCH',
    config: {
      handler: updateCartHandler,
    },
  },
];
module.exports = { productRoutes };
