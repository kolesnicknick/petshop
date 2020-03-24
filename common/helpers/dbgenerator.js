const {UserModel} = require ('../../modules/users/user.model');
const userService = require ('../../modules/users/user.service');
const {AccountModel} = require ('../../modules/accounts/account.model');
const {ProductModel} = require ('../../modules/products/product.model');
const data = require('./data');


userService.createOne({
    firstName: "Niko",
    lastName: "Kole",
    email: "kolesniknikolai92@gmail.com",
    password: "Password1",
}).then(user => {AccountModel.create({
    balance: 1000,
    userId: user.id,
    userType: 'admin'
}).then(console.log);});

data.data.forEach(entry => {
    const product = ProductModel.create(
        entry
    );
    console.log(product);
});
