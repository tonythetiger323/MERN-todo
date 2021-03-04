const db = require("../db/models");

// Defining methods for the todosController
module.exports = {
  // find all todos for get route
  findAll: function(req, res) {
    db.Todo
      .find({})
      .sort({ date: -1 })
      .then(dbTodo => res.json(dbTodo))
      .catch(err => res.status(422).json(err));
  },
  // find a single toso by its id
  findById: function(req, res) {
    db.Todo
      .findById(req.params.id)
      .then(dbTodo => res.json(dbTodo))
      .catch(err => res.status(422).json(err));
  },
  // make a new todo for post route
  create: function(req, res) {
    console.log("body", req.body);
    db.Todo
      .create(req.body)
      .then(dbTodo => res.json(dbTodo))
      .catch(err => res.status(422).json(err));
  },
  // update a todo when name or complete status changed for put route
  update: function(req, res) {
    db.Todo
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbTodo => res.json(dbTodo))
      .catch(err => res.status(422).json(err));
  },
  // delete todo for delete route
  remove: function(req, res) {
    console.log("Delete route hit");
    db.Todo
      .findById({ _id: req.params.id })
      .then(dbTodo => dbTodo.remove())
      .then(dbTodo => res.json(dbTodo))
      .catch(err => res.status(422).json(err));
  }
};
