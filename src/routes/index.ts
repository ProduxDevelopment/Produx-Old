
import { Router } from "express";
import { config } from "../interfaces/config"
import { flash } from "express-flash-message";

import File from "../../Config/config.json"
import express from "express";
import session from 'express-session'
import MongoStore from 'connect-mongo'

import passport from "../passport/setup"

const config = File as config
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
router.use(flash())

import login from "./login/index"
router.use("/", login)

router.get("/hello", (req, res) => {
    if (req.isAuthenticated()) {
        //@ts-ignore
        const { email, password, name } = req.user
        res.send("pog" + name)
    } else {
        res.redirect("/login")
    }
})

router.get("/logout", (req, res) => {
    res.clearCookie("connect.sid")
    res.redirect("/login")
})


export default router