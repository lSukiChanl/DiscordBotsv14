module.exports = {
    name: "nowplaying",
    aliases: ["reproduciendo"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){
        try {
            const queue = client.distube.getQueue(message);
            if (!queue) return message.channel.send('**No se Esta Reproduciendo Nada Ahora Mismo!**');
            const song = queue.songs[0]
            message.channel.send(` **Reproduciendo Ahora Mismo \`${song.name}\`**, > ${song.user}`)
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};