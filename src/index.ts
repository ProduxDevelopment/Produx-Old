<<<<<<< Updated upstream
import { ExpressClient } from "./Client/ExpressClient"
import { ExpressConfig } from "./interfaces/expressConfig"
=======
import { ExpressClient } from "./client/ExpressClient"
import { expressConfig } from "./interfaces/expressConfig"
>>>>>>> Stashed changes

import * as File from "../Config/ExpressConfig.json"

new ExpressClient(File as expressConfig)