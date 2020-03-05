const getCategories = require('../handler/categories');

const categoryRoutes = [
  {
    path: '/categories',
    method: 'GET',
    config: {
      handler: getCategories,
    },
  },
];

module.exports = { categoryRoutes };
