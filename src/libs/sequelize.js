const { Sequelize } = require("sequelize");

const { config } = require("./../config/config");

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbUser);
const URI = `posgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: "postgres",
  logging: true,
});

module.exports = sequelize;