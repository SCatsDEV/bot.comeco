const Discord = require("discord.js");
const {BanWORD} = require('../config.json');
let inviteLink = BanWORD;

module.exports = async (client, message, newMessage) => {
  if (newMessage.author.bot || newMessage.author === client.user) return;
  if (newMessage.member.hasPermission("ADMINISTRATOR")) return;

  if (inviteLink.some(word => newMessage.content.toLowerCase().includes(word))) {
    await newMessage.delete();
    return newMessage.reply("má escolha de palavras!")
    .then(m => m.delete({timeout: 10000})) // Add this if you want the message automatically deleted.
  }}