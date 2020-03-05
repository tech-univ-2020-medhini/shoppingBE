const categories = require('../utils/categoriesJSON');

const getCategories = async (request, h) => {
  try {
    const categoriesArray = await categories.readCategories();
    return h.response(categoriesArray).code(200);
  } catch (err) {
    return h.response(err.message).code(500);
  }
};
module.exports = getCategories;
