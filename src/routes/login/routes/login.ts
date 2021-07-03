import { Router } from "express";
const router = Router()

router.get("/", async (req, res) => {
    if(req.isAuthenticated()) return res.redirect("/panel")
    res.render("login")
})

export default router;
