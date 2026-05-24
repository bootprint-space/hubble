const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Bootprint = require('bootprint-js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('jupiter')
        .setDescription('Information about Jupiter.'),
    async execute(interaction) {
        try {
            const [jupiterData] = await Bootprint.getAsync(['jupiter']);

            const embed = new EmbedBuilder()
                .setColor(0x0000FF)
                .setTitle('♃ Jupiter')
                .setDescription(jupiterData.fact)
                .setImage(jupiterData.image)
                .setFooter({ text: 'Powered by Bootprint', iconURL: 'https://cdn.bootprint.space/logo_dark.png' })
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error fetching Jupiter data: ', error);
            await interaction.reply('Failed to fetch Jupiter data.');
        }
    },
};