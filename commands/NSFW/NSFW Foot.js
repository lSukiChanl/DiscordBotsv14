const { Foot } = require('../../IMG');

module.exports = {
    name: "foot",
    aliases: ["nsfwcum", "hentaicum"],
    description:"Comando Hentai Fetiche por las Patas",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;

            if (message.channel.nsfw === true) {
            let member = message.mentions.members.first(); 
            let NumMagic = Math.floor(Math.random()*51);
            if (!member){
                let embed = new discord.EmbedBuilder()
                    .setColor('#D57DC1')
                    .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                    .setDescription(" " + message.author.username + " \n𝐏𝐚𝐭𝐚𝐬 𝐞𝐰𝐞 ")
                    .setImage(Foot[NumMagic])
                    .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                    .setTimestamp()
                return message.channel.send( {embeds: [embed] });
            }
            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                .setDescription(" " + message.author.username + " \n𝐄𝐬𝐭𝐚 𝐔𝐭𝐢𝐥𝐢𝐳𝐚𝐧𝐝𝐨 𝐬𝐮𝐬 𝐏𝐢𝐞𝐬 𝐩𝐚𝐫𝐚 𝐃𝐚𝐫𝐥𝐞 𝐏𝐥𝐚𝐜𝐞𝐫 𝐚 "+ member.user.username + " ")
                .setImage(Foot[NumMagic])
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send( {embeds: [embed] });
        }
        return message.reply("Este Canal no es +18")
    } catch (error) {
        return console.log("Error : " + error);
    }
}
};