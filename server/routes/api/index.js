const router = require("express").Router();
const todoRoutes = require("./todos");

// Todos routes
router.use("/todos", todoRoutes);

module.exports = router;
