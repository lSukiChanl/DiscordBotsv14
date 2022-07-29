const yrS = require("yt-search");
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "radio",
    aliases: ["radioanime", "radioanimex"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){

        try {
            const Voice = message.member.voice.channel;
            if (!Voice) return message.reply('Tienes que entrar a un Canal de Voz');

            message.delete().catch(error =>
                message.reply(({embed: {
                    color: 15158332,
                    description: "𝐏𝐀𝐑𝐀 𝐅𝐔𝐍𝐂𝐈𝐎𝐍𝐀𝐑 𝐂𝐎𝐑𝐑𝐄𝐂𝐓𝐀𝐌𝐄𝐍𝐓𝐄 𝐍𝐄𝐂𝐄𝐒𝐈𝐓𝐎 \n𝐑𝐎𝐋 𝐂𝐎𝐌𝐎 𝐀𝐃𝐌𝐈𝐍𝐈𝐒𝐓𝐑𝐀𝐃𝐎𝐑"
                }})
                )
            );

            
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const WEB = process.env.PAGINAWEB;
            const Vote = process.env.VOTE;

            let embed = new EmbedBuilder()
                .setColor('#D57DC1')
                .setTitle('Pagina Oficial')
                .setURL(WEB)
                .setAuthor({ name: Author +' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Vote })
                //.setThumbnail(Icon)
                .addFields({ name: "🎧 Reproduciendo RadioAnimex🎧", value: 'Musica, Anime y Mucho Mas', inline: false })
                .setImage('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjfhYuEqHVN9m8sifn0VxZeWA46pOGAnQdxyBmGxLOTp-_GHNFJ4mIQMuZSHAA2Qaepb5EhA2iZD8TAz4xCEO7kz4jK4aciIKsKPJKMqH7VAeMBUltmBykXTuU1JHf_lgvomYJII3kuUTYftF60XjiUANMsYRlCP2YmhUBnLGG5u4uQhVnA51VbC3e6/s16000/FFFDWE.png')
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            message.channel.send({ embeds: [embed]});

            client.distube.play(message.member.voice.channel, 'https://radiostreamingaac.com:8590/radioanimex', {
                member: message.member,
                textChannel: message.channel,
                message
            })

        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};