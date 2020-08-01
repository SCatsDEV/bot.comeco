const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix = client.config.prefix;
  
  if (!args[0]) {
    // This will turn the folder (category) into array.
    let module = client.helps.array();
    
    // This will hide a folder from display that includes "hide: true" in their module.json
    if (!client.config.owners.includes(message.author.id)) module = client.helps.array().filter(x => !x.hide);
    const embed = new Discord.MessageEmbed()
    .setColor(0x1d1d1d)
    .setTimestamp(new Date())
    .setDescription(`Digita \`${prefix}ajdua [comando]\` para receberes mais informação!`)
    .setTitle("Ajuda!")
        .setFooter("ServidoresLonex - Todos os Direitos Reservados ©")

    
    for (const mod of module) {
      // You can change the .join(" | ") to commas, dots or every symbol.
      embed.addField(`${mod.name}`, mod.cmds.map(x => `\`${x}\``).join(" | "));
    }
    
    return message.channel.send(embed);
  } else {
    let cmd = args[0];
    
    // If the user type the [command], also with the aliases.
    if (client.commands.has(cmd) || client.commands.get(client.aliases.get(cmd))) {
      let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
      let name = command.help.name; // The command name.
      let desc = command.help.description; // The command description.
      let cooldown = command.conf.cooldown + " Segundo(s)"; // The command cooldown.
      let aliases = command.conf.aliases.join(", ") ? command.conf.aliases.join(", ") : "Não existem alternativas";
      let usage = command.help.usage ? command.help.usage : "Sem utilização???";
      let example = command.help.example ? command.help.example : "Sem exemplos :/";
      
      let embed = new Discord.MessageEmbed()
      .setColor(0x7289DA)
      .setTitle(name)
      .setDescription(desc)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("ServidoresLonex - Todos os Direitos Reservados ©")
      .addField("Cooldown", cooldown)
      .addField("Alternativas", aliases, true)
      .addField("Utilização", usage, true)
      .addField("Exemplo", example, true)
      
      return message.channel.send(embed);
    } else {
      // If the user type the wrong command.
      return message.channel.send({embed: {color: "RED", description: "Unknown command."}});
    }
  }
}

exports.help = {
  name: "Ajuda",
  description: "Mostra os comandos existentes",
  usage: "$ajuda [comando]",
  example: "$ajuda corona"
}

exports.conf = {
  aliases: ["ajuda", "help", "?"],
  cooldown: 1
}