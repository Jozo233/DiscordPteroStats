"use strict";

const yaml = require('js-yaml');
const chalk = require('chalk');
const fs = require('fs');
const { Client, GatewayIntentBits } = require('discord.js');

const config = require("./config/config.json")


const client = new Client({ intents: [GatewayIntentBits.Guilds]  });


const eventFiles = fs.readdirSync('./core/events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
    const event = require(`./core/events/${file}`);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
}

// Login to Discord with your client's token
client.login(config.token)

