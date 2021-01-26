const Discord = require("discord.js");
const request = require("request");
const fs = require("fs");
const ayarlar = require("./ayarlar.json");
const client = new Discord.Client();
const chalk = require("chalk");
const moment = require("moment");
const db = require("quick.db");
const express = require("express");
require("./util/eventLoader")(client);
const ms = require('parse-ms')

const app = express()



client.on("guildMemberAdd", async member => {
if(member.guild.id !== '601507624902590504') return;

     await db.set(`destekçiRozet_${member.id}`, "açık");
     await db.set(`paraRozet_${member.id}`, "açık");
})
              
client.on('message', async message => {
    if (message.content === '!!ping2') {
         message.reply('İşte Benim Pingim = **' + client.ws.ping + '** ms');
    }
});


client.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  let i = await db.fetch(`etiketspam_${message.guild.id}`);
    if (i == "açık") {
   if (message.member.hasPermission('MANAGE_GUILD')) return;
    if (message.mentions.users.cache.size >= 4) {
      message.delete();
      message.channel.send(`Hey ${message.author}, Lütfen Herkese Etiket Atma!`)
        message.author.send(`Çok fazla etiket atmanız, karşı taraf için sinir bozucu olabilir. Lütfen anlayışla karşılayıp yapma.`)
      }
    }
})


client.on("message", async msg => {
if(msg.channel.type == "dm") return;
if(msg.guild.id === "601507624902590504") return;
  const request = require("node-superfetch");
  const db = require("quick.db");
  const ms = require("parse-ms");
  let timeout = 399000; //süresini dilediğiniz gibi kısaltabilirsiniz.
  let dakdest = await db.fetch(`premtime_${msg.author.id}`);
  let i = await db.fetch(`prem_${msg.author.id}`);
  if (i == "pre") {
    if (dakdest !== null && timeout - (Date.now() - dakdest) > 0) {
      let time = ms(timeout - (Date.now() - dakdest));
    } else {
      if (msg.author.bot) return;
      if (msg.content.length > 64) {
        db.set(`premtime_${msg.author.id}`, Date.now());
        var profilresmi = [
          "https://i.giphy.com/media/H4DjXQXamtTiIuCcRU/giphy.gif",
          "https://media3.giphy.com/media/ND6xkVPaj8tHO/giphy.gif",
          "https://media.tenor.com/images/7da97095a64b9b7acc0d90475b2fe17e/tenor.gif",
          "https://media3.giphy.com/media/ZkJotsLMJThVm/source.gif",
          "https://media.giphy.com/media/2SYc7mttUnWWaqvWz8/giphy.gif",
          "https://www.m-eng.com/wp-content/uploads/Cat-Gif.gif",
          "https://media1.tenor.com/images/8dfd136fa864b1bf57bdbe1e6d8610e2/tenor.gif?itemid=13127173",
          //kedi sonu

          "https://i.gifer.com/6Szl.gif"
        ];
        var profil =
          profilresmi[Math.floor(Math.random() * profilresmi.length)];

        var profilsembolu = [
          "<a:premium_son:684433258309746699>",
          "<a:premium_4:684433261153222744>",
          "<a:premium_2:684433258863394896>",
          "<a:premium_1:684433257999237134>",
          "<a:premium_5:748151739055734794>",
          "<a:premium_6:748151739068186735>",
        ];
        var sembol =
          profilsembolu[Math.floor(Math.random() * profilsembolu.length)];

        var altkısım = [
     //     "https://media.discordapp.net/attachments/711972659444973599/712438424325324921/tenor-6.gif",
          "https://cdn.glitch.com/86c4faf0-1cc9-417c-b600-535e142f687a%2Fcizgi.gif?v=1584198329659",
          "https://cdn.glitch.com/86c4faf0-1cc9-417c-b600-535e142f687a%2FHogwarts_Rainbow%20(1).gif?v=1584198457172",
          "https://cdn.glitch.com/86c4faf0-1cc9-417c-b600-535e142f687a%2F-.gif?v=1584281777134",
        "https://cdn.glitch.com/90688195-4ce7-40eb-bc73-6bf6a8d61548%2Fannouncements-1.gif?v=1588365223435",
        "https://media.discordapp.net/attachments/745962413362380931/748151273903095838/cizgi-1.gif",
        ];
        var altgif = altkısım[Math.floor(Math.random() * altkısım.length)];

        var embed = new Discord.MessageEmbed()
          .setThumbnail(profil)
          .setTitle("**Hoşgeldin," + msg.member.user.username + "**")
          .setDescription(
            `${sembol} Hizzaya Geçin! Burada Bir Premium Üye Belirdi! <@${msg.author.id}>`)
          .setColor("RANDOM")
          .setImage(altgif);
        msg.channel.send(embed).then(message => message.delete(3000));
      }
    }
  } else if (i == undefined) {
  }
  if (!i) return;
});

