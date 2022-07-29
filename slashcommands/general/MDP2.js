module.exports = {
    name: "sticker-menhera-dog-parte-2",
    description: "Stickers de Menhera Perrita Parte 2",
    options: [
      {
        name: "accion",
        description: "Accion o Reaccion del Sticker",
        type: "3",
        required: "true",
        choices: [
            {name: "Jojo - Presumiendo", value: "Jojo"},
            {name: "Kiss - Besar", value: "Kiss"},
            {name: "Like - Me Gusta", value: "Like"},
            {name: "Love - Amor", value: "Love"},
            {name: "Mmm - Thinking - Pensando", value: "Mmm"},
            {name: "Nervous - Nerviosa", value: "Nervous"},
            {name: "OMG", value: "OMG"},
            {name: "Peace - Señal de Paz", value: "Peace"},
            {name: "Really - En Serio?", value: "Really"},
            {name: "Sad - Triste", value: "Sad"},
            {name: "Shame - Avergonzada", value: "Shame"},
            {name: "Sleep - Durmiendo", value: "Sleep"},
            {name: "Smile - Sonriendo", value: "Smile"},
            {name: "Sorry - Lo Siento", value: "Sorry"},
            {name: "Spy - Espiando", value: "Spy"},
            {name: "You - Tu", value: "You"},
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
                if(mensaje == "Jojo"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐏𝐥𝐚𝐧𝐞𝐚 𝐀𝐥𝐠𝐨")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035943721369602.png')
                }
                if(mensaje == "Kiss"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐓𝐞 𝐪𝐮𝐢𝐞𝐫𝐞 𝐛𝐞𝐬𝐚𝐫")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035786204151809.png')
                }
                if(mensaje == "Like"){
                    embed.setDescription(" 𝐀 "+ interaction.user.username +" 𝐋𝐞 𝐚𝐠𝐫𝐚𝐝𝐚")
                    embed.setImage('https://cdn.discordapp.com/emojis/631036268444123146.png')
                }
                if(mensaje == "Love"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐄𝐧𝐚𝐦𝐨𝐫𝐚𝐝@")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035763706036235.png')
                }
                if(mensaje == "Mmm"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐒𝐞 𝐏𝐮𝐬𝐨 𝐚 𝐏𝐞𝐧𝐬𝐚𝐫")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035933537337355.png')
                }
                if(mensaje == "Nervous"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐒𝐞 𝐏𝐮𝐬𝐨 𝐍𝐞𝐫𝐯𝐢𝐨𝐬@")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035838561779713.png')
                }
                if(mensaje == "OMG"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐒𝐨𝐫𝐩𝐫𝐞𝐧𝐝𝐢𝐝@")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035908799594498.png')
                }
                if(mensaje == "Peace"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐇𝐚𝐜𝐞 𝐥𝐚 𝐒𝐞ñ𝐚 𝐝𝐞 𝐏𝐚𝐳")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035796509687809.png')
                }
                if(mensaje == "Really"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐏𝐫𝐞𝐠𝐮𝐧𝐭𝐚 𝐬𝐢 𝐥𝐨 𝐝𝐢𝐜𝐞𝐬 𝐞𝐧 𝐒𝐞𝐫𝐢𝐨")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035898380812298.png')
                }
                if(mensaje == "Sad"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐓𝐫𝐢𝐬𝐭𝐞")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035860657373186.png')
                }
                if(mensaje == "Shame"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐀𝐯𝐞𝐫𝐠𝐨𝐧𝐳𝐚𝐝@")
                    embed.setImage('https://cdn.discordapp.com/emojis/631036055092461568.png')
                }
                if(mensaje == "Sleep"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐓𝐢𝐞𝐧𝐞 𝐒𝐮𝐞𝐧𝐨 𝐨 𝐘𝐚 𝐒𝐞 𝐃𝐮𝐫𝐦𝐢𝐨")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035920207970305.png')
                }
                if(mensaje == "Smile"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐒𝐨𝐧𝐫𝐢𝐞𝐧𝐝𝐨")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035734266085376.png')
                }
                if(mensaje == "Sorry"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐒𝐞 𝐒𝐢𝐞𝐧𝐭𝐞 𝐂𝐮𝐥𝐩𝐚𝐛𝐥𝐞")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035870559993877.png')
                }
                if(mensaje == "Spy"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐎𝐛𝐬𝐞𝐫𝐯𝐚𝐧𝐝𝐨")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035986230640643.png')
                }
                if(mensaje == "You"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐒𝐞ñ𝐚𝐥𝐚𝐧𝐝𝐨")
                    embed.setImage('https://cdn.discordapp.com/emojis/631036246638067722.png')
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