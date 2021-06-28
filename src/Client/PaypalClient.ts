import { config } from "../interfaces/config";
import fetch from "node-fetch";
import consola from "consola"

class PayPalClient {

    public clientOptions: config = null;
    public token: string = null;
    public init: boolean = false;

    /**
     * @constructor Intialises the paypal client and generates an oauth token. Usage `new PayPalClient(config)`
     * @param options Parse configuration file here.
     */
    constructor(options: config) {
        this.clientOptions = options;
    }

    /**
     * @public Regnerates the PayPal oAuth token.
     */
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
            });
    }
    
    /**
     * @public Creates a paypal payment link.
     * @param json JSON to create payment.
     */
    public async createOrder(json: any) {
        this.regenToken()
        if (this.init == false) return consola.warn("PayPal Client has not initilized yet, so I'm unable to run any functions.")
        const link: string = (this.clientOptions.paypal.live ? "https://api-m.paypal.com/v2/checkout/orders" : "https://api-m.sandbox.paypal.com/v2/checkout/orders")

        return fetch(link, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                    'Authorization': `Bearer ${this.token}`
                },
                body: JSON.stringify(json),
            })
            .then(res => res.json())
            .then(json => {
                return json
            });
    }

    /**
     * @public Fetched previous order by orderId.
     * @param orderId OrderID - type string.
     */
    public async orderGet(orderId: string){
        this.regenToken()
        if (this.init == false) return consola.warn("PayPal Client has not initilized yet, so I'm unable to run any functions.")
        const link: string = (this.clientOptions.paypal.live ? `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}` : `https://api-m.sandbox.paypal.comcom/v2/checkout/orders/${orderId}`)

        return fetch(link, {
            method: "GET",
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${this.token}`,
                
            },
        })
        .then(res => res.json())
        .then(json => {
            return json
        })
    }

    /**
     * @public Captures order, and makes it process.
     * @param orderId OrderID - type string.
     */
    public async orderCapture(orderId: any){
        this.regenToken()
        if (this.init == false) return consola.warn("PayPal Client has not initilized yet, so I'm unable to run any functions.")
        const link: string = (this.clientOptions.paypal.live ? `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}/capture` : `https://api-m.sandbox.paypal.com/v2/checkout/orders/${orderId}/capture`)

        return fetch(link, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${this.token}`,
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
        .then(json => {
            return json
        })
    }


}


export { PayPalClient }
