import consola from "consola";

class CLI{

    public status: boolean = false;

    /**
    * Intializes the database connection between the application and MongoDB.
    */

public constructor(){
    this.status = true;

    consola.success("CLI is now active")

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        })
        
        readline.on("line", (line:any) => {
            line = line.toUpperCase()

            if(line.startsWith("CLEAR")){
                const args = line.slice("CLEAR").trim().split(/ +/g);

                console.clear() 
                consola.success(`Cleared terminal successfully.\n`)
                return;
            } 
            
            else if(line.startsWith("LOG")){
                const args = line.slice("LOG").trim().split(/ +/g);

                consola.log(args[1])
                return;
            }

            else if(line.startsWith("UPDATE")){
                const args = line.slice("UPDATE").trim().split(/ +/g);
            
                if(!args[1]) return consola.error("Expected argument. Recieved none.")
                console.log(args)

                if(args[1] == "USER"){  
                    consola.log("UPDATE USER")
                } 

                else return consola.error(`Unknown argument. ${args[1]}`)

            }

            else if(line.startsWith("EXIT") || line.startsWith("STOP")){
                consola.error("Exited process. Functions may not preform as expected.")
                process.exit(0)
                return;
            }
            
            else {
                consola.error(`Unknown command | \`\`${line}\`\`. Please enter a valid command.`)                    
            }

        })
    }
}


}

export { CLI }
