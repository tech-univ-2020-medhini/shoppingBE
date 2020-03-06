const { getProductsHandler } = require('../handler/products');
const updateCartHandler = require('../handler/cart');
const { patchCartParams, patchCartPayload } = require('../schemas');

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
      validate: {
        params: patchCartParams,
        payload: patchCartPayload,
      },
    },
  },
];
module.exports = { productRoutes };
