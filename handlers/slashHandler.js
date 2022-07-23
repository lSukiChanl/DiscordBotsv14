const fs = require("fs");
let slash = [];
module.exports = (client, discord) => {

      console.log("=================== SLASH COMANDOS ===================");

    fs.readdirSync("./slashcommands/").forEach((dir) => {
        const commands = fs.readdirSync(`./slashcommands/${dir}`).filter((file) => file.endsWith(".js"));

        for (const file of commands) {

            try{
                const scmd = require(`../slashcommands/${dir}/${file}`);
                if (scmd.name) {
                    client.slash.set(scmd.name, scmd);
                    slash.push(scmd);
                    console.log(` Commando Cargado : ${scmd.name}`);
                } else {
                    console.log(`Error: ${file}`); 
                }
            }catch(error){
                console.log(`Error al Cargar el Archivo ${file}`)
            }

        }
    });

    client.on("ready", async () => {
        await client.application.commands.set(slash);
    })
};