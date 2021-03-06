const axios = require('axios');
const url = require('../constants/url');
const db = require('../../models');
const categories = require('../utils/categoriesJSON');

const addProducts = async () => {
  const categoriesArray = [];
  const response = await axios.get(url);
  const productsArray = response.data;
  const newProductsArray = await Promise.all(productsArray.map(async (element) => {
    const res = await axios.get(`${url}/${element.id}/category`);
    const { category } = res.data;
    const product = element;
    product.category = category;
    product.cart = 0;
    categoriesArray.push(category);
    return product;
  }));
  await db.products.bulkCreate(newProductsArray);
  const categoriesSet = new Set(categoriesArray);
  const categoriesString = JSON.stringify([...categoriesSet]);
  await categories.writeCategories(categoriesString);
};

const getProducts = async () => {
  const result = await db.products.findAll();
  if (result.length === 0) {
    return false;
  }
  return result;
};
module.exports = { addProducts, getProducts };
