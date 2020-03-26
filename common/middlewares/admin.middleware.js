module.exports = (req, res, next) => {
    const authMiddleWare = passport.authenticate('jwt', {session: false}, (err, user) => {
        if (!user.isProvider()) {
            return next(new Unauthorized('Invalid jwt token'));
        } else {
            next();
        }
    });
    authMiddleWare(req, res, next);
};
