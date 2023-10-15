// const { Client, GatewayIntentBits, MessageActionRow, MessageButton } = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config()

const DISCORD_TOKEN = process.env.DISCORD_TOKEN

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages
  ]
});

client.once('ready', () => {
  console.log('Ready!') // 起動した時に"Ready!"とコンソールに出力する
});

client.on('voiceStateUpdate', (oldState, newState) => {
  const textChannel = newState.guild.channels.cache.get('1162959363409973278')
  if (oldState.channelId === null && newState.channelId !== null) {
    textChannel.send('ボイスチャンネルに参加しました!')
  } else if (oldState.channelId !== null && newState.channelId === null) {
    textChannel.send('ボイスチャンネルから退出しました!')
  }
});

client.on('messageCreate', message => {
  const textChannel = message.guild.channels.cache.get('1162959363409973278')
  if (message.content === '!schedule') {
    textChannel.send('メッセージが送信されました')
  }
});

client.login(DISCORD_TOKEN);
