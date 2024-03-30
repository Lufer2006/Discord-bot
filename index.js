const Discord = require('discord.js');
const readline = require('readline');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Bot está listo como: ${client.user.tag}!`);

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.on('line', (input) => {
        // Reemplaza 'id-del-canal' con el ID del canal donde quieres que el bot envíe mensajes
        let channel = client.channels.get('ID_DEL_CANAL');
        if (!channel) {
            console.log('El canal no existe');
            return;
        }
        channel.send(input);
    });
});

// Asegúrate de reemplazar 'tu-token' con el token de tu bot.
client.login('BOT-TOKEN');
