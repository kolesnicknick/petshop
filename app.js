const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const sequelize = require('./database/db');
const errorHandler =  require('./common/middlewares/errors.middleware');
let usersRouter = require('./modules/users/user.routes');
let authRouter = require('./modules/auth/auth.rotues');
let productsRouter = require('./modules/products/product.routes');
let ordersRouter = require('./modules/orders/order.routes');
let app = express();
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
app.use(xss());
app.use(cors());
app.use(rateLimit({ windowMs: 600000, max: 100 }));

app.use(bodyParser.json());
app.use(logger('dev'));
app.use(express.static('public'));

require('./modules/auth/jwt.strategy');
// app.use('/', (req, res) => {res.send('Hello world');});
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

app.use(errorHandler);

app.listen(54322, () => console.log('Server is started'));
// require('./database/dbgenerator');
module.exports = app;
