const updateQuantity = require('../handler/quantity');
const { patchQuantity } = require('../schemas');

const quantityRoutes = [
  {
    path: '/quantities',
    method: 'PATCH',
    config: {
      handler: updateQuantity,
      validate: {
        payload: patchQuantity,
      },
    },
  },
];

module.exports = { quantityRoutes };
