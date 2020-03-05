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

const updateCart = async () => {

};
module.exports = { getCart, updateCart };
