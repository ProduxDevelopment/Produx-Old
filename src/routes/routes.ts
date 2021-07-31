import theme from "../../Config/theme.json"

import { Router } from "express";
import { config } from "../interfaces/config"
import { meta } from "../interfaces/meta"
const flash = require("express-flash")

import express from "express";
import session from 'express-session'
import MongoStore from 'connect-mongo'

import passport from "../passport/localStratergy"

import ConfigFile from "../../Config/config.json"
const config = ConfigFile as config
import MetaFile from "../../Config/meta.json"
const meta = MetaFile as meta

const router = Router()

router.use(express.json())
router.use(express.urlencoded({
    extended: false
}))
router.use(session({
    secret: String(config.server.secret),
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
        mongoUrl: String(config.database.uri)
    })
}))
router.use(passport.initialize())
router.use(passport.session())
router.use(flash());

import login from "./login/index"
router.use("/", login)

import userPanel from "./userPanel/index"
router.use("/panel", userPanel)

import store from "./store/index"
router.use("/store", store)

router.get("/", (req, res) => {
    res.render("index", {
        title: "Homepage",
        description: meta.pageDescription,
        author: meta.author,
        keywords: meta.keywords,
        siteName: config.customisation.info.siteName,
        siteColour: "orange",
        data: theme,
        authenticated: req.isAuthenticated()
    })
})

// DO NOT PUT ANYTHING BELOW THIS.
router.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        description: meta.pageDescription,
        author: meta.author,
        keywords: meta.keywords,
        siteName: config.customisation.info.siteName,
        siteColour: "orange",
        data: theme,
        authenticated: req.isAuthenticated()
    })
})

export default router