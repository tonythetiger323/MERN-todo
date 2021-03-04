const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for Todos
const todoSchema = new Schema({
  name: { type: String, required: true}, // the todo
  complete: { type: Boolean, default: false } // whether or not todo is marked as complete
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
