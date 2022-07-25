const { Constants } = require('discord.js')
const { DisTube } = require('distube')
const { YtDlpPlugin } = require('@distube/yt-dlp')

module.exports = {
    name: "stop",
    aliases: ["salir"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){

        client.distube = new DisTube(client, {
            leaveOnStop: false,
            emitNewSongOnly: true,
            emitAddSongWhenCreatingQueue: false,
            emitAddListWhenCreatingQueue: false,
            plugins: [
              new YtDlpPlugin()
            ]
        })

          
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