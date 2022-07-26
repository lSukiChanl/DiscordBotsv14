module.exports = {
    name: "join",
    aliases: ["unirse", "j"],
    description:"Unirse al Canal de Voz",
    async execute (client, message, args, discord){
        try {
            const Voice = message.member.voice.channel;
            if (!Voice) return message.reply('Tienes que entrar a un Canal de Voz');
            client.distube.voices.join(Voice)
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};