import User from "../schema/userSchema"

import bcrypt from "bcryptjs";
import passport from "passport"
import LocalStratergy from "passport-local"
const strat = LocalStratergy.Strategy

passport.serializeUser((user:any, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err:any, user:any) => {
        done(err, user);
    })
})

passport.use(
    new strat({ usernameField: "email" }, (email, password, done) => {
        User.findOne({email: email})
            .then((user: any) => {
                if(!user){
                    const newUser = new User({email, password});
                    bcrypt.genSalt(10, (err:any, salt:any) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw err;
                            newUser.password = hash;
                            newUser.save()
                            .then((user:any) => {
                                return done(null, user)
                            })
                            .catch((err:any) => {
                                return done(null, false, { message: err})
                            })
                        })
                    })
                } else {
                    bcrypt.compare(password, user.password, (err:any, isMatch:any) => {
                        if(err) throw err;

                        if(isMatch) {
                            return done(null, user)
                        } else {
                            return done(null, false, { message: "Wrong password!"})
                        }
                    })
                }
            })
            .catch((err:any) => {
                return done(null, false, { message: err })
            })
    })
)

export default passport