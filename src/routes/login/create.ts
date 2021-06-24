import { Router } from "express";
const router = Router()

router.get("/", (req, res) => {
    const { email,  password, verifyPassword } = req.body;
    if(!email) return res.status(400).json({ statusCode: 400, error: 'Bad Request - Missing \'email\' value from request.' })
    if(!password) return res.status(400).json({ statusCode: 400, error: 'Bad Request - Missing \'password\' value from request.' })
    if(!verifyPassword) return res.status(400).json({ statusCode: 400, error: 'Bad Request - Missing \'verifyPassword\' value from request.' })

    

    res.redirect('/')
})

export default router;