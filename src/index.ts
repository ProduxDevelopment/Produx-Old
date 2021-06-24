// import { ExpressClient } from "./client/ExpressClient"
// import { expressConfig } from "./interfaces/expressConfig"

import { PayPalClient } from "./Client/PaypalClient";

// import * as File from "../Config/ExpressConfig.json"

// new ExpressClient(File as expressConfig)

// testing

const paypal = new PayPalClient({
    id: "your_client_id",
    secret: "your_client_secret",
    live: true
});
