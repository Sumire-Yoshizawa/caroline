const Discord = require('discord.js');
const client = new Discord.Client();
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
	warnThreshold: 3, // Amount of messages sent in a row that will cause a warning.
	kickThreshold: 6, // Amount of messages sent in a row that will cause a ban.
	banThreshold: 5, // Amount of messages sent in a row that will cause a ban.
	maxInterval: 5000, // Amount of time (in milliseconds) in which messages are considered spam.
	warnMessage: '{@user}, Please stop spamming.', // Message that will be sent in chat upon warning a user.
	kickMessage: '**{user_tag}** has been kicked for spamming.', // Message that will be sent in chat upon kicking a user.
	banMessage: '**{user_tag}** has been banned for spamming.', // Message that will be sent in chat upon banning a user.
	maxDuplicatesWarning: 5, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesKick: 6, // Amount of duplicate messages that trigger a warning.
	maxDuplicatesBan: 5, // Amount of duplicate messages that trigger a warning.
	exemptPermissions: [ 'ADMINISTRATOR'], // Bypass users with any of these permissions.
  deleteMessagesAfterKickForPastSecond: 10,//delete message after kicked
  deleteMessagesAfterWarnForPastDay: 1,//delete message after warn
  deleteMessagesAfterBannedForPastSecond: 10,//delete message after banned
	ignoreBots: true, // Ignore bot messages.
	verbose: true, // Extended Logs from module.
	ignoredUsers: [], // Array of User IDs that get ignored.
	// And many more options... See the documentation.
});

client.on('ready', () => console.log(`Logged in as ${client.user.tag}.`));

client.on('message', (message) => antiSpam.message(message)); 

client.login('ODAyNzQ0MTcxMDcyODQ3OTAz.YAzrxA.V5PsCzvsnGGLxT9e94fRpbZt9Jg');
