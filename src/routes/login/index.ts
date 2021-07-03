import { Router } from "express";
const router = Router()

import auth from "./api/auth"
router.use("/api/auth", auth)

import login from "./routes/login"
router.use("/login", login)

import register from "./routes/register"
router.use("/register", register)

import logout from "./routes/logout"
router.use("/logout", logout)

export default router;
