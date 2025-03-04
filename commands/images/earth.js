const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Bootprint = require('bootprint-js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('earth')
        .setDescription('Earth info!'),
    async execute(interaction) {
        try {
            const [earthData] = await Bootprint.getAsync(['earth']);

            const embed = new EmbedBuilder()
                .setColor(0x0000FF)
                .setTitle('🌎 Earth')
                .setDescription(earthData.fact)
                .setImage(earthData.image)
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error fetching Earth data: ', error);
            await interaction.reply('Failed to fetch Earth data.');
        }
    },
};