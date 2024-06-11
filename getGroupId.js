const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with your bot token
const token = '7450773050:AAHjec1EKzX1Slfivd60IsgSq6cql7GWebc';
const bot = new TelegramBot(token, { polling: true });

// Event listener for when the bot is ready
bot.on('polling_error', (error) => {
    console.log(error);  // Print the error
});

// Event listener for when the bot receives information about updates
bot.on("polling_error", console.log);

// Function to get the group ID when the bot is added to a new chat
function getGroupId(msg) {
    if (msg.new_chat_members && msg.new_chat_members.some(user => user.id === bot.user.id)) {
        // The bot was added to a new chat
        return msg.chat.id;
    }
}

// Event listener for when the bot receives updates
bot.on("message", (msg) => {
    const groupId = getGroupId(msg);
    if (groupId) {
        console.log(`Group ID: ${groupId}`);
        // Do further processing with the group ID if needed
    }
});
