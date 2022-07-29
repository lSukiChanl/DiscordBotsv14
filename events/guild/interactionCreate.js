module.exports = (client, discord, interaction) =>{

    if (interaction.type === 2){
        const command = client.slash.get(interaction.commandName);
        try{
            command.run(client, interaction, discord);
        }catch(error){
            console.log("Interaction Create ; " + error);
        }
    }
}