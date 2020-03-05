const db = require('../../models');


const updateQuantity = async (productId, value) => {
  const result = await db.products.update({ quantity: value, cart: 0 }, {
    where: {
      id: productId,
    },
  });
  return result;
};
module.exports = { updateQuantity };
