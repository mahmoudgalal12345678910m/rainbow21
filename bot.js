const Discord = require('discord.js');
const client = new Discord.Client();




client.on('ready', () => {
    setInterval(function(){
        client.guilds.get('493842175491309608').roles.find('name', 'Disco').edit({color: 'RANDOM'})
    },5000);
  

})








































client.login(process.env.BOT_TOKEN);
