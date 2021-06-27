import Config from "../Config/config.json";
import { config } from "./interfaces/config";

import { ExpressClient } from "./client/ExpressClient"
import { DatabaseClient } from "./client/DatabaseClient"
import { PayPalClient } from "./client/PaypalClient";

const express = new ExpressClient(Config as unknown as config)
const database = new DatabaseClient(Config as unknown as config)
const paypal = new PayPalClient(Config as unknown as config)


export { database, express}


setTimeout(function(){
  paypal.createOrder({
    "intent": "CAPTURE",
    "purchase_units": [
      {
        "amount": {
          "currency_code": "USD",
          "value": "100.00"
        }
      }
    ]
  })
}, 5000)


