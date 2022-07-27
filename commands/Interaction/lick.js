
module.exports = {
    name: "lick",
    aliases: ["lamer", "chupar"],
    description:"Interaction Anime Lick/Lamer",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;

            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*57);
            NumMagic = NumMagic + 1;
            if (!member){return message.channel.send(" 𝐋𝐨 𝐒𝐢𝐞𝐧𝐭𝐨 𝐎𝐧𝐢𝐢-𝐂𝐡𝐚𝐧 𝐏𝐞𝐫𝐨 𝐃𝐞𝐛𝐞𝐬 𝐌𝐞𝐧𝐜𝐢𝐨𝐧𝐚𝐫 𝐚 𝐀𝐥𝐠𝐮𝐢𝐞𝐧 ");}

            let embed = new discord.MessageEmbed()
                .setColor('#D57DC1')
                .setAuthor({ name: Author, iconURL: Icon, url: Url})
                .setDescription(" "+message.author.username + "\n 𝐋𝐚𝐦𝐢𝐨 𝐀 :  "+ member.user.username + " ")
                .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Lick/Lick"+NumMagic+".gif")
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};