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
            {
                name: "Jojo - Presumiendo",
                value: "Jojo"
            },
            {
                name: "Kiss - Besar",
                value: "Kiss"
            },
            {
                name: "Like - Me Gusta",
                value: "Like"
            },
            {
                name: "Love - Amor",
                value: "Love"
            },
            {
                name: "Mmm - Thinking - Pensando",
                value: "Mmm"
            },
            {
                name: "Nervous - Nerviosa",
                value: "Nervous"
            },
            {
                name: "OMG",
                value: "OMG"
            },
            {
                name: "Peace - Señal de Paz",
                value: "Peace"
            },
            {
                name: "Really - En Serio?",
                value: "Really"
            },
            {
                name: "Sad - Triste",
                value: "Sad"
            },
            {
                name: "Shame - Avergonzada",
                value: "Shame"
            },
            {
                name: "Sleep - Durmiendo",
                value: "Sleep"
            },
            {
                name: "Smile - Sonriendo",
                value: "Smile"
            },
            {
                name: "Sorry - Lo Siento",
                value: "Sorry"
            },
            {
                name: "Spy - Espiando",
                value: "Spy"
            },
            {
                name: "You - Tu",
                value: "You"
            },
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
                    embed.setDescription(" "+ interaction.user.username +" Enojado")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035889749065729.png')
                }
                if(mensaje == "Happy"){
                    embed.setDescription(" "+ interaction.user.username +" Feliz")
                    embed.setImage('https://cdn.discordapp.com/emojis/631035889749065729.png')
                }
                embed.setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                embed.setTimestamp()
            interaction.reply({ embeds: [embed]});
        
        
      } catch (error) {
        interaction.reply({ content: "Faltan datosx" });
        console.log(error);
      }
    },
  };