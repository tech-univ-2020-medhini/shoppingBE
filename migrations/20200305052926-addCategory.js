
module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('products', 'category', {
      type: Sequelize.STRING,
    }),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn(
      'products',
      'category',
    ),
  ]),
};
