const quantities = require('../helpers/updateQuantity');

const updateQuantityHandler = async (request, h) => {
  try {
    const { id, quantity, cart } = request.payload;
    const updateValue = quantity - cart;
    const result = await quantities.updateQuantity(id, updateValue);
    return h.response(result).code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};
module.exports = updateQuantityHandler;
