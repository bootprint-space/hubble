const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const Bootprint = require('bootprint-js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('uranus')
        .setDescription('Uranus info!'),
    async execute(interaction) {
        try {
            const [uranusData] = await Bootprint.getAsync(['uranus']);

            const embed = new EmbedBuilder()
                .setColor(0x0000FF)
                .setTitle('♄ Uranus')
                .setDescription(uranusData.fact)
                .setImage(uranusData.image)
                .setFooter({ text: 'Powered by Bootprint', iconURL: 'https://cdn.bootprint.space/logo_dark.png' })
                .setTimestamp();

            await interaction.reply({ embeds: [embed] });
        } catch (error) {
            console.error('Error fetching Uranus data: ', error);
            await interaction.reply('Failed to fetch Uranus data.');
        }
    },
};