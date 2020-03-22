const {UserModel} = require ('../../modules/users/user.model');
const {AccountModel} = require ('../../modules/accounts/account.model');

// UserModel.create({
//     firstName: "Niko",
//     lastName: "Kole",
//     email: "kolesniknikolai92@gmail.com",
//     password: "Password1",
// }).then(console.log);
//
// AccountModel.create({
//     balance: 1000,
//     userID: 1,
//     userType: 'admin'
// }).then(console.log);

UserModel.findOne({ where: { id: 1 } }).then(
    res => console.log(`THIS IS THE USEEEEEER: ${res}`)
);
