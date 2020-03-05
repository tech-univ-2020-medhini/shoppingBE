const cart = require('../helpers/updateCart');

const updateCartHandler = async (request, h) => {
  try {
    const { id, value } = request.payload;
    const result = await cart.updateCart(id, value);
    return h.response(result).code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};
module.exports = updateCartHandler;
