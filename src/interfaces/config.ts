export interface config {
    server: {
        port?: Number,
        mode?: String,
    },
    database: {
        uri?: String
    },
    paypal: {
        id?: string;
        secret?: string;
        live?: boolean;
    }
}