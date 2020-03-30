const {v1: uuid} = require('uuid');

const users = [
    {
        id: uuid(),
        firstName: "Niko",
        lastName: "Kole",
        email: "mail1@gmail.com",
        password: "Password",
    },
    {
        id: uuid(),
        firstName: "Brad",
        lastName: "Traversy",
        email: "mail2@gmail.com",
        password: "Password",
    },
    {
        id: uuid(),
        firstName: "Lei",
        lastName: "Antu",
        email: "mail3@gmail.com",
        password: "Password",
    },
    {
        id: uuid(),
        firstName: "Ball",
        lastName: "Boy",
        email: "mail4@gmail.com",
        password: "Password",
    },
    {
        id: uuid(),
        firstName: "Ninja",
        lastName: "Playa",
        email: "mail5@gmail.com",
        password: "Password",
    },
];

const accounts = [
    {
        id: uuid(),
        balance: 1000,
        UserId: users[0].id,
        userType: 'admin'
    },
    {
        id: uuid(),
        balance: 1000,
        UserId: users[1].id,
        userType: 'admin'
    },
    {
        id: uuid(),
        balance: 1000,
        UserId: users[2].id,
        userType: 'default'
    },
    {
        id: uuid(),
        balance: 1000,
        UserId: users[3].id,
        userType: 'default'
    },
    {
        id: uuid(),
        balance: 1000,
        UserId: users[4].id,
        userType: 'provider'
    },
];

module.exports = {
  users,
  accounts
};
