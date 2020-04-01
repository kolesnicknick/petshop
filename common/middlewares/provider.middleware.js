const {Unauthorized} = require("../exceptions/facade");
module.exports = (req, res, next) => {
        if ((req.user.account.type === 'default')) {
            return next(new Unauthorized('You should be a provider or admin to perform this action'));
        } else {
            next();
        }
};
