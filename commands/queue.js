DisTube = require('distube');

module.exports.run = async (bot, message, args) => {
    if (!message.member.voice.channel) return message.channel.send('Je moet in een spraakkanaal zitten om deze command te gebruiken!');

    let queue = await bot.distube.getQueue(message);

    if(queue) {

        let queue = bot.distube.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));

    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "queue",
    aliases: ["q"]
}