const moment = require('moment');

module.exports = {
    name: "info",
    aliases: ["informacion"],
    description:"Ver el Avatar de Alguien",
    async execute (client, message, args, discord){
        try {
            
            const flags = {
                DISCORD_EMPLOYEE: 'Discord Employee',
                DISCORD_PARTNER: 'Discord Partner',
                BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
                BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
                HYPESQUAD_EVENTS: 'HypeSquad Events',
                HOUSE_BRAVERY: 'House of Bravery',
                HOUSE_BRILLIANCE: 'House of Brilliance',
                HOUSE_BALANCE: 'House of Balance',
                EARLY_SUPPORTER: 'Early Supporter',
                TEAM_USER: 'Team User',
                SYSTEM: 'System',
                VERIFIED_BOT: 'Verified Bot',
                VERIFIED_DEVELOPER: 'Verified Bot Developer'
            };
    
            const Creditos = process.env.AUTHOR;
            const Version = process.env.VERSION;
            const Author = process.env.NOMBREAUTOR;
            const Icon = process.env.ICONURL;
            const Url = process.env.URL;
            const WEB = process.env.PAGINAWEB;

            let usuario = message.mentions.members.first() || message.member; 

            let embed = new discord.EmbedBuilder()
                .setColor('#D57DC1')
                .setTitle("🎀 🎀 🎀 𝐈𝐧𝐟𝐨𝐫𝐦𝐚𝐜𝐢𝐨𝐧 𝐝𝐞𝐥 𝐏𝐞𝐫𝐟𝐢𝐥 🎀 🎀 🎀")
                .setURL(Url)
                .setAuthor({ name: Author + ' | 𝐂𝐥𝐢𝐜𝐤 𝐩𝐚𝐫𝐚 𝐕𝐨𝐭𝐚𝐫', iconURL: Icon, url: Url })
                //.setDescription("💖 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐩𝐨𝐫 𝐀𝐩𝐨𝐲𝐚𝐫𝐦𝐞  💖 ")
                //.setThumbnail(Icon)
                .addFields({ name: "💖 Informacion de Usuario 💖 ", value: 
                    "\n " + `**♡ Username:** ${usuario.user.username}` +
                    "\n " + `**♡ Codigo:** ${usuario.user.discriminator}`+
                    "\n " + `**♡ ID:** ${usuario.id}` +
                    //"\n " + `**♡ Flags:** ${message.member.userFlags.length ? message.member.userFlags.map(flag => flags[flag]).join(', ') : 'None'}` +
                    "\n " + `**♡ Avatar:** [Link to avatar](${usuario.user.avatarURL()+"?size=1024"})` +
                    "\n " + `**♡ Time Created:** ${moment(usuario.user.createdTimestamp).format('LT')} ${moment(usuario.user.createdTimestamp).format('LL')} ${moment(usuario.user.createdTimestamp).fromNow()}` +
                    "\n " + `**♡ Status:** ${usuario.presence?.status}`+
                    "\n " + `**♡ Game:** ${usuario.user.getActivity || 'Not playing a game.'}` +
                    "\n " + `\u200b`, 
                inline: false })
                .addFields({ name: "💖 Miembro 💖 ", value: 
                    "\n " + `**♡ Highest Role:** ${usuario.roles.highest.id === message.guild.id ? 'None' : usuario.roles.highest.name}` + 
                    "\n " + `**♡ Server Join Date:** ${moment(usuario.joinedAt).format('LL LTS')}` + 
                    //"\n " + `**♡ Roles [${message.guild.roles.cache.has.length}]:** ${message.guild.roles.cache.has.length < 10 ? message.guild.roles.cache.values().join(', ') : message.guild.roles.cache.has.length > 10 ? this.client.utils.trimArray(roles) : 'None'}` +
                    "\n " + `\u200b`, 
                inline: false })
                .addFields({ name: "🌐 𝐏𝐚𝐠𝐢𝐧𝐚 𝐖𝐄𝐁 🌐 ", value: WEB, inline: false })
                .setImage(usuario.user.avatarURL()+"?size=1024")
                .setFooter({text: " 𝐂𝐫𝐞𝐝𝐢𝐭𝐨𝐬 : "+ Creditos +"  "+ Version +" "})
                .setTimestamp()
            return message.channel.send({ embeds: [embed]});

        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};