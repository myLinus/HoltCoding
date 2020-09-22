// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const { prefix, token } = require('./config.json');

// when the client is ready, run this code
// this event will only trigger one time after logging in
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

//besked lytter /s 
client.on('message', message => {
    console.log(message.content);
});
// login på Discord
client.login(token)