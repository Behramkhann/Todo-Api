const express = require("express");
const router = express.Router();
const db = require("../util/connection");
const todoController = require("../controllers/todoController");

router.post("/", (req, res, next) => {
  const todo = req.body;
  db.execute(
    `INSERT INTO todo.tasks (title,userid) VALUES ('${todo.title}','${todo.userid}')`
  )
    .then((result) => {
      res.status(200).json({
        result: result[0],
      });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.get("/:userid", todoController.get);

module.exports = router;
