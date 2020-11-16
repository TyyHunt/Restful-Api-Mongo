const controllers = require('../controllers/auth.controller');
const express = require('express');

exports.authRoutes = express.Router();

authRoutes.post('/register', controllers.registerUser);
authRoutes.post('/update', controllers.updateUser);
authRoutes.post('/login', controllers.login);

module.exports = authRoutes;