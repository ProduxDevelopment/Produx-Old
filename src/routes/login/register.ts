import { Router } from "express";
const router = Router()

router.get("/", (req, res) => {
    if(req.isAuthenticated()) return res.redirect("/hello")
    res.render("register")
})

export default router;