client.on("roleUpdate", async (oldRole, newRole) => {
  let codeming = await db.fetch(`ceyöneticiengel_${oldRole.guild.id}`);
  if (!codeming) return;
  if (oldRole.hasPermission("ADMINISTRATOR")) return;
  if (!oldRole.hasPermission("ADMINISTRATOR"))
    if (newRole.hasPermission("ADMINISTRATOR")) {
      newRole.setPermissions(oldRole.permissions);
    } else {
      return;
    }
});




client.on("message", async message => {
  if (
    message.content === "Selam" ||
    message.content === "selam" ||
    message.content === "sa" ||
    message.content === "Sa" ||
    message.content === "Selamın Aleyküm" ||
    message.content === "selamın aleyküm" ||
    message.content === "sea" ||
    message.content === "Sea"
  ) {
    let renk = await db.fetch(`renkCORTEX_${message.author.id}`);
    let acikmi = await db.fetch(`açıkmı_${message.author.id}`);
    let resim = await db.fetch(`resimCORTEX_${message.author.id}`);
    if (renk === null) renk = "BLUE";
    if (resim === null)
      resim =
        "https://cdn.glitch.com/65e9ba36-1371-4e0c-b414-ed27663b9e14%2Ftenor.gif?v=1583176175670";
    //if (acikmi === null) acikmi = `Bilgi: !!sa-özel-ayar yazarak bu sistemi özelleştirebilirsin!`
    let premium2 = await db.fetch(`prem_${message.author.id}`);
    if (premium2 === "pre") {
      const embed = new Discord.MessageEmbed()
        .setColor(renk)
        .setTitle("Hoşgeldin Premium Üye! ❤︎"
        //  "<a:kalp:647010103547002891> Hoşgeldin Premium Üye! <a:CoolDeveloper:622336484992876555> <a:kalp:647010103547002891>"
        )
        .setURL("https://youtube.com/trapspaces")
        .setDescription(
          "`Aleyküm Selam,` **" +
            `<@${message.author.id}>` +
            "** `seni burada görmek onur verici!`"
        )
      .setImage('https://cdn.glitch.com/86c4faf0-1cc9-417c-b600-535e142f687a%2FHogwarts_Rainbow%20(1).gif?v=1584198457172')
        .setThumbnail(resim);
      //.setFooter(acikmi)
      //resim  .setThumbnail(`https://cdn.glitch.com/65e9ba36-1371-4e0c-b414-ed27663b9e14%2Ftenor.gif?v=1583176175670`)
      // renk   .setColor('PURPLE')
      message.channel.send({ embed }).then(message => message.delete(20000));
    } else {
      return;
    }
  }
});



// MUTE SİSTEMİ \\

client.on('roleDelete', async role => {
const data = await require('quick.db').fetch(`carl-mute-role.${role.guild.id}`);
if(data && data === role.id) require('quick.db').delete(`carl-mute-role.${role.guild.id}`); 
});

// BOŞLUKLU KÜFÜR ENGELLEME SİSTEMİ \\

