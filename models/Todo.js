const Sequelize = require("sequelize");

const sequelize = require("../util/connection");

const Todo = sequelize.define("todo", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },

  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  completed: {
    type: Sequelize.TINYINT,
    allowNull: true,
  },
  userId: {
    type: Sequelize.INTEGER.UNSIGNED,
    allowNull: false,
  },
});

module.exports = Todo;
