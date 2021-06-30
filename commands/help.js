module.exports.run = async (bot, message, args) => {
    const user = message.author;

    message.channel.send(`Hello ${user}. 
To use the bot commands you have have a 'Admin' role. Change the bot volume output for yourself by adjusting the volume sliders of the bot in the voicechannel. 
There are more commands then the ?help command you just used. ?p or ?play + your input will make this bot play a (music) video from youtube. Your imput can
be a link of a youtube video or a search term. Note that this bot can only play songs/playlists from youtube The ?queue or ?q commands wil make the bot display the 
current songqueue. The ?s or ?skip command will skip the song that is currently playing and start the next song in the queue. Finally there is the ?dc or ?stop
command wich will disconnect the bot from the voicechannel.`);

}

module.exports.config = {
    name: "help",
    aliases: ["h"]
}