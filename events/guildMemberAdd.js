const Discord = require("discord.js"), cooldowns = new Discord.Collection();
const { ENTrole , CHATent, DCmain , zinim} = require('../config.json');

module.exports = async (client, member) => {

let emoji = member.guild.emojis.cache.find( emoji => emoji.name === zinim)

  if(DCmain != member.guild){ 
  return client.channels.cache.get(CHATent).send(`Eureca!`); 
}
  
    const embedENT = new Discord.MessageEmbed()
    .setColor("RANDOM") 
    .setTitle(` ${emoji} Novo Membro » ${member.user.username}`)
    .setDescription(`Olá \`${member.user.username}\` seja bem vindo ao discord oficial da **ServidoresLonex** abaixo temos umas informações essencias do servidor`)
    .addField(`A noassa loja:`,`[Clique aqui](https://loja.lonex.tk)`,true)
    .addField(`O twitter do servidor`,`[@servidoreslonex](https://twitter.com/ServidoresLonex)`,true)
    .addField(`O ip do servidor`,`lonex.tk`,true)
    .addField('Parabens!',`Voçê é o nosso ${member.guild.memberCount}º membro!`,true)
    .setThumbnail(member.user.displayAvatarURL())
    .setFooter("ServidoresLonex - Todos os Direitos Reservados ©")
  client.channels.cache.get(CHATent).send(embedENT);
  member.roles.add(ENTrole)
}