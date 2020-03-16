const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');

class Product extends Model {}

const ProductModel = Product.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, validate: { min: 4 } }
}, { sequelize });

module.exports = ProductModel;
