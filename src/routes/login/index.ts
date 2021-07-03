import { Router } from "express";
const router = Router()

import auth from "./auth"
router.use("/auth", auth)

import login from "./login"
router.use("/login", login)

import register from "./register"
router.use("/register", register)

export default router;
