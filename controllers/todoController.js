const Todo = require("../models/Todo");

exports.add_post = (req, res, next) => {
  const taskTitle = req.body.task;
  const userId = req.userData.id;
  Todo.create({
    title: taskTitle,
    userId: userId,
  }).then((task) => {
    res.status(201).json({
      message: "Task added",
      task: task,
    });
  });
};

exports.get_tasks = (req, res, next) => {
  const userId = req.userData.id;
  Todo.findAll({ where: { userId: userId } })
    .then((tasks) => {
      res.status(200).json({
        tasks: tasks,
      });
    })
    .catch((err) => err);
};

exports.get_completed = (req, res, next) => {
  const userId = req.userData.id;
  Todo.findAll({ where: { userId: userId, completed: 1 } })
    .then((completedTasks) => {
      res.status(200).json({
        completed: completedTasks,
      });
    })
    .catch((err) => err);
};
exports.completed = (req, res, next) => {
  const taskId = req.userData.id;
  Todo.update({ completed: 1 }, { where: { id: taskId } })
    .then((completed) => {
      res.status(201).json({
        completed: completed,
        message: "task has been completed",
      });
    })
    .catch((err) => err);
};
exports.remove_task = (req, res, next) => {
  const taskId = req.userData.id;
  Todo.destroy({ where: { id: taskId } })
    .then((removedTask) => {
      res.status(201).json({
        removedTask,
        message: "Task deleted",
      });
    })
    .catch((err) => err);
};
