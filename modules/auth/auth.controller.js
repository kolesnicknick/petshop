const authService = require('./auth.service');
const {asyncHandler} = require('../../common/middlewares/async.handler');

class AuthController{
    login = asyncHandler(async (req, res, next) =>{
        const body = await req.body;
        console.log(body);
        res.json(await authService.login(body));
        next();
    });
}

const authController = new AuthController();
module.exports = authController;
