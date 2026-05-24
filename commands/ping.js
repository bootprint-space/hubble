const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Checks the bot connectivity latency and heartbeat status.'),
    
    async execute(interaction) {
        const sent = await interaction.deferReply({ fetchReply: true });

        const roundtrip = sent.createdTimestamp - interaction.createdTimestamp;
        const websocket = interaction.client.ws.ping;
        t
        const pingEmbed = new EmbedBuilder()
            .setColor(0x0000FF)
            .setTitle('🏓 Pong!')
            .addFields(
                { name: 'API Latency', value: `\`${roundtrip}ms\``, inline: true },
                { name: 'Gateway Heartbeat', value: `\`${websocket}ms\``, inline: true }
            )
            .setFooter({ text: 'Powered by Bootprint', iconURL: 'https://cdn.bootprint.space/logo_dark.png' })
            .setTimestamp();

        await interaction.editReply({ embeds: [pingEmbed] });
    },
};