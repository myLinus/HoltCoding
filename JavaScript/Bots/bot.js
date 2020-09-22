const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

//besked lytter /s 
client.on('message', message => {

    // refys shit show af en if-statement
    if (message.content === `${prefix}refy_is_a_godlike_developer` ) {
        message.channel.send('I swear to Allah. Only people bored enough to read the source code should know this..')
        message.channel.send(`But .. I guess you are just a really bored person, ${message.author.username}`)
    }

    console.log(message.content);
});

// login på Discord
client.login(token)