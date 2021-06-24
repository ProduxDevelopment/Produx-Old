import { Router } from "express";
const router = Router()

import login from "./login/index";
router.use('/login', login)


export default router;
