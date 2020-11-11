const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const bodyParser = require('body-parser');
const tasksRoutes = require('./routes/tasks.routes');
const middleware = require('./middleware/errors.middleware');


const app = express();
const post = process.env.PORT || 3000;
const logLevel = process.env.LOG_Level || 'dev';

mongoose.Promise = global.Promise;
mongoose.connect('mongodv://localhost/tododb', {
 useNewUrlParser: true,
 useUnifiedTopology: true
});

const db = mongoos.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
 console.log('Connection Successful');
});

app.use(logger(logLevel));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/tasks', tasksRoutes);
app.use(middleware.error404());
app.use(middleware.error500());
