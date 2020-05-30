const botconfig = require("./botconfig.json");
const Discord = require('discord.js');

const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
    console.log(`${bot.user.username}Is online!`)
    bot.user.setActivity("praying for namaki kun")
})


bot.on("message", message =>{
    if(message.author.bot || message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ")
    let cmd = messageArray[0]
    let args = messageArray.slice[0]

    if(cmd === `${prefix}namaki`){
        return message.channel.send(' ')

    }

    if (cmd ===   `${PREFIX}serverinfo`){ 
        const pic = message.author.displayAvatarURL()
        const serverembed = new Discord.MessageEmbed()
        
        .setDescription('Server Info')
        .setColor('#8b0101')
        .setThumbnail(pic)
        .addField('Server Name:', message.guild.name)
        .addField('Created On:', message.guild.createdAt)
        .addField('You Joined:', message.member.joinedAt)
        .addField('Total Members:', message.guild.memberCount)
        return message.channel.send(serverembed);
        
        }
})

bot.login(botconfig.token);