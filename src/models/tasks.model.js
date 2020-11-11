const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TasksSchema = new Schema({
  name: {
   type: String,
   required: 'A task name is required to create a new task'
  },
  created_date: {
   type: Date,
   default: Date.now
  },
  status: {
   type: [
    {
    type: String,
    enum: ['pending', 'completed']
    }
   ],
   default: ['pending']
  }
});

module.exports = mondoose.model('Tasks', TasksSchema)