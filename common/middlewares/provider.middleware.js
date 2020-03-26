const {Unauthorized} = require("../exceptions/facade");
module.exports = (req, res, next) => {
        if (!user.isProvider()) {
            return next(new Unauthorized('Invalid jwt token'));
        } else {
            next();
        }
    authMiddleWare(req, res, next);
};
