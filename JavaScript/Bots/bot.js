const Discord = require('discord.js');
const config = require('./config.json')
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});


// login på Discord
client.login(config.token)