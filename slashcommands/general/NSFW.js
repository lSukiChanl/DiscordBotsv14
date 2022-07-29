const { Fuck } = require('../../IMG');
const { Masturbate } = require('../../IMG');

module.exports = {
    name: "nsfw",
    description: "Comandos NSFW",
    options: [
      {
        name: "accion",
        description: "Accion o Reaccion del Sticker",
        type: "3",
        required: "true",
        choices: [
            {name: "Armpit - Axilas", value: "Armpit"},
            {name: "Boobjob - Rusa", value: "Boobjob"},
            {name: "Cum - Ohh Me Vengo", value: "Cum"},
            {name: "Foot - Pies", value: "Foot"},
            {name: "Fuck - El Delicioso", value: "Fuck"},
            {name: "Futanari", value: "Futanari"},
            {name: "HandJob - Le hace una Paja", value: "HandJob"},
            {name: "Hentai", value: "Hentai"},
            {name: "Masturbate - Paja", value: "Masturbate"},
            {name: "Socks - Calcetas/Medias", value: "Socks"},
            {name: "Suck - Una Chupadita", value: "Suck"},
            {name: "Thighs - Piernas", value: "Thighs"},
            {name: "Loli18", value: "Loli18"},
            {name: "Shota18", value: "Shota18"},
            {name: "Trap18", value: "Trap18"},
            {name: "Yaoi18", value: "Yaoi18"},
            {name: "Yuri18", value: "Yuri18"},
        ]
      },
      {
        name: "usuario",
        description: "A quien se le dedica dicha accion",
        type: "6",
        required: "false",
      }
    ],
    run: async (client, interaction, discord) => {
      try {
        if(interaction.channel.nsfw != true) return interaction.reply("Este Canal no es +18")
        const mensaje = interaction.options._hoistedOptions[0].value;
        let User;
        if (interaction.options._hoistedOptions[1] != undefined){
            User = interaction.options._hoistedOptions[1].user;
        }

        const Author = process.env.NOMBREAUTOR;
        const Creditos = process.env.AUTHOR;
        const Version = process.env.VERSION;
        const Icon = process.env.ICONURL;
        const Url = process.env.URL;
            let embed = new discord.EmbedBuilder()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                    if(mensaje == "Armpit"){}
                    if(mensaje == "Boobjob"){}
                    if(mensaje == "Cum"){}
                    if(mensaje == "Foot"){}
                    if(mensaje == "Fuck"){
                        if (interaction.options._hoistedOptions[1] === undefined){
                            let NumMagicM = Math.floor(Math.random()*51);
                            embed.setDescription(" " + interaction.user.username + " \n𝐄𝐬𝐭𝐚 𝐇𝐚𝐜𝐢𝐞𝐧𝐝𝐨 𝐞𝐥 𝐀𝐮𝐭𝐨𝐃𝐞𝐥𝐢𝐜𝐢𝐨𝐬𝐨 𝐞𝐰𝐞 ")
                            embed.setImage(Masturbate[NumMagicM])
                        }else{
                            let NumMagicF = Math.floor(Math.random()*61);
                            embed.setDescription(" " + interaction.user.username + " \n𝐒𝐞 𝐞𝐬𝐭𝐚 𝐅𝐨𝐥𝐥𝐚𝐧𝐝𝐨 𝐚 "+ User.username + " 𝗢///𝗢 ")
                            embed.setImage(Fuck[NumMagicF])
                        }
                    }
                    if(mensaje == "Futanari"){}
                    if(mensaje == "HandJob"){}
                    if(mensaje == "Hentai"){}
                    if(mensaje == "Masturbate"){}
                    if(mensaje == "Socks"){}
                    if(mensaje == "Suck"){}
                    if(mensaje == "Thighs"){}
                    if(mensaje == "Loli18"){}
                    if(mensaje == "Shota18"){}
                    if(mensaje == "Trap18"){}
                    if(mensaje == "Yaoi18"){}
                    if(mensaje == "Yuri18"){}
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
            interaction.reply({ embeds: [embed]});
      } catch (error) {
        interaction.reply({ content: "Faltan Datos" });
        console.log(error);
      }
    },
  };