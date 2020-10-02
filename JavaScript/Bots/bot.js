const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const { promisify } = require('util')
const sleep = promisify(setTimeout)

client.once('ready', () => {
    console.log('Ready!');
});

//besked lytter /s 
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    // refys shit show af en if-statement
    if (command === `refy_is_a_godlike_developer` ) {
        message.channel.send('I swear to Allah. Only people bored enough to read the source code should know this..')
        sleep(2000)
        message.channel.send(`But .. I guess you are just a really bored person, ${message.author}`)
        sleep(5000)
        message.channel.send(`hey, ${message.author}. Did you really think those last two messages were it? Lol. You have awoken the beast - and the punishment will be severe!`)
        sleep(2000)
        message.channel.send(`${message.author} actually I will be fair. Your faith shall be decided by the king of ${message.guild.name}! `)
    }

    console.log(message.content);
});

// login på Discord
client.login(token)