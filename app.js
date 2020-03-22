const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const sequelize = require('./db');
const errorHandler =  require('./common/middlewares/errors.middleware');
let usersRouter = require('./modules/users/user.routes');
let authRouter = require('./modules/auth/auth.rotues');
let productsRouter = require('./modules/products/product.routes');
let app = express();


app.use(bodyParser.json());
app.use(logger('dev'));
require('./modules/auth/jwt.strategy');
// app.use('/', (req, res) => {res.send('Hello world');});
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/products', productsRouter);


app.use(errorHandler);
//sequelize.sync().then(require('./common/helpers/dbgenerator'));


app.listen(3000, () => console.log('Server is started'));



module.exports = app;
