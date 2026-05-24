const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Lists all Hubble commands.'),
    async execute(interaction) {
        const embed = new EmbedBuilder()
            .setColor(0x0000FF)
            .setTitle('🔭 Hubble Commands')
            .setDescription('Explore the universe with these commands:')
            .addFields(
                { name: '/earth', value: 'Random image and fact about Earth' },
                { name: '/moon', value: 'Random image and fact about the Moon' },
                { name: '/mars', value: 'Random image and fact about Mars' },
                { name: '/jupiter', value: 'Random image and fact about Jupiter' },
                { name: '/saturn', value: 'Random image and fact about Saturn' },
                { name: '/mercury', value: 'Random image and fact about Mercury' },
                { name: '/venus', value: 'Random image and fact about Venus' },
                { name: '/uranus', value: 'Random image and fact about Uranus' },
                { name: '/sun', value: 'Random image and fact about the Sun' },
                { name: '/help', value: 'List all commands' },
                { name: '/info', value: 'About Hubble' },
            )
            .setFooter({ text: 'Powered by Bootprint', iconURL: 'https://cdn.bootprint.space/logo_dark.png' })
            .setTimestamp();

        await interaction.reply({ embeds: [embed] });
    },
};