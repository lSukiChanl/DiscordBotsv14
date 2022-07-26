module.exports = {
    name: "pause",
    aliases: ["parar", "resume", "seguir"],
    description:"Pausar la Cancion Actual",
    async execute (client, message, args, discord){
        try {
            const queue = client.distube.getQueue(message)
            if (!queue) return message.channel.send(`There is nothing in the queue right now!`)
            if (queue.paused) {
              queue.resume()
              return message.channel.send('Resumed the song for you :)')
            }
            queue.pause()
            message.channel.send('Paused the song for you :)')
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};