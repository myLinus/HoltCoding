const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
const { promisify } = require('util')
const sleep = promisify(setTimeout)

client.once('ready', () => {
    console.log('Ready!');
});

//besked lytter /s 
client.on('message', message => {
    if (message.author.bot) return;
    
    // refys shit show af en if-statement
    if (message.content === `${prefix}refy_is_a_godlike_developer` ) {
        message.channel.send('I swear to Allah. Only people bored enough to read the source code should know this..')
        sleep(2000)
        message.channel.send(`But .. I guess you are just a really bored person, ${message.author}`)
        sleep(1337420)
        message.channel.send(`hey, ${message.author}. Did you really think those last two messages were it? Lol. You have awoken the beast - and the punishment will be severe!`)
        sleep(2000)
        message.channel.send(`${message.author} actually I will be fair. Your faith shall be decided by the king of ${message.guild.name}! `)
    }

    console.log(message.content);
});

// login på Discord
client.login(token)