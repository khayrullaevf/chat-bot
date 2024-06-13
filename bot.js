const TelegramBot = require('node-telegram-bot-api');

const token = '7386364303:AAFx1yzdcRWUzTIUqFazk67M0VQy2ZZskrk';
const bot = new TelegramBot(token, { polling: true });


const chatId = '-1002184775122';

function sendMessage(text) {
    bot.sendMessage(chatId, text)
    .then(sentMessage => {
        console.log('Message sent successfully:', sentMessage.text);
    })
    .catch(error => {
        console.error('Error sending message:', error);
    });
}

// Example usage
// sendMessage("Lekin egam bilan xafalashib qolsangiz men bilan gaplashishingiz mukin");
// Listen for any kind of message
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;
    const chatType = msg.chat.type; // Can be 'private', 'group', 'supergroup', or 'channel'

    if (chatType === 'private') {
        // Message from a user
        console.log(`Received private message from user ${chatId}: ${text}`);
        // You can send a response back if needed
        // bot.sendMessage(chatId, 'Message received from user!');
    } else if (chatType === 'group' || chatType === 'supergroup') {
        // Message from a group
        console.log(`Received message from group ${chatId}: ${text}`);
        // You can send a response back if needed
        // bot.sendMessage(chatId, 'Message received from group!');
    } else {
        console.log(`Received message from unknown chat type ${chatType}`);
    }
})