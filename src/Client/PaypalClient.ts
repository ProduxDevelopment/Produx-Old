import { PaypalClientOptions } from "../interfaces/paypalOptions";
import fetch from "node-fetch";

class PayPalClient {
    public clientOptions: PaypalClientOptions = null;

    constructor(options: PaypalClientOptions) {
        this.clientOptions = options;
    }

    public createOrder(json: JSON) {
        let link: string = (this.clientOptions.live ? "https://api-m.paypal.com/" : "https://api-m.sandbox.paypal.com/")
        fetch(link, {
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                'Authorization': ""
            },
            body: JSON.stringify(json)
        })
    }
}

export {
    PayPalClient
}