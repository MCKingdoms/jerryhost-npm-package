//import Discord from 'discord.js';
const Discord = require('discord.js');


// Create an object called "jerryBot" with a constructor that sets the properties "botName" and "botToken" to botName and botToken with the following methods:
// a method to get the bot name
// a method to get the bot token
// a method to send a direct message to a user with a discord.js embed called "userDMWarn" that takes in a message.author.username and a string called "reason" and a number called "severity"

class jerryBot {
    constructor(botName, botToken) {
        this.botName = botName;
        this.botToken = botToken;
    }
    getBotName() {
        return this.botName;
    }
    getBotToken() {
        return this.botToken;
    }
    userDMWarn(reason, severity, user, moderator) {
       //create a new message embed
        const embed = new Discord.RichEmbed()
        if (severity == 3) {
            embed.setColor('#ff0000')
        } else if (severity == 2) {
            embed.setColor('#ffa500')
        }
        else if (severity == 1) {
            embed.setColor('#ffff00')
        } else if (severity == 0) {
            embed.setColor('#00ff00')
        }

        embed.setTitle(`Warning Issued`)
        ember.setDescription(reason)
        ember.setTimestamp()
        ember.setFooter(`Moderation by JerryHost`, 'https://i.imgur.com/wSTFkRM.png')

        user.send({embeds: [embed]});

        //create a new message embed to send to the moderator
        const embed2 = new Discord.RichEmbed()
        embed2.setColor('#00ff00')
        embed2.setTitle(`User Successfully Moderated`)
        embed2.setDescription(`${user.username} has been successfully warned for ${reason}`)
        embed2.setTimestamp()
        embed2.setFooter(`Moderation by JerryHost`, 'https://i.imgur.com/wSTFkRM.png')

        moderator.send({embeds: [embed2]});
    }

    kickUser(user, moderator, reason) {
        //create a new message embed to send to the person being kicked
        const embed = new Discord.RichEmbed()
        embed.setColor('#ff0000')
        embed.setTitle(`Punishment Issued`)
        embed.setDescription(`You have been kicked from the server for ${reason}`)
        embed.setTimestamp()
        embed.setFooter(`Moderation by JerryHost`, 'https://i.imgur.com/wSTFkRM.png')


        //create a new message embed to send to the moderator
        const embed2 = new Discord.RichEmbed()
        embed2.setColor('#00ff00')
        embed2.setTitle(`User Successfully Moderated`)
        embed2.setDescription(`${user.username} has been successfully kicked for ${reason}`)
        embed2.setTimestamp()
        embed2.setFooter(`Moderation by JerryHost`, 'https://i.imgur.com/wSTFkRM.png')
        

        //check if the user is also the moderator
        if (user.id == moderator.id) {
            user.send("You cannot kick yourself!")
        } else {
            user.send({embeds: [embed]});
            moderator.send({embeds: [embed2]});
            user.kick();
        }
    }

    banUser(user, moderator, reason) {
        //create a new message embed to send to the person being banned
        const embed = new Discord.RichEmbed()
        embed.setColor('#ff0000')
        embed.setTitle(`Punishment Issued`)
        embed.setDescription(`You have been banned from the server for ${reason}`)
        embed.setTimestamp()
        embed.setFooter(`Moderation by JerryHost`, 'https://i.imgur.com/wSTFkRM.png')

        //create a new message embed to send to the moderator
        const embed2 = new Discord.RichEmbed()
        embed2.setColor('#00ff00')
        embed2.setTitle(`User Successfully Moderated`)
        embed2.setDescription(`${user.username} has been successfully banned for ${reason}`)
        embed2.setTimestamp()
        embed2.setFooter(`Moderation by JerryHost`, 'https://i.imgur.com/wSTFkRM.png')

        //check if the user is also the moderator
        if (user.id == moderator.id) {
            user.send("You cannot ban yourself!")
        } else {
            user.send({embeds: [embed]});
            moderator.send({embeds: [embed2]});
            user.ban(reason);
        }
    }

    setBotActivity(activity, guildMemberCount, guildcount) {
        return `${guildMemberCount} members in ${guildcount} guilds.`;
    }

    setBotActivityType(activity) {
        if (activity == "guildswatch") {
            return "WATCHING";
        } else if (activity == "guildlist") {
            return "LISTENING";
        } else if (activity == "guildplaying") {
            return "PLAYING";
        }
    }
}

// Exceptions that can be thrown by other packages.

class VersionNotFoundException extends Error {
    constructor(message) {
        super(message);
        this.name = 'VersionNotFoundException';
        this.message = "[SEVERE] An Exception was thrown when checking for a version: " + message;
    }
}

class TokenNotFoundException extends Error {
    constructor(message) {
        super(message);
        this.name = 'TokenNotFoundException';
        this.message = "[SEVERE] An Exception was thrown when checking for a token: " + message;
    }
}

class LoggerFireException extends Error {
    constructor(message) {
        super(message);
        this.name = 'LoggerFireException';
        this.message = "[SEVERE] An Exception was thrown when logging: " + message;
    }
}

class ChatFilterException extends Error {
    constructor(message) {
        super(message);
        this.name = 'ChatFilterException';
        this.message = "[SEVERE] An Exception was thrown when filtering the chat: " + message;
    }
}

class ModerationSevereException extends Error {
    constructor(message) {
        super(message);
        this.name = 'ModerationSevereException';
        this.message = "[SEVERE] An exception was thrown when preforming a moderation action: " + message;
    }
}

class ModerationModerateException extends Error {
    constructor(message) {
        super(message);
        this.name = 'ModerationModerateException';
        this.message = "[MODERATE] An exception was thrown when preforming a moderation action: " + message;
    }
}

class ModerationWarnException extends Error {
    constructor(message) {
        super(message);
        this.name = 'ModerationWarnException';
        this.message = "[WARN] An exception was thrown when preforming a moderation action: " + message;
    }
}

class ModerationInfoException extends Error {
    constructor(message) {
        super(message);
        this.name = 'ModerationInfoException';
        this.message = "[INFO] An exception was thrown when preforming a moderation action: " + message;
    }
}

module.exports = {
    VersionNotFoundException,
    TokenNotFoundException,
    LoggerFireException,
    ChatFilterException,
    ModerationSevereException,
    ModerationModerateException,
    ModerationWarnException,
    ModerationInfoException,
    jerryBot
}