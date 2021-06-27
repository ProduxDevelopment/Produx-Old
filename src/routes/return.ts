import { paypal } from "../index";

import { Router } from 'express';
const router = Router()

router.use('/', async (req, res) => {
    res.send("hello")
    const { token, PayerID } = req.query;
    const getPayment = await paypal.orderCapture(token)
    console.log(getPayment)
})

export default router;
