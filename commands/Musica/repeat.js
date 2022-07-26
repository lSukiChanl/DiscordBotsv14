module.exports = {
    name: "repeat",
    aliases: ["bucle", "shuffle"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){

        try {
            const queue = client.distube.getQueue(message)
            if (!queue) return message.channel.send('**No se Esta Reproduciendo Nada Ahora Mismo!**');
            
            const mode = client.distube.setRepeatMode(message);
            message.channel.send(
                `Modo Bucle :  \`${
                    mode
                        ? mode === 2
                            ? 'Todas las Canciones'
                            : 'Esta Cancion'
                        : 'Desactivado'
                }\``,
            );

            
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};