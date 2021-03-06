const fs = require('fs')
const discord = require('discord.js');
const { log } = require('console');
const { addListener } = require('process');

require('dotenv').config();

const TOKEN=process.env.TOKEN;

const bot=new discord.Client();

bot.commands=new discord.Collection();

const prefix='*';

bot.login(TOKEN);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));


for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}


bot.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
  });

bot.on('ready',()=>
{
    console.log(`Logged in as ${bot.user.tag} :)`); 
})

bot.on('message',(msg)=>
{
    if(msg.author.bot)
    return;
    
    if(msg.content.startsWith('*'))
    {
       command=msg.content.substring(1);
       
       commandlist=command.split(' ');
       actualcommand=commandlist[0];
       const args = msg.content.slice(prefix.length).trim().split(/ +/);

       if(commandFiles.includes(actualcommand+'.js'))
        {
            msg.react('👁');
            bot.commands.get(actualcommand).execute(msg,args);   
        }
        else
        {
            msg.react('😧');
            msg.reply('Sorry We couldnt find your command. try again maybe?');
            msg.reply('Or you can even talk to faking_reality, my master, to implement that in me 🙂');            
        }
    }
})