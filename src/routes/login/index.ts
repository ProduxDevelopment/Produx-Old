import { Router } from "express";
const router = Router()

import createUser from "./createUser";
router.use("/createUser", createUser);

import user2FA from "./user2FA"
router.use("/user2FA", user2FA)


export default router;
