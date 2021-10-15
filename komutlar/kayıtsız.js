const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
if(!["847202115800530974", ""].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(`Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.`)
  
const kayıtsız = message.guild.roles.cache.find(r => r.id === "847179585886879774")
const erkek = message.guild.roles.cache.find(r => r.id === "847175046614482964")
const erkek1 = message.guild.roles.cache.find(r => r.id === "847174975126503450")
const kadın = message.guild.roles.cache.find(r => r.id === "847178203520696330")
const kadın1 = message.guild.roles.cache.find(r => r.id === "847178210524397650")

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(`Bir Kullanıcı Belirt.`)
if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Bu Kullanıcı Sizle Üst/Aynı Pozisyondadır.`)
const x = message.guild.member(member)



message.react('✅')
member.roles.add(kayıtsız)
member.roles.remove(erkek)
member.roles.remove(erkek1)
member.roles.remove(kadın)
member.roles.remove(kadın1)
  
////themaiwen
member.roles.add(kayıtsız)
member.roles.remove(erkek)
member.roles.remove(erkek1)
member.roles.remove(kadın)
member.roles.remove(kadın1)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["tagsız"],
    permLevel: 0
};

exports.help = {
    name: "kayıtsız"
}

