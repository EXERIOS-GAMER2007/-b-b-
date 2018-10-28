const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("452592552135360524")
setInterval(function() {
channel.send(`youtube`);
}, 25)
})
 
 
client.login('NDk4MDQ1OTk3NjI1Mzc2Nzc4.DrblMA.BeiclLLaa18ZpdDeLD7Xl81QIBc');