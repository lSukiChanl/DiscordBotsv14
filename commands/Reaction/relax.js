
module.exports = {
    name: "relax",
    aliases: ["peace"],
    description:"Reaction Anime Relax/Relajado",
    
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let NumMagic = Math.floor(Math.random()*16);
            NumMagic = NumMagic + 1;            
            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                .setDescription(" "+message.author.username + " 𝐒𝐞 𝐄𝐬𝐭𝐚 𝐑𝐞𝐥𝐚𝐣𝐚𝐧𝐝𝐨 （￣へ￣） ~~zzZ  " )
                .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Relax/Relax"+NumMagic+".gif")
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};