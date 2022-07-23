
module.exports = {
    name: "donate",
    aliases: ["donar"],
    description:"Ver el Avatar de Alguien",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            const WEB = process.env.PAGINAWEB;
            const DONAR = process.env.DONAR;

            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setTitle("🎀 🎀 🎀 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐩𝐨𝐫 𝐀𝐩𝐨𝐲𝐚𝐫𝐦𝐞 🎀 🎀 🎀")
                .setURL(DONAR)
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                .addFields({ name: "💖 𝐀𝐛𝐚𝐣𝐨 𝐔𝐑𝐋 (𝐒𝐢 𝐧𝐨 𝐅𝐮𝐧𝐜𝐢𝐨𝐧𝐚 𝐞𝐥 𝐋𝐢𝐧𝐤) 💖 ", value: ""+"\n https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FR48DJLFQED2L&source=url" + "\n " + `\u200b`, inline: false })
                .addFields({ name: "🌐 𝐏𝐚𝐠𝐢𝐧𝐚 𝐖𝐄𝐁 🌐 ", value: WEB, inline: false })
                .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Donate/Donativo.gif")
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send({ embeds: [embed]});

        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};