client.on('message', async msg => {//dawn
    const filtre = await db.fetch(`${msg.guild.id}.kufur`)
       if (filtre) {
           const kufurler = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq",];
           let kelimeler = msg.content.split(' ');
           kelimeler.forEach(kelime=> {//CODARE
            if(kufurler.some(küfür => küfür === kelime))  {
             try {   
               if (!msg.member.hasPermission("BAN_MEMBERS")) {
                     msg.delete();
                             
                         return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => msg.delete(3000));
             }              
             } catch(err) {
               console.log(err);
             }
           }
       })
      }
       if (!i) return;
   });
   
   
   
   client.on("messageUpdate", (oldMessage, newMessage) => {
     
     
    const filtre = db.fetch(`${newMessage.guild.id}.kufur`)
       if (filtre) {//dawn
           const kufurler = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "sik", "yarrak", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "amq",];
           let kelimeler = newMessage.content.split(' ');
           kelimeler.forEach(kelime=> {
            if(kufurler.some(küfür => küfür === kelime))  {
             try {   
               if (!msg.member.hasPermission("BAN_MEMBERS")) { //buradaki izni editleyebilirsiniz
                     msg.delete();
                             
                         return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => msg.delete(3000));
             }              
             } catch(err) {
               console.log(err);
             }
           }
       })
      } 
       if (!i) return;
   });
   

 // ÇEKİLİŞ SİSTEMİ \\

