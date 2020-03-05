const productHelper = require('../helpers/addAndGetProducts');

const getProductsHandler = async (request, h) => {
  try {
    const result = await productHelper.getProducts();
    if (!result) {
      await productHelper.addProducts();
      const products = await productHelper.getProducts();
      return h.response(products).code(200);
    }
    return h.response(result).code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};
module.exports = { getProductsHandler };
