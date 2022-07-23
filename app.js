require("dotenv").config();

const discord = require("discord.js");

const client = new discord.Client({
  'intents': [
    discord.GatewayIntentBits.DirectMessages,
    discord.GatewayIntentBits.Guilds,
    discord.GatewayIntentBits.GuildBans,
    discord.GatewayIntentBits.GuildMessages,
    discord.GatewayIntentBits.MessageContent
  ],
  'partials': [discord.Partials.Channel]
});

    client.commands = new discord.Collection();
    client.events = new discord.Collection();
    client.slash = new discord.Collection();

["commandHandler", "slashHandler" , "eventHandler",].forEach((file) => {
    require(`./handlers/${file}`)(client, discord);
});

client.login(process.env.TOKEN);