const quantities = require('../helpers/updateQuantity');

const updateQuantityHandler = async (request, h) => {
  try {
    const products = request.payload;
    products.forEach(async (element) => {
      const { id, cart, quantity } = element;
      if (cart !== 0) {
        const updateValue = quantity - cart;
        await quantities.updateQuantity(id, updateValue);
      }
    });
    return h.response('updated').code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};
module.exports = updateQuantityHandler;
