const db = require('../../models');


const updateCart = async (productId, value) => {
  console.log(value);
  const result = await db.products.update({ cart: value }, {
    where: {
      id: productId,
    },
  });
  console.log(result);
  return result;
};
module.exports = { updateCart };
