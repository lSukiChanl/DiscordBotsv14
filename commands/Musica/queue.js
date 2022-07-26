module.exports = {
    name: "queue",
    aliases: ["queueue"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){
        try {

         const queue = client.distube.getQueue(message);
		if (!queue) {
			return message.channel.send('**No se Esta Reproduciendo Nada Ahora Mismo!**');
		} else {
			message.channel.send(
				`**Lista de Reproduccion :**\n${queue.songs
					.map(
						(song, id) =>
							`**${id ? id : 'Reproduciendo Ahora Mismo'}**. ${
								song.name
							} - \`${song.formattedDuration}\``,
					)
					.slice(0, 10)
					.join('\n')}`,
			);
		}

        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};