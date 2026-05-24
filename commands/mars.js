const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Bootprint = require('bootprint-js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mars')
        .setDescription('Information about Mars.'),
    async execute(interaction) {
        try {
            const [marsData] = await Bootprint.getAsync(['mars']);

            const embed = new EmbedBuilder()
                .setColor(0x0000FF)
                .setTitle('🪐 Mars')
                .setDescription(marsData.fact)
                .setImage(marsData.image)
                .setFooter({ text: 'Powered by Bootprint', iconURL: 'https://cdn.bootprint.space/logo_dark.png' })
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error fetching Mars data: ', error);
            await interaction.reply('Failed to fetch Mars data.');
        }
    },
};