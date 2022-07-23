module.exports = {
    name: "join",
    aliases: ["j"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){
        try {
           
            message.channel.send('HOLA');

        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};