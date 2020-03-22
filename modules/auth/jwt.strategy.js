const passport = require('passport');
const { auth } = require('../../config');
const { Strategy, ExtractJwt } = require('passport-jwt');
const { Unauthorized } = require('../../common/exceptions/facade');
const usersService = require('../users/user.service');


const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: auth.secretKey,
    expiresIn: auth.expiresIn,
};

const strategy = new Strategy(opts, async (jwtPayload, done) => {
    console.log(jwtPayload);
    try {
            const user = await usersService.findOneById(jwtPayload.id);
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (e) {
        done(new Unauthorized(e.message), false);
    }
});

passport.use(strategy);
