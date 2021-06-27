import Config from "../Config/config.json";
import { config } from "./interfaces/config";

import { ExpressClient } from "./Client/ExpressClient"
import { DatabaseClient } from "./Client/DatabaseClient"
import { PayPalClient } from "./Client/PaypalClient";

const express = new ExpressClient(Config as config)
const database = new DatabaseClient(Config as config)
const paypal = new PayPalClient(Config as config)

export { database, express, paypal}

