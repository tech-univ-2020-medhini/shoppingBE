module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'shopping',
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: null,
    database: 'shopping',
    host: '127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,
  },
  production: {
    username: process.env.DB_USERNAME,
    password: null,
    database: 'shopping',
    host: '127.0.0.1',
    dialect: 'postgrews',
    operatorsAliases: false,
  },
};
