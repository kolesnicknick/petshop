'use strict';
const {users, accounts} = require('../users');
 const pets = require('../pets');

module.exports = {
  up: (queryInterface, Sequelize) => {
     queryInterface.bulkInsert('Users', users);
    queryInterface.bulkInsert('Accounts', accounts);

    let updatedPets = pets.map(pet => {
        pet.UserId = accounts.find(acc => acc.userType === 'provider').UserId;
        pet.isSold = false;
        return pet;
    });
    updatedPets.forEach(console.log);
    return queryInterface.bulkInsert('Products', pets);
  },

  down: (queryInterface, Sequelize) => {
      queryInterface.bulkDelete('Users', null, {});
      return queryInterface.bulkDelete('Accounts', null, {});
  }
};
