const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTM4ODY1NDUzNTk0OTY4MDkw.DzyqdQ.IwDwNOEI_d7-V54BLtVqJTnzk8c');
