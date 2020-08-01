const Discord = require("discord.js"), cooldowns = new Discord.Collection();

module.exports = async (client, member) => {
  function randomStatus() {
    let status = [ 
    "lonex.tk",
    "loja.lonex.tk", 
    "Lonex > all",
    "Vem de Lonex!"
]
    let rstatus = Math.floor(Math.random() * status.length);

    client.user.setActivity(status[rstatus]);
  }; setInterval(randomStatus, 20000)
  
    console.log(`Logged in as ${client.user.tag}!`)
}

