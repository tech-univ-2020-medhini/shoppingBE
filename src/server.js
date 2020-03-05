const Hapi = require('@hapi/hapi');
const Joi = require('@hapi/joi');
const routes = require('./routes/index');
require('dotenv').config();

const buildServer = async () => {
  const server = Hapi.Server({
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
  });
  server.route(routes);
  await server.validator(Joi);
  return server;
};

module.exports = buildServer;
