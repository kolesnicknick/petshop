const authService = require('./auth.service');

class AuthController{
    async login(req, res, next){
        const body = await req.body;
        res.json(await authService.login(body));
        next();
    }
}

const authController = new AuthController();
module.exports = authController;
