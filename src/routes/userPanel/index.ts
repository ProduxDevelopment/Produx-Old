import { Router } from "express";
const router = Router()

import config from "../../../Config/config.json"
import meta from "../../../Config/meta.json"
import theme from "../../../Config/theme.json"

router.get("/", (req, res) => {
    if (req.isAuthenticated()) {
        res.render("userPanel/panel.ejs", {
            title: "User Panel",
            description: meta.pageDescription,
            author: meta.author,
            keywords: meta.keywords,
            siteName: config.customisation.info.siteName,
            data: theme
        })
    } else { 
        req.flash("error", "You are not authenticated!")
        res.redirect("/login")
}})

export default router;
