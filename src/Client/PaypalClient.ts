import { PaypalClient } from "../interfaces/paypalOptions";

class PayPalClient implements PaypalClient {
    id: string;
    secret: string;
    live: boolean;

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