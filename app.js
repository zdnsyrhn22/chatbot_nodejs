import "dotenv/config";
import { Client, IntentsBitField } from "discord.js";
import Bard from "bard-ai";
import fetch from 'node-fetch'

// solve fetch error
globalThis.fetch = fetch

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ]
});

const prefix = '!';

const myBard = new Bard(process.env.BARD_API_KEY);
const myChat = myBard.createChat();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
})

client.on('messageCreate', async (message) => {
  if(message.author.bot) return;
  if(message.channel.id !== process.env.DISCORD_CHANNEL_ID) return;

  if(message.content.startsWith(prefix + 'tb')){
    const msg = message.content.split(" ").slice(1)
    const response = await myChat.ask(msg.join(" "));
    
    console.log(response);
    message.reply(response)
  }
})

client.login(process.env.DISCORD_TOKEN);
