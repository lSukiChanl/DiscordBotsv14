const { Futanari } = require('../../IMG');

module.exports = {
    name: "futanari",
    aliases: ["nsfwfutanari", "hentaifutanari"],
    description:"Comando Hentai Fetiche por las Futanaris",
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
                let NumMagicB = Math.floor(Math.random()*33);
                if (!member){
                    let embed = new discord.EmbedBuilder()
                        .setColor('#D57DC1')
                        .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                        .setDescription(" " + message.author.username + " \n𝐀𝐥𝐠𝐨 𝐃𝐞𝐥𝐢𝐜𝐢𝐨𝐬𝐨 𝐩𝐚𝐫𝐚 𝐞𝐥 𝐅𝐞𝐭𝐢𝐜𝐡𝐢𝐬𝐭𝐚 𝐝𝐞 𝐥𝐚𝐬 𝐅𝐮𝐭𝐚𝐬 𝐞𝐰𝐞 ")
                        .setImage(Futanari[NumMagic])
                        .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                        .setTimestamp()
                    return message.channel.send( {embeds: [embed] });
                }
                let embed = new discord.EmbedBuilder()
                    .setColor('#D57DC1')
                    .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                    .setDescription(" " + message.author.username + " \n𝐏𝐚𝐫𝐚 𝐪𝐮𝐞 𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐞 𝐞𝐬𝐭𝐞 𝐂𝐨𝐦𝐚𝐧𝐝𝐨 𝐧𝐨 𝐃𝐞𝐛𝐞𝐬 𝐌𝐞𝐧𝐜𝐢𝐨𝐧𝐚𝐫 𝐚 𝐍𝐚𝐝𝐢𝐞 >.< ")
                    .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Baka/Bakka"+NumMagicB+".gif")
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