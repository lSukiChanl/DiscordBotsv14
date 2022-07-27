module.exports = {
    name: "dere",
    aliases: ["mcdere"],
    description:"Comando para saber que tipos de Dere existen",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            
            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                .setDescription(" "+message.author.username + " ¿𝐐𝐮𝐢𝐞𝐫𝐞𝐬 𝐒𝐚𝐛𝐞𝐫 𝐥𝐨𝐬 𝐓𝐢𝐩𝐨𝐬 𝐝𝐞 𝐃𝐞𝐫𝐞 𝐪𝐮𝐞 𝐇𝐚𝐲? \n𝐀𝐪𝐮í 𝐥𝐚 𝐑𝐞𝐬𝐩𝐮𝐞𝐬𝐭𝐚 ʕ•́ᴥ•̀ʔっ  ")
                .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Dere/Dere1.jpg")
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};

