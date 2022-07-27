module.exports = {
    name: "slowmode",
    aliases: ["slow"],
    description: "Borra una Cierta Cantidad de Mensajes",
    async execute (client, message, args, discord){

        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply("Permisos Insuficientes")
        
        if (args[0] == 'OFF') {
            message.channel.setRateLimitPerUser(0, "Mucho Spam");
            return message.reply("SlowMode OFF");
        }

        if (!args[0]) return message.reply("Ingresa una Cantidad de Segundos para el Slowmode");
        if (isNaN(args[0])) return message.reply("Ingresa un Numero");

        message.channel.setRateLimitPerUser(args[0], "Mucho Spam");

        if (args[0] > 1) return message.reply("SlowMode ON -> " + args[0] + " Segundos");
        if (args[0] < 1) return message.reply("SlowMode OFF");
    }
};