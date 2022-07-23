module.exports = {
    name: "mdbow",
    aliases: ["mdagradecida"],
    description:"Sticker Menhera Perrita Agradecida",
    async execute (client, message, args, discord){
        const Creditos = process.env.AUTHOR;
        const Version = process.env.VERSION;
        const Author = process.env.NOMBREAUTOR;
        const Icon = process.env.ICONURL;
        const Url = process.env.URL;
        
        try {
            message.delete().catch(error =>
                message.reply(({embed: {
                    color: 15158332,
                    description: "𝐏𝐀𝐑𝐀 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐀𝐑 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐀𝐌𝐄𝐍𝐓𝐄 𝐍𝐄𝐂𝐄𝐒𝐈𝐓𝐎 \n𝐑𝐎𝐋 𝐂𝐎𝐌𝐎 𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐑"
                }})
                )
            );
            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                .setDescription(" "+ message.author.username +" 𝐌𝐮𝐞𝐬𝐭𝐫𝐚 𝐬𝐮 𝐀𝐠𝐫𝐚𝐝𝐞𝐜𝐢𝐦𝐢𝐞𝐧𝐭𝐨")
                .setImage('https://cdn.discordapp.com/emojis/631035995780939786.png')
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};