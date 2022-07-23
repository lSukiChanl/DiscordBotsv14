module.exports = {
    name: "mdkiss",
    aliases: ["mdbeso"],
    description:"Sticker Menhera Perrita Besando",
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
                .setDescription(" "+ message.author.username +" 𝐓𝐞 𝐪𝐮𝐢𝐞𝐫𝐞 𝐛𝐞𝐬𝐚𝐫")
                .setImage('https://cdn.discordapp.com/emojis/631035786204151809.png')
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};