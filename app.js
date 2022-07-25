require("dotenv").config();
const { DisTube } = require('distube')
const { YtDlpPlugin } = require('@distube/yt-dlp')

const discord = require("discord.js");

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
	searchSongs: 10,
	leaveOnEmpty: true,
	leaveOnFinish: true,
	leaveOnStop: true,
	searchCooldown: 45,
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
		console.log('Reproduciendo Cancion => ' + song.name)
	)
	.on('addSong', (queue, song) =>
		console.log('Agregando Cancion => ' + song.name)
	)
	.on('addList', (queue, playlist) =>
		console.log('Reproduciendo Playlists')
	)
	.on('error', (textChannel, e) => {
		console.error(e);
		textChannel.send(
			`Mensaje de Error => ${e.message.slice(0, 2000)}`,
		);
	})
	.on('finish', queue => queue.textChannel?.send('Lista Terminada!'))
	.on('finishSong', queue =>
		queue.textChannel?.send('Cancion Terminada!'),
	)
	.on('disconnect', queue =>
		queue.textChannel?.send('Desconectando!'),
	)
	.on('empty', queue =>
		queue.textChannel?.send(
			'El Canal de Voz esta Vacio! Abandonando Canal de Voz...',
		),
	)
	// DisTubeOptions.searchSongs > 1
	.on('searchResult', (message, result) => {
		let i = 0;
		message.channel.send(
			`**Elige una Opcion\nEscribiendo el Numero Indicado**\n${result
				.map(
					song =>
						`**${++i}**. ${song.name} - \`${
							song.formattedDuration
						}\``,
				)
				.join(
					'\n',
				)}\n \n*Escribe un Espacio en Blanco o Espera 45 Segundos para cancelar*`,
		);
	})
	.on('searchCancel', message =>
		message.channel.send('Busqueda Cancelada'),
	)
	.on('searchInvalidAnswer', message =>
		message.channel.send('Numero Indicado Incorrecto'),
	)
	.on('searchNoResult', message =>
		message.channel.send('No se Encontraron Resultados!'),
	)
	.on('searchDone', () => {});

client.login(process.env.TOKEN);