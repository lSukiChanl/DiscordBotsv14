module.exports = {
    name: "pinga",
    description:"Tiempo de Respuesta",
    run : async (client, interaction) => {

        try {
            interaction.reply({content: `Usuario mencionado`})
        } catch (error) {
            console.log("Error en sc: " + error);
            return interaction.reply({ content: "Faltan datos" });
        }
    }
};