const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class User extends Model {}

const UserModel = User.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    firstName: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, validate: { min: 4 } }
}, { sequelize });

module.exports = UserModel;
