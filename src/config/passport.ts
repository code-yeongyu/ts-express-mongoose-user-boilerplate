import passport from 'passport'
import { Strategy as JWTStrategy, ExtractJwt as ExtractJWT } from 'passport-jwt'
import { Strategy as LocalStrategy } from 'passport-local'

import env from 'config/env'

const strategies = () => {
    // Local Strategy
    passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password'
    }, (username, password, done) => {
        // find user
        // check password
        // return done with the found user
    }))

    //JWT Strategy
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: env.JWT_SECRET
    }, (jwtPayload, done) => {
        // find user
        // return done with the found user
    }));
}

export default strategies