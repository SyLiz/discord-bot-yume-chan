require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildModeration,
    GatewayIntentBits.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  if (message.channelId == `${process.env.CH_ID}`) {
    if (
      message.content.includes("twitter.com") &&
      !message.content.includes("fxtwitter.com")
    ) {
      message.delete();
      message.channel.send(
        message.content.replace("twitter.com", "fxtwitter.com")
      );
    } else if (
      message.content.includes("x.com") &&
      !message.content.includes("fixupx.com")
    ) {
      message.delete();
      message.channel.send(message.content.replace("x.com", "fixupx.com"));
    }
  }
});

client.login(`${process.env.BOT_TOKEN}`);
