
module.exports = {
    name: "thanks",
    aliases: ["gracias"],
    description:"Interaction Anime Birthday/Cumpleaños",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*6);
            NumMagic = NumMagic + 1;
            if (!member){
                let embed = new discord.EmbedBuilder()
                    .setColor('#D57DC1')
                    .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                    .setDescription(" "+message.author.username + " 𝐄𝐬𝐭𝐚 𝐀𝐠𝐫𝐚𝐝𝐞𝐜𝐢𝐝𝐨 𝐂𝐨𝐧 𝐞𝐥 𝐝𝐞 𝐀𝐫𝐫𝐢𝐛𝐚 ")
                    .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Thanks/Thanks"+NumMagic+".gif")
                    .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                    .setTimestamp()      
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                .setDescription(" "+message.author.username + "\n 𝐋𝐞 𝐃𝐚 𝐥𝐚𝐬 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐀 : "+member.user.username + " ")
                .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Thanks/Thanks"+NumMagic+".gif")
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};