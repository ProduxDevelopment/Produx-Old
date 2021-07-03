
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

router.get("/", (req, res) => {
    res.render("index", {
        title: "Homepage",
        description: MetaFile.pageDescription,
        author: MetaFile.author,
        keywords: MetaFile.keywords
    })
})

router.get("/panel", (req, res) => {
    if (req.isAuthenticated()) {
        //@ts-ignore
        const { email, password, name } = req.user
        res.send("Panel")
    } else {
        //req.flash("error", "You are not authenticated!")
        res.redirect("/login")
    }
})



export default router