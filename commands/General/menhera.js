module.exports = {
    name: "menhera",
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

            let NumMagic = Math.floor(Math.random()*968);
            NumMagic = NumMagic + 1;

            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setTitle("🎀 🎀 🎀 𝐒𝐭𝐢𝐜𝐤𝐞𝐫 𝐌𝐞𝐧𝐡𝐞𝐫𝐚 𝐑𝐚𝐧𝐝𝐨𝐦 🎀 🎀 🎀")
                .setURL(Url)
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                .addFields({ name: "🌐 𝐏𝐚𝐠𝐢𝐧𝐚 𝐖𝐄𝐁 🌐 ", value: WEB, inline: false })
                .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Main%20Commands/Menhera/Menhera"+NumMagic+".png")
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send({ embeds: [embed]});
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};