module.exports = {
    name: "commandos-de-reaccion-parte-2",
    description: "Comandos de Reaccion Parte 2",
    options: [
      {
        name: "accion",
        description: "Accion o Reaccion del Sticker",
        type: "3",
        required: "true",
        choices: [
            {name: "Nope - No", value: "Nope"},
            {name: "Pout - Puchero", value: "Pout"},
            {name: "Pray - Rezar", value: "Pray"},
            {name: "Relax", value: "Relax"},
            {name: "Run - Correr", value: "Run"},
            {name: "Sad - Triste", value: "Sad"},
            {name: "Shrug - Ya Que", value: "Shrug"},
            {name: "Sick - Enferm@", value: "Sick"},
            {name: "Sing - Cantando", value: "Sing"},
            {name: "Sip - Bebiendo", value: "Sip"},
            {name: "Sleep - Durmiendo", value: "Sleep "},
            {name: "Smile - Sonriendo", value: "Smile"},
            {name: "Smug - Presumiendo", value: "Smug"},
            {name: "Suicide", value: "Suicide"},
            {name: "Tehee", value: "Tehee"},
            {name: "Think", value: "Think"},
            {name: "Tired", value: "Tired"},
            {name: "Vomit", value: "Vomit"},
            {name: "WoW", value: "WoW"},
            {name: "WTF", value: "WTF"},
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
                  if(mensaje == "Nope"){
                    let NumMagic = Math.floor(Math.random()*36);
                    NumMagic = NumMagic + 1;
                    embed.setDescription(" "+ interaction.user.username + " ¡¡¡𝐍𝐨𝐩𝐞!!! ( ´ ▽ ` ).｡ｏ✖ " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Nope/Nope"+NumMagic+".gif")
                  }
                  if(mensaje == "Pout"){
                    let NumMagic = Math.floor(Math.random()*63);
                    NumMagic = NumMagic + 1;
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐇𝐚𝐜𝐢𝐞𝐧𝐝𝐨 𝐏𝐮𝐜𝐡𝐞𝐫𝐨  (｡╯3╰｡)  " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Pout/Pout"+NumMagic+".gif")
                  }
                  if(mensaje == "Pray"){
                    let NumMagic = Math.floor(Math.random()*16);
                    NumMagic = NumMagic + 1;
                    embed.setDescription(" "+ interaction.user.username + " 𝐋𝐞 𝐄𝐬𝐭𝐚 𝐑𝐞𝐳𝐚𝐧𝐝𝐨 𝐚 𝐃𝐢𝐨𝐬𝐢𝐭𝐨 (𝐀𝐦𝐞𝐧) " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Pray/Pray"+NumMagic+".gif")
                  }
                  if(mensaje == "Relax"){
                    let NumMagic = Math.floor(Math.random()*16);
                    NumMagic = NumMagic + 1; 
                    embed.setDescription(" "+ interaction.user.username + " 𝐒𝐞 𝐄𝐬𝐭𝐚 𝐑𝐞𝐥𝐚𝐣𝐚𝐧𝐝𝐨 （￣へ￣） ~~zzZ  " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Relax/Relax"+NumMagic+".gif")
                  }
                  if(mensaje == "Run"){
                    let NumMagic = Math.floor(Math.random()*74);
                    NumMagic = NumMagic + 1;   
                    embed.setDescription(" "+ interaction.user.username + " 𝐒𝐞 𝐓𝐢𝐫𝐨 𝐚 𝐂𝐨𝐫𝐫𝐞𝐫 {{ (>_<) }}  " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Run/Run"+NumMagic+".gif")
                  }
                  if(mensaje == "Sad"){
                    let NumMagic = Math.floor(Math.random()*68);
                    NumMagic = NumMagic + 1;    
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐓𝐫𝐢𝐬𝐭𝐞 / 𝐃𝐞𝐜𝐚𝐢𝐝𝐚  (｡╯3╰｡) " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Sad/Sad"+NumMagic+".gif")
                  }
                  if(mensaje == "Shrug"){
                    let NumMagic = Math.floor(Math.random()*12);
                    NumMagic = NumMagic + 1; 
                    embed.setDescription(" "+ interaction.user.username + " 𝐍𝐨 𝐒𝐚𝐛𝐞 𝐎 𝐍𝐨 𝐋𝐞 𝐈𝐦𝐩𝐨𝐫𝐭𝐚 ┐(￣ヘ￣)┌ " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Shrug/Shrug"+NumMagic+".gif")
                  }
                  if(mensaje == "Sick"){
                    let NumMagic = Math.floor(Math.random()*25);
                    NumMagic = NumMagic + 1;   
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐄𝐧𝐟𝐞𝐫𝐦@ ｡ﾟ･ (>﹏<) ･ﾟ｡  " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Sick/Sick"+NumMagic+".gif")
                  }
                  if(mensaje == "Sing"){
                    let NumMagic = Math.floor(Math.random()*48);
                    NumMagic = NumMagic + 1;   
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐂𝐚𝐧𝐭𝐚𝐧𝐝𝐨 (〃◕ฺˇε ˇ◕ฺ〃) ﾌﾌﾌｰﾝ♪ " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Sing/Sing"+NumMagic+".gif")
                  }
                  if(mensaje == "Sip"){
                    let NumMagic = Math.floor(Math.random()*40);
                    NumMagic = NumMagic + 1;  
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐁𝐞𝐛𝐢𝐞𝐧𝐝𝐨 𝐝𝐞 𝐅𝐨𝐫𝐦𝐚 𝐀𝐭𝐞𝐧𝐭𝐚 ٩(◕‿◕)۶ " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Sip/Sip"+NumMagic+".gif")
                  }
                  if(mensaje == "Sleep"){
                    let NumMagic = Math.floor(Math.random()*59);
                    NumMagic = NumMagic + 1;     
                    embed.setDescription(" "+ interaction.user.username + " 𝐓𝐢𝐞𝐧𝐞 𝐒𝐮𝐞ñ𝐧𝐨 𝐨 𝐘𝐚 𝐬𝐞 𝐃𝐮𝐫𝐦𝐢𝐨 (￣ρ￣)..zzZZ " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Sleep/Sleep"+NumMagic+".gif")
                  }
                  if(mensaje == "Smile"){
                    let NumMagic = Math.floor(Math.random()*169);
                    NumMagic = NumMagic + 1;      
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐒𝐨𝐧𝐫𝐢𝐞𝐧𝐝𝐨 ¿𝐏𝐨𝐫 𝐐𝐮𝐞 𝐒𝐞𝐫𝐚? (o◕‿◕o) " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Smile/Smile"+NumMagic+".gif")
                  }
                  if(mensaje == "Smug"){
                    let NumMagic = Math.floor(Math.random()*68);
                    NumMagic = NumMagic + 1;      
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐏𝐫𝐞𝐬𝐮𝐦𝐢𝐞𝐧𝐝𝐨 ┐(︶▽︶)┌ " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Smug/Smug"+NumMagic+".gif")
                  }
                  if(mensaje == "Suicide"){
                    let NumMagic = Math.floor(Math.random()*55);
                    NumMagic = NumMagic + 1;  
                    embed.setDescription(" 💖 𝐕𝐚𝐥𝐨𝐫𝐚𝐭𝐞 𝐎𝐧𝐢𝐢-𝐂𝐡𝐚𝐧 💖 ", "𝐋𝐚 𝐯𝐢𝐝𝐚 𝐞𝐬 𝐇𝐞𝐫𝐦𝐨𝐬𝐚 𝐲 𝐌𝐞𝐧𝐡𝐞𝐫𝐚-𝐂𝐡𝐚𝐧 𝐓𝐞 𝐐𝐮𝐢𝐞𝐫𝐞 𝐌𝐮𝐜𝐡𝐨 \n " + interaction.user.username + " 𝐔𝐧 𝐁𝐞𝐬𝐢𝐭𝐨 𝐏𝐚𝐫𝐚 𝐓𝐢 \n (人´3｀)⌒♡ 𝗰𝗵𝘂𝘂♥  ")
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Interaction%20Commands/Cuddle/Cuddle"+NumMagic+".gif")
                  }
                  if(mensaje == "Tehee"){
                    let NumMagic = Math.floor(Math.random()*21);
                    NumMagic = NumMagic + 1;    
                    embed.setDescription(" "+ interaction.user.username + " \n 𝐀𝐜𝐭𝐮𝐚 𝐝𝐞 𝐅𝐨𝐫𝐦𝐚 𝐓𝐨𝐧𝐭𝐚 𝐏𝐚𝐫𝐚 𝐝𝐞𝐬𝐯𝐢𝐚𝐫 𝐥𝐚 𝐀𝐭𝐞𝐧𝐜𝐢𝐨𝐧 " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Teehee/Teehee"+NumMagic+".gif")
                  }
                  if(mensaje == "Think"){
                    let NumMagic = Math.floor(Math.random()*49);
                    NumMagic = NumMagic + 1;           
                    embed.setDescription(" "+ interaction.user.username + " 𝐒𝐞 𝐏𝐮𝐬𝐨 𝐚 𝐏𝐞𝐧𝐬𝐚𝐫 （￣へ￣） ~~zzZ " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Think/Think"+NumMagic+".gif")
                  }
                  if(mensaje == "Tired"){
                    let NumMagic = Math.floor(Math.random()*49);
                    NumMagic = NumMagic + 1;   
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐀𝐠𝐨𝐭𝐚𝐝𝐨 (x . x) ~~zzZ " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Tired/Tired"+NumMagic+".gif")
                  }
                  if(mensaje == "Vomit"){
                    let NumMagic = Math.floor(Math.random()*25);
                    NumMagic = NumMagic + 1;     
                    embed.setDescription(" "+ interaction.user.username + " 𝐀𝐜𝐚𝐛𝐚 𝐝𝐞 𝐕𝐨𝐦𝐢𝐭𝐚𝐫 (￣□￣」) " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/Vomit/Vomit"+NumMagic+".gif")
                  }
                  if(mensaje == "WoW"){
                    let NumMagic = Math.floor(Math.random()*23);
                    NumMagic = NumMagic + 1;     
                    embed.setDescription(" "+ interaction.user.username + " 𝐄𝐬𝐭𝐚 𝐒𝐨𝐫𝐩𝐫𝐞𝐧𝐝𝐢𝐝@ (⊙_⊙) " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/WOW/WOW"+NumMagic+".gif")
                  }
                  if(mensaje == "WTF"){
                    let NumMagic = Math.floor(Math.random()*23);
                    NumMagic = NumMagic + 1;  
                    embed.setDescription(" "+ interaction.user.username + " 𝐖𝐓𝐅!!! " )
                    embed.setImage("https://www.ichimonogatari.com/IMG/Menhera%20Bots/Reaction%20Commands/WTF/WTF"+NumMagic+".gif")
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