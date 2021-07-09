export interface config {
    
    server: {
        port?: Number,
        mode?: String,
        secret?: String,
    },

    database: {
        uri?: String
    },
    
    paypal: {
        id?: string;
        secret?: string;
        live?: boolean;
    },

    customisation?: {
        info?: {
            siteName?: string
        }
        theme?: string
    }
    
}