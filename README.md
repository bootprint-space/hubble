# Hubble

The [Bootprint API](https://bootprint.space) Discord bot.

## Setup

1. Clone this repository
2. Install dependencies with `npm install`
3. Copy `.env.example` to `.env` and fill in your Discord bot token
4. Fill in `config.json` with your client ID
6. Run `node deploy-commands.js` to add commands to your server
5. Run the bot with `node .`

## Getting a Discord Bot Token

1. Go to the [Discord Developer Portal](https://discord.com/developers/applications)
2. Click "New Application" and give it a name
3. Go to the "Bot" tab and click "Add Bot"
4. Under the "TOKEN" section, click "Reset Token" and copy your token
5. Paste this token in your `.env` file

## Inviting Your Bot to a Server

1. Go to the "OAuth2" > "URL Generator" tab in the Discord Developer Portal
2. Select the "bot" and "applications.commands" scopes
3. Select the permissions "Send Messages", "Read Message History" and "View Channels"
4. Copy the generated URL and open it in your browser
5. Select the server you want to add the bot to and click "Authorize"