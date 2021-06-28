import { Router } from "express";
const router = Router()

router.use("/", (req, res) => {
    res.sendFile("login")
})


export default router;

