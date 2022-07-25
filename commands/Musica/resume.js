module.exports = {
    name: "resume",
    aliases: ["parar"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){
        try {
            client.distube.resume(message);
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};