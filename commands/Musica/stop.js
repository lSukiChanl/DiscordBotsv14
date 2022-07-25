module.exports = {
    name: "stop",
    aliases: ["salir"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){
        try {
            const queue = client.distube.getQueue(message)
            if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)
            queue.stop()
            message.channel.send(`${client.emotes.success} | Stopped!`)
            
            client.distube.voices.join(voiceChannel)
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};