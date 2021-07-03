import { Router } from "express";
import passport from "passport"
const router = Router()

router.post("/", (req, res, next) => {
    passport.authenticate("local", function(err, user, info) {
        if (err) {
            return res.status(400).json({
                errors: err
            })
        }
        if (!user) {
            return res.status(400).json({
                errors: "No user found."
            })
        }
        req.logIn(user, function(err) {
            if (err) {
                return res.status(400).json({
                    errors: err
                })
            }
            //req.flash("logged", "Sucessfully Logged in!")
            return res.redirect("/panel")
        })
    })(req, res, next)
})

export default router;