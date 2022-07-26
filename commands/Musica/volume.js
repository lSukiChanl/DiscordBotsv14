module.exports = {
    name: "volume",
    aliases: ["v", "volumen"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){

        try {
            const queue = client.distube.getQueue(message)
            if (!queue) return message.channel.send('**No se Esta Reproduciendo Nada Ahora Mismo!**');
            const volume = parseInt(args[0])
            if (isNaN(volume)) return message.channel.send(`**Escribe un Numero Valido**`)
            queue.setVolume(volume)
            message.channel.send(`**Nivel de Volumen :** \`${volume}\``)
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};