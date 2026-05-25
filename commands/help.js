const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Lists all Hubble commands.'),
    async execute(interaction) {
        const commands = interaction.client.commands;

        const commandFields = commands.map(cmd => ({
            name: `/${cmd.data.name}`,
            value: cmd.data.description || 'No description provided.'
        }));

        const embed = new EmbedBuilder()
            .setColor(0x0000FF)
            .setTitle('🔭 Hubble Commands')
            .setDescription('Explore the universe with these commands:')
            .addFields(commandFields)
            .setFooter({ text: 'Powered by Bootprint', iconURL: 'https://cdn.bootprint.space/logo_dark.png' })
            .setTimestamp();
        
        await interaction.reply({ embeds: [embed] });
    },
};