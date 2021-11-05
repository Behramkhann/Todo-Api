const express = require("express");
const router = express.Router();

const todoController = require("../controllers/todoController");

router.post("/", (req, res, next) => {
  const todo = req.body;
});
router.get("/:userid", todoController.post);

module.exports = router;
