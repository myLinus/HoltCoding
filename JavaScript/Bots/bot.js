const Discord = require('discord.js');
const config = require('./config.json')
const client = new Discord.Client();
Discord.Client.once('ready', () => {
    console.log('Ready!');
});