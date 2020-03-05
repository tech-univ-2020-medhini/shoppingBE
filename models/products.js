
module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    imageLink: DataTypes.STRING,
    category: DataTypes.STRING,
    cart: DataTypes.INTEGER,
  }, {});
  products.associate = function (models) {
    // associations can be defined here
  };
  return products;
};
