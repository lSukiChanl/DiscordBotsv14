module.exports = {
    name: "secret",
    aliases: ["mcsecret"],
    description:"Comando es un Secreto",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let NumMagic = Math.floor(Math.random()*8);
            NumMagic = NumMagic + 1;
            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                .setDescription(" "+message.author.username + " 𝐄𝐬𝐭𝐚 𝐆𝐮𝐚𝐫𝐝𝐚𝐧𝐝𝐨 𝐮𝐧 𝐒𝐞𝐜𝐫𝐞𝐭𝐨 (>人<) " )
                .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Secret/Secret"+NumMagic+".gif")
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};