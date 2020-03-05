const updateQuantity = require('../handler/quantity');

const quantityRoutes = [
  {
    path: '/quantities',
    method: 'PATCH',
    config: {
      handler: updateQuantity,
    },
  },
];

module.exports = { quantityRoutes };
