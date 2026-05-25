const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Checks the bot\'s latency'),
    
    async execute(interaction) {
        const response = await interaction.deferReply({ fetchReply: true });

        const roundtrip = response.createdTimestamp - interaction.createdTimestamp;
        const websocket = interaction.client.ws.ping;
        
        const pingEmbed = new EmbedBuilder()
            .setColor(0x0000FF)
            .setTitle('🏓 Pong!')
            .addFields(
                { name: 'API: ', value: `\`${roundtrip}ms\``, inline: true },
                { name: 'Gateway: ', value: `\`${websocket}ms\``, inline: true }
            )
            .setFooter({ text: 'Powered by Bootprint', iconURL: 'https://cdn.bootprint.space/logo_dark.png' })
            .setTimestamp();

        await interaction.editReply({ embeds: [pingEmbed] });
    },
};