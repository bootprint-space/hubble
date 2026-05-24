const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Bootprint = require('bootprint-js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('jupiter')
        .setDescription('Jupiter info!'),
    async execute(interaction) {
        try {
            const [jupiterData] = await Bootprint.getAsync(['jupiter']);

            const embed = new EmbedBuilder()
                .setColor(0x0000FF)
                .setTitle('♃ Jupiter')
                .setDescription(jupiterData.fact)
                .setImage(jupiterData.image)
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error fetching Jupiter data: ', error);
            await interaction.reply('Failed to fetch Jupiter data.');
        }
    },
};