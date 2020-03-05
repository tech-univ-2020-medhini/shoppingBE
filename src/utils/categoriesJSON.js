const fs = require('promise-fs');

const readCategories = async () => {
  const result = await fs.readFile('./resources/categories.json');
  const categories = JSON.parse(result);
  return categories;
};

const writeCategories = async (categories) => {
  fs.writeFile('./resources/categories.json', categories);
};
module.exports = { readCategories, writeCategories };
