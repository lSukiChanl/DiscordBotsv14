module.exports = {
    name: "seek",
    aliases: ["seek"],
    description:"Pausar la Cancion Actual",
    async execute (client, message, args, discord){
        try {
            const queue = client.distube.getQueue(message)
            if (!queue) return message.channel.send('**No se Esta Reproduciendo Nada Ahora Mismo!**');
            if (!args[0]) {
            return message.channel.send(`$Escribe el Segundo de la cancion a Saltar`)
            }
            const time = Number(args[0])
            if (isNaN(time)) return message.channel.send(`Escribe un Numero Valido!`)
            queue.seek(time)
            message.channel.send(`Seeked to ${time}!`)
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};

