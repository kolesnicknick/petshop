const authService = require('./auth.service');
const {asyncHandler} = require('../../common/helpers/async.handler');
const {responseHandler} = require('../../common/helpers/response.handler');

class AuthController{
    login = asyncHandler(async (req, res, next) =>{
        const body = await req.body;
        console.log(body);
        responseHandler(res, await authService.login(body));
        next();
    });
}

const authController = new AuthController();
module.exports = authController;
