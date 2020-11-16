const controllers = require('../controllers/auth.controller');
const express = require('express');

exports.tasksRoutes = express.Router();

tasksRoutes.post('/register', controllers.registerUser);

tasksRoutes.post('/login', controllers.login);

module.exports = authRoutes;