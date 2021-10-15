const Discord = require("discord.js");


module.exports.run = function(client, message, args) {
       let no = ":onaylanmadi:"; let yes = ":onaylanmis:";let n = no;let y = yes; 
       let phentosSayılar = { 
     '0': `847506468856397876`,
      '1': `847503459087286352`,
      '2': `847503532834947162`,
      '3': `847503586090549318`,
      '4': `847503644055699456`,                  
      '5': `847503685118197811`,
      '6': `847503751107182602`,
      '7': `847503801211551756`,
      '8': `847503838691852298`,
      '9': `847503891775619092`,
}; 
let tag = "⚚"; 
let embed = new Discord.MessageEmbed().setFooter("Verus will kill everyone").setColor("RANDOM").setTimestamp();
 message.channel.send(embed.setDescription(`\`>\` Sunucumuzda toplam ${message.guild.memberCount.toString().split("").map(a => client.emojis.cache.get(phentosSayılar[a])).join("")} adet üye bulunmaktadır.\`>\` \n Sunucumuzun sesli odalarında ${message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b).toString().split("").map(a => client.emojis.cache.get(phentosSayılar[a])).join("")} adet üye bulunmaktadır.\`>\` \n Sunucumuzun tagında ${message.guild.members.cache.filter(m => m.user.username.includes(tag)).size.toString().split("").map(a => client.emojis.cache.get(phentosSayılar[a])).join("")} adet üye bulunmaktadır.`))}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['say'],
  permLevel: 0
}
exports.help = {
  name: 'say',
  description: "Sunucu istatistiklerini sayar",
  usage: 'say'
}