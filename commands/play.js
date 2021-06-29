module.exports.run = async (bot, message, args) => {
    if (!message.member.roles.cache.some(r => r.name === "Beheerder")) return message.channel.send('Je moet de Beheerder rol hebben om dit te doen!');
    if (!message.member.voice.channel) return message.channel.send('Je moet in een spraakkanaal zitten om deze command uit te voeren!');

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
