// Express Client //
import { ExpressClient } from "./client/ExpressClient"
import { expressConfig } from "./interfaces/expressConfig"
import * as configExpress from "../Config/ExpressConfig.json"

import { DatabaseClient } from "./client/DatabaseClient"
import { databaseConfig } from "./interfaces/databaseConfig"
import * as configDatabase from "../Config/databaseConfig.json"

const express = new ExpressClient(configExpress as expressConfig)
const database = new DatabaseClient(configDatabase as databaseConfig)

export { database, express}
