const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with the token you got from BotFather
const token = '7386364303:AAFx1yzdcRWUzTIUqFazk67M0VQy2ZZskrk';
const bot = new TelegramBot(token, { polling: true });

// Replace 'YOUR_CHAT_ID' with the chat ID of your group
const chatId = '6304344768';

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
sendMessage("");

// For retrieving chat ID, uncomment the following code:
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     console.log('Chat ID:', chatId);
// });
