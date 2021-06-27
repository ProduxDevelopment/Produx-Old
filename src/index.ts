import Config from "../Config/config.json";
import { config } from "./interfaces/config";

import { ExpressClient } from "./Client/ExpressClient"
import { DatabaseClient } from "./Client/DatabaseClient"
import { PayPalClient } from "./Client/PaypalClient";

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