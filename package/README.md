# What is this?

A simple library for my discord bots that makes moderation ten times easier.

# Installation

`npm i jerryhost.js --save`

Then inside of your main file...

```
const JerryHost = require('jerryhost.js');
const JerryBot = new JerryBot(BotName, BotToken)

```

after installing JerryHost, you'll be able to access all of its features!

## Feature List

JerryHost supports multiple ways to manage your server, some of which are:

```
Exceptions
```
* *throw new VersionNotFoundException* (Throws whenever the bot version is not found.)
* *throw new TokenNotFoundException* (Throws whenever the bot token is not specified.)
* *throw new LoggerFireException* (Throws whenever a logger encounteres an error.)

And so much more!
