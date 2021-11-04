const Sequelize = require("Sequelize");

const sequelize = new Sequelize("todo", "root", "nodejs", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
