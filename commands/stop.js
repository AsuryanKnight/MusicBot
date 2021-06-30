module.exports.run = async (bot, message, args) => {
    if (!message.member.roles.cache.some(r => r.name === "Admin")) return message.channel.send('You need the admin role to use this command!');
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

    let queue = await bot.distube.getQueue(message);

    if(queue) {
        bot.distube.stop(message)

        message.channel.send('Disconnected!')
    } else if (!queue) {
        return
    }
}

module.exports.config = {
    name: "stop",
    aliases: ["dc"]
}
