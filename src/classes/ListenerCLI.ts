import consola from "consola";
import User from "../schema/userSchema"

class CLI{

    public status: boolean = false;

    /**
    * Intializes the database connection between the application and MongoDB.
    */

public constructor(){
    this.status = true;

    consola.success("CLI is now active")

    if(this.status == true){
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout,
            terminal: false
        })
        
        readline.on("line", async (line:any) => {
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

                function Validate (InputEmail:any){
                    if (InputEmail.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
                      return true; 
                    } else {
                      return false; 
                    }
                  }

                if(args[1].startsWith("USER")){ 
                    let email = args[1]
                    email = email.split(':').pop().toLowerCase()
                    if(Validate(email) == false) return consola.error("Invalid email.")

                    if(!args[2]) return consola.error("Expected argument. Recieved none.")

                    if(args[2].startsWith("ADMIN")){
                        let status = args[2]
                        status = status.split(':').pop().toLowerCase()

                        const update = await User.findOne({email: `${email}`}) 
                        .catch(async (err: any) => {

                            consola.error("An unexpected error occured!")
                            consola.error("The Contem CLI encountered an error when it attempted to execute that command. Below is more information about the specified error. \nIf you require more assistance, please visit our documentation and quote the error code `CLI_SYNC_FAIL`")
                            
                            consola.error("Stack Trace:")
                            consola.log(err + '\n')
                            return;
                        })
                        .then((doc: { _id: any; }) => {
                            User.updateOne({ _id: doc._id }, {admin: status})
                            console.log("")
                            consola.success(`Admin permissions set to \`${status}\` for the user \`${email}\`.\n`)
                        })   0
                    }
                } 

                else return consola.error(`Unknown argument. \`\`${args[1]}\`\``)

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
