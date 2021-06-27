import {
    config
} from "../interfaces/config";
import fetch from "node-fetch";
import consola from "consola"

class PayPalClient {

    public clientOptions: config = null;
    public token: string = null;
    public init: boolean = false;

    /**
     * @constructor Intialises the paypal client and generates an oauth token.
     */
    constructor(options: config) {
        this.clientOptions = options;
        const link: string = (this.clientOptions.paypal.live ? "https://api-m.paypal.com/v1/oauth2/token" : "https://api-m.sandbox.paypal.com/v1/oauth2/token")
        const token: string = Buffer.from(`${this.clientOptions.paypal.id}:${this.clientOptions.paypal.secret}`).toString("base64")

        fetch(link, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Basic ${token}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "grant_type=client_credentials"
            })
            .then(res => res.json())
            .then(json => {
                this.token = json.access_token
                this.init = true

                consola.success("PayPal client has been initlized.")
                return;
            });
    }

    public async createOrder(json: any) {
        if (this.init == false) return consola.warn("PayPal Client has not initilized yet, so I'm unable to run any functions.")
        const link: string = (this.clientOptions.paypal.live ? "https://api-m.paypal.com/v2/checkout/orders" : "https://api-m.sandbox.paypal.com/v2/checkout/orders")
        
        fetch(link, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Bearer ${this.token}`
                },
                body: JSON.stringify(json),
            })
            .then(res => res.json()) // expecting a json response
            .then(json => consola.log(json));
    }

    public regenToken(){
        const link: string = (this.clientOptions.paypal.live ? "https://api-m.paypal.com/v1/oauth2/token" : "https://api-m.sandbox.paypal.com/v1/oauth2/token")
        const token: string = Buffer.from(`${this.clientOptions.paypal.id}:${this.clientOptions.paypal.secret}`).toString("base64")

        fetch(link, {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Authorization": `Basic ${token}`,
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "grant_type=client_credentials"
            })
            .then(res => res.json())
            .then(json => {
                this.token = json.access_token
                this.init = true

                consola.success("PayPal client has been regenerated.")
            });
    }
}


export {
    PayPalClient
}