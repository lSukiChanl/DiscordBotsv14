
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "avatar",
    aliases: ["imagen"],
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
                .setDescription("𝐀𝐯𝐚𝐭𝐚𝐫 𝐃𝐞 : "+ usuario.user.username)
                //.setThumbnail(Icon)
                .addFields({ name: "𝐀𝐯𝐚𝐭𝐚𝐫 𝐏𝐞𝐝𝐢𝐝𝐨 𝐏𝐨𝐫 : "+message.author.username+"", value: "\n [ --- 𝗔𝘃𝗮𝘁𝗮𝗿 𝗨𝗥𝗟 ---]("+usuario.user.avatarURL()+"?size=1024)", inline: true })
                .addFields({ name: " 🌐 𝐏𝐚𝐠𝐢𝐧𝐚 𝐖𝐄𝐁 🌐 ", value: WEB, inline: false })
                .setImage(usuario.user.avatarURL()+"?size=1024")
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send({ embeds: [embed]});
            
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};