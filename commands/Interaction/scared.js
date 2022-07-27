
module.exports = {
    name: "scared",
    aliases: ["asusado"],
    description:"Interaction Anime Scared/Asustado",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*72);
            NumMagic = NumMagic + 1;
            if (!member){
                let embed = new discord.EmbedBuilder()
                    .setColor('#D57DC1')
                    .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                    .setDescription(" "+message.author.username + " 𝐓𝐢𝐞𝐧𝐞 𝐌𝐢𝐞𝐝𝐨 ")
                    .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Scared/Scared"+NumMagic+".gif")
                    .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                    .setTimestamp()   
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.MessageEmbed()
            embed.setColor('#D57DC1')
            embed.setAuthor({ name: Author, iconURL: Icon, url: Url})
            embed.setDescription(" "+message.author.username + " \n 𝐋𝐞 𝐓𝐢𝐞𝐧𝐞 𝐌𝐢𝐞𝐝𝐨 𝐀 : "+ member.user.username + " ")
            embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Scared/Scared"+NumMagic+".gif");
            embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
            embed.setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};