module.exports = {
    name: "server",
    aliases: ["menhera-chan","kurumi","kurumi-chan"],
    description:"Ver un Meme Random",
    async execute (client, message, args, discord){
        try {

            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            const WEB = process.env.PAGINAWEB;
            const Server = process.env.SERVER;

            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setTitle("🎀 🎀 🎀 𝐕𝐢𝐬𝐢𝐭𝐚𝐧𝐨𝐬 🎀 🎀 🎀")
                .setURL(Url)
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                //.setDescription("💖 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐩𝐨𝐫 𝐀𝐩𝐨𝐲𝐚𝐫𝐦𝐞  💖 ")
                //.setThumbnail(Icon)
                .addFields({ name: "💖 𝐀𝐛𝐚𝐣𝐨 𝐔𝐑𝐋 (𝐒𝐢 𝐧𝐨 𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐚 𝐞𝐥 𝐋𝐢𝐧𝐤) 💖 ", value: Server + "\n " + `\u200b`, inline: false })
                .addFields({ name: "🌐 𝐏𝐚𝐠𝐢𝐧𝐚 𝐖𝐄𝐁 🌐 ", value: WEB, inline: false })
                .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Server/Servidor.gif")
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send({ embeds: [embed]});

        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};