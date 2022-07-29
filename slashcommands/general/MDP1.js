module.exports = {
    name: "sticker-menhera-dog-parte-1",
    description: "Stickers de Menhera Perrita Parte 1",
    options: [
      {
        name: "accion",
        description: "Accion o Reaccion del Sticker",
        type: "3",
        required: "true",
        choices: [
            {name: "Angry - Enojada", value: "Angry"},
            {name: "Blush - Sonrojada", value: "Blush"},
            {name: "Bow - Agradecida", value: "Bow"},
            {name: "Bye - Adios", value: "Bye"},
            {name: "Chesse - Posando", value: "Chesse"},
            {name: "Cry - Llorando", value: "Cry"},
            {name: "Depress - Deprimida", value: "Depress"},
            {name: "Die - Muerta", value: "Die"},
            {name: "Excited - Emocionada", value: "Excited"},
            {name: "Furious - Enfadada", value: "Furious"},
            {name: "Glad - Alegre", value: "Glad"},
            {name: "Grin - Muecas", value: "Grin"},
            {name: "Laught - Riendo - Haha", value: "Haha"},
            {name: "Happy - Feliz", value: "Happy"},
            {name: "Hee - Que?", value: "Hee"},
            {name: "Hi - Hola", value: "Hi"},
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
                if(mensaje == "Angry"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐄𝐧𝐨𝐣𝐚𝐝@")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035889749065729.png')
                }
                if(mensaje == "Blush"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐒𝐨𝐧𝐫𝐨𝐣𝐚𝐝@")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035744240140309.png')
                }
                if(mensaje == "Bow"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐌𝐮𝐞𝐬𝐭𝐫𝐚 𝐬𝐮 𝐀𝐠𝐫𝐚𝐝𝐞𝐜𝐢𝐦𝐢𝐞𝐧𝐭𝐨")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035995780939786.png')
                }
                if(mensaje == "Bye"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐒𝐞 𝐃𝐞𝐬𝐩𝐢𝐝𝐞")
                    embed.setImage('https://cdn.discordapp.com/emojis/631036045281984512.png')
                }
                if(mensaje == "Chesse"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐏𝐨𝐬𝐚𝐧𝐝𝐨")
                    embed.setImage('https://cdn.discordapp.com/emojis/632520293381963796.png')
                }
                if(mensaje == "Cry"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐋𝐥𝐨𝐫𝐚𝐧𝐝𝐨")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035805883957248.png')
                }
                if(mensaje == "Depress"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐧𝐭𝐫𝐚 𝐞𝐧 𝐃𝐞𝐩𝐫𝐞𝐬𝐢𝐨𝐧")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035849533947915.png')
                }
                if(mensaje == "Die"){
                    embed.setDescription(" "+ interaction.user.username +"  𝐌𝐮𝐫𝐢𝐨 𝐞𝐧 𝐂𝐨𝐦𝐛𝐚𝐭𝐞")
                    embed.setImage('https://cdn.discordapp.com/emojis/631036237041500210.png')
                }
                if(mensaje == "Excited"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐄𝐦𝐨𝐜𝐢𝐨𝐧𝐚𝐝@")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035724808060929.png')
                }
                if(mensaje == "Furious"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐅𝐮𝐫𝐢𝐨𝐬𝐨")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035889749065729.png')
                }
                if(mensaje == "Glad"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐀𝐥𝐞𝐠𝐫𝐞")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035716813717514.png')
                }
                if(mensaje == "Grin"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐇𝐚𝐜𝐞 𝐮𝐧𝐚 𝐌𝐮𝐞𝐜𝐚")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035753794764800.png')
                }
                if(mensaje == "Haha"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐒𝐞 𝐞𝐬𝐭𝐚 𝐑𝐢𝐞𝐧𝐝𝐨")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035774099521536.png')
                }
                if(mensaje == "Happy"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐅𝐞𝐥𝐢𝐳")
                    embed.setImage('https://cdn.discordapp.com/emojis/631036029109010432.png')
                }
                if(mensaje == "Hee"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐂𝐨𝐧𝐟𝐮𝐧𝐝𝐢𝐝@")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035880135720960.png')
                }
                if(mensaje == "Hi"){
                    embed.setDescription(" "+ interaction.user.username +" 𝐄𝐬𝐭𝐚 𝐒𝐚𝐥𝐮𝐝𝐚𝐧𝐝𝐨")
                    embed.setImage('https://cdn.discordapp.com/emojis/631036006845513748.png')
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