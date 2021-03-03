'use strict';
module.exports = mongoose => {
  const newSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    completed: {
      type: Boolean,
      default: false
    }
  }, {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  });
  const Todo = mongoose.model('Todo', newSchema);
  return Todo;
};