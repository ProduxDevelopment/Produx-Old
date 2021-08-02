import Config from "../Config/config.json";
import { config } from "./interfaces/config";

import { ExpressClient } from "./classes/ExpressClient"
import { DatabaseClient } from "./classes/DatabaseClient"
import { PayPalClient } from "./classes/PaypalClient";
import { CLI } from "./classes/ListenerCLI";


const express = new ExpressClient(Config as config)
const database = new DatabaseClient(Config as config)
const paypal = new PayPalClient(Config as config)
const cli = new CLI()

export { database, express, paypal, cli}

