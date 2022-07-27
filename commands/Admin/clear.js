module.exports = {
    name: "clear",
    aliases: ["del", "borrar", "limpiar", "erase", "delete"],
    description: "Borra una Cierta Cantidad de Mensajes",
    async execute (client, message, args, discord){

        if(!message.member.permissions.has('MANAGE_MESSAGES')) return message.reply("Permisos Insuficientes")

        if (!args[0]) return message.reply("Ingresa una Cantidad de Mensajes a Borrar");
        if (isNaN(args[0])) return message.reply("Ingresa un Numero");
        if (args[0] > 100) return message.reply("Debe ser un Numero Menor a 100");
        if (args[0] < 1) return message.reply("Debe ser un Numero Mayor a 0");

        await message.channel.messages.fetch( { limit: args[0] } ).then((messages) => {
            message.channel.bulkDelete(messages);
        });
    }
};