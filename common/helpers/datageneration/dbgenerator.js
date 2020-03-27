const {UserModel} = require ('../../../modules/users/user.model');
const userService = require ('../../../modules/users/user.service');
const {AccountModel} = require ('../../../modules/accounts/account.model');
const {ProductModel} = require ('../../../modules/products/product.model');
const pets = require('./pets');
const uuid = require('uuid/v1');

let adminID = uuid();
let createAdmin = async ()=>{

    await userService.createOne({
        id: adminID,
        firstName: "Niko",
        lastName: "Kole",
        email: "kolesniknikolai92@gmail.com",
        password: "Password1",
    });

    AccountModel.create({
        id: uuid(),
        balance: 1000,
        UserId: adminID,
        userType: 'admin'
    });
};

createAdmin();



pets.forEach(entry => {
    const product = ProductModel.create(
        entry
    );
    console.log(product);
});