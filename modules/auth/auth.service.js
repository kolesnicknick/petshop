const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {auth} = require('../../database/config/config');
const {BadRequest} = require('../../common/exceptions/facade');
const usersService = require('../users/user.service');
const usersController = require('../users/user.controller');

class AuthService {
    async login({email, password}) {
        const user = await usersService.findOneByEmail(email);

        if (!bcrypt.compareSync(password, user.password)) {
            throw new BadRequest('Wrong password');
        }
        const token = jwt.sign({ id: user.id, email: user.email }, auth.secretKey);
        return {
            token,
            expires: auth.expiresIn
        }
    }
}


const authService = new AuthService();
module.exports = authService;
