    const yrS = require("yt-search");
    const { EmbedBuilder } = require('discord.js');

    module.exports = {
        name: "play",
        aliases: ["reproducir", "p"],
        description:"Escribir con Menhera-Chan",
        async execute (client, message, args, discord){

            try {
                const Argumentos = args.join(' ')
                const Voice = message.member.voice.channel;
                if (Argumentos.length < 1) return message.reply('Necesitas Ingresar una URL o Nombre de una Cancion');
                if (!Voice) return message.reply('Tienes que entrar a un Canal de Voz');

                message.delete().catch(error =>
                    message.reply(({embed: {
                        color: 15158332,
                        description: "𝐏𝐀𝐑𝐀 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐀𝐑 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐀𝐌𝐄𝐍𝐓𝐄 𝐍𝐄𝐂𝐄𝐒𝐈𝐓𝐎 \n𝐑𝐎𝐋 𝐂𝐎𝐌𝐎 𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐑"
                    }})
                    )
                );
            
                async function BuscarYoutube(Argumentos){
                    const YSearch = await yrS(Argumentos) 
                    return YSearch.videos.length > 0 ? YSearch.videos[0] : null;
                }
                
                const Result = await BuscarYoutube(Argumentos);
                if (!Result) {
                    return message.reply({
                        content: 'Tienes que entrar a un Canal de Voz', 
                        ephemeral : true,
                    });
                }

                const Creditos = process.env.AUTHOR;
                const Version = process.env.VERSION;
                const Author = process.env.NOMBREAUTOR;
                const Icon = process.env.ICONURL;
                const WEB = process.env.PAGINAWEB;
                const Vote = process.env.VOTE;

                const queue = client.distube.getQueue(message);
                if (!queue){
                    let embed = new EmbedBuilder()
                        .setColor('#D57DC1')
                        .setTitle('Pagina Oficial')
                        .setURL(WEB)
                        .setAuthor({ name: Author +' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Vote })
                        //.setThumbnail(Icon)
                        .addFields({ name: "🎧 Reproduciendo 🎧", value: Result.title + '\n' + Result.description + '\n' + Result.url, inline: false })
                        .setImage(Result.image)
                        .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                        .setTimestamp()
                    message.channel.send({ embeds: [embed]});
                }else{
                    let embed = new EmbedBuilder()
                        .setColor('#D57DC1')
                        .setTitle('Pagina Oficial')
                        .setURL(WEB)
                        .setAuthor({ name: Author +' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Vote })
                        //.setThumbnail(Icon)
                        .addFields({ name: "🎧 Agregando a la Cola 🎧", value: Result.title + '\n' + Result.description + '\n' + Result.url, inline: false })
                        .setImage(Result.image)
                        .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                        .setTimestamp()
                    message.channel.send({ embeds: [embed]});
                }

                client.distube.play(message.member.voice.channel, Result.url, {
                    member: message.member,
                    textChannel: message.channel,
                    message
                })

            } catch (error) {
                return console.log("Error : " + error);
            }
        }
    };