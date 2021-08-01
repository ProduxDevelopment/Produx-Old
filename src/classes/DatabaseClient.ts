import { config } from "../interfaces/config";

import mongoose from "mongoose";
import consola from "consola";

class DatabaseClient{
    /**
    * Intializes the database connection between the application and MongoDB.
    */
    public constructor(config: config){
        if(!config.database.uri){
            consola.error("No `uri` specified.")
            process.exit(7)
        }

        mongoose.connect(config.database.uri as string, {
            useFindAndModify: true,
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }).then(() => {
            consola.success("Connected to MongoDB")
        })

    }

    /**
     * Destroys the connection between MongoDB and the client.
     */
    public destroyClient(){
        mongoose.disconnect().then(() => {
            consola.warn("Disconnected from MongoDB. This may cause breaking changes.")
        })
    }

}

export { DatabaseClient }
