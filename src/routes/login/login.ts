import { Router } from "express";
const router = Router()

import config from "../../../Config/config.json"
import meta from "../../../Config/meta.json"
import theme from "../../../Config/theme.json"

router.get("/", async (req, res) => {
    if(req.isAuthenticated()) return res.redirect("/panel")
    res.render("login/login", {
        title: "Login",
        description: meta.pageDescription,
        author: meta.author,
        keywords: meta.keywords,
        siteName: config.customisation.info.siteName,
        data: theme,
        authenticated: req.isAuthenticated()

    })
})

export default router;
