const Discord = require("discord.js")
exports.run = (bot, message) => {
  if(message.author.bot || message.channel.type === "dm") return;
 message.channel.send("**Canım, Tag mı Almak İstiyorsun :D?**")
message.channel.send("⚚")
} 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['tag'],
  permLevel: 0
};

exports.help = {
  name: "tag",
  description: "tag",
  usage: "tag"
};
