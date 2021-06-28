import { paypal } from "../index";

import { Router } from "express";
const router = Router()

router.get("/", async (req, res) => {
    let link = await paypal.createOrder({
        "intent": "CAPTURE",
        "application_context": {
            "return_url": "http://localhost/return",
            "cancel_url": "http://localhost/return",
            "brand_name": "EXAMPLE INC",
            "locale": "en-US",
            "landing_page": "BILLING",
            "user_action": "CONTINUE"
        },
        "purchase_units": [
            {
                "reference_id": "TEST",
                "description": "Testing Goods",
                "custom_id": "BANK-STATE",
                "soft_descriptor": "BANK-STATE",
                "amount": {
                    "currency_code": "USD",
                    "value": "5.00",
                    "breakdown": {
                        "item_total": {
                            "currency_code": "USD",
                            "value": "5.00"
                        },
                    }
                },
                "items": [
                    {
                        "name": "Test",
                        "description": "Test",
                        "sku": "sku01",
                        "unit_amount": {
                            "currency_code": "USD",
                            "value": "5"
                        },
                        "quantity": "1",
                        "category": "DIGITAL_GOODS"
                    },
                ],
            }
        ]
    })

    res.redirect(link.links[1].href)
    console.log(link)
})

import returnPay from "./return";
router.use("/return", returnPay)


export default router;
