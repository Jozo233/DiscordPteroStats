const axios = require('axios')
const chalk = require('chalk')

module.exports = function checkStatus(client){

    const nodes = []

    const panel = {
        status: false,
        total_servers: -1,
        total_users: -1,
    }

    console.log(chalk.magenta('[DiscordPteroStats]') + chalk.green(' Getting nodes stats'))


}