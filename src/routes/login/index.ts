import { Router } from "express";
const router = Router()

import loginScreen from "./loginScreen";
router.use("/", loginScreen)

import createUser from "./registerScreen";
router.use("/register", createUser);

import user2FA from "./user2FA"
router.use("/user2FA", user2FA) // Not in use yet.

export default router;
