module.exports = {
    name: "yandere",
    aliases: ["mcyandere"],
    description:"Comando para ver una Chica Yandere",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let NumMagic = Math.floor(Math.random()*42);
            NumMagic = NumMagic + 1;
            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                .setDescription(" "+message.author.username + " 𝐄𝐬𝐭𝐚 𝐞𝐧 𝐌𝐨𝐝𝐨 𝐘𝐚𝐧𝐝𝐞𝐫𝐞 ＼(º □ º l|l)/ " )
                .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Yandere/Yandere"+NumMagic+".gif")
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()      
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};