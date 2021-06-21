import { ExpressClient } from "./client/ExpressClient"
import { expressConfig } from "./interfaces/expressConfig"

import * as File from "../Config/ExpressConfig.json"

new ExpressClient(File as expressConfig)