module.exports = (client, discord, interaction) =>{

    console.log(interaction.type === 2);

    if (interaction.type === 2){
        const command = client.slash.get(interaction.commandName);
        try{
            command.run(client, interaction, discord);
        }catch(error){
            console.log("Interaction Create ; " + error);
        }
    }
}