import { Router } from "express";
import passport from "passport"
const router = Router()

router.post("/", (req, res, next) => {
    passport.authenticate("local", function(err, user, info) {
        if (err) {
            req.flash("error","There has been an error whilst processing your request!")
            res.redirect("/login")
            return; 
        }
        if (!user) {
            req.flash("error","No user was found, or there were invalid login credentials.")
            res.redirect("/login")
            return; 
        }
        req.logIn(user, function(err) {
            if (err) {
                req.flash("error","An unknown error occured!")
                res.redirect("/login")
                return; 
            }
            //req.flash("logged", "Sucessfully Logged in!")
            return res.redirect("/panel")
        })
    })(req, res, next)
})

export default router;