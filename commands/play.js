module.exports.run = async (bot, message, args) => {
    if (!message.member.roles.cache.some(r => r.name === "Admin")) return message.channel.send('You need the admin role to use this command!');
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');

    if (args === 'playlist'){
        const music = 'https://www.youtube.com/playlist?list=PLaqmWUEyMnwjLtWTxVjuA_cZn4QbFowkL';
        bot.distube.play(message, music)
    } else {
    const music = args.join(" ");
        bot.distube.play(message, music)
    }

}

module.exports.config = {
    name: "play",
    aliases: ['p']
}
