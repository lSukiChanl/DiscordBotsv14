module.exports = {
    name: "shota",
    aliases: ["mcshota"],
    description:"Comando para ver un Shota",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let NumMagic = Math.floor(Math.random()*21);
            NumMagic = NumMagic + 1;
            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                .setDescription(" "+message.author.username + " 𝐃𝐞𝐣𝐨 𝐚 𝐒𝐮 𝐂𝐮𝐢𝐝𝐚𝐝𝐨 𝐄𝐬𝐭𝐞 𝐏𝐞𝐪𝐮𝐞ñ𝐨 𝐒𝐡𝐨𝐭𝐚 \n 𝐂𝐮𝐢𝐝𝐚𝐦𝐞𝐥𝐨 𝐏𝐨𝐫 𝐅𝐚𝐯𝐨𝐫 (≧◡≦) ♡ " )
                .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Shota/Shota"+NumMagic+".gif")
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};