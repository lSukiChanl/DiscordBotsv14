module.exports = {
    name: "queue",
    aliases: ["queueue"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){
        try {

         const queue = client.distube.getQueue(message);
		if (!queue) {
			message.channel.send('Nothing playing right now!');
		} else {
			message.channel.send(
				`Current queue:\n${queue.songs
					.map(
						(song, id) =>
							`**${id ? id : 'Playing'}**. ${
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