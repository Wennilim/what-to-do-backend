const express = require("express");
const {
  getTodo,
  addTodo,
  editTodo,
  deleteTodo,
} = require("../controllers/TodoController");
const router = express.Router();

router.get("/", getTodo);
router.post("/add", addTodo);
router.put("/update", editTodo);
router.delete("/delete", deleteTodo);

module.exports = router;
