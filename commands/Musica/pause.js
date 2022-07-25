module.exports = {
    name: "pause",
    aliases: ["parar"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){
          
        try {
           
            client.distube.pause(message);
            
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};