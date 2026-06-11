const { Events } = require('discord.js');

// IDs of users that cannot be pinged
const protectedUsers = [
    '123456789012345678', // Replace with User ID
    '987654321098765432'
];

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        // Ignore bots
        if (message.author.bot) return;

        // Allow administrators to bypass
        if (message.member.permissions.has('Administrator')) return;

        // Check every mentioned user
        for (const user of message.mentions.users.values()) {
            if (protectedUsers.includes(user.id)) {
                try {
                    await message.delete();

                    await message.channel.send({
                        content: `${message.author}, you are not allowed to mention ${user.tag}.`
                    });

                    console.log(`${message.author.tag} attempted to ping ${user.tag}`);
                } catch (err) {
                    console.error(err);
                }

                return;
            }
        }
    }
};
