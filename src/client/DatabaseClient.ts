import { databaseConfig } from "../interfaces/databaseConfig";

import mongoose from "mongoose";
import consola from "consola";

class DatabaseClient{
    /**
* Intializes the database connection between the application and MongoDB.
     */
    public constructor(databaseConfig: databaseConfig){
        if(!databaseConfig.mongoURL){
            consola.error("No `uri` specified.")
            process.exit(7)
        }

        mongoose.connect(databaseConfig.mongoURL as string, {
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