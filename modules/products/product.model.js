const { DataTypes, Model} = require('sequelize');
const sequelize = require('../../db');

class Product extends Model {
}

const ProductModel = Product.init({
    id: {type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: true},
    species: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.DOUBLE, allowNull: false},
    gender: {type: DataTypes.STRING, allowNull: true},
    weight: {type: DataTypes.DOUBLE, allowNull: true},
    birth_date: {type: DataTypes.DATE, allowNull: true},
    color: {type: DataTypes.STRING, allowNull:true},
    breed: {type: DataTypes.STRING, allowNull:true},
    temper: {type: DataTypes.STRING, allowNull:true},
    imageSrc: {type: DataTypes.STRING, allowNull:true},
    UserId: {type: DataTypes.INTEGER, defaultValue: 1, allowNull:false},
    isSold: {
        type: DataTypes.BOOLEAN, default: false
    }
}, {sequelize, modelName: 'Product'});

module.exports = { ProductModel } ;
