module.exports = {
    name: "nowplaying",
    aliases: ["nowplayingg"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){
        try {
            const queue = client.distube.getQueue(message);
            if (!queue) return message.channel.send('Nothing playing right now!');
            const song = queue.songs[0]
            message.channel.send(`I'm playing **\`${song.name}\`**, by ${song.user}`)
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};