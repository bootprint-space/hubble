const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Bootprint = require('bootprint-js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('mercury')
        .setDescription('Mercury info!'),
    async execute(interaction) {
        try {
            const [mercuryData] = await Bootprint.getAsync(['mercury']);

            const embed = new EmbedBuilder()
                .setColor(0x0000FF)
                .setTitle('☿ Mercury')
                .setDescription(mercuryData.fact)
                .setImage(mercuryData.image)
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error fetching Mercury data: ', error);
            await interaction.reply('Failed to fetch Mercury data.');
        }
    },
};