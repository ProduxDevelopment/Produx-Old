import { Router } from "express";
const router = Router()

import config from "../../../../Config/config.json"
import meta from "../../../../Config/meta.json"
import theme from "../../../../Config/theme.json"

router.get("/", (req, res) => {
    if(req.isAuthenticated()) return res.redirect("/panel")
    res.render("register", {
        title: "Login",
        description: meta.pageDescription,
        author: meta.author,
        keywords: meta.keywords,
        siteName: config.customisation.info.siteName,
        siteColour: "orange",
        data: theme
    })
})

export default router;
