module.exports = {
    name: "stickers-random",
    description: "Stickers Random",
    options: [
      {
        name: "accion",
        description: "Accion o Reaccion del Sticker",
        type: "3",
        required: "true",
        choices: [
            {name: "Crisis", value: "Crisis"},
            {name: "No", value: "Kiss"},
            {name: "En Visto", value: "Visto"},
            {name: "Pensando", value: "Thinkg"},
            {name: "Yes", value: "Yes"},
        ]
      },
    ],
    run: async (client, interaction, discord) => {
      try {
        const mensaje = interaction.options._hoistedOptions[0].value;
        const Author = process.env.NOMBREAUTOR;
        const Creditos = process.env.AUTHOR;
        const Version = process.env.VERSION;
        const Icon = process.env.ICONURL;
        const Url = process.env.URL;
            let embed = new discord.EmbedBuilder()
                embed.setColor('#D57DC1')
                embed.setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                if(mensaje == "Crisis"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐇𝐚 𝐄𝐧𝐭𝐫𝐚𝐝𝐨 𝐞𝐧 𝐂𝐫𝐢𝐬𝐢𝐬 𝐄𝐱𝐢𝐬𝐭𝐞𝐧𝐜𝐢𝐚𝐥")
                    embed.setImage('https://cdn.discordapp.com/emojis/631041905785831435.png')
                }
                if(mensaje == "No"){
                    embed.setDescription("𝐀 "+ interaction.user.username +" 𝐍𝐨 𝐋𝐞 𝐆𝐮𝐬𝐭𝐚")
                    embed.setImage('https://cdn.discordapp.com/emojis/631041078493184000.png')
                }
                if(mensaje == "Seen"){
                    embed.setDescription("𝐃𝐞𝐣𝐚𝐫𝐨𝐧 𝐞𝐧 𝐕𝐢𝐬𝐭𝐨 𝐚 "+ interaction.user.username +" ")
                    embed.setImage('https://cdn.discordapp.com/emojis/631043902987567114.png')
                }
                if(mensaje == "Think"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐒𝐞 𝐏𝐮𝐬𝐨 𝐚 𝐏𝐞𝐧𝐬𝐚𝐫")
                    embed.setImage('https://cdn.discordapp.com/emojis/633100135185776650.png')
                }
                if(mensaje == "Yes"){
                    embed.setDescription("𝐀 "+ interaction.user.username +" 𝐋𝐞 𝐆𝐮𝐬𝐭𝐚")
                    embed.setImage('https://cdn.discordapp.com/emojis/631041417610788874.png')
                }
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
            interaction.reply({ embeds: [embed]});
      } catch (error) {
        interaction.reply({ content: "Faltan Datos" });
        console.log(error);
      }
    },
  };