
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "prueba",
    aliases: ["prueba"],
    description:"Ver el Avatar de Alguien",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const WEB = process.env.PAGINAWEB;
            const Vote = process.env.VOTE;

            let usuario = message.mentions.members.first() || message.member; 

            let embed = new EmbedBuilder()
                .setColor('#D57DC1')
                .setTitle('Pagina Oficial')
	            .setURL(WEB)
                .setAuthor({ name: Author +' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Vote })
                //.setThumbnail(Icon)
                .addFields({ name: "🎧 𝐀𝐠𝐫𝐞𝐠𝐚𝐝𝐨 𝐚 𝐥𝐚 𝐂𝐨𝐥𝐚 🎧", value: 'GUMI - Love Decoration | Lyrics/Letra | Subtitulado al Español' + '\n' + 'https://www.youtube.com/watch?v=2qoN4ED3VS8', inline: false })
                .setImage('https://i.ytimg.com/vi/2qoN4ED3VS8/maxresdefault.jpg')
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send({ embeds: [embed]});
            
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};