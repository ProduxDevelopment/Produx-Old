                                                      import { Router } from "express";
const router = Router()

import { config } from "../../../interfaces/config"
import { meta } from "../../../interfaces/meta"
import ConfigFile from "../../../../Config/config.json"
const config = ConfigFile as config
import MetaFile from "../../../../Config/meta.json"
const meta = MetaFile as meta
import theme from "../../../../Config/theme.json"

router.get("/", async (req, res) => {
    if(req.isAuthenticated()) return res.redirect("/panel")
    res.render("login", {
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