client.on('ready', async () => {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function destructMS(milli) {
    if (isNaN(milli) || milli < 0) {
      return null;
    }
  
    var d, h, m, s;
    s = Math.floor(milli / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    var yazi;
    if (d !== 0) yazi = `${d} gün`;
    if (h !== 0 && yazi) yazi = yazi + `, ${h} saat`;
    if (h !== 0 && !yazi) yazi = `${h} saat`;
    if (m !== 0 && yazi) yazi = yazi + `, ${m} dakika`;
    if (m !== 0 && !yazi) yazi = `${m} dakika`;
    if (s !== 0 && yazi) yazi = yazi + `, ${s} saniye`;
    if (s !== 0 && !yazi) yazi = `${s} saniye`;
    if (yazi) return yazi;
    if (!yazi) return `1 saniye`;
  };
client.guilds.cache.forEach(async guild => {
const asd = await data.fetch(`..başladı.${guild.id}`);
if(asd) {
const interval = setInterval(async function(){
const kalanzaman = asd.süre - Date.now()   
const c = await guild.channels.cache.get(asd.channel).messages.fetch(asd.message);
if (kalanzaman <= 0) {
clearInterval(interval)
await sleep(50)
const embed = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTimestamp()
  .setFooter(`Çekiliş Sistemi`)
  .setDescription(`**Ödül**: ${asd.ödül}

Başlatan: ${asd.host}`)
.setTimestamp(asd.süre)
  .setTitle(`Çekiliş bitti!`)
c.edit(embed)
data.delete(`çk.${c.id}`)
data.delete(`ödü.${c.id}`)
data.delete(`ma.${c.id}`)
const asdd = await c.reactions.get('🎉').users.fetchs({limit: c.reactions.get('🎉').count})
guild.channels.cache.get(asd.channel).send(`Tebrikler, ${asdd.random()}! Bizden ${asd.ödül} kazandın.
Ödülünü alabilmek için: ${asd.host1} kişisine ulaş.`)
data.delete(`..başladı.${guild.id}`);
} else {
const kalanzamanyazi = destructMS(kalanzaman)
const embed2 = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTimestamp()
  .setFooter(`Çekiliş Sistemi`)
embed2.setDescription(`**Ödül**: ${asd.ödül}

Başlatan: ${asd.host}
Kalan zaman: ${kalanzamanyazi}

Katılmak için 🎉 tepkisine tıklayın.`)
c.edit(embed2)
                }
}, 5000)
}
})
})

 // FAKE KULLANICI - KARANTİNA \\
client.on("guildMemberAdd", async member => {
  let kanal = await db.fetch(`kanal_${member.guild.id}`)
  let rol = await db.fetch(`rol_${member.guild.id}`)
  let security = await db.fetch(`koruma_${member.guild.id}`)
  let user = client.users.cache.get(member.id);

  if (security == 'kapali') return;
  if (security == 'acik') {

  const zaman =  new Date().getTime() - user.createdAt.getTime()
  
  if (zaman < 259200000) { 
  
  client.channels.cache.get(kanal).send(`${member} isimli kullanıcı fake şüphesi ile karantinaya alındı!`)
  member.send("Fake üye olduğun için seni karantinaya aldım!").catch(() => console.log(`DM Kapalı.`))
  member.roles.add(rol)
  
  }
}
})




// ANTİ-RAİD - BOT KORUMASI \\

client.on("guildMemberAdd", async member => {
let kanal = await db.fetch(`antiraidK_${member.guild.id}`)== "anti-raid-aç"
  if (!kanal) return;  
  var cod = member.guild.owner
  if (member.user.bot === true) {
     if (db.fetch(`botizin_${member.guild.id}.${member.id}`) == "aktif") {
    let are = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(member.user.avatarURL())
      .setDescription(`**${member.user.tag}** (${member.id}) adlı bota bir yetkili verdi eğer kaldırmak istiyorsanız **${ayarlar.prefix}bot-izni kaldır botun_id**.`);
    cod.send(are);//CodAre✨
     } else {
       let izinverilmemişbot = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setThumbnail(member.user.avatarURL())
      .setDescription("**" + member.user.tag +"**" + " (" + member.id+ ") " + "adlı bot sunucuya eklendi ve attım eğer izin vermek istiyorsanız **" + ayarlar.prefix + "bot-izni ver botun_id**")
       member.kick();// Eğer sunucudan atmak istiyorsanız ban kısmını kick yapın
       cod.send(izinverilmemişbot)
}
  }
});




// SAĞ-TIK KİCK KORUMASI \\

client.on('guildMemberRemove', async (member) => {// chimp ᵈ♡#0110
const data = require('quick.db')

const da = await data.fetch(`sağ.tık.kick.${member.guild.id}`)
if(!da) return;
const kanal_id = await data.fetch(`sağ.tık.kick.kanal.${member.guild.id}`)
let kanal = client.channels.cache.get(kanal_id)

let logs = await member.guild.fetchAuditLogs({type: 'MEMBER_KICK'});
if(logs.entries.first().executor.bot) return;
let kişi = member.guild.members.cache.get(logs.entries.first().executor.id)
kişi.roles.cache.forEach(r => {
kişi.roles.remove(r.id) })

const emb = new Discord.MessageEmbed()
.setAuthor(kişi.user.username, kişi.user.avatarURL())
.setFooter(`${client.user.username}`)
.setTimestamp()

kanal.send(emb.setDescription(`${kişi.user.tag} isimli kişi birisini atmaya çalıştı, attı ama ben yetkilerini aldım.`))
member.guild.owner.send(emb.setDescription(`${kişi.user.tag} isimli kişi birisini atmaya çalıştı, attı ama ben yetkilerini aldım.`))
})

// Yasak Tag - Anti Kick - Ban Sistemi \\

client.on('guildMemberAdd', async member => {
let guild = member.guild; 
let user = guild.members.cache.get(member.id);

const chimp = await data.fetch(`banned-tag.${guild.id}`)
const sayı = await data.fetch(`atıldın.${guild.id}.${user.id}`)
if(user.user.username.includes(chimp)) {
  
if(sayı === null) {
await data.add(`atıldın.${guild.id}.${user.id}`, 1)
user.send(new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(guild.name, guild.iconURL())
.setDescription(`Sunucumuzun yasaklı tagında bulunduğunuz için atıldınız, tekrar giriş yapmayı denerseniz **yasaklanacaksınız**!`))
await user.kick() }

if(sayı === 1) {
await data.delete(`atıldın.${guild.id}.${user.id}`)
user.send(new Discord.MessageEmbed()
.setColor('RED')
.setAuthor(guild.name, guild.iconURL())
.setDescription(`Sunucumuzun yasaklı tagında bulunduğunuz için atılmıştınız, tekrar giriş yapmayı denediğiniz için **${guild.name}** sunucusundan kalıcı olarak **yasaklandınız**!`))
await user.members.ban() } }
  
})


// Capatcha Sistemi \\

const captcha = require("captcha-plus");

client.on("guildMemberAdd", async(member) => {
   captcha.create(member.id);
   member.author.send(new Discord.MessageEmbed().setThumbnail(captcha.convert(captcha.user(member.id).code).base64).setDescription("Doğrulama Kanalına Bu Kodu Yazın!"))
});

client.on("message", async(msg) => {
   let id = db.fetch(`captcha.${msg.guild.id}`);
   let rol = db.fetch(`captcharol.${msg.guild.id}`);
   if(!id || !rol) return;
   if(msg.channel.id !== id) return;
   msg.delete();
   let member = msg.guild.members.cache.find(r => r.id == msg.author.id);
   if(captcha.check(msg.author.id,message.content)) return member.roles.add(rol);
});

// AFK Sistemi - Gelişmiş \\

client.on('message', async message => {// chimp'∞B#1008
if(message.channel.type === 'dm') return;
if(await data.fetch(`afk.${message.author.id}.${message.guild.id}`) == undefined) return;
const ms = require('ms')

if(message.content.length > 2) {
const sebepp = await data.fetch(`sebep.${message.author.id}.${message.guild.id}`)
const sp = await data.fetch(`giriş.${message.author.id}.${message.guild.id}`)
const asd = await data.fetch(`display.${message.author.id}.${message.guild.id}`)

  let atılmaay = moment(Date.now()+10800000).format("MM")
  let atılmagün = moment(Date.now()+10800000).format("DD")
  let atılmasaat = moment(Date.now()+10800000).format("HH:mm:ss")
  let atılma = `\`${atılmagün} ${atılmaay.replace(/01/, 'Ocak').replace(/02/, 'Şubat').replace(/03/, 'Mart').replace(/04/, 'Nisan').replace(/05/, 'Mayıs').replace(/06/, 'Haziran').replace(/07/, 'Temmuz').replace(/08/, 'Ağustos').replace(/09/, 'Eylül').replace(/10/, 'Ekim').replace(/11/, 'Kasım').replace(/12/, 'Aralık')} ${atılmasaat}\``


message.guild.members.cache.get(message.author.id).setNickname(asd)
message.channel.send(new Discord.MessageEmbed().setTitle(`${message.author.username}, hoşgeldin!`).setColor('GREEN').setDescription(`Afk modundan başarıyla çıkış yaptın.`)
.addField('Giriş sebebin:', sebepp) 
.addField('AFK olma zamanın:', sp)
.addField('Çıkış zamanın:', atılma))
data.delete(`afk.${message.author.id}.${message.guild.id}`)
data.delete(`sebep.${message.author.id}.${message.guild.id}`)
data.delete(`giriş.${message.author.id}.${message.guild.id}`)
data.delete(`display.${message.author.id}.${message.guild.id}`)
}

})




// Ban Limit - AntiBan \\

client.on("guildBanAdd", async (guild, user) => {

  if (!db.has(`banlimit_${guild.id}`)) return;
  let logs = await guild.fetchAuditLogs({type: 'MEMBER_BAN_ADD'});
  if (logs.entries.first().executor.bot) return;
  const kisi = logs.entries.first().executor
  const member = guild.members.cache.get(kisi.id)
//if (member.hasPermission('ADMINISTRATOR')) return;
  let banlimit = db.fetch(`banlimit_${guild.id}`)
  if (isNaN(banlimit)) return;
  banlimit = banlimit + 1

  if (!db.has(`bansayi_${member.id}_${guild.id}`)) {
    if (banlimit == 1) {
      var array = member.roles.cache.filter(role => role.name !== "@everyone").array()
      for (const role of array) member.roles.remove(role.id)

    }else{

      db.set(`bansayi_${member.id}_${guild.id}`, 1)
    }

  }else{

    const bansayisi = db.fetch(`bansayi_${member.id}_${guild.id}`)
    if (bansayisi >= banlimit) {
      db.delete(`bansayi_${member.id}_${guild.id}`)
      var array = member.roles.cache.filter(role => role.name !== "@everyone").array()
      for (const role of array) member.roles.remove(role.id)
    }

  }

})



 const log = message => {
   console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
 };
 client.commands = new Discord.Collection();
 client.aliases = new Discord.Collection();
 fs.readdir("./komutlar/", (err, files) => {
    if (err) console.error(err);
    files.forEach(f => {
  fs.readdir(`./komutlar/${f}/`, (err, filess) => {
    if (err) console.error(err);
    log(`${f} Klasöründen ${filess.length} Komut Yüklenecek;`);
    filess.forEach(fs => {
      let props = require(`./komutlar/${f}/${fs}`);
      log(`${props.help.name} // Yüklendi`);
      client.commands.set(props.help.name, props);
      props.conf.aliases.forEach(alias => {
        client.aliases.set(alias, props.help.name);
      });
     });
    });
   });
  });


 client.login(ayarlar.token)
  .then(function() {
    console.log('[Token-Log] Token doğru bir şekilde çalışıyor.')
  }, function(err) {
  console.log("[ERROR] Token'de bir hata oluştu: " + err)
  setTimeout(function() {
      process.exit(0)
    }, 20000);
 })