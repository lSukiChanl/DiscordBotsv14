module.exports = {
    name: "commandos-de-reaccion-parte-1",
    description: "Comandos de Reaccion Parte 1",
    options: [
      {
        name: "accion",
        description: "Accion o Reaccion del Sticker",
        type: "3",
        required: "true",
        choices: [
            {name: "Angry - Enojad@",value: "Angry"},
            {name: "Banghead - Golpe en la Cabeza",value: "Banghead"},
            {name: "Blush - Sonrojad@",value: "Blush"},
            {name: "Boom - Explosion",value: "Boom"},
            {name: "Bored - Aburrid@",value: "Bored"},
            {name: "Confused - Confundid@",value: "Confused"},
            {name: "Cook - Cocinando",value: "Cook"},
            {name: "Cry - Llorando",value: "Cry"},
            {name: "Dab",value: "Dab"},
            {name: "Dance - Bailar",value: "Dance"},
            {name: "Disgust - Disgustad@",value: "Disgust"},
            {name: "Facepalm - Golpe en la Frente",value: "Facepalm"},
            {name: "Fail - Fallar",value: "Fail"},
            {name: "FBI",value: "FBI"},
            {name: "Game - Jugando",value: "Game"},
            {name: "Gomene - Sorry - Lo Siento",value: "Gomene"},
            {name: "Happy - Feliz",value: "Happy"},
            {name: "LEWD - LASCIV@",value: "LEWD"},
            {name: "Like - Me Gusta",value: "Like"},
            {name: "Nervous - Nervios@",value: "Nervous"},
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
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐄𝐧𝐨𝐣𝐚𝐝@ (╬ Ò﹏Ó) " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Angry/Angry"+NumMagic+".gif")
                  }
                  if(mensaje == "Banghead"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐒𝐞 𝐄𝐬𝐭𝐚 𝐆𝐨𝐥𝐩𝐞𝐚𝐧𝐝𝐨 𝐥𝐚 𝐂𝐚𝐛𝐞𝐳𝐚 (o_O)!" )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Banghead/Banghead"+NumMagic+".gif")
                  }
                  if(mensaje == "Blush"){
                    let NumMagic = Math.floor(Math.random()*106);
                    NumMagic = NumMagic + 1;            
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐒𝐨𝐧𝐫𝐨𝐣𝐚𝐝@ (⁄ ⁄•⁄ω⁄•⁄ ⁄) " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Blush/Blush"+NumMagic+".gif")
                  }
                  if(mensaje == "Boom"){
                    embed.setDescription(" "+ interaction.user.username + " ¡¡𝐁𝐎𝐎𝐎𝐎𝐌!!! ((╬◣﹏◢)) " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Boom/Boom"+NumMagic+".gif")
                  }
                  if(mensaje == "Bored"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐀𝐛𝐮𝐫𝐫𝐢𝐝@  (∪｡∪)｡｡｡zzZ " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Bored/Bored"+NumMagic+".gif")
                  }
                  if(mensaje == "Confused"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐂𝐨𝐧𝐟𝐮𝐧𝐝𝐢𝐝@ (⊙_⊙) " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Confused/Confused"+NumMagic+".gif")
                  }
                  if(mensaje == "Cook"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐂𝐨𝐜𝐢𝐧𝐚𝐧𝐝𝐨 ( ´ ▽ ` ).｡ｏ♡ " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Cook/Cook"+NumMagic+".gif")
                  }
                  if(mensaje == "Cry"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐋𝐥𝐨𝐫𝐚𝐧𝐝𝐨 (╥﹏╥) " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Cry/Cry"+NumMagic+".gif")
                  }
                  if(mensaje == "Dab"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐇𝐚𝐜𝐢𝐞𝐧𝐝𝐨 𝐮𝐧 𝐃𝐚𝐛 (/ =ω=)/  " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Dab/Dab"+NumMagic+".gif")
                  }
                  if(mensaje == "Dance"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐒𝐞 𝐏𝐮𝐬𝐨 𝐚 𝐁𝐚𝐢𝐥𝐚𝐫 (≧ω≦) " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Dance/Dance"+NumMagic+".gif")
                  }
                  if(mensaje == "Disgust"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐃𝐢𝐬𝐠𝐮𝐬𝐭𝐚𝐝@ (＞﹏＜)  " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Disgust/Disgust"+NumMagic+".gif")
                  }
                  if(mensaje == "Facepalm"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐃𝐞𝐬𝐞𝐩𝐜𝐢𝐨𝐧𝐚𝐝@ (︶︹︺) " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Facepalm/Facepalm"+NumMagic+".gif")
                  }
                  if(mensaje == "Fail"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐇𝐚 𝐅𝐫𝐚𝐜𝐚𝐬𝐚𝐝𝐨 ｡ﾟ･ (>﹏<) ･ﾟ｡  " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Fail/Fail"+NumMagic+".gif")
                  }
                  if(mensaje == "FBI"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐥 𝐅𝐁𝐈 𝐄𝐬𝐭𝐚 𝐀𝐪𝐮𝐢 𝐇𝐮𝐲𝐞 (✖╭╮✖) ¡¡¡𝗛𝘂𝘆𝗲!!! " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/FBI/FBI"+NumMagic+".gif")
                  }
                  if(mensaje == "Game"){
                    embed.setDescription(" "+msg.author.username + " 𝐒𝐞 𝐏𝐮𝐬𝐨 𝐚 𝐉𝐮𝐠𝐚𝐫 ＼(≧▽≦)／ " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Game/Game"+NumMagic+".gif")
                  }
                  if(mensaje == "Gomene"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐋𝐨 𝐒𝐢𝐞𝐧𝐭𝐞 𝐌𝐮𝐜𝐡𝐢𝐬𝐢𝐦𝐨 (︶︹︺) " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Gomene/Gomene"+NumMagic+".gif")
                  }
                  if(mensaje == "Happy"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐅𝐞𝐥𝐢𝐳 ＼(≧▽≦)／ " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Happy/Happy"+NumMagic+".gif")
                  }
                  if(mensaje == "LEWD"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐝𝐞 𝐋𝐚𝐬𝐜𝐢𝐯@ (⁄ ⁄•⁄ω⁄•⁄ ⁄) " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/LEWD/LEWD"+NumMagic+".gif")
                  }
                  if(mensaje == "Like"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐀𝐩𝐫𝐮𝐞𝐛𝐚 𝐄𝐬𝐭𝐨 ( ´ ▽ ` ).｡ｏ♡ " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Like/Like"+NumMagic+".gif")
                  }
                  if(mensaje == "Nervous"){
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐍𝐞𝐫𝐯𝐢𝐨𝐬𝐨 {{ (>_<) }} " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Nervous/Nervous"+NumMagic+".gif")
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