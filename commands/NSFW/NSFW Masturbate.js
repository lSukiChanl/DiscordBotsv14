const { Masturbate } = require('../../IMG');
const { HandJob } = require('../../IMG');

module.exports = {
    name: "masturbate",
    aliases: ["nsfwmasturbate", "hentaimasturbate"],
    description:"Comando Hentai Masturbarse",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            if (message.channel.nsfw === true) {
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*51);
            if (!member){
                let embed = new discord.EmbedBuilder()
                    .setColor('#D57DC1')
                    .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                    .setDescription(" " + message.author.username + " \n𝐒𝐞 𝐡𝐚𝐜𝐞 𝐞𝐥 𝐀𝐮𝐭𝐨𝐃𝐞𝐥𝐢𝐜𝐢𝐨𝐬𝐨 𝐞𝐰𝐞 ")
                    .setImage(Masturbate[NumMagic])
                    .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                    .setTimestamp()
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                .setDescription(" " + message.author.username + " \n𝐄𝐬𝐭𝐚 𝐌𝐚𝐬𝐭𝐮𝐫𝐛𝐚𝐧𝐝𝐨 𝐚 "+ member.user.username + "  ")
                .setImage(HandJob[NumMagic])
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send( {embeds: [embed] });
        }
        return message.reply("Este Canal no es +18")
    } catch (error) {
        return console.log("Error : " + error);
    }
}
};