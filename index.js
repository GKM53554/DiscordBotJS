//npm install discord.js@13.0.0//

const Discord = require('discord.js');
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS
  ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
    if (message.content === '!ping') {
      message.reply('Pong!');
    }
  });

client.login('MTEwNTE2OTYyNDUwMjM5MDgyNA.G10UmL.T9_jrVRdiOi3jB0Fyf57DtktOagcKc_4SpEQyE');