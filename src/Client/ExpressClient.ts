import { expressConfig } from "../interfaces/expressConfig"
import routes from "../routes"

import express from "express";
import consola from "consola";
import path from "path";

class ExpressClient{
    public constructor(ExpressConfig: expressConfig){
        const app = express()
        /**
         * Express settings
         */
        app.set('views', path.join(__dirname, '../views'));
        app.set('view engine', 'ejs');
        
        app.use('/', routes);
        
        app.use(express.urlencoded({ extended: true }));
        app.use(express.json());
        app.use(express.raw());

        app.listen(ExpressConfig.port, (() => consola.success("App listening on port", ExpressConfig.port, "in", ExpressConfig.mode, "mode.")))
    }
}

export { ExpressClient }