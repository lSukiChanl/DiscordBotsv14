require("dotenv").config();
const { Constants } = require('discord.js')
const { DisTube } = require('distube')
const { YtDlpPlugin } = require('@distube/yt-dlp')

const discord = require("discord.js");

const Creditos = process.env.AUTHOR;
const Version = process.env.VERSION;
const Author = process.env.NOMBREAUTOR;
const Icon = process.env.ICONURL;
const WEB = process.env.PAGINAWEB;
const Vote = process.env.VOTE;

const client = new discord.Client({
  'intents': [
    discord.GatewayIntentBits.DirectMessages,
    discord.GatewayIntentBits.Guilds,
    discord.GatewayIntentBits.GuildBans,
    discord.GatewayIntentBits.GuildMessages,
    discord.GatewayIntentBits.MessageContent,
    discord.GatewayIntentBits.GuildVoiceStates
  ],
  'partials': [discord.Partials.Channel]
});

    client.commands = new discord.Collection();
    client.events = new discord.Collection();
    client.slash = new discord.Collection();

["commandHandler", "slashHandler" , "eventHandler",].forEach((file) => {
    require(`./handlers/${file}`)(client, discord);
});



//DISTUBE
client.distube = new DisTube(client, {
  searchCooldown: 30,
  leaveOnEmpty: true,
  leaveOnFinish: true,
  leaveOnStop: true,
  emitNewSongOnly: true,
  emitAddSongWhenCreatingQueue: false,
  emitAddListWhenCreatingQueue: false,
  plugins: [
    new YtDlpPlugin()
  ]
})

// Queue status template
const status = queue =>
	`Volume: \`${queue.volume}%\` | Filter: \`${
		queue.filters.names.join(', ') || 'Off'
	}\` | Loop: \`${
		queue.repeatMode
			? queue.repeatMode === 2
				? 'All Queue'
				: 'This Song'
			: 'Off'
	}\` | Autoplay: \`${queue.autoplay ? 'On' : 'Off'}\``;

// DisTube event listeners, more in the documentation page
client.distube
	.on('playSong', (queue, song) =>
		queue.textChannel?.send(
			`Playing \`${song.name}\` - \`${
				song.formattedDuration
			}\`\nRequested by: ${song.user}\n${status(queue)}`,
		),
	)
	.on('addSong', (queue, song) =>
		queue.textChannel?.send(
			`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`,
		),
	)
	.on('addList', (queue, playlist) =>
		queue.textChannel?.send(
			`Added \`${playlist.name}\` playlist (${
				playlist.songs.length
			} songs) to queue\n${status(queue)}`,
		),
	)
	.on('error', (textChannel, e) => {
		console.error(e);
		textChannel.send(
			`An error encountered: ${e.message.slice(0, 2000)}`,
		);
	})
	.on('finish', queue => queue.textChannel?.send('Finish queue!'))
	.on('finishSong', queue =>
		queue.textChannel?.send('Finish song!'),
	)
	.on('disconnect', queue =>
		queue.textChannel?.send('Disconnected!'),
	)
	.on('empty', queue =>
		queue.textChannel?.send(
			'The voice channel is empty! Leaving the voice channel...',
		),
	)
	// DisTubeOptions.searchSongs > 1
	.on('searchResult', (message, result) => {
		let i = 0;
		message.channel.send(
			`**Choose an option from below**\n${result
				.map(
					song =>
						`**${++i}**. ${song.name} - \`${
							song.formattedDuration
						}\``,
				)
				.join(
					'\n',
				)}\n*Enter anything else or wait 30 seconds to cancel*`,
		);
	})
	.on('searchCancel', message =>
		message.channel.send('Searching canceled'),
	)
	.on('searchInvalidAnswer', message =>
		message.channel.send('Invalid number of result.'),
	)
	.on('searchNoResult', message =>
		message.channel.send('No result found!'),
	)
	.on('searchDone', () => {});

client.login(process.env.TOKEN);