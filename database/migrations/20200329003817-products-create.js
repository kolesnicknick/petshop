'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.createTable('Products', {
            id: {type: Sequelize.UUID, primaryKey: true, allowNull: false},
            name: {type: Sequelize.STRING, allowNull: true},
            species: {type: Sequelize.STRING, allowNull: false},
            price: {type: Sequelize.DOUBLE, allowNull: false},
            gender: {type: Sequelize.STRING, allowNull: true},
            weight: {type: Sequelize.DOUBLE, allowNull: true},
            birth_date: {type: Sequelize.BIGINT, allowNull: true},
            color: {type: Sequelize.STRING, allowNull: true},
            breed: {type: Sequelize.STRING, allowNull: true},
            temper: {type: Sequelize.STRING, allowNull: true},
            is_sterile: {type: Sequelize.BOOLEAN, allowNull: true},
            hair: { type: Sequelize.ENUM, values: ["long", "short"] },
            imageSrc: {type: Sequelize.STRING, allowNull: true},
            UserId: {
                type: Sequelize.UUID,
                references:{
                    model: {
                        tableName: 'Users',
                    },
                    key: 'id',
                }
            },
            isSold: {
                type: Sequelize.BOOLEAN, default: false
            },
            createdAt: {type:Sequelize.DATE, allowNull:false, defaultValue: new Date()},
            updatedAt: {type:Sequelize.DATE, allowNull:false, defaultValue: new Date()},

        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Products');
    }
};

