const { DisTube } = require('distube')
const { YtDlpPlugin } = require('@distube/yt-dlp')


module.exports = {
    name: "leave",
    aliases: ["abandonar"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){

        client.distube = new DisTube(client, {
            leaveOnStop: false,
            emitNewSongOnly: true,
            emitAddSongWhenCreatingQueue: false,
            emitAddListWhenCreatingQueue: false,
            plugins: [new YtDlpPlugin()]
        })
          
        try {

            const Argumentos = args.join(' ')
            const Voice = message.member.voice.channel;
            console.log(Voice);
            if (!Voice) return message.reply('Tienes que entrar a un Canal de Voz');
            client.distube.voices.leave(message)
            
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};