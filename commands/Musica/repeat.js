module.exports = {
    name: "repeat",
    aliases: ["bucle"],
    description:"Escribir con Menhera-Chan",
    async execute (client, message, args, discord){

        try {
            const mode = client.distube.setRepeatMode(message);
            message.channel.send(
                `Set repeat mode to \`${
                    mode
                        ? mode === 2
                            ? 'All Queue'
                            : 'This Song'
                        : 'Off'
                }\``,
            );

            
        } catch (error) {
            return console.log("Error : " + error);
        }
    }
};