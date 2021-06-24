/*
 * This is the register screen.
 */

import { Router } from "express";
const router = Router()

router.get("/", (req, res) => {
    res.render('login/register')
})

export default router;
