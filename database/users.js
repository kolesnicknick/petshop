const {v1: uuid} = require('uuid');
const bcrypt = require('bcrypt');

const users = [
    {
        id: uuid(),
        firstName: "Niko",
        lastName: "Kole",
        email: "kolesniknikolai92@gmail.com",
        password: bcrypt.hashSync('password', 10),
    },
    {
        id: uuid(),
        firstName: "Brad",
        lastName: "Traversy",
        email: "buyer@gmail.com",
        password: bcrypt.hashSync('password', 10),
    },
    {
        id: uuid(),
        firstName: "Lei",
        lastName: "Antu",
        email: "mail3@gmail.com",
        password: bcrypt.hashSync('password', 10),
    },
    {
        id: uuid(),
        firstName: "Ball",
        lastName: "Boy",
        email: "mail4@gmail.com",
        password: bcrypt.hashSync('password', 10),
    },
    {
        id: uuid(),
        firstName: "Ninja",
        lastName: "Playa",
        email: "provider@gmail.com",
        password: bcrypt.hashSync('password', 10),
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
        balance: 100000,
        UserId: users[1].id,
        userType: 'default'
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
