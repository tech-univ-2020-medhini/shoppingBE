
module.exports = {
  up: (queryInterface, Sequelize) => Promise.all([
    queryInterface.addColumn('products', 'cart', {
      type: Sequelize.INTEGER,
    }),
  ]),

  down: (queryInterface, Sequelize) => Promise.all([
    queryInterface.removeColumn(
      'products',
      'cart',
    ),
  ]),
};
