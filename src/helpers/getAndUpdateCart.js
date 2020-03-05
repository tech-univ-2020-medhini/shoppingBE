const db = require('../../models');

const { gt } = db.Sequelize.Op;
const getCart = async () => {
  const cart = await db.products.findAll({
    where: {
      cart: {
        [gt]: 0,
      },
    },
  });
  return cart;
};

const updateCart = async (productId) => {
  const result = await db.products.update({ cart: db.sequelize.literal('field + 1') }, {
    where: {
      id: productId,
    },
  });
  return result;
};
module.exports = { getCart, updateCart };
