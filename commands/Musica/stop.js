module.exports = {
    name: "stop",
    aliases: ["salir"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){
        try {
            const queue = client.distube.getQueue(message)
            if (!queue) return message.channel.send('**No se Esta Reproduciendo Nada Ahora Mismo!**');
            queue.stop()
            message.channel.send(`*Musica Detenida!*`) 
            client.distube.voices.join(voiceChannel)
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};