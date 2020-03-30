const { Sequelize } = require('sequelize');
const { db:db } = require('./config/config.json');

const sequelize = new Sequelize(db.name, db.user, db.password, {
    host: db.host,
    port: db.port,
    dialect: db.dialect,
    dialectOptions:{
        supportBigNumbers:true
    }
});

sequelize
    .authenticate()
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

module.exports = sequelize;
