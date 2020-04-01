const {Unauthorized} = require("../exceptions/facade");

module.exports = (req, res, next) => {
    const adminMiddleware = passport.authenticate('jwt', {session: false}, (err, user) => {
        if (!(user.account.type === 'admin')) {
            return next(new Unauthorized('You should be an admin to perform this action'));
        } else {
            next();
        }
    });

    adminMiddleware(req, res, next);
};
