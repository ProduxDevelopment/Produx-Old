import { Router } from "express";
import { config } from "../interfaces/config"

import File from "../../Config/config.json"
import express from "express";
import session from 'express-session'
import MongoStore from 'connect-mongo'

import passport from "../passport/setup"

const config = File as config
const router = Router()

router.use(express.json())
router.use(express.urlencoded({extended: false}))
router.use(session({secret: String(config.server.secret),resave: false,saveUninitialized: true,store: new MongoStore({mongoUrl: String(config.database.uri)})}))
router.use(passport.initialize())
router.use(passport.session())

import auth from "./auth/auth"
router.use("/api/auth", auth)

router.get("/register", (req, res) => {
    res.render("register")
})

router.get("/hello", (req, res) => {
    if(req.isAuthenticated()){
        res.send("pog")
    } else {
        res.send("your gay")
    }
})
export default router;