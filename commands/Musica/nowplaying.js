const { Constants } = require('discord.js')
const { DisTube } = require('distube')
const { YtDlpPlugin } = require('@distube/yt-dlp')

module.exports = {
    name: "nowplaying",
    aliases: ["np"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){

        client.distube = new DisTube(client, {
            searchCooldown: 30,
            leaveOnEmpty: true,
            leaveOnFinish: true,
            leaveOnStop: true,
            emitNewSongOnly: true,
            emitAddSongWhenCreatingQueue: false,
            emitAddListWhenCreatingQueue: false,
            plugins: [
              new YtDlpPlugin()
            ]
        })

          
        try {

            const queue = client.distube.getQueue(message)
            console.log('Hola');
            if (!queue) return message.channel.send(`${client.emotes.error} | There is nothing in the queue right now!`)

        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};