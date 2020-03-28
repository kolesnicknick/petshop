const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const sequelize = require('./db');
const errorHandler =  require('./common/middlewares/errors.middleware');
let usersRouter = require('./modules/users/user.routes');
let authRouter = require('./modules/auth/auth.rotues');
let productsRouter = require('./modules/products/product.routes');
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

app.use(errorHandler);
// sequelize.sync().then(require('./common/helpers/datageneration/dbgenerator'));

app.listen(54322, () => console.log('Server is started'));

module.exports = app;
