const Usercontroller = require('../controllers/user.controller');
const express = require('express');

exports.userRoutes = express.Router();

userRoutes.get('/getUser', Usercontroller.getUser);
userRoutes.post('/deleteUser', Usercontroller.deleteUser);


module.exports = userRoutes;