import { Router } from "express";
const router = Router()

import auth from "./loginAuth"
router.use("/api/auth", auth)
import login from "./login"
router.use("/login", login)
import register from "./register"
router.use("/register", register)
import logout from "./logout"
router.use("/logout", logout)

export default router;
