const axios = require('axios');
const url = require('../constants/url');
const db = require('../../models');

const addProducts = async () => {
  const categoriesArray = [];
  const response = await axios.get(url);
  const productsArray = response.data;
  productsArray.forEach((element) => {
    const res = axios.get(`${url}/${element.id}/category`);
    const category = res.data;
    const product = { element, category };
    categoriesArray.push(category);
    db.products.create(product);
  });
  const categoriesSet = new Set(categoriesArray);
  console.log(categoriesSet);
};
module.exports = addProducts;
