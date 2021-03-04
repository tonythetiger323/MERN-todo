const router = require("express").Router();
const todosController = require("../../controllers/todosController");

// /api/todos
router.route("/")
  .get(todosController.findAll)
  .post(todosController.create);

// /api/todos/:id
router
  .route("/:id")
  .get(todosController.findById)
  .put(todosController.update)
  .delete(todosController.remove);

module.exports = router;
