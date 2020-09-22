const Discord = require('discord.js');

const { prefix, token } = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

//besked lytter /s 
client.on('message', message => {
    console.log(message.content);
});

// refys shit show af en if-statement
if (message.content === '$refy_is_a_godlike_developer' ) {
    message.channel.send('I swear to Allah. Only people bored enough to read the source code should know this..')
}

// login på Discord
client.login(token)