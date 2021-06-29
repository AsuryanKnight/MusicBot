module.exports.run = async (bot, message, args) => {
    if (!message.member.roles.cache.some(r => r.name === "Beheerder")) return message.channel.send('Je moet de Beheerder rol hebben om dit te doen!');
    if (!message.member.voice.channel) return message.channel.send('You must be in a voice channel to use this command.');


    let queue = await bot.distube.getQueue(message);

    if(queue) {
        bot.distube.skip(message)

        message.channel.send('Skipped!')
    } else if (!queue) {
        return
    };
}

module.exports.config = {
    name: "skip",
    aliases: ["s"]
}
