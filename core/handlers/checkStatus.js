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


    const panelStats = new Promise((resovle, reject) => {
        axios(config.panel.url + '/api/application/users', {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + config.panel.key
            }
        })
    })


}