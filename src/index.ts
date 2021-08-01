import Config from "../Config/config.json";
import { config } from "./interfaces/config";

import { ExpressClient } from "./classes/ExpressClient"
import { DatabaseClient } from "./classes/DatabaseClient"
import { PayPalClient } from "./classes/PaypalClient";

const express = new ExpressClient(Config as config)
const database = new DatabaseClient(Config as config)
const paypal = new PayPalClient(Config as config)

export { database, express, paypal}

