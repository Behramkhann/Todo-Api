const express = require("express");
const authMiddleware = require("../chech-Auth/auth-middleware");
const router = express.Router();

const todoController = require("../controllers/todoController");

router.post("/add", authMiddleware, todoController.add_post);
router.get("/tasks", authMiddleware, todoController.get_tasks);
router.get("/completedTasks", authMiddleware, todoController.get_completed);
router.delete("/remove/:taskId", authMiddleware, todoController.remove_task);
router.patch("/tasks/:taskId", authMiddleware, todoController.completed);

module.exports = router;
