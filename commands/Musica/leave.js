module.exports = {
    name: "leave",
    aliases: ["abandonar", "l"],
    description:"Abandonar el Canal de Voz",
    async execute (client, message, args, discord){

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