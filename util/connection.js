const Sequelize = require("sequelize").Sequelize;

const sequelize = new Sequelize("todo", "root", "nodejs", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
