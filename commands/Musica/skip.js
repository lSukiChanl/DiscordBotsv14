module.exports = {
    name: "skip",
    aliases: ["saltar", "sk"],
    description:"Pausar la Cancion Actual",
    async execute (client, message, args, discord){
        try {
            const queue = client.distube.getQueue(message)
            if (!queue) return message.channel.send('**No se Esta Reproduciendo Nada Ahora Mismo!**');
            try {
                const song = await queue.skip()
                message.channel.send(`**Saltando Cancion Actual! \nReproduciendo Ahora : **\n${song.name}`)
            } catch (e) {
                return console.log("Error : " + error);
            }
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};