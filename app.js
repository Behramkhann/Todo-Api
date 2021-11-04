const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const sequelize = require("./util/connection");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//routes
const todoRoutes = require("./routes/todosRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/todos", todoRoutes);
app.use("/users", userRoutes);

app.use("/", (req, res, next) => {
  res.json({
    app: "RUNNNING",
  });
});

sequelize
  .sync()
  .then((res) => {
    console.log(res);
  })
  .then((err) => {
    console.log(err);
  });
module.exports = app;
