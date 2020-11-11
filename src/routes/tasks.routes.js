const controllers = require('../controllers/tasks.controller');
const express = require('express');

exports.tasksRoutes = express.Router();

tasksRoutes
 .get('/', controllers.getAllTasks)
 .post('/', controllers.createTask);

tasksRoutes
 .get('/:taskId', controllers.getTask)
 .post('/:taskId', controllers.updateTask)
 .delete('/:taskId', controllers.deleteTask);