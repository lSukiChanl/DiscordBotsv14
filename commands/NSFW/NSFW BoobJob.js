const { BoobJob } = require('../../IMG');

module.exports = {
    name: "boobjob",
    aliases: ["nsfwboobjob", "hentaiboobjob"],
    description:"Comando Hentai Fetiche por las rusas",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;

            if (message.channel.nsfw === true) {
                let member = message.mentions.members.first(); 
                let NumMagic = Math.floor(Math.random()*61);
                if (!member){
                    let embed = new discord.EmbedBuilder()
                        .setColor('#D57DC1')
                        .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                        .setDescription(" " + message.author.username + " \n𝐔𝐧𝐚 𝐑𝐮𝐬𝐚 𝐩𝐚𝐫𝐚 𝐞𝐥 𝐅𝐞𝐭𝐢𝐜𝐡𝐢𝐬𝐭𝐚 𝐝𝐞 𝐥𝐚𝐬 𝐑𝐮𝐬𝐚𝐬 ")
                        .setImage(BoobJob[NumMagic])
                        .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                        .setTimestamp()
                    return message.channel.send( {embeds: [embed] });
                }
                let embed = new discord.EmbedBuilder()
                    .setColor('#D57DC1')
                    .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                    .setDescription(" " + message.author.username + " \n𝐋𝐞 𝐞𝐬𝐭𝐚 𝐇𝐚𝐜𝐢𝐞𝐧𝐝𝐨 𝐮𝐧𝐚 𝐑𝐮𝐬𝐚 𝐚  "+ message.member.user.username + "  ")
                    .setImage(BoobJob[NumMagic])
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