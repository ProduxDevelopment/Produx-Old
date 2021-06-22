import { PaypalClient } from "../interfaces/paypalOptions";

class PayPalClient implements PaypalClient {
    public id: string = null;
    public secret: string = null;
    public live: boolean = null;

    constructor(id: string, secret: string, live: boolean) {
        this.id = id;
        this.secret = secret;
        this.live = live;
    }

    public createOrder() {
        
    }
}

export {
    PayPalClient
}