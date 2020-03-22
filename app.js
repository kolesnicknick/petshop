const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const sequelize = require('./db');

let usersRouter = require('./modules/users/user.routes');
let authRouter = require('./modules/auth/auth.rotues');
let app = express();
// app.use(express.json());
app.use(bodyParser.json());

// app.use('/', (req, res) => {res.send('Hello world');});
app.use('/users', usersRouter);
app.use('/auth', authRouter);

app.listen(3000, () => console.log('Server is started'));

sequelize.sync();


module.exports = app;
