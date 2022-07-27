module.exports = {
    name: "yuri",
    aliases: ["mcyuri"],
    description:"Comando para ver un poco de Yuri",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let NumMagic = Math.floor(Math.random()*54);
            NumMagic = NumMagic + 1;
            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                .setDescription(" "+message.author.username + " 𝐎𝐧𝐢𝐢-𝐂𝐡𝐚𝐧 𝐄𝐫𝐞𝐬 𝐮𝐧 𝐏𝐮𝐞𝐫𝐜𝐨 \n 𝐂𝐞𝐫𝐫𝐚𝐫𝐞 𝐥𝐨𝐬 𝐎𝐣𝐨𝐬  (>人<)  " )
                .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Yuri/Yuri"+NumMagic+".gif")
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};