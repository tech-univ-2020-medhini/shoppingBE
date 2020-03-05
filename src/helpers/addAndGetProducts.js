const axios = require('axios');
const url = require('../constants/url');
const db = require('../../models');

const addProducts = async () => {
  const categoriesArray = [];
  const response = await axios.get(url);
  const productsArray = response.data;
  productsArray.forEach(async (element) => {
    const res = await axios.get(`${url}/${element.id}/category`);
    const { category } = res.data;
    const product = element;
    product.category = category;
    categoriesArray.push(category);
    db.products.create(product);
  });
  const categoriesSet = new Set(categoriesArray);
  console.log(categoriesSet);
};

const getProducts = async () => {
  const result = await db.products.findAll();
  if (result.length === 0) {
    return false;
  }
  return result;
};
module.exports = { addProducts, getProducts };
