const { Discord, MessageEmbed} = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')


exports.run = async (client, message, args) => {

    let kadınROL = ayarlar.kadınROL 
    let kayıtsızROL = ayarlar.kayıtsızROL
    let kayıtlıROL = ayarlar.kayıtlıROL
    let yetkili = ayarlar.yetkiliROL
    let kayıtLOG = ayarlar.kayıtLOG
    
    const yetkiliuyarı = new MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setDescription(`Bu Komutu Kullanmak İçin <@&${yetkili}> Yetkisine Sahip Olman Gerek!`)
.setColor(`RED`)

    if(!message.member.roles.cache.has(yetkili)) return message.channel.send(yetkiliuyarı)


if(!args[0]) return message.channel.send(`Bir kişiyi etiketlemelisin.`)
  
let kullanıcı = message.mentions.users.first()
if(!kullanıcı) return message.channel.send(`${args[0]}, kullanıcısını sunucuda bulamıyorum.`)
if(kullanıcı.bot) return;
  
  
  
  const kurulus = new Date().getTime() - kullanıcı.createdAt.getTime();  
   var kontrol;
if (kurulus < 1296000000) kontrol = '**Bu Hesap Şüpheli <a:Carpi2:841033988897374269>**'
if (kurulus > 1296000000) kontrol = '**Bu Hesap Güvenli <a:tik6:841034130803261450>**'
  
  
  
let isim = args[1]

if(!isim) return message.channel.send(`Üyenin ismini belirtmelisin.`)

let yaş = args[2];
if(!yaş) return message.channel.send(`Üyenin yaşını belirtmelisin.`)
  
const emb = new MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL())
.setThumbnail(client.user.avatarURL())
.setTimestamp()
.setFooter('Verus will kill everyone')
.setColor(`RANDOM`)
let tag = ayarlar.tag || '⚚'
message.guild.members.cache.get(kullanıcı.id).setNickname(`${tag} ${isim} ${yaş}`)
message.guild.members.cache.get(kullanıcı.id).roles.add(kadınROL)
  message.guild.members.cache.get(kullanıcı.id).roles.add(kayıtlıROL)
  if(ayarlar.kadınICON) {
    let kadınICON = ayarlar.kadınICON
      message.guild.members.cache.get(kullanıcı.id).roles.add(kadınICON)
  }
message.guild.members.cache.get(kullanıcı.id).roles.remove(kayıtsızROL)
message.guild.members.cache.get(kullanıcı.id).send(emb.setDescription(`• Kaydın ${message.author} tarafından yapıldı. \n • **Kadın** rolünü aldın. \n • Kurallar kanalımızı okumayı unutma!`))
 
let embed2 = new MessageEmbed()
.setDescription(`
**${kullanıcı} adlı kullanıcı sunucumuza yeni geldi, Selam Verin! <a:alev:847476177324343328>**
`)


client.channels.cache.get(ayarlar.kayıtLOG).send(embed2)
let embed3 = new MessageEmbed()
.setColor('WHITE')

.setDescription(`
** <a:tik:847501539995287642>    • ${kullanıcı}  Adlı Kullanıcının Kayıtı Yapılmıştır **

** <a:yldz2:847476113457676289>  • İsim Ve Yaşı  • ${isim} ${yaş} Olarak Düzenlenmiştir**

** <a:yldz2:847476113457676289>  • Verilen Roller • <@&${ayarlar.kadınROL}> , <@&${ayarlar.kadınICON}> **

** <a:yldz2:847476113457676289>  • Alınan Rolleri • <@&${ayarlar.kayıtsızROL}> **

`)
message.channel.send(embed3).then(m => m.delete({timeout : '5000'}))


}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["k", "kadın"],
  permLevel: 0
};

exports.help = {
  name: 'kadın'
}