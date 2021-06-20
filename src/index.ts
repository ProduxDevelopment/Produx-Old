import { ExpressClient } from "./Client/ExpressClient"
import { ExpressConfig } from "./interfaces/expressConfig"

import * as File from "../config.json"

new ExpressClient(File as ExpressConfig)