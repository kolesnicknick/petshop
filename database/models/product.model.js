const { DataTypes, Model} = require('sequelize');
const sequelize = require('../db');

class Product extends Model {
}

const ProductModel = Product.init({
    id: {type: DataTypes.UUID, primaryKey: true, allowNull: false},
    name: {type: DataTypes.STRING, allowNull: true},
    species: {type: DataTypes.STRING, allowNull: false},
    price: {type: DataTypes.DOUBLE, allowNull: false},
    gender: {type: DataTypes.STRING, allowNull: true},
    weight: {type: DataTypes.DOUBLE, allowNull: true},
    birth_date: {type: DataTypes.BIGINT, allowNull: true},
    color: {type: DataTypes.STRING, allowNull:true},
    breed: {type: DataTypes.STRING, allowNull:true},
    temper: {type: DataTypes.STRING, allowNull:true},
    is_sterile: {type: DataTypes.BOOLEAN, allowNull:true},
    imageSrc: {type: DataTypes.STRING, allowNull:true},
    hair: { type: DataTypes.ENUM, values: ["long", "short"] },
    UserId: {
        type: DataTypes.UUID,
        references:{
            model: {
                tableName: 'Users',
            },
            key: 'id',
        }
    },
    isSold: {
        type: DataTypes.BOOLEAN, default: false
    }
}, {sequelize, modelName: 'Product'});

module.exports = { ProductModel } ;
