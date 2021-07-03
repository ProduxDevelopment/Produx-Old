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
    new strat({ usernameField: "email", passReqToCallback: true }, (req:any, email:any, password:any, done:any) => {
        User.findOne({email: email})
            .then((user: any) => {
                if(req.baseURL == "/login"){
                    bcrypt.compare(password, user.password, (err:any, isMatch:any) => {
                        if(err) throw err;

                        if(isMatch) {
                            return done(null, user)
                        } else {
                            return done(null, false, { message: "Wrong password!"})
                        }
                    })
                } else if(!user){
                    const newUser = new User({email, password});
                    bcrypt.genSalt(10, (err:any, salt:any) => {
                        bcrypt.hash(newUser.password, salt, (err, hash) => {
                            if(err) throw err;
                            newUser.password = hash;
                            newUser.name = req.body.name
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
                    return done(null, false, { message: "Invalid Operation"})
                }
            })
            .catch((err:any) => {
                return done(null, false, { message: err })
            })
    })
)

export default passport