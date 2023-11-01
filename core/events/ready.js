const chalk = require('chalk')
const config = require("../../config/config.json")

module.exports = {
    name: 'ready',
    once: true,
    execute(client) {
        console.log(chalk.magenta('[DiscordPteroStats]') + chalk.green(' Logged in as ${client.user.tag}!'))


        if (config.status.enable && config.status.text.length > 0) {
            if (!['PLAYING', 'WATCHING', 'LISTENING', 'COMPETING'].includes(config.status.type.toUpperCase() || config.status.type.length < 1 )) {
                console.log(chalk.cyan('[PteroStats] ') + chalk.red('Err! Invalid Status Type!, Can be "WATCHING", "PLAYING", "LISTENING", or "COMPETING"'))
            } else {
                client.user.setActivity(config.status.text, { type: config.status.type.toUpperCase() })
            }
        }

    }
}