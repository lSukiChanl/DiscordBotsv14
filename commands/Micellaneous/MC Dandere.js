module.exports = {
    name: "dandere",
    aliases: ["mcdandere"],
    description:"Comando para ver a una Chica Dandere",
    async execute (client, message, args, discord){
        try {
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;

            let NumMagic = Math.floor(Math.random()*17);
            NumMagic = NumMagic + 1;
            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                .setDescription(" "+message.author.username + " 𝐂𝐨𝐧 𝐌𝐮𝐜𝐡𝐨 𝐀𝐦𝐨𝐫 𝐮𝐧𝐚 𝐃𝐚𝐧𝐝𝐞𝐫𝐞 𝐏𝐚𝐫𝐚 𝐔𝐬𝐭𝐞𝐝 ლ(𝐨◡𝐨ლ)  " )
                .setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Miscellaneous%20Commands/Dandere/Dandere"+NumMagic+".gif")
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send( {embeds: [embed] });
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};