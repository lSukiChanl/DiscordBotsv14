
module.exports = {
    name: "suicide",
    aliases: ["suicidio"],
    description:"Reaction Anime Suicide/Suicidio",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let NumMagic = Math.floor(Math.random()*55);
            NumMagic = NumMagic + 1;            
            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                .addField(" 💖 𝐕𝐚𝐥𝐨𝐫𝐚𝐭𝐞 𝐎𝐧𝐢𝐢-𝐂𝐡𝐚𝐧 💖 ", "𝐋𝐚 𝐯𝐢𝐝𝐚 𝐞𝐬 𝐇𝐞𝐫𝐦𝐨𝐬𝐚 𝐲 𝐌𝐞𝐧𝐡𝐞𝐫𝐚-𝐂𝐡𝐚𝐧 𝐓𝐞 𝐐𝐮𝐢𝐞𝐫𝐞 𝐌𝐮𝐜𝐡𝐨 \n " + message.author.username + " 𝐔𝐧 𝐁𝐞𝐬𝐢𝐭𝐨 𝐏𝐚𝐫𝐚 𝐓𝐢 \n (人´3｀)⌒♡ 𝗰𝗵𝘂𝘂♥  ")
                .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Cuddle/Cuddle"+NumMagic+".gif")
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};