const db = require('../../models');


const updateCart = async (productId, value) => {
  const result = await db.products.update({ cart: value }, {
    where: {
      id: productId,
    },
  });
  return result;
};
module.exports = { updateCart };
