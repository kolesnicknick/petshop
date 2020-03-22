const passport = require('passport');
const { Unauthorized } =  require('../exceptions/facade');

module.exports = (req, res, next) => {
    const authMiddleWare = passport.authenticate('jwt', {session: false}, (err, user) => {
        console.log(err);
            if (!user) {
                return next(new Unauthorized('Invalid jwt token'));
            } else {
                req.user = user;
                next();
            }
        });
    authMiddleWare(req, res, next);
};
