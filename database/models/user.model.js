const {DataTypes, Model} = require('sequelize');
const {AccountModel} = require('./account.model');
const {ProductModel} = require('./product.model');
const {v4: uuid} = require('uuid');

const sequelize = require('../db');

class User extends Model {
}

const UserModel = User.init({
    id: {type: DataTypes.UUID, primaryKey: true, allowNull: false, defaultValue: uuid()},
    firstName: {type: DataTypes.STRING, allowNull: true},
    lastName: {type: DataTypes.STRING, allowNull: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING, validate: {min: 4}},
}, {
    sequelize,
    modelName: 'User'
});

UserModel.hasMany(ProductModel);
ProductModel.belongsTo(UserModel);

module.exports = {UserModel};
