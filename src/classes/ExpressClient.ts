import { config } from "../interfaces/config"
import routes from "../routes/routes"

import express from "express";
import consola from "consola";
import path from "path";

class ExpressClient{
    /**
     * Tells express.js to start listening on defined port(s).
     */

    public server:any = null

    public constructor(config: config){
        const app = express()

        app.set('views', path.join(__dirname, `../themes/${config.customisation.theme}`));
        app.set('view engine', 'ejs');
        
        app.use('/', routes);


        this.server = app.listen(config.server.port, (() => consola.success("App listening on port", config.server.port, "in", config.server.mode, "mode.")))
    }

    public destory(){
        this.server.close()
    }

}

export { ExpressClient }