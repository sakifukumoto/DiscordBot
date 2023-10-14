const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.on('ready', () => {
  console.log('起動完了');
});

client.on('message', message => {
  if (message.content === 'ping') {
    message.reply('Pong!');
  }
});

client.login(process.env.DISCORD_TOKEN);
