const db = require("../db/models");

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
    db.Todo
      .find({})
      .sort({ date: -1 })
      .then(dbTodo => res.json(dbTodo))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Todo
      .findById(req.params.id)
      .then(dbTodo => res.json(dbTodo))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    console.log("body", req.body);
    db.Todo
      .create(req.body)
      .then(dbTodo => res.json(dbTodo))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Todo
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbTodo => res.json(dbTodo))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Todo
      .findById({ _id: req.params.id })
      .then(dbTodo => dbTodo.remove())
      .then(dbTodo => res.json(dbTodo))
      .catch(err => res.status(422).json(err));
  }
};
