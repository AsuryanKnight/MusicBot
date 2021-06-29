module.exports.run = async (bot, message, args) => {
    const user = message.author;

    message.channel.send(`Hoi ${user}. 
Om het feestje te joinen klik je simpelweg op het spraakkanaal. 
Het volume van het muziek en van de andere gebruikers kan je zelf aanpassen door rechtermuisklik te doen op hun naam en de slider te verschuiven!
Naast de ?help command die je zojuist hebt gedaan, kun je ook de ?queue of ?q command doen. Deze laat zien wat er in de wachtrij staat om af te spelen.`);

}

module.exports.config = {
    name: "help",
    aliases: ["h"]
}