import { config } from "../interfaces/config"
import routes from "../routes"

import express from "express";
import consola from "consola";
import path from "path";

class ExpressClient{
    /**
     * Tells express.js to start listening on defined port(s).
     */
    public constructor(config: config){
        const app = express()
        
        app.set('views', path.join(__dirname, '../views'));
        app.set('view engine', 'ejs');
        
        app.use('/', routes);
        
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
        app.use(express.raw());

        app.listen(config.server.port, (() => consola.success("App listening on port", config.server.port, "in", config.server.mode, "mode.")))
    }

}

export { ExpressClient